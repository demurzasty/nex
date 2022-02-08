import 'module-alias/register'
import 'reflect-metadata'

import { bootstrap } from '@core/engine'
import { AppModule } from './app'

bootstrap(AppModule)
