import { COMPONENT_NAME_KEY } from './component'

// TODO: This is very inefficient implementation of ECS. Should be rewritten to data-oriented implementation.

export class Entity {
  private components = new Map<string, unknown>()

  addComponent<T>(componentType: new () => T): T {
    const name = Reflect.getMetadata(COMPONENT_NAME_KEY, componentType)
    const component = new componentType()
    this.components.set(name, component)
    return component
  }

  hasComponent<T>(componentType: new () => T): boolean {
    const name = Reflect.getMetadata(COMPONENT_NAME_KEY, componentType)
    return this.components.has(name)
  }

  removeComponent<T>(componentType: new () => T): boolean {
    const name = Reflect.getMetadata(COMPONENT_NAME_KEY, componentType)
    return this.components.delete(name)
  }
}
