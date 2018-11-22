class Persons {

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._absentceCounter = 0;
    }


    
    get name() {
        return this.name;
    }

    get age() {
        return this.age;
    }

    isPresent() {
        return Utils.booleanRandom;
    }

    countAbsentce() {
        this._absentceCounter++;
    }

    isPresentOnLesson() {
        return Utils.booleanRandom;
    }
}