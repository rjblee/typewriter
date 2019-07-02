const sentence = "hello there from lighthouse labs";

let time = 0;
let sentenceWNewLine = sentence + "\n";
for (const char of sentenceWNewLine) {
  
  setTimeout(function() {
    process.stdout.write(char);
  
  }, time);
  time += 50;
}
