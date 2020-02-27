let obj = {
  a: 1,
  b: 2,
  c: 3
};

function getValue<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key]);
}

console.log(getValue(obj, ["a", "b"]));

// keyof T
interface Obj {
  a: number;
  b: number;
}

let key: keyof Obj; // ==> 'a' | 'b'

// T[K]
let value: Obj["a"]; // ==> number

// T extends U
