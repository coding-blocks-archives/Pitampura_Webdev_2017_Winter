const expect = require('chai').expect
const {calcAmt} = require('../src/utils/tax')

describe('test price amount calculation', () => {
    it('should fail for -ve or > 100 discount', () => {
        try {
            calcAmt(100, -10, 10)
            done(new Error())
        } catch (e) {
            expect(e.message).to.eq('Discount must be between 0 and 100')
        }
        try {
            calcAmt(100, 110, 10)
            done(new Error())
        } catch (e) {
            expect(e.message).to.eq('Discount must be between 0 and 100')
        }
    })
    it('should fail for -ve tax', () => {
        try {
            calcAmt(100, 10, -10)
            done(new Error())
        } catch (e) {
            expect(e.message).to.eq('TAX must be positive')
        }
    })
    it('should fail for non number values', () => {
        try {
            calcAmt('a', 0,0)
            done(new Error())
        } catch (e) {
            expect(e.message).to.eq('Values have to be numbers')
        }
        try {
            calcAmt(0,'a',0)
            done(new Error())
        } catch (e) {
            expect(e.message).to.be.a('string')
        }
        try {
            calcAmt(0,0,'a')
            done(new Error())
        } catch (e) {
            expect(e.message).to.be.a('string')
        }
    })
    it('should work for correct values', () => {
        let amt = calcAmt(100, 10, 10)
        expect(amt).to.eq(99)
    })
})