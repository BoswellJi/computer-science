import { injectable, inject, Container } from 'inversify';
// import "reflect-metadata";

const TYPES = {
  Katana: Symbol.for("Katana"),
  Shuriken: Symbol.for("Shuriken"),
};

@injectable()
class Katana {
  public hit() {
    console.log('cut');
    return "cut!";
  }
}

@injectable()
class Shuriken {

  constructor(
    @inject(TYPES.Katana) public katana: Katana
  ) {

  }

  public throw() {
    return "hit!";
  }
}

/**
 * ioc容器：
 * 
 * 1. 将所有类都注入到容器中，作为依赖使用
 */
const myContainer = new Container();
myContainer.bind<Shuriken>(TYPES.Shuriken).to(Shuriken);
myContainer.bind<Katana>(TYPES.Katana).to(Katana);

/**
 * 从容器中获取到指定token的依赖的实例
 */
const shuriken = myContainer.get<Shuriken>(TYPES.Shuriken);
shuriken.katana.hit();

class Test{

}

console.log(Reflect.getMetadataKeys(Test));