function print(message, tag = 'pre') {
  var element = document.createElement(tag);
  element.innerHTML = message;
  console.log('PRINT:', message);
  document.getElementById('main').appendChild(element);
}

function makeGitHubLink(currentUrl, filePath) {
  var prefix = currentUrl.split('//')[0];
  var domainComponents = currentUrl.split('//')[1].split('/')[0].split('.');
  var basePath = currentUrl.split('//')[1].split('/')[1];
  basePath = '/' + basePath + (basePath.length ? '/' : '');
  var targetDomain = (domainComponents.length > 1)
    ? 'github.com/' + domainComponents[0]
    : domainComponents[0];
  return prefix + '//' + targetDomain + basePath + (domainComponents.length > 1 ? 'blob/gh-pages/' : '') + filePath;
}

(function (elementId) {
  var element = document.getElementById(elementId);
  element.href = makeGitHubLink(location.href, 'index.js');
})('source-code');

