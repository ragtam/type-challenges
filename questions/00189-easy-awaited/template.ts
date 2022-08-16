type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U> ? U : never
