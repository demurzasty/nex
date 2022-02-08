import { UknownType } from './utils'

export const MODULE_INPUT_KEY = 'nexModuleInput'

export interface ModuleInput {
  imports: UknownType[]
  systems: UknownType[]
  components: UknownType[]
}

export const Module = (input: ModuleInput) => {
  return Reflect.metadata('nexModuleInput', input)
}
