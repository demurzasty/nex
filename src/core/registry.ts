import { Entity } from './entity'
import { Family } from './family'
import { Service } from './service'
import { UknownType } from './utils'

@Service()
export class Registry {
  private entities: Entity[] = []

  create(): Entity {
    const entity = new Entity()
    this.entities.push(entity)
    return entity
  }

  remove(entity: Entity): void {
    this.entities.splice(this.entities.indexOf(entity), 1)
  }

  getFamily(...componentTypes: UknownType[]): Family {
    return new Family(this.entities, componentTypes)
  }
}
