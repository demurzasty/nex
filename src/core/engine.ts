import Container from 'typedi'
import { ModuleInput, MODULE_INPUT_KEY } from './module'
import { ISystem } from './system'
import { Type } from './utils'

let isRunning = false
let systems: ISystem[] = []

function mainLoop(): void {
  for (const system of systems) {
    system.process()
  }

  if (isRunning) {
    setTimeout(() => mainLoop(), 16)
  }
}

export function shutdown(): void {
  isRunning = false
}

export function bootstrap<T>(moduleType: Type<T>): void {
  const moduleInput = Reflect.getMetadata(
    MODULE_INPUT_KEY,
    moduleType
  ) as ModuleInput

  systems = moduleInput.systems.map(
    (factory) => Container.get(factory) as ISystem
  )

  isRunning = true
  mainLoop()
}
