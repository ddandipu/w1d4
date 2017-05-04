var countdownGenerator = function (x) {
  /* your code here */
  var counter = x;
  return function() {
    if (counter > 0) {
    counter -= 1;
    console.log("T- minus " +(counter + 1));
    } else if (counter === 0) {
    counter -= 1;
    console.log("Blast Off!") }
    else {
    counter -= 1;
    console.log("Rockets taken off!")}
  }
};

var countdown = countdownGenerator(6);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown();
countdown();
countdown();
countdown();
countdown();