import { Service } from '@core/service'
import { VulkanWindow } from 'nvk'

@Service()
export class WindowService {
  private window = new VulkanWindow({
    width: 1280,
    height: 720,
    title: 'Nex',
  })

  get isOpen(): boolean {
    return !this.window.shouldClose()
  }

  pollEvents(): void {
    this.window.pollEvents()
  }
}
