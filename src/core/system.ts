import { Service } from 'typedi'

export const System = Service

export interface ISystem {
  process(): void
}
