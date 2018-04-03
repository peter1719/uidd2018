var counter = 0, score = 0;
var series = ["a","w","s","d","space"];
var series_size = 5;

$(document).ready(function(){
    $("body").keypress(function(event){
       Presskey(event,series,series_size,counter);
    });
});

function order(o,limit)
{
    ++o;
    if(o>limit)
    {
        o = 0;  
    }
    
    counter = o;
}


function Presskey(event,data,size,i) {// w:119/87      s:115/83   a:97/65    d:100/68  space:32 // Arrow...Down Up Right Left ," "
    var x = event.which || event.keyCode;

    document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
   
    if((x == 97 || x == 65 || x==37) && data[i]=="a")
    {
        $("#a").css("background-image","url(pic/ay.png)");
        order(i,series_size-1);
    }

    else if((x == 119 || x == 87 || x==38 ) && data[i]=="w")
    {
        $("#w").css("background-image","url(pic/wy.png)");
        order(i,series_size-1);
    }

    else if((x == 115 || x == 83 || x==40)  && data[i]=="s")
    {
        $("#s").css("background-image","url(pic/sy.png)");
        order(i,series_size-1);
    }

    else if((x == 100 || x == 68 || x==39)  && data[i]=="d")
    {
        $("#d").css("background-image","url(pic/dy.png)");
        order(i,series_size-1);
    }

    else if(x == 32  && data[i]=="space")
    {
        $("#space").css("background-image","url(pic/spacey.png)");
        order(i,series_size-1);
    }
    

}
