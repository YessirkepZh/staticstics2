// Import stylesheets
import './style.css';

var wordStates = document.querySelectorAll(".list-of-states li");
var svgStates = document.querySelectorAll("#states > *");

function removeAllOn() {
  try{
  document.getElementById("info-box").style.display = "none";
  wordStates.forEach(function(el) {
    el.classList.remove("on");
    
  });
  svgStates.forEach(function(el) {
    el.classList.remove("on");
  });
  }
  catch(e){
    console.log(e);
  }
}

function addOnFromList(el) {
  try
  {
    var stateCode = el.getAttribute("data-state");
    var svgState = document.querySelector("#" + stateCode);
    el.classList.add("on");
    svgState.classList.add("on");
    document.getElementById("info-box").style.display = "block";
  }
  catch(ex){console.log(ex)}
}

function addOnFromState(el) {
  try
  {
    var stateId = el.getAttribute("id");
    var wordState = document.querySelector("[data-state='" + stateId + "']");
    el.classList.add("on");
    wordState.classList.add("on");
    document.getElementById("info-box").style.display = "block";
  }
  catch(ex){console.log(ex)}
}

wordStates.forEach(function(el) {
  el.addEventListener("mouseenter", function() {
    addOnFromList(el);
  });
  el.addEventListener("mouseleave", function() {
     removeAllOn();
  });
  
  el.addEventListener("touchstart", function() {
    removeAllOn();
    addOnFromList(el);
  });
});

svgStates.forEach(function(el) {
  el.addEventListener("mouseenter", function() {
    addOnFromState(el);
  });
  el.addEventListener("mouseleave", function() {
     removeAllOn();
  });
  
  el.addEventListener("touchstart", function() {
    removeAllOn();
    addOnFromState(el);
  });

  // el.addEventListener("mousemove", function(e) {
  //    removeAllOn();
  // });

});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() { 
    var link = $(this).attr('href');   
    window.open(link,'_blank');
    return false;
  });
}