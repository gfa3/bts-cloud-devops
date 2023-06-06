const processNumbersFunction = require("../src/processNumbers");

describe(`GIVEN we coded the processNumbers function`, () => {
  describe("WHEN invoking the function", () => {
    it(`THEN it should return 'sum is 79'`, () => {
      const response = processNumbersFunction();
      expect(response.suma).toBe(79);
    });
  });
});