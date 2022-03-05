import { Singleton } from "./src/Singleton.mjs";

const io = Singleton.initialize();

if (Math.floor(Math.random() * 2) === 1) {
  io.writeTime();
}
