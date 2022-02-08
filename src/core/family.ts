import { Entity } from './entity'

export class Family implements Iterable<Entity> {
  constructor(private readonly entities: Entity[]) {}

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
