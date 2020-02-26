enum Type {
  Strong,
  Week
}

class Java {
  helloJava() {
    console.log("hello java");
  }
  java: any;
}

class Javascript {
  helloJavascript() {
    console.log("hello javascript");
  }
  javascript: any;
}

/* 类型保护函数 */
function isJava(lang: Java | Javascript): lang is Java {
  // is 是类型谓词
  return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, x?: string | number) {
  let lang = type === Type.Strong ? new Java() : new Javascript();
  // 1. instanceof
  /* if (lang instanceof Java) {
    // 保护类型为java
    lang.helloJava();
  } else {
    lang.helloJavascript();
  } */

  // 2. in 。
  /* if ("java" in lang) {
    lang.helloJava();
  } else {
    lang.helloJavascript();
  }
 */

  // 3. typeof
  /* if (typeof x === "string") {
    x.length;
  } else {
    x.toFixed(2);
  } */

  // 4.使用类型保护函数
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavascript();
  }
  return lang;
}

getLanguage(Type.Strong);
