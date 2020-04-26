// Import stylesheets
import './style.css';
var wordStates = document.querySelectorAll(".list-of-states li");
var svgStates = document.querySelectorAll("#states > *");


var months = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ];

function getDateArray(){
  const today= new Date();
  const yearStart = 2013;
  const yearEnd = today.getFullYear();;
  var arr = [];
    while(yearStart < yearEnd+1){
      arr.push(yearStart++);
    }
  return arr 
}
function getTotalMonth(year){
  var today = new Date(year);
  if (year==null){
    return months.slice(today.getMonth,months.length);
  }
  else {
    return months;
  }
  
}

makeList(getDateArray(),'yearMain',true);
makeList(getTotalMonth(),'monthMain',false);
function removeAllOn() {
    try {
        document.getElementById("info-box").style.display = "none";
        wordStates.forEach(function (el) {
            el.classList.remove("on");
        });
        svgStates.forEach(function (el) {
            el.classList.remove("on");
        });
        document.getElementById("statName").innerHTML = " ";
    }
    catch (e) {
        console.log(e);
    }
}
function addOnFromList(el) {
    try {
        var stateCode = el.getAttribute("data-state");
        var svgState = document.querySelector("#" + stateCode);
        el.classList.add("on");
        svgState.classList.add("on");
        document.getElementById("info-box").style.display = "block";
        getcurrentState(stateCode);
    }
    catch (ex) {
        console.log(ex);
    }
}
function addOnFromState(el) {
    try {
        var stateId = el.getAttribute("id");
        var wordState = document.querySelector("[data-state='" + stateId + "']");
        el.classList.add("on");
        wordState.classList.add("on");
        document.getElementById("info-box").style.display = "block";
        getcurrentState(stateId);
    }
    catch (ex) {
        console.log(ex);
    }
}
wordStates.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
        addOnFromList(el);
    });
    el.addEventListener("mouseleave", function () {
        removeAllOn();
    });
    el.addEventListener("touchstart", function () {
        removeAllOn();
        addOnFromList(el);
    });
});
svgStates.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
        addOnFromState(el);
    });
    el.addEventListener("mouseleave", function () {
        removeAllOn();
    });
    el.addEventListener("touchstart", function () {
        removeAllOn();
        addOnFromState(el);
    });
    // el.addEventListener("mousemove", function(e) {
    //    removeAllOn();
    // });
});
$(document).mousemove(function (e) {
    $('#info-box').css('top', e.pageY - $('#info-box').height() + 380);
    $('#info-box').css('left', e.pageX - ($('#info-box').width()) / 2);
}).mouseover();
var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (ios) {
    $('a').on('click touchend', function () {
        var link = $(this).attr('href');
        window.open(link, '_blank');
        return false;
    });
}
function getcurrentState(id) {
    var state = document.getElementById("statName");
    switch (id) {
        case 's1':
            state.innerHTML = "Нур-Султан";
            break;
        case 's2':
            state.innerHTML = "Алматы";
            break;
        case 's3':
            state.innerHTML = "Шымкент";
            break;
        case 's4':
            state.innerHTML = "Акмолинская область";
            break;
        case 's5':
            state.innerHTML = "Актюбинская область";
            break;
        case 's6':
            state.innerHTML = "Алматинская область";
            break;
        case 's7':
            state.innerHTML = "Атырауская область";
            break;
        case 's8':
            state.innerHTML = "Восточно-Казахстанская область";
            break;
        case 's9':
            state.innerHTML = "Жамбылская область";
            break;
        case 's10':
            state.innerHTML = "Западно-Казахстанская область";
            break;
        case 's11':
            state.innerHTML = "Карагандинская область";
            break;
        case 's12':
            state.innerHTML = "Костанайская область";
            break;
        case 's13':
            state.innerHTML = "Кызылординская область";
            break;
        case 's14':
            state.innerHTML = "Мангистауская область";
            break;
        case 's15':
            state.innerHTML = "Павлодарская область";
            break;
        case 's16':
            state.innerHTML = "Северо-Казахстанская область";
            break;
        case 's17':
            state.innerHTML = "Туркестанская область";
            break;
        default:
            state.innerHTML = " ";
            break;
    }
}
function deleteDiv(id){

  return 
}
function makeList(litsD,id,check) {
    document.getElementById(id).classList.remove('year');
    // Establish the array which acts as a data source for the list
    let listData = litsD,
    
    // Make a container element for the list
    listContainer = document.createElement('div'),
    
    // Make the list
    listElement = document.createElement('ul'),
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = listData.length,
    listItem,
    i;
    
    // Add it to the page
    
    document.getElementById(id).appendChild(listContainer);
    document.getElementById(id).classList.add('year');
    listContainer.appendChild(listElement);

    for (i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        listItem = document.createElement('li');
        listItem.classList.add(check==true ? 'yearList': 'monthList');
        if(check){
          if (i === numberOfListItems - 1) {
              listItem.classList.add('current');
            }
        }
        if(!check){
          // var today=new Date();
          // if (litsD[litsD.length-1] == today.getFullYear().toString()){

            
          // }
        

        }
        // Add the item text
        listItem.innerHTML = listData[i]+`<span class="${check==true ? 'dot' : 'dotM'}"></span>`;

        // Add listItem to the listElement
         
        listElement.appendChild(listItem);
          
    }
    document.getElementById(id).appendChild(document.createElement('hr'));

}

$( document ).ready(function() {

  $('.yearList').click(function(e) 
   { 
      console.log(e.target.value);
      $('li.yearList.current').removeClass('current');
      $(this).closest('li').addClass('current');

      makeList(getDateArray(),'yearMain',true);

   });


   $('.monthList').click(function(e) 
   {
      console.log(e);
      $('li.monthList.current').removeClass('current');
      $(this).closest('li').addClass('current');
      makeList(getTotalMonth(),'monthMain',false);
   });
   
});
