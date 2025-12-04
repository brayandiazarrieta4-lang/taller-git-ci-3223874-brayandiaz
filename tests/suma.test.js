const assert = require("assert");
const { suma } = require("../src/app.js");

describe("suma", () => {
  it("suma 2 + 3 = 5", () => {
    assert.strictEqual(suma(2, 3), 5);
  });
});
