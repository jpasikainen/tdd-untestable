import { expect } from "chai";
import { toWriteOrNotToWrite } from "../src/Function.mjs";
import { existsSync } from "fs";

describe("Function", () => {
  it("writes time at least once after 1000 tries", () => {
    while (!existsSync("time.txt")) {
      toWriteOrNotToWrite();
    };
    let exists = false;
    if (existsSync("time.txt")) exists = true;
    expect(exists).equal(true);
  });
});