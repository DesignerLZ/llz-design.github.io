function Showup00(){
     $(".welcome00").css("opacity","1");
}
function Showup01(){
     $(".welcome00").css("opacity","0");
     $(".welcome01").delay(200).animate({opacity:"1"});
}
function Showup02(){
     $(".welcome01").css("opacity","0");
     $(".welcome02").delay(200).animate({opacity:"1"});
}
function Showup03(){
     $(".welcome02").css("opacity","0");
     $(".welcome03").delay(200).animate({opacity:"1"});
}
$(document).ready(function(e){
 setTimeout("Showup00()",1000);
 setTimeout("Showup01()",4000);
 setTimeout("Showup02()",7000);
 setTimeout("Showup03()",10000);
    var i=0;
  $("#newscontrol").on("click",function(){
if (i===0)
  {
  $("#newsbox01").css("height","40%");
  $("#newsbox01").css("margin-top","3%");
  $("#newsbox02").css("height","40%");
  $("#navlistleft").css("top","0");
  $("#up").css("top","-45px");
  i=1;
  }
else if(i===1)
  {
  $("#newsbox01").css("height","0");
  $("#newsbox01").css("margin-top","0");
  $("#newsbox02").css("height","0");
  $("#navlistleft").css("top","-35%");
  $("#up").css("top","-135px");
  i=0;
  }
  })

})

