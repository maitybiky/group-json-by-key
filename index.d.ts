declare module "group" {
  export default function group<T>(arr: T[]): { [key: string]: T[] };
}
