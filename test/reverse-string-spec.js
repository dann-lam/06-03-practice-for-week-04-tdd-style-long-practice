const chai = require('chai')
const expect = chai.expect
const { reverseString } = require('../problems/reverse-string')

describe("reverseString(string)", () => {
    it("should reverse the string", () => {
        const reverse = reverseString("fun");
        expect(reverse).to.eql("nuf")
    });
    it("should throw a type error", () => {
        expect(() => reverseString(42)).to.throw(TypeError);
    })
});
