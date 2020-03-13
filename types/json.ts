type JsonType = boolean | number | string | null | JsonArray | JsonMap;
interface JsonMap {
  [key: string]: JsonType;
}
interface JsonArray extends Array<JsonType> {}

export default JsonType;
