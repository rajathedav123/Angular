/* Check Armstrong number*/


function Armstrong(no:number) {
    var temp:number = no;
    var  temp1:number= no;
    var n:number=0;
    var idigit:number=0;
    var isum:number=0;
    
    while(temp>0) {
      n++;
     temp=temp / 10; 
     temp=(~~temp);
     //Math.trunc(temp); 
    }
    
    while(temp1!=0) {
        idigit = temp1 % 10;
        isum +=idigit**n;
        
        temp1 = temp1/10;
        temp1 = (~~temp1);
        //Math.trunc(temp1);
    }

    if(no == isum) {
        console.log("Number is an Armstrong number\t"+no,+isum);
        
    }
    else {
        console.log("Number is not an Armstrong number");
    }


}

Armstrong(153);