process.stdout.write("Oh, hi there you spinner... \rheeyyy\n");
const spin = "|/-\\-|/-\\-|"

const delayLog = (char, interval, multiplier) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, interval * multiplier);
}

const spinner = (stringSentence) => {  
  const sentenceArray = stringSentence.split('');
  const interval = 200;
  
  sentenceArray.forEach((char, index) => {
    delayLog(char, interval, index + 1);
  });

  setTimeout(() => {
    process.stdout.write('\n');
  }, interval * (sentenceArray.length));
}

spinner(spin);