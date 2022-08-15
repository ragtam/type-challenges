type MyExclude<T, U extends T> = T extends U ? never : T
