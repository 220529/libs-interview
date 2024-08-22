const obj = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'b', 'c'],
    t: new Date(),
    b: undefined
}

console.log("obj", obj);

const deepClone1 = (e) => {
    if (typeof e !== "object" || e == null || e instanceof Date) {
        return e
    }
    const result = Array.isArray(e) ? [] : {};
    for (const key in e) {
        if (e.hasOwnProperty(key)) {
            result[key] = deepClone1(e[key])
        }
    }
    return result
}

function isObj(params) {
    return typeof params === "object" && params !== null
}
function deepClone2(obj) {
    if (!isObj(obj)) {
        return obj
    }
    if (obj instanceof Date) {
        return new Date(obj)
    }
    const e = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            e[key] = deepClone2(obj[key])
        }
    }
    return e
}

const obj1 = deepClone1(obj);
console.log("obj1", obj1);

const obj2 = deepClone2(obj);
console.log("obj2", obj2);
obj2.age = 30

console.log(obj1.t === obj2.t);