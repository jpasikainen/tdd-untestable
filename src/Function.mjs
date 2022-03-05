import { Singleton } from "./Singleton.mjs";

export function toWriteOrNotToWrite() {
  const io = Singleton.initialize();
  if (Math.floor(Math.random() * 2) === 1) {
    io.writeTime();
  }
}