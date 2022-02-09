export const RESOURCE_METADATA_KEY = 'nexResource'

export interface ResourceMetadata {
  name: string
}

export const Resource = (name: string) => {
  const metadata: ResourceMetadata = {
    name,
  }

  return Reflect.metadata(RESOURCE_METADATA_KEY, metadata)
}
