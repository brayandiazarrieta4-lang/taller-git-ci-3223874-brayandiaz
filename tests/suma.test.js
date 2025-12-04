import assert from "assert";
import { suma } from "../src/app.js";

describe("suma", () => {
  it("suma 2 + 3 = 5", () => {
    assert.strictEqual(suma(2, 3), 5);
  });
});
