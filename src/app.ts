import { Module } from '@core/module'
import { FooSystem } from '@systems/foo.system'

@Module({
  systems: [FooSystem],
})
export class AppModule {}
