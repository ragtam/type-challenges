type PickAllBut<TItem, KProp extends keyof TItem> = Pick<TItem, KProp>
type PickAll<TItem, KProp extends keyof TItem> = Omit<TItem, KProp>
type MakeReadonly<TItem> = { readonly [Property in keyof TItem]: TItem[Property] }

type MyReadonly2<TItem, KReadonlyProps extends keyof TItem = keyof TItem> =
    PickAll<TItem, KReadonlyProps> & MakeReadonly<PickAllBut<TItem, KReadonlyProps>>
