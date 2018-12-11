/*Chk String*/

function  ChkString()
{
    var re = /Marvellous/gi;
    var str = "Pune Kothrud Marvellous Infosystems";
 /*   if(str.search(re)==-1)
    {
        console.log("Does not contain Marvellous");
    }
    else
    {
        console.log("Does not contain Marvellous");
    }
*/
    var arr = str.split(" ");
    var flag:number = 0;
    arr.forEach(element => {
        if(element == "Marvellous")
        {
            flag = 1;
        }
        
    });
    if(flag == 1)
    {
        console.log("TRUE");
    }
    else
    {
        console.log("FALSE");
    }
}
ChkString();
