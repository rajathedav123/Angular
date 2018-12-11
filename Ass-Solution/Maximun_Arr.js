/* Maximum using arrya*/
function Maximum(arr) {
    var Max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (Max < arr[i]) {
            Max = arr[i];
        }
    }
    console.log("Maximum number is " + Max);
}
var arr;
arr = [23, 89, 6, 29, 56, 45, 77, 32];
Maximum(arr);
