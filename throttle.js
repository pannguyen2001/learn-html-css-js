/*
Throttle function: limits the rate at which a function is executed.
Meaning that the function will only be executed once every specified time interval.
Usage: useful for limiting the rate of function execution, such as in event handlers or animations.
 */
function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      // console.log(now - lastCall)
      if (now - lastCall >= delay) {
        func.apply(this, args);
        lastCall = now;
      }
    };
  }
  
  
  for (let i = 0; i < 10; i++) {
    throttle(console.log, 1000000)(i);
  }
  throttle(console.log, 1000)("Hello, world!"); // This will only log "Hello, world!" once every 1000 milliseconds.
  