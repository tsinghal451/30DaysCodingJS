// immediately invoked function expressions (IIFE)

/* A JavaScript IIFE (Immediately Invoked Function Expression) 
is a function that runs the moment it is invoked or called in the JavaScript event loop */

(function chai() {
  console.log("db connected"); //db connected
})();

((name) => {
  console.log(`db connected , ${name}`); //db connected , tushar
})("tushar");
