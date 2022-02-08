import { Entity } from './entity'
import { UknownType } from './utils'

export class Family implements Iterable<Entity> {
  constructor(
    private readonly entities: Entity[],
    private readonly componentTypes: UknownType[]
  ) {}

  [Symbol.iterator](): Iterator<Entity, Entity, undefined> {
    let index = 0
    return {
      next: () => {
        const value = this.entities[index]
        const done = index++ >= this.entities.length

        return { value, done }
      },
    }
  }
}
