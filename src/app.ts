import { Module } from '@core/module'
import { IdentityComponent } from '@components/identity.component'
import { WindowSystem } from '@windowing/window.system'

@Module({
  systems: [WindowSystem],
  components: [IdentityComponent],
  imports: [],
})
export class AppModule {}
