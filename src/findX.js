(function(exports) {

    function findX(arr) {
        var x = 1
        for(let i = 0; i < arr.length; i++) {
            x -= arr[i]
        }
        return x
    }

    module.exports = findX
})(this)