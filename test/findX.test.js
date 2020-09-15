const findX = require('../src/findX')

describe('findX', function() {

    it('returns 1 when arr just 0', function() {
        expect(findX([0])).toEqual(1)
    })

})