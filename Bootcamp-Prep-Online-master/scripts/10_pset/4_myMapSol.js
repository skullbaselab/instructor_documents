function myForEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

/*************************************************************/

function myMap(arr, cb) { // solution 1
  var mapped = [];

  myForEach(arr, function (ele, i, ar) {
    mapped.push(cb(ele, i, ar));
  });

  return mapped;
}

function myMap(arr, cb) { // solution 2
  var mapped = [];

  for (var i = 0; i < arr.length; i++) {
    mapped.push(cb(arr[i], i, arr));
  }

  return mapped;
}
