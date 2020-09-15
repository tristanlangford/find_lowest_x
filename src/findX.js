(function(exports) {

    function findX(arr) {
        return 1 - arr.reduce((a, b) => a + b)
    }

    module.exports = findX
})(this)