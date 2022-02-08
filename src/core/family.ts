import { COMPONENT_NAME_KEY } from './component'
import { Entity } from './entity'
import { UknownType } from './utils'

export class Family implements Iterable<Entity> {
  private readonly componentNames: string[] = this.componentTypes.map(
    (componentType) => Reflect.getMetadata(COMPONENT_NAME_KEY, componentType)
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
            this.componentNames.some(
              (componentName) =>
                !this.entities[index].hasComponentByName(componentName)
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
