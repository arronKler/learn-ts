/* 函数类型 */
function add(x: number, y: number): number {
  return x + y;
}

let myAdd: (a: number, b: number) => number = add;

/* 可选参数 */
function buildName(firstName: string, lastName?: string) {
  return firstName + lastName;
}

/* 默认参数 */
function buildNameTwo(fn: string, ln: string = "default") {
  return fn + ln;
}

/* 默认参数在前 */
function buildNameThree(fn: string = "s", ln: string) {
  return fn + ln;
}
buildNameThree(undefined, "ss"); // 使用undefined来使用默认参数值
