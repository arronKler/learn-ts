/* 字符串枚举 */
enum Direction {
  UP = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

/* 异构枚举 */
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES"
}

/* 计算、常量 成员 */
enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // Computed memeber
  G = "123".length
}
