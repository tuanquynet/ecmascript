// ES2015
function makeIterator(array) {
    var nextIndex = 0;

    return {
        next: function () {
            return nextIndex < array.length ?
                { value: array[nextIndex++], done: false } :
                { done: true };
        }
    };
}

var it = makeIterator(['setup', 'doTask1']);
console.log(it.next().value); // 'setup'
console.log(it.next().value); // 'doTask1'
console.log(it.next().done);  // true

// Iterable
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

for (let value of myIterable) {
    console.log(value);
}
// 1
// 2
// 3

or

[ ...myIterable ]; // [1, 2, 3]