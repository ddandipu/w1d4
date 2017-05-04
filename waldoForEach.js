function findWaldo(hello) {
  hello.forEach(function(element, i) {
    if (element === "Waldo") {
      console.log("Found Waldo at " + i );
    };
  })
}

var hello = ["Waldo", "Bob", "Alice", "Winston", "Waldo"]
findWaldo(hello);