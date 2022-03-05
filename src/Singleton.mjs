import { IO } from "./IO.mjs";

export class Singleton {
  static instance;

  static initialize() {
    if (this.instance === undefined || this.instance === null) this.instance = new IO;
    return this.instance;
  }
}