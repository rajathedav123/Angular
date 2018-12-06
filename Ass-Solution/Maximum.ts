/*to find maximum number*/
function Max(no1:number,no2:number,no3:number):number 
{  
    

    if((no1>no2)&&(no2>no3))
    {
        return no1;
    }
    else if((no2>no1)&&(no2>no3))
    {
        return no2;
    }
    else
    {
        return no3;
    }
    
    
} 
var iret:number;
iret = Max(23,89,6);

console.log("Maximum number is :"+iret);