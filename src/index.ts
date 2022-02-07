import 'module-alias/register'
import 'reflect-metadata'

import { VulkanWindow } from 'nvk'
import Container, { Service } from 'typedi'

@Service()
class Application {
  private window = new VulkanWindow({
    width: 480,
    height: 320,
    title: 'Nex',
  })

  bootstrap() {
    this.loop()
  }

  private loop() {
    if (!this.window.shouldClose()) {
      setTimeout(() => this.loop(), 16)
    }
    this.window.pollEvents()
  }
}

Container.get(Application).bootstrap()
