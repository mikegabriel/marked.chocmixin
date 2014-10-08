/*!
* Preview in Marked 2 mixin for Chocolat
* WTFPL 2 Licensed
*/

var exec = require('child_process').exec;

Hooks.addMenuItem("Go/Preview in Marked 2", "cmd-shift-p", function() {
  if (!Document.current() || !Document.current().path()) {
    Alert.show('Whoops!', 'A file must be open for this to work.', ['Dammit']);
    return;
  }  
  var filePath = Document.current().path();
  
  exec('open -b com.brettterpstra.marked2 "' + filePath + '"');
});