export let print = (message, tag = 'pre') => console.log('PRINT:', message);

if (typeof window !== 'undefined') {
  print = function (message, tag = 'pre') {
    const element = document.createElement(tag);
    element.innerHTML = message;
    console.log('PRINT:', message);
    document.getElementById('main').appendChild(element);
  }

  function makeGitHubLink(currentUrl, filePath) {
    const prefix = currentUrl.split('//')[0];
    const domainComponents = currentUrl.split('//')[1].split('/')[0].split('.');
    let basePath = currentUrl.split('//')[1].split('/')[1];
    basePath = '/' + basePath + (basePath.length ? '/' : '');
    const targetDomain = (domainComponents.length > 1)
      ? 'github.com/' + domainComponents[0]
      : domainComponents[0];
    return prefix + '//' + targetDomain + basePath + (domainComponents.length > 1 ? 'blob/master/' : '') + filePath;
  }

  (function (elementId) {
    var element = document.getElementById(elementId);
    element.href = makeGitHubLink(location.href, 'index.js');
  })('source-code');
}
