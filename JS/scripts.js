function drawTree(rows) {
  var star = '';
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < rows - i; j++) {
      star += '_';
    }
    for (var k = 0; k < (2 * i + 1); k++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
}