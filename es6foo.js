function asyncFunction(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('hello')
    },3000)
  })
}

const a= await asyncFunction()
console.log(a);

export const getFullName = (name, surname) => {
  return name + " " + surname;
};

export const getSurname = (name, surname) => {
  return surname;
};

// export default getFullName;

// module.exports = {
//   getSurname,
//   getFullName,
// };
