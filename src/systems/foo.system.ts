import { ISystem, System } from '../system'

@System()
export class MySystem implements ISystem {
  process(): void {
    throw new Error('Method not implemented.')
  }
}
