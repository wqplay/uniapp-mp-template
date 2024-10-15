// 全局要用的类型放到这里

type IResData<T> = {
  code: number
  msg: string
  data: T
}

enum TestEnum {
  A = 'a',
  B = 'b',
}
