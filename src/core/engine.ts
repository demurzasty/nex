// eslint-disable-next-line @typescript-eslint/ban-types
export function bootstrap(entry: Function) {
  console.log(Reflect.getMetadata('nexModuleInput', entry))
}
