Function.prototype.bind1 = function(obj, ...args) {
    ctx = this;
    return (...other) => {
        return ctx.apply(obj, [...args, ...other])
    }
}

Function.prototype.bind2 = function(obj, ...args) {
    ctx = this;
    return (...other) => {
        return ctx.call(obj, ...[...args, ...other])
    }
}

Function.prototype.bind3 = function() {
    const args = [...arguments];
    const obj = args.shift();
    const ctx = this;
    return function() {
        return ctx.call(obj, ...args, ...arguments)
    }
}

function multiply(a, b) {
    return a * b;
}

const double = multiply.bind1(null, 2);
console.log(double(5)); // 输出: 10

const double2 = multiply.bind2(null, 2);
console.log(double2(5)); // 输出: 10

const double3 = multiply.bind3(null, 2);
console.log(double3(5)); // 输出: 10

const arr = [1,2,3];
const arr2 = Array.prototype.slice.call(arr);
const arr3 = arr.slice(0,3)
console.log(arr2,arr3);
