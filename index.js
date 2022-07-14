let a = 10 ;
b= 0;


let waitingdata = new Promise((resolve ,reject )=>{
  setTimeout(() => {
  resolve(30)
  }, 2000);
})
waitingdata.then((data)=>{
console.log(a+data)
})

console.log(a+b)
<<<<<<< HEAD

console.log('laxman')
=======
>>>>>>> 5d9ddd81a1f6096f2313fe5811c7eb9a17651162
