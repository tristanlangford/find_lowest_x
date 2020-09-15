const findX = require('../src/findX')

describe('findX', function() {

    it('returns 1 when arr just 0', function() {
        expect(findX([0])).toEqual(1)
    })

    it('returns a minus value if arr is positive', function() {
        expect(findX([5])).toEqual(-4)
    })

    it('deals with single negative values', function() {
        expect(findX([-5])).toEqual(6)
    })

    it('deals arrays of many positive elements', function() {
        expect(findX([5, 7, 2, 4])).toEqual(-17)
    })

})