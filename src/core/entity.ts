import { COMPONENT_NAME_KEY } from './component'
import { Type } from './utils'

// TODO: This is very inefficient implementation of ECS. Should be rewritten to data-oriented implementation.

export class Entity {
  private components = new Map<string, unknown>()

  addComponent<T>(componentType: Type<T>): T {
    const componentName = Reflect.getMetadata(COMPONENT_NAME_KEY, componentType)
    const component = new componentType()
    this.components.set(componentName, component)
    return component
  }

  hasComponent<T>(componentType: Type<T>): boolean {
    const componentName = Reflect.getMetadata(COMPONENT_NAME_KEY, componentType)
    return this.hasComponentByName(componentName)
  }

  hasComponentByName(componentName: string): boolean {
    return this.components.has(componentName)
  }

  removeComponent<T>(componentType: Type<T>): boolean {
    const componentName = Reflect.getMetadata(COMPONENT_NAME_KEY, componentType)
    return this.components.delete(componentName)
  }
}
