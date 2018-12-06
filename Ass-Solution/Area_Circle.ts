/* area of circle*/

function AreaCircle(radius:number,PI?:number)
{
    
    
    var area:number;

    if(PI ==undefined)
    {
        PI = 3.14
    }

    area = PI*radius*radius;

    console.log("Area of circle is"+area);
}

 AreaCircle(5);

