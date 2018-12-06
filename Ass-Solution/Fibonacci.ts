/*fibonacci series*/

function Fibonacci(no:number)
{
    var a = 0, b = 0 ,c = 1,i;

    for(i=0;(i<=no&&b<no);i++)
    {

            b = a+c;
            a = c;
            c = b;
            console.log(b);
    }
}

Fibonacci(21);
