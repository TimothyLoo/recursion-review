// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // I - Any type of object/array
  // O - A string
  // C - Object keys will always be a string in double-quotes
  //     Values within objects that are strings will have double-quotes
  // E -

  // TEST CASES
  // console.log(JSON.stringify({ x: 5, y: 6 }));
  // expected output: "{"x":5,"y":6}"

  // console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
  // expected output: "[3,"false",false]"

  // console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
  // expected output: "{"x":[10,null,null,null]}"

  // console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
  // expected output: ""2006-01-02T15:04:05.000Z""

  // PSEUDOCODE
  // create an empty string
  var newString = '';

  // base cases
  // if obj is null, undefined, function, or symbol
    // return 'null' (as a string)
  if (obj === null || obj === undefined || typeof obj === 'function' || typeof obj === 'symbol') {
    return 'null';
  }

  // if obj is number or boolean prototype
    // return obj.toString()
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj);
  }

  // if obj is string prototype
    // return '"' + obj + '"'
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // recursive cases
  // if obj is array prototype
    // result string += stringifyJSON(array element at index 0)
  if (Array.isArray(obj)) {
    newString += '[';
    // Fill this in
    for (var i = 0; i < obj.length; i++) {
      newString += stringifyJSON(obj[i]);
      if (i !== obj.length - 1) {
        newString += ',';
      }
    }
    newString += ']';
  }

  // if obj is array prototype
    // result string += stringifyJSON(array element at index 0)
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    for (var key in obj) {
      if(typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        return null;
      }
    }
    newString += '{';
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      newString += '"' + keys[i] + '":';
      newString += stringifyJSON(obj[keys[i]]);
      if (i !== keys.length - 1) {
        newString += ',';
      }
    }
    newString += '}';
  }

  // return new string variable
  return newString;

};
