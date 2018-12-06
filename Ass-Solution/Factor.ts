/*display factor*/

 function DisplayFactor(no1:number)
{
    var i:number = 0;

    for(i=1;i<=(no1/2);i++)
    {
        if((no1%i)==0)
        {
            console.log("factors are  " +i);
        }
    }

}

DisplayFactor(20);

