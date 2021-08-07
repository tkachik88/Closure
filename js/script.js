function sum(a) {
    let sumSum = a;
  
    function func(b) {
        sumSum += b;
      return  sumSum;
    }
    
  return func;
}
const summary = sum(1);
console.log(summary(10));




function counter(start = 0, step = 1) {
 
  
   function next() {
      return start += step;
  }

    function clear () {
      start = 0;
      return start;
  }
  return {
    next, clear
  }
}


const generator = counter(0, 8);

console.log(generator.next());