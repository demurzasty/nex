/* eslint-disable @typescript-eslint/ban-types */

import Container from 'typedi'
import { ModuleInput, MODULE_INPUT_KEY } from './module'
import { ISystem } from './system'

class Engine {
  private isRunning = true
  private systems: ISystem[] = []

  bootstrap(entry: Function): void {
    if (!Reflect.hasMetadata(MODULE_INPUT_KEY, entry)) {
      throw new Error('No module input provided.')
    }

    const moduleInput = Reflect.getMetadata(
      MODULE_INPUT_KEY,
      entry
    ) as ModuleInput

    this.systems = moduleInput.systems.map(
      (factory) => Container.get(factory) as ISystem
    )

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
