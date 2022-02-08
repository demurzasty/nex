import Container from 'typedi'
import { ModuleInput, MODULE_INPUT_KEY } from './module'
import { ISystem } from './system'
import { Type } from './utils'

class Engine {
  private isRunning = false
  private systems: ISystem[] = []

  bootstrap<T>(moduleType: Type<T>): void {
    if (!Reflect.hasMetadata(MODULE_INPUT_KEY, moduleType)) {
      throw new Error('No module input provided.')
    }

    const moduleInput = Reflect.getMetadata(
      MODULE_INPUT_KEY,
      moduleType
    ) as ModuleInput

    this.systems = moduleInput.systems.map(
      (factory) => Container.get(factory) as ISystem
    )

    this.isRunning = true
    this.mainLoop()
  }

  shutdown(): void {
    this.isRunning = false
  }

  private mainLoop(): void {
    for (const system of this.systems) {
      system.process()
    }

    if (this.isRunning) {
      setTimeout(() => this.mainLoop(), 16)
    }
  }
}

export const engine = new Engine()
