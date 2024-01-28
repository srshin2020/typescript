namespace ProxyModule {
    console.log('proxymodule');

    class Cat {
        name: string = 'cat';
    }

    class Keeper1 {
        constructor(cat: Cat) {
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
    // Keeper1에 기능을 추가해야 할 때 문제 발생
    // KeeperProxy는 다른 기능을 추가할 수 있음
    // OCP : open closed principle (확장에는 열려있고 변경에는 닫혀있다)
    ///////

    interface Mission {
        do(cat: Cat): void;
    }

    class Keep implements Mission {
        do(cat: Cat) {
            console.log('keep from', cat.name);
        }
    }
    class SayHello implements Mission {
        do(cat: Cat) {
            console.log('say hello to ', cat.name);
        }
    }

    class KeeperProxy {
        cat: Cat;

        constructor(cat: Cat) {
            this.cat = cat;
        }
        do(mission: Mission) {
            mission.do(this.cat);
        }
    }

    class Proxy {
        init() {
            const cat = new Cat();
            const keeper = new KeeperProxy(cat);
            keeper.do(new Keep());
            keeper.do(new SayHello());
        }
    }
    new Main().init();
    new Proxy().init();
}
