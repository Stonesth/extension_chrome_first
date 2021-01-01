alert("content.js");
// Grab the entire document body
// This gets an array even though it's likely just one thing
var everything = document.getElementsByTagName("body");
console.log('word redactor extension running');

for (var i = 0; i < everything.length; i++) {
// Look at the full content
var txt = everything[i].innerHTML;
//var s = "test the <img the> the";

alert(txt);
// This is a way of splitting up by tags.
var tokens = txt.split(/(<.*?>)/);
alert(tokens.length);
for (var j = 0; j < tokens.length; j++) {
// Ignore anything that is a tag
if (tokens[j].charAt(0) !== '<') {
// Now replace the word "First" with "PIERRE" spanned with the class "redact"
tokens[j] = tokens[j].replace(/\First\b/gi,'PIERRE');
}
}
// Put everything back in
everything[i].innerHTML = tokens.join('');
}
