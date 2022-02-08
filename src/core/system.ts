import { Service } from 'typedi'
import { Registry } from './registry'

export const System = Service

export interface ISystem {
  process(registry: Registry): void
}
