import { Registry } from '@core/registry'
import { ISystem, System } from '@core/system'
import { IdentityComponent } from '@components/identity.component'

@System()
export class FooSystem implements ISystem {
  private readonly family = this.registry.getFamily(IdentityComponent)

  constructor(private readonly registry: Registry) {
    registry.create()
  }

  process(): void {
    for (const entity of this.family) {
      console.log(entity)
    }
  }
}
