import { expect } from "chai";
import { IO } from "../src/IO.mjs";
import { readFile } from "fs";

describe("IO", () => {
  let io;
  beforeEach(() => {
    io = new IO();
  })
  it("initializes", () => {
    expect(io.fileExists).to.equal(false);
  })
  it("writes time", () => {
    const writeTime = new Date().getTime();
    io.writeTime();
    expect(io.fileExists).to.equal(true);
    let time;
    readFile("time.txt", (err, data) => {
      time = data.toString();
    });
    const diff = (new Date().getTime() - writeTime) / 1000;
    expect(diff).lessThan(30);
    // Expect time between write and read to be less than 30 seconds
  });
  it("destorys file", () => {
    io.writeTime();
    io.destroy();
    expect(io.fileExists).to.equal(false);
  });
})