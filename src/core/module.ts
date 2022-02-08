/* eslint-disable @typescript-eslint/ban-types */

export interface ModuleInput {
  imports?: Function[]
  systems?: Function[]
  components?: Function[]
}

export const Module = (input: ModuleInput = {}) => {
  return Reflect.metadata('nexModuleInput', input)
}
