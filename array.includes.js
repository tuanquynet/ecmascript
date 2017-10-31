// https://node.university/blog/498412/es7-es8
// Array.includes
const productNames = ['CPU', 'RAM', 'Monitor'];
const productName = 'Monitor';

console.log('Monitor is includes in productNames');
console.log(productNames.includes(productName));
console.log('It is case sensitive when comparing string');
console.log(productNames.includes(productName.toLowerCase()));