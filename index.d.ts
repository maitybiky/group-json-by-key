declare module "group-json-by-key" {
  export default function group<T>(arr: T[]): { [key: string]: T[] };
}
