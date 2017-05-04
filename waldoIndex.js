function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === "Waldo") {
      found(i);
    }
  }
}

function actionWhenFound(index) {
  console.log("Found him" + " at index" + index +"!");
}

findWaldo(["Alice", "Waldo", "Bob", "Winston"], actionWhenFound);