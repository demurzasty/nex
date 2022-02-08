import { COMPONENT_NAME_KEY } from './component'
import { Type } from './utils'

// TODO: This is very inefficient implementation of ECS. Should be rewritten to data-oriented implementation.

export class Entity {
  private components = new Map<string, unknown>()

  addComponent<T>(componentType: Type<T>): T {
    const name = Reflect.getMetadata(COMPONENT_NAME_KEY, componentType)
    const component = new componentType()
    this.components.set(name, component)
    return component
  }

  hasComponent<T>(componentType: Type<T>): boolean {
    const name = Reflect.getMetadata(COMPONENT_NAME_KEY, componentType)
    return this.components.has(name)
  }

  removeComponent<T>(componentType: Type<T>): boolean {
    const name = Reflect.getMetadata(COMPONENT_NAME_KEY, componentType)
    return this.components.delete(name)
  }
}
