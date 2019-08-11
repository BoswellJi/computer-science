import { a as c } from './jquery';
a = 0;
b = { name: 1 };

b.name;
c;

const num = 0.5 < Math.random() ? 0.5 : 'jmz';

if(num === 0.5){
  console.log(num);
}

let obj = 0.5 < Math.random() ? 1 : [1]; // number|number[]

// 断言, 告诉ts, obj为数组
(<number[]>obj).push(1);

//等价
(obj as number[]).push(1);

// 索引类型 
type info = keyof {name:'jmz',age:21};

const name: info = 'name';