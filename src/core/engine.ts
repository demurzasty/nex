import Container, { Constructable } from 'typedi'

export function bootstrap<T>(entry: Constructable<T>) {
  Container.get(entry)
}
