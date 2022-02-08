import { ISystem, System } from '@core/system'

@System()
export class FooSystem implements ISystem {
  process(): void {
    throw new Error('Method not implemented.')
  }
}
