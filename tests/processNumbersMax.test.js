const processNumbersFunction = require("../src/processNumbers");

describe(`GIVEN we coded the processNumbers function`, () => {
  describe("WHEN invoking the function", () => {
    it(`THEN it should return 'max is 33'`, () => {
      const response = processNumbersFunction();
      expect(response.maximo).toBe(33);
    });
  });
});