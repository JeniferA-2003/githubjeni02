
  
    const rank=document.querySelector(".rank-col");
    const home=document.querySelector(".home");
    

       
document.addEventListener('scroll',()=>{
    let el11=document.querySelector('#student1');
    let el12=document.querySelector('#student2');
    let el21=document.querySelector('#staff1');
    let el22=document.querySelector('#staff2');
    let el31=document.querySelector('#ug1');
    let el32=document.querySelector('#ug2');
    // let el41=document.querySelector('#pg1');
    // let el42=document.querySelector('#pg2');
    let el51=document.querySelector('#phd1');
    let el52=document.querySelector('#phd2');
    try{
    
    
    let start1=0;
    let start2=0;
    let start3=0;
    let start4=0;
    let start5=0;
    let end1=5430;
    let end2=145;
    let end3=14;
    let end4=2;
    let end5=1;

 


    var rank1=setInterval(function(){
      
        start1+=10;
        if(el11!=null){
            el11.innerText=start1;
        }
       if(el12!=null){
        el12.innerText=start1;
       }
       
        if(start1==end1){
            clearInterval(rank1);
           
        }
    },0.01);
    var rank2=setInterval(function(){
        start2+=1;
        if(el21!=null){
            el21.innerText=start2;
        }
        if(el22!=null){
            el22.innerText=start2;
        }
      
     
        if(start2==end2){
            clearInterval(rank2);
            
        }
    },10);
    var rank3=setInterval(function(){
        start3+=1;
        if(el31!=null){
            el31.innerText=start3;
        }
        if(el32!=null){
            el32.innerText=start3;
        }
        
        if(start3==end3){
            clearInterval(rank3);
           
        }
    },100);
    // var rank4=setInterval(function(){
    //     start4+=1;
    //     if(el41!=null){
    //         el41.innerText=start4;
    //     }
    //    if(el42!=null){
    //     el42.innerText=start4;
    //    }
       
    //     if(start4==end4){
    //         clearInterval(rank4);
           
    //     }
    // },200);

    if(el51!=null)
    {
        el51.innerText=end5;
    }
    if(el52!=null){
        el52.innerText=end5;
    }
       
       
    
    }
    catch(err){
        console.log(err);
    }
}

   
    )




console.log("rank");
console.log();
