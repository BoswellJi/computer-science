const fProxy = new Proxy(function (x, y) {
  return x + y;
}, {
  // 获取对象属性
  get: function (target, name, receiver) {
    console.log(target, name, receiver, 'get');
  },
  set: function (target, name, val, receiver) {
    console.log(target, name, val, receiver, 'set');
  },
  // 执行函数
  apply: function (target, object, args) {
    console.log(target, object, args, 'apply');
  },
  // 实例化函数
  construct: function (target, args) {
    console.log(target, args, 'construct');
    return {};
  },
  has: function (target, key) {
    console.log(target, key, 'has');
  },
  deleteProperty(target, key) {
    console.log(target, key, 'deleteproperty');
  },
  ownKeys(target) {
    console.log(target, 'ownKeys');
    return Object.keys(target);
  },
  getOwnPropertyDescriptor(target, key) {
    console.log(target, key, 'getOwnPropertyDescriptor');
    return Object.getOwnPropertyDescriptor(target, key);
  },
  defineProperty(target, key, desc) {
    console.log(target, key, desc, 'defineProperty');
    return true;//false
  },
  preventExtensions(target) {
    console.log(target, 'preventExtensions');
    Object.preventExtensions(target);
    return true;
  },
  getPrototypeOf(target) {
    console.log(target, 'getPrototypeOf');

  },
  isExtensible(target) {
    console.log(target, 'isExtensible');
  },
  setPrototypeOf(target, proto) {
    console.log(target, proto, 'setPrototypeOf');
  }
});

// console.log(fProxy(1, 2)); // apply
// console.log(new fProxy(1, 2)); // construct
// console.log(fProxy.hahah); // get
// fProxy.name = 'jma'; // set
// 'name' in fProxy; // has
// delete fProxy.name; // deleteProperty
// Object.keys(fProxy); // ownKeys
// Object.getOwnPropertyDescriptor(fProxy, name);  // getOwnPropertyDescriptor
// Object.defineProperty(fProxy, 'age', {
//   value: 21,
//   configurable: true,
//   enumerable: true
// }); // definProperty
// Object.preventExtensions(fProxy);
// Object.setPrototypeOf(fProxy,{
//   fnName: 'fProxy'
// });


const arrProxy = new Proxy([1, 2], {
  get(target, index) {
    console.log(target[index]);
  },
  set(target, index, val, receiver) {
    target[index] = val;
    console.log(target, index, val, receiver);
  }
});

arrProxy[0] = 'jmz';
arrProxy[10] = 'jmz';