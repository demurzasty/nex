/* eslint-disable @typescript-eslint/no-explicit-any */
export type Type<T> = new (...args: any[]) => T
export type UknownType = Type<unknown>
