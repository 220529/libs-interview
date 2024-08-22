const arr = [1,2,3];
const obj = {a:1,b:2};

for (const key in arr) {
    console.log("arr", "key: " + key, "value: " + arr[key]);
}

for (const key in obj) {
    console.log("obj", "key: " + key, "value: " + obj[key]);
}