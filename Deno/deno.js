const food = Deno.args[0];
const parent = Deno.args[1];

if (food === 'love' && parent === 'ryan') {
    console.log('Deno is born');
} else {
    console.log('This egg needs love');
}

setTimeout(() => {
    console.log('I Love Node.js');
}, 1000);
console.table(Deno.metrics());

console.log(window);