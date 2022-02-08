import { Module } from '@core/module'
import { FooSystem } from '@systems/foo.system'
import { IdentityComponent } from '@components/identity.component'

@Module({
  systems: [FooSystem],
  components: [IdentityComponent],
})
export class AppModule {}
