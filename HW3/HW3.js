var counter = 0, score = 0;
var series = ["a","s","d","space","w"];
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
        document.getElementById("demo").innerHTML = "Score: " + score;
        add();       
    }
    counter = o;
}


function Presskey(event,data,size,i)// w:119/87      s:115/83   a:97/65    d:100/68  space:32 // Arrow...Down Up Right Left ," "
 {
    var x = event.which || event.keyCode;

    //document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
   var id = "#d" + (i+1);
   //document.getElementById("demo").innerHTML = id;
    if((x == 97 || x == 65 || x==37) && data[i]=="a")
    {
        $(id).css("background-image","url(pic/ay.png)");
        order(i,series_size-1);
    }

    else if((x == 119 || x == 87 || x==38 ) && data[i]=="w")
    {
        $(id).css("background-image","url(pic/wy.png)");
        order(i,series_size-1);
    }

    else if((x == 115 || x == 83 || x==40)  && data[i]=="s")
    {
        $(id).css("background-image","url(pic/sy.png)");
        order(i,series_size-1);
    }

    else if((x == 100 || x == 68 || x==39)  && data[i]=="d")
    {
        $(id).css("background-image","url(pic/dy.png)");
        order(i,series_size-1);
    }

    else if(x == 32  && data[i]=="space")
    {
        $(id).css("background-image","url(pic/spacey.png)");
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
    var txt = " ";
    var id ;
    $("body").append( "<div class=flex-container></div>"); 
    for (var i=0;i<series_size;i++)
    {
        txt = "<div id=d" + (i+1) + "></div>";
        id = "#d" + (i+1);
        $(".flex-container").append( txt ); 
        switch(series[i])
        {
            case "w":
            $(id).css("background-image","url(pic/w.png)");          
            break;
            
            case "a":
            $(id).css("background-image","url(pic/a.png)");
            break;

            case "s":
            $(id).css("background-image","url(pic/s.png)");
            break;

            case "d":
            $(id).css("background-image","url(pic/d.png)");
            break;

            case "space":
            $(id).css("background-image","url(pic/space.png)");
            break;
        }   
    }
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