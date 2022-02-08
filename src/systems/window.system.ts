import { engine } from '@core/engine'
import { ISystem, System } from '@core/system'
import { VulkanWindow } from 'nvk'

@System()
export class WindowSystem implements ISystem {
  private window = new VulkanWindow({
    width: 1280,
    height: 720,
    title: 'Nex',
  })

  process(): void {
    if (this.window.shouldClose()) {
      engine.shutdown()
    } else {
      this.window.pollEvents()
    }
  }
}
