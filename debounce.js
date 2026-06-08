/**
 * Debounce function: A function that delays the execution of another function until a certain amount of time has passed since the last time it was invoked.
 * Meaning: you repeat 1 action multiple times, but it will only execute once after the last action. Last action will be exceuted after the delay.
 * Use cases: Search input, window resize, scroll events, etc.
 */

// const debounce = (callback, wait) => {
//     let timeoutId = null;
//     return (...args) => {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         callback(...args);
//       }, wait);
//     };
//   }
//   const debouncedLog = debounce(console.log, 1000);
//   debouncedLog("hello world");
// debounce(console.log, 1000)("hello world");

// Debounce function
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}


// Function to be debounced
function search(query) {
    console.log('Searching for:', query);
}

// Create a debounced version of the search function
const dSearch = debounce(search, 100);
debugger
// Simulate typing with multiple calls to the debounced function
setTimeout(()=>dSearch('Hello'), 1000);
dSearch('Hello, ');
dSearch('Hello, World!');  // Only this call will trigger after 100ms

