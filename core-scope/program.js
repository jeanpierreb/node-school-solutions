// function foo() {
// 	var bar;
// }

// function foo () {
// 	var bar;
//
// 	function zip () {
// 		var quux;
// 	}
// }

// function foo () {
// 	var bar
// 	quux = 2
//
// 	function zip () {
// 		var quux = 'cat'
// 	}
// }

function foo() {
  var bar;
  quux = 'GLOBAL'
  function zip() {
    var quux = 'scoped to zip()';
    bar = true;
  }

  return zip;
}
