/* Addtion of the array*/

function Addition(arr1:number[]):number
{
    var isum:number = 0;
    for(var i = 0;i < arr1.length;i++)
    {
        isum = isum+arr1[i];
    }
    return isum;

}

var iret:number = 0;
var arr1:number[];
arr1 = [23 , 6 ,  7 , 4 ,  5 , 7];

iret = Addition(arr1);
console.log("Addtion of arr is " +iret);