// take a sentence and display it as an animation like being typed in by someone
const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}

// return to a new line after all the characters are written out to stdout
setTimeout(() => console.log(), delay);