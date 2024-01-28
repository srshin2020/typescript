"use strict";
var StrategyModule;
(function (StrategyModule) {
    console.log('strategyModule');
    class Cat {
        constructor() {
            this.name = 'cat';
        }
    }
    class Keeper1 {
        constructor(cat) {
            console.log('keep from', cat.name);
        }
    }
    class Main {
        init() {
            const cat = new Cat();
            const keeper = new Keeper1(cat);
        }
    }
    //////////////////////
    // Dog를 추가할 때 문제 발생
    // Keeper2는 Cat이 아니라 Cat의 부모인 즉 추상화된 Animal에 의존하게 됨.
    // 의존성이 역전됨.
    // SOLID: DIP(Dependency Inversion Principle)
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Tiger extends Animal {
        constructor() {
            super('Tiger');
        }
    }
    class Dog extends Animal {
        constructor() {
            super('Dog');
        }
    }
    class Keeper2 {
        constructor(animal) {
            console.log('keep from', animal.name);
        }
    }
    class Strategy {
        init() {
            const tiger = new Tiger();
            const dog = new Dog();
            new Keeper2(dog);
            new Keeper2(tiger);
        }
    }
    ///////
    new Main().init();
    new Strategy().init();
})(StrategyModule || (StrategyModule = {}));
