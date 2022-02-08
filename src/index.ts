import 'module-alias/register'
import 'reflect-metadata'

import { engine } from '@core/engine'
import { AppModule } from './app'

engine.bootstrap(AppModule)
