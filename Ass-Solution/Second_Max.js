/* Second Maximum*/
function Sec_Max(arr) {
    var Max1 = arr[0];
    var Max2 = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] > Max1) && (arr[i] > Max2)) {
            Max2 = Max1;
            Max1 = arr[i];
        }
        else if ((arr[i] < Max1) && (arr[i] > Max2)) {
            Max2 = arr[i];
        }
        else if (Max1 = Max2) {
            Max2 = arr[i];
        }
    }
    return Max2;
}
var iret = 0;
var arr;
arr = [23, 89, 6, 29, 56, 45, 77, 32];
iret = Sec_Max(arr);
console.log("Second Maximum number is" + iret);
