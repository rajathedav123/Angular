function MaximumArray(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var iret = MaximumArray([5, 6, 7, 8, 2]);
