// const { getFullName, getSurname } = require("./foo");
import { getFullName, getSurname } from "./es6foo.js";
import './es6foo1.js'

function asyncFunction(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('sudongyu')
    },3000)
  })
}

const a= await asyncFunction()
console.log(a);

console.log(
  "getFullName",
  getFullName("monster", "lessons"),
  getSurname("foo", "bar")
);

