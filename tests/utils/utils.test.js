var utils = require("../../utils/utils");
describe('test isTextFieldValueNull',()=>{
  it("should return true when we pass a null value", () => {
    expect(utils.isTextFieldValueEmpty(null)).toEqual(true);
  });
  
  it("should return false when we pass a normal acceptable string", () => {
    const valid_string = 'A normal String value';
    expect(utils.isTextFieldValueEmpty(valid_string)).toEqual(false);
  });

  it("should return true when we pass a unacceptable string ''", () => {
    expect(utils.isTextFieldValueEmpty('')).toEqual(true);
  });

  it("should return true when we pass a unacceptable string ' '", () => {
    expect(utils.isTextFieldValueEmpty(' ')).toEqual(true);
  });
  
  it("should return true exception when we pass undefined", () => {
    expect(utils.isTextFieldValueEmpty(undefined)).toEqual(true);
  });

});