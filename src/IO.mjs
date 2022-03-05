import { writeFile, unlink } from "fs";

export class IO {
  fileExists;

  constructor() {
    this.fileExists = false;
  }

  writeTime() {
    const time = this.time = new Date().getTime().toString();
    writeFile("time.txt", time, { flag: 'a+' }, (err) => {});
    this.fileExists = true;
  }

  destroy() {
    unlink("time.txt", (err) => {});
    this.fileExists = false;
  }
}