type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends unknown[], U> = T extends [infer First, ...infer Rest] ? Equal<U, First> extends true ? true : Includes<Rest, U> : false

// https://www.youtube.com/watch?v=ipwWXQQFTPU
// naive implementation:
// type Includes<T extends unknown[], U> = U extends T[number] ? true : false
