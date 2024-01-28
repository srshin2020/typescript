"use strict";
var ProxyModule;
(function (ProxyModule) {
    console.log('proxymodule');
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
    class Keep {
        do(cat) {
            console.log('keep from', cat.name);
        }
    }
    class SayHello {
        do(cat) {
            console.log('say hello to ', cat.name);
        }
    }
    class KeeperProxy {
        constructor(cat) {
            this.cat = cat;
        }
        do(mission) {
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
})(ProxyModule || (ProxyModule = {}));
