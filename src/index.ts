import { VulkanWindow } from 'nvk'

class MainLoop {
  private window = new VulkanWindow({
    width: 480,
    height: 320,
    title: 'Nex',
  })

  loop() {
    if (!this.window.shouldClose()) {
      setTimeout(() => this.loop(), 16)
    }
    this.window.pollEvents()
  }
}

new MainLoop().loop()
