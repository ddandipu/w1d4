var words = [4, 10,2];

function customMap(ary, customF) {
  var results =[];
  for (var i = 0; i <ary.length; i++) {
     results.push(customF(ary[i]));
  } console.log(results);
}


customMap(words, function(word) {
  return word + " squared is " + (word * word);
});