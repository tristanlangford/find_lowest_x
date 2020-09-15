(function(exports) {

    function findX(arr) {
        var x = 1 - arr[0]
        var lowest = x
        for(let i = 1; i < arr.length; i++) {
            x -= arr[i]
            if(x < lowest) {
                lowest = x
            }
        }

        return lowest
    }

    module.exports = findX
})(this)