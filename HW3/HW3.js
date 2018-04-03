var counter = 0, score = 0;
var series = ["a","w","s","d","space"];
var series_size = 5;
var on_off = 1;

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
        score+=5;
        random();        
        $(".flex-container").remove();
        recolor();
        add();
       
    }
    
    counter = o;
}


function Presskey(event,data,size,i)// w:119/87      s:115/83   a:97/65    d:100/68  space:32 // Arrow...Down Up Right Left ," "
 {
    var x = event.which || event.keyCode;

    //document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
   
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

function random()
{
    for (var i=0;i<series_size;i++)
    {
        switch(Math.floor(Math.random() * series_size)+1)
        {
            case 1:
            series[i] = "w";
            break;
            
            case 2:
            series[i] = "a";
            break;

            case 3:
            series[i] = "s";
            break;

            case 4:
            series[i] = "d";
            break;

            case 5:
            series[i] = "space";
            break;

        }        
    }
}

function add()
{
    $("body").append( "<div class=flex-container> </div>");
    for (var i=0;i<series_size;i++)
    {
        switch(series[i])
        {
            case "w":
            $(".flex-container").append( "<div id=w></div>"); 
                      
            break;
            
            case "a":
            $(".flex-container").append( "<div id=a></div>"); 
            
            break;

            case "s":
            $(".flex-container").append( "<div id=s></div>"); 
            
            break;

            case "d":
            $(".flex-container").append( "<div id=d></div>"); 
            
            break;

            case "space":
            $(".flex-container").append( "<div id=space></div>"); 
           
            break;
        }        
    }
}
function recolor ()
{
    $("#space").css("background-image","url(pic/spacey.png)");
    $("#d").css("background-image","url(pic/d.png)");
    $("#s").css("background-image","url(pic/s.png)");
    $("#a").css("background-image","url(pic/a.png)");
    $("#w").css("background-image","url(pic/w.png)"); 
}
function fade(s)
{
    $(s).fadeOut();
    $(s).fadeOut("slow");
    $(s).fadeOut(3000);
}
/*function print()
{
    document.getElementById("demo").innerHTML = "";
    for (var i=0;i<series_size;i++)
    {
     document.getElementById("demo").innerHTML += series[i] ;
    }
}*/