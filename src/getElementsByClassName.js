// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
    // your code goes here
  // I - class name as a string
  // O - An array of elements that have the class of the parameter === className
  // C -
  // E -

  // TEST CASES
  // <div class="example">Element1</div>
  // <div class="example">Element2</div>
  // expected output: ['div', 'div']

  // <body class="targetClassName">
  //    <div class="targetClassName"></div>
  //    <div class="targetClassName"></div>
  // </body>
  // expected output: ['body', 'div', 'div']

  // PSEUDOCODE
  // create an empty result array
  var result = [];

  // base case
  // assign evaluatedElement = document.body
  var parentNode;
  if (arguments[1]) {
    parentNode = arguments[1];
  } else {
    parentNode = document.body;
  }

  // if evaluatedElement has a class list && the class list contains className
  if (parentNode.classList.contains(className)) {
    // push evaluatedElement to the result array
    result.push(parentNode);
  }

  // recursive case
  // assign child elements to the childNodes variable as an array
  var childNodes = parentNode.childNodes;

  // iterate through the child elements array
  if (childNodes.length > 0) {
    childNodes.forEach(childNode) {

      // recurisively call the getElementsByClassName function on each child node
      // and concatnate to the array assigned to the result variable
      result = result.concat(getElementsByClassName(className, childNode));
    }
  }

  // return the result array
  return result;
};
