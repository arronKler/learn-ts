interface Obj {
  a: string;
  b: number;
  c: boolean;
}

// 变成只读
type ReadonlyObj = Readonly<Obj>;

// 所有子类型变成可选的
type PartialObj = Partial<Obj>;

// 选择其中部分成员成为一个新的类型
type PickObj = Pick<Obj, "a" | "b">;

// 给一组成员相同的类型，生成一个对象
type RecordObj = Record<"x" | "y", Obj>;

// Exclude
type Exc<T, U> = T extends U ? never : T;
type sss = Exc<"a" | "b" | "c", "a">;

// Extract
type EX<T, U> = T extends U ? T : never;
type ex = EX<"a" | "b", "a" | "c" | "b">;

// NonNullable
type NotNull<T> = T extends null | undefined ? never : T;
type not = NotNull<"a" | "b" | null | undefined>;
