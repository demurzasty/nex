import { shutdown } from '@core/engine'
import { ISystem, System } from '@core/system'
import { WindowService } from './window.service'

@System()
export class WindowSystem implements ISystem {
  constructor(public readonly windowService: WindowService) {}

  process(): void {
    if (this.windowService.isOpen) {
      this.windowService.pollEvents()
    } else {
      shutdown()
    }
  }
}
