import { engine } from '@core/engine'
import { Registry } from '@core/registry'
import { ISystem, System } from '@core/system'
import { WindowService } from './window.service'

@System()
export class WindowSystem implements ISystem {
  constructor(public readonly windowService: WindowService) {}

  process(registry: Registry): void {
    if (this.windowService.isOpen) {
      this.windowService.pollEvents()
    } else {
      engine.shutdown()
    }
  }
}
