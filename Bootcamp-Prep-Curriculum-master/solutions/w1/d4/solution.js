// version 1
function catBuilder(name, color, toys) {
  var cat = {
    name: name,
    color: color,
    toys: toys
  };

  return cat;
}

// version 2
function catBuilder(name, color, toys) {
  var cat = {};
  cat.name = name;
  cat.color = color;
  cat.toys = toys;
  return cat;
}

function printObject(obj) {
  for (var k in obj) {
    console.log(k + ' - ' + obj[k]);
  }
}

// debugged
var cat = {
  sound : "Meowr",
  purr : function() {
    return (this.sound + "..." + this.sound);
  }
}

cat.purr() === "Meowr...Meowr";
