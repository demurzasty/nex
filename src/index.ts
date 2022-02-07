import { VulkanWindow } from 'nvk'

const window = new VulkanWindow({
  width: 480,
  height: 320,
  title: 'Nex',
})

;(function drawLoop() {
  if (!window.shouldClose()) {
    setTimeout(drawLoop, 16)
  }
  window.pollEvents()
})()
