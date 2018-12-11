/* Addtion of the array*/
function Addition(arr1) {
    var isum = 0;
    for (var i = 0; i < arr1.length; i++) {
        isum = isum + arr1[i];
    }
    return isum;
}
var iret = 0;
var arr1;
arr1 = [23, 6, 7, 4, 5, 7];
iret = Addition(arr1);
console.log("Addtion of arr is" + iret);
