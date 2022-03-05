import { expect } from "chai";
import { IO } from "../src/IO.mjs";

describe("IO", () => {
  let io;
  beforeEach(() => {
    io = new IO();
  })
  it("initializes", () => {
    expect(io.fileExists).to.equal(false);
  })
  it("writes time", () => {
    io.writeTime();
    expect(io.fileExists).to.equal(true);
  })
})