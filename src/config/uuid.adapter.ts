import { v4 as uuid } from "uuid";

export class UUID {
  static v4 = () => uuid();
}
