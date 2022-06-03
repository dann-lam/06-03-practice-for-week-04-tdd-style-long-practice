const chai = require('chai')
const expect = chai.expect
const { returnsThree, reciprocal } = require('../problems/number-fun')

describe("returnsThree()", () => {
    it("should return three", () => {
        const example = returnsThree()
        expect(example).to.eql(3)
    })
})

describe("reciprocal(n)", () => {
    it("should return the reciprocal", () => {
        const example1 = reciprocal(2)
        expect(example1).to.eql(1 / 2)
    })
    it("should throw an error", () => {
        const rec2 = 0;
        const rec3 = 10000000;
        const rec4 = -1;
        expect(() => reciprocal(rec2)).to.throw(Error);
        expect(() => reciprocal(rec3)).to.throw(Error);
        expect(() => reciprocal(rec4)).to.throw(Error);
    })
})
