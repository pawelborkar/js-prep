(function greet(userName){
  console.log(`Hello ${userName}.`);
})('Pawel');


(()=>{
  console.log('Hello There!')
})();

(function counter(num=0){
num++;
console.log(num)
return num !== 5 ? counter(num) : console.log('finished');
})();


(function counting(num){
  num++;
  console.log(num)
  return num%2==0 ? console.log("Even") : counting(num) ;
  
})(10);

// Crating private varibles using IIFE

const showCredits = (()=>{
  let credits = 0;
  console.log(`Initial Credits: ${credits}.`)

  const increaseCredit = (totalCredits) => console.log(`I have ${totalCredits} credit.`)
  return () => {credits++; increaseCredit(credits);}

})();

showCredits()
showCredits()