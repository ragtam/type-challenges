type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer Param) => any ? [...Param] : never
