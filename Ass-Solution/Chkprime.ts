/* check prime number*/


var bret:boolean = true;
var bret:boolean = false;


function ChkPrime(no:number):boolean
{

    var i:number = 0;

    for(i=2;i<no;i++)
    {

        if((no%i)==0)
        {
            break;
        }
        if(i<=no)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}



    var bret:boolean;
    
    bret = ChkPrime(11);
    if(bret==true)
    {
        console.log("Number is prime");
    }
    else{
        console.log("Number is not prime");
    }