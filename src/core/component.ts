export const COMPONENT_KEY = 'nexComponent'

export interface ComponentMetadata {
  name: string
  id: number
}

let id = 0

export const Component = (name: string) => {
  const metadata: ComponentMetadata = {
    name,
    id: id++,
  }

  return Reflect.metadata(COMPONENT_KEY, metadata)
}
