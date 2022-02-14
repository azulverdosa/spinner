process.stdout.write("Oh, hi there you spinner... \rheeyyy\n");

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 600);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 900);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1200);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1800);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 2100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 2400);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 2700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 3000);

setTimeout(() => {
  process.stdout.write('\n');
}, 3300);