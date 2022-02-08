export interface ModuleInput {
  // eslint-disable-next-line @typescript-eslint/ban-types
  systems?: Function[]
}

export const Module = (input: ModuleInput = {}) => {
  return Reflect.metadata('nexModuleInput', input)
}
