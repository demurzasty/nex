import { COMPONENT_KEY } from './component'
import { Entity } from './entity'
import { UknownType } from './utils'

export class Family implements Iterable<Entity> {
  private readonly componentIds: number[] = this.componentTypes.map(
    (componentType) => Reflect.getMetadata(COMPONENT_KEY, componentType).id
  )

  constructor(
    private readonly entities: Entity[],
    private readonly componentTypes: UknownType[]
  ) {}

  [Symbol.iterator](): Iterator<Entity, Entity, undefined> {
    let index = 0
    return {
      next: () => {
        if (index < this.entities.length) {
          if (
            this.componentIds.some(
              (componentId) =>
                !this.entities[index].hasComponentById(componentId)
            )
          ) {
            index++
          }
        }

        const value = this.entities[index]
        const done = ++index > this.entities.length

        return { value, done }
      },
    }
  }
}
