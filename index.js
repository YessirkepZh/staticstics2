// Import stylesheets
import './style.css';
var wordStates = document.querySelectorAll(".list-of-states li");
var svgStates = document.querySelectorAll("#states > *");
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
    $('#info-box').css('top', e.pageY - $('#info-box').height() - 30);
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