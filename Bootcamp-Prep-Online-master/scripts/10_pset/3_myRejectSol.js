function myForEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

/*************************************************************/

function myReject(arr, cb) { // solution 1
  var selected = [];

  myForEach(arr, function (ele, i, ar) {
    if (!cb(ele, i, ar)) {
      selected.push(ele);
    }
  });

  return selected;
}

function myReject(arr, cb) { // solution 2
  var selected = [];

  for (var i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i, arr)) {
      selected.push(arr[i]);
    }
  }

  return selected;
}
