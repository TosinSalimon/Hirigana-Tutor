function play(id){
       var audio = document.getElementById(id);
       audio.play();
     }

function showDiv(nr) {
 //document.getElementById(id).style.display = "block";
    //document.getElementById("tableDiv").style.display = "none";
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="none";
    document.getElementById("div3").style.display="none";
    document.getElementById("div4").style.display="none";
    document.getElementById("div5").style.display="none";
    
    document.getElementById("div"+nr).style.display="block";

    
}


function toggleTable() {
    var elem = document.getElementById("divQ");
    var displayStyle = window.getComputedStyle(elem, null).getPropertyValue("display");
   // alert(displayStyle);
    if(displayStyle=="none"){document.getElementById("tableDiv").style.display = "none";
                             document.getElementById("divQ").style.display = "block";
                             document.getElementById("bttn").value="Return to Table";
}
    else{document.getElementById("tableDiv").style.display = "block";
         document.getElementById("divQ").style.display = "none"
         document.getElementById("bttn").value="Quizzes";
        }
    
}


var answers = ["D","A","B","D","A","B","C", "C", "A","B"], 
    tot = answers.length;
function getCheckedValue(radioName){
    var radios = document.getElementsByName(radioName); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}
  

function getScore(){
  var score = 0;
    var result = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
    result = (score/tot)*100;
  return result;
}
