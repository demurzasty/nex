export const COMPONENT_NAME_KEY = 'nexComponent'

export const Component = (name: string) => {
  return Reflect.metadata(COMPONENT_NAME_KEY, name)
}
