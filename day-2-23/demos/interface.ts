interface List {
  readonly id: number;
  name: string;
  age?: number;
}

interface Result {
  data: List[];
}
function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name);
  });
}

render({
  data: [
    { id: 1, name: "A", sex: "male" },
    { id: 2, name: "B" }
  ]
} as Result);

// 索引类型接口
interface StringArray {
  [index: number]: string;
}

let chars: StringArray = ["A", "B"];
