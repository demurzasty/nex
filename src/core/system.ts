import { Service } from 'typedi'

export const System = Service

export type ISystem = {
  process(): void
}
