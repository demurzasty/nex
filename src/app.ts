import { Module } from '@core/module'
import { IdentityComponent } from '@components/identity.component'
import { WindowSystem } from '@windowing/window.system'
import { FooSystem } from './systems/foo.system'

@Module({
  systems: [WindowSystem, FooSystem],
  components: [IdentityComponent],
  imports: [],
})
export class AppModule {}
