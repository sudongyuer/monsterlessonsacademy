function asyncFunction(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('world')
    },3000)
  })
}

const a= await asyncFunction()
console.log(a);

// export default getFullName;

// module.exports = {
//   getSurname,
//   getFullName,
// };
