import { ComponentMetadata, COMPONENT_KEY } from './component'
import { Type } from './utils'

// TODO: This is very inefficient implementation of ECS. Should be rewritten to data-oriented implementation.

export class Entity {
  private components = new Array<unknown>()

  addComponent<T>(componentType: Type<T>): T {
    const { id } = Reflect.getMetadata(
      COMPONENT_KEY,
      componentType
    ) as ComponentMetadata

    const component = new componentType()
    this.components[id] = component
    return component
  }

  hasComponent<T>(componentType: Type<T>): boolean {
    const { id } = Reflect.getMetadata(
      COMPONENT_KEY,
      componentType
    ) as ComponentMetadata

    return this.hasComponentById(id)
  }

  hasComponentById(componentId: number): boolean {
    return (
      componentId < this.components.length &&
      this.components[componentId] != null
    )
  }

  removeComponent<T>(componentType: Type<T>): void {
    const { id } = Reflect.getMetadata(
      COMPONENT_KEY,
      componentType
    ) as ComponentMetadata

    this.components[id] = null
  }
}
