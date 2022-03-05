import { expect } from "chai";
import { Singleton } from "../src/Singleton.mjs";

describe("Singleton", () => {
  it("initializes only once", () => {
    const io1 = Singleton.initialize();
    io1.writeTime();
    const io2 = Singleton.initialize();
    io2.destroy();
    expect(io1.fileExists).equal(false);
  });
});