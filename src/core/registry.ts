import { Entity } from './entity'
import { Service } from './service'
import { UknownType } from './utils'

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

@Service()
export class Registry {
  private entities: Entity[] = []

  create(): Entity {
    const entity = new Entity()
    this.entities.push(entity)
    return entity
  }

  getFamily(...componentTypes: UknownType[]): Family {
    return new Family(this.entities)
  }
}
