type RemainingType<TType, KProp> = TType extends KProp ? never : TType
type MyOmit<TItem, KProp extends keyof TItem> = { [ Property in RemainingType<keyof TItem, KProp> ]: TItem[Property] }
