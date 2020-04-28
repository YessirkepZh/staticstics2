// Import stylesheets
import './style.css';

var wordStates = document.querySelectorAll(".list-of-states li");
var svgStates = document.querySelectorAll("#states > *");
var dataSource = {
"02.2014" : {
        "1" : {
            "OPV" : {
                "count" : "220103",
                "amount" : "61617882655"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "655",
                "amount" : "7366172"
            }
        },
        "2" : {
            "OPV" : {
                "count" : "344478",
                "amount" : "120466536416"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "8257",
                "amount" : "286796054"
            }
        },
        "3" : {
            "OPV" : {
                "count" : "320604",
                "amount" : "74676004977"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "618",
                "amount" : "11279739"
            }
        },
        "4" : {
            "OPV" : {
                "count" : "159628",
                "amount" : "69664613266"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "577",
                "amount" : "9051921"
            }
        },
        "5" : {
            "OPV" : {
                "count" : "356240",
                "amount" : "102049337034"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "1033",
                "amount" : "11308609"
            }
        },
        "6" : {
            "OPV" : {
                "count" : "250205",
                "amount" : "50029313035"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "935",
                "amount" : "6379998"
            }
        },
        "7" : {
            "OPV" : {
                "count" : "222567",
                "amount" : "81827929605"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "631",
                "amount" : "7745313"
            }
        },
        "8" : {
            "OPV" : {
                "count" : "403268",
                "amount" : "128745299218"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "1219",
                "amount" : "13876171"
            }
        },
        "9" : {
            "OPV" : {
                "count" : "143678",
                "amount" : "42987003371"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "452",
                "amount" : "5556407"
            }
        },
        "10" : {
            "OPV" : {
                "count" : "301329",
                "amount" : "93074422785"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "2071",
                "amount" : "27187858"
            }
        },
        "11" : {
            "OPV" : {
                "count" : "119993",
                "amount" : "79389413886"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "615",
                "amount" : "5411684"
            }
        },
        "12" : {
            "OPV" : {
                "count" : "276448",
                "amount" : "97913528145"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "11090",
                "amount" : "482531419"
            }
        },
        "13" : {
            "OPV" : {
                "count" : "215657",
                "amount" : "56368543938"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "1189",
                "amount" : "10013481"
            }
        },
        "14" : {
            "OPV" : {
                "count" : "544351",
                "amount" : "111186467117"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "446",
                "amount" : "6412564"
            }
        },
        "15" : {
            "OPV" : {
                "count" : "867523",
                "amount" : "351643418686"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "4446",
                "amount" : "100839260"
            }
        },
        "16" : {
            "OPV" : {
                "count" : "348715",
                "amount" : "140598862161"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "1072",
                "amount" : "19906657"
            }
        },
        "17" : {
            "OPV" : {
                "count" : "1099",
                "amount" : "175897018"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "0",
                "amount" : "0"
            }
        },
        "18" : {
            "OPV" : {
                "count" : "133434",
                "amount" : "42889525081"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "432",
                "amount" : "9100314"
            }
        },
        "19" : {
            "OPV" : {
                "count" : "62807",
                "amount" : "30301171549"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "242",
                "amount" : "4692593"
            }
        }
    },
    "03.2014" : {
        "1" : {
            "OPV" : {
                "count" : "237467",
                "amount" : "73420881765"
            },
            "OPPV" : {
                "count" : "267",
                "amount" : "131008"
            },
            "DPV" : {
                "count" : "658",
                "amount" : "7569804"
            }
        },
        "2" : {
            "OPV" : {
                "count" : "360796",
                "amount" : "136778138969"
            },
            "OPPV" : {
                "count" : "177",
                "amount" : "90825"
            },
            "DPV" : {
                "count" : "8269",
                "amount" : "295148525"
            }
        },
        "3" : {
            "OPV" : {
                "count" : "341205",
                "amount" : "87324803048"
            },
            "OPPV" : {
                "count" : "1536",
                "amount" : "1640715"
            },
            "DPV" : {
                "count" : "623",
                "amount" : "11760961"
            }
        },
        "4" : {
            "OPV" : {
                "count" : "180554",
                "amount" : "99803356589"
            },
            "OPPV" : {
                "count" : "212",
                "amount" : "149200"
            },
            "DPV" : {
                "count" : "601",
                "amount" : "13199266"
            }
        },
        "5" : {
            "OPV" : {
                "count" : "374458",
                "amount" : "117743450215"
            },
            "OPPV" : {
                "count" : "2751",
                "amount" : "5408987"
            },
            "DPV" : {
                "count" : "1037",
                "amount" : "11559264"
            }
        },
        "6" : {
            "OPV" : {
                "count" : "260053",
                "amount" : "56230408310"
            },
            "OPPV" : {
                "count" : "302",
                "amount" : "438207"
            },
            "DPV" : {
                "count" : "939",
                "amount" : "6608152"
            }
        },
        "7" : {
            "OPV" : {
                "count" : "245067",
                "amount" : "103635355846"
            },
            "OPPV" : {
                "count" : "768",
                "amount" : "3489597"
            },
            "DPV" : {
                "count" : "640",
                "amount" : "7954817"
            }
        },
        "8" : {
            "OPV" : {
                "count" : "444169",
                "amount" : "160700578163"
            },
            "OPPV" : {
                "count" : "629",
                "amount" : "451367"
            },
            "DPV" : {
                "count" : "1256",
                "amount" : "14440477"
            }
        },
        "9" : {
            "OPV" : {
                "count" : "150552",
                "amount" : "48471178146"
            },
            "OPPV" : {
                "count" : "306",
                "amount" : "170862"
            },
            "DPV" : {
                "count" : "452",
                "amount" : "5709237"
            }
        },
        "10" : {
            "OPV" : {
                "count" : "313480",
                "amount" : "103443600912"
            },
            "OPPV" : {
                "count" : "2940",
                "amount" : "6716342"
            },
            "DPV" : {
                "count" : "2077",
                "amount" : "28142859"
            }
        },
        "11" : {
            "OPV" : {
                "count" : "177684",
                "amount" : "139306890615"
            },
            "OPPV" : {
                "count" : "543",
                "amount" : "10853907"
            },
            "DPV" : {
                "count" : "625",
                "amount" : "5762408"
            }
        },
        "12" : {
            "OPV" : {
                "count" : "295267",
                "amount" : "113067973970"
            },
            "OPPV" : {
                "count" : "2952",
                "amount" : "353242"
            },
            "DPV" : {
                "count" : "11094",
                "amount" : "494528489"
            }
        },
        "13" : {
            "OPV" : {
                "count" : "225512",
                "amount" : "63726419974"
            },
            "OPPV" : {
                "count" : "104",
                "amount" : "145582"
            },
            "DPV" : {
                "count" : "1190",
                "amount" : "10284311"
            }
        },
        "14" : {
            "OPV" : {
                "count" : "575422",
                "amount" : "126364764437"
            },
            "OPPV" : {
                "count" : "146",
                "amount" : "307588"
            },
            "DPV" : {
                "count" : "457",
                "amount" : "9409059"
            }
        },
        "15" : {
            "OPV" : {
                "count" : "960374",
                "amount" : "472605339197"
            },
            "OPPV" : {
                "count" : "618",
                "amount" : "1451850"
            },
            "DPV" : {
                "count" : "4548",
                "amount" : "115707279"
            }
        },
        "16" : {
            "OPV" : {
                "count" : "373433",
                "amount" : "177866951525"
            },
            "OPPV" : {
                "count" : "252",
                "amount" : "509336"
            },
            "DPV" : {
                "count" : "1080",
                "amount" : "21077396"
            }
        },
        "17" : {
            "OPV" : {
                "count" : "1249",
                "amount" : "217489159"
            },
            "OPPV" : {
                "count" : "0",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "0",
                "amount" : "0"
            }
        },
        "18" : {
            "OPV" : {
                "count" : "140837",
                "amount" : "48727812476"
            },
            "OPPV" : {
                "count" : "2006",
                "amount" : "1548044"
            },
            "DPV" : {
                "count" : "432",
                "amount" : "9317882"
            }
        },
        "19" : {
            "OPV" : {
                "count" : "69410",
                "amount" : "36592697770"
            },
            "OPPV" : {
                "count" : "12",
                "amount" : "0"
            },
            "DPV" : {
                "count" : "243",
                "amount" : "4821664"
            }
        }
    }
};

var months = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ];
const today = new Date();
var yearT = today.getFullYear().toString();
var monthT = (today.getMonth()+1).toString();
var indexMonth;
const lang = 0; // 0 - rus 1 - kaz

function getDateSource(date){ // data - format '02.2014'
  try{
    const myObj= JSON.parse(JSON.stringify(dataSource));
    const filtered = Object.keys(myObj)
      .filter(key => date.includes(key))
      .reduce((obj, key) => {
        obj = myObj[key];
        return obj;
      },{});
    return filtered;
  }
  catch (ex){
    console.error(ex);
  }
}

var curData = getDateSource('02.2014');

function getDataState(id){
  try{
    const filtered = Object.keys(curData)
        .filter(key => key.toString() ==id)
        .reduce((obj, key) => {
          obj = curData[key];
          return obj;
        },{});
    return filtered;
  }
  catch (ex){
    console.error(ex);
  }
}


function refreshData(){
    var str = pad(monthT,2)+'.'+yearT.toString();
   
    curData = getDateSource('02.2014');
}



function getDateArray(){
  const yearStart = 2013;
  const yearEnd = today.getFullYear();;
  var arr = [];
    while(yearStart < yearEnd+1){
      arr.push(yearStart++);
    }
  return arr 
}

function getTotalMonth(year){
  try{
      if (year==null || year == today.getFullYear().toString()){
        return months.slice(0,today.getMonth()+1);
      }
      else {
        return months;
      }
  }
  catch(e){
    console.log(e);
  }
}

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
    var opv_count = document.getElementById("opv_count");
    var opv_sum = document.getElementById("opv_sum");
    var oppv_count = document.getElementById("oppv_count");
    var oppv_sum = document.getElementById("oppv_sum");
    var dpv_count = document.getElementById("dpv_count");
    var dpv_sum = document.getElementById("dpv_sum");
    switch (id) {
        case 's1':
            state.innerHTML = lang == 0 ? "Нур-Султан" : "	Нұр-Сұлтан";
            let val = getDataState('1');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's2':
            state.innerHTML = "Алматы";
            let val = getDataState('2');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's3':
            state.innerHTML = "Шымкент";
            let val = getDataState('3');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's4':
            state.innerHTML = lang == 0 ? "Акмолинская область" :"Ақмола облысы";
            let val = getDataState('4');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's5':
            state.innerHTML = lang == 0 ? "Актюбинская область": "Ақтөбе облысы";
            let val = getDataState('7');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's6':
            state.innerHTML = lang == 0 ? "Алматинская область" : "Алматы облысы";
            let val = getDataState('6');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's7':
            state.innerHTML = lang == 0 ? "Атырауская область":"Атырау облысы";
            let val = getDataState('7');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's8':
            state.innerHTML = lang == 0 ? "Восточно-Казахстанская область" : "Шығыс Қазақстан облысы";
            let val = getDataState('8');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's9':
            state.innerHTML = lang == 0 ? "Жамбылская область" : "Жамбыл облысы";
            let val = getDataState('9');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's10':
            state.innerHTML = lang == 0 ? "Западно-Казахстанская область" : "Батыс Қазақстан облысы";
            let val = getDataState('10');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's11':
            state.innerHTML = lang == 0 ? "Карагандинская область" : "Қарағанды облысы";
            let val = getDataState('11');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's12':
            state.innerHTML = lang == 0 ? "Костанайская область" : "Қостанай облысы";
            let val = getDataState('12');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's13':
            state.innerHTML = lang == 0 ? "Кызылординская область" : "Қызылорда облысы";
            let val = getDataState('13');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's14':
            state.innerHTML = lang == 0 ? "Мангистауская область" : "Маңғыстау облысы";
            let val = getDataState('14');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's15':
            state.innerHTML = lang == 0 ? "Павлодарская область" : "Павлодар облысы";
            let val = getDataState('15');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's16':
            state.innerHTML = lang == 0 ? "Северо-Казахстанская область" : "Солтүстік Қазақстан облысы";
            let val = getDataState('16');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        case 's17':
            state.innerHTML = lang == 0 ? "Туркестанская область" : "Түркістан облысы";
            let val = getDataState('17');
            opv_count.innerHTML = parseFloat(val.OPV.count).toLocaleString();
            opv_sum.innerHTML = parseFloat(val.OPV.amount).toLocaleString();
            oppv_count.innerHTML = parseFloat(val.OPPV.count).toLocaleString();
            oppv_sum.innerHTML = parseFloat(val.OPPV.amount).toLocaleString();
            dpv_count.innerHTML = parseFloat(val.DPV.count).toLocaleString();
            dpv_sum.innerHTML = parseFloat(val.DPV.amount).toLocaleString();
            break;
        default:
            state.innerHTML = " ";
            break;
    }
}

function createYearList(){
  var yearArr = getDateArray();
  var main = $('#yearMain')
  var cList = $('ul.yearUl')
  $.each(yearArr, function(i)
  {
      cList.append(`<li class="yearList">${yearArr[i]}<span class="dot"></span></li>`);
      if (i === yearArr.length-1){
            $('.yearList').eq(i).addClass('current');
      }
  });
  cList.appendTo(main);
  main.append(`<hr id="hr1">`);
}

function createMonthList(date){
  var yearArr = getTotalMonth(date);
  var main = $('#monthMain')
  var cList = $('ul.monthUl')
  $.each(yearArr, function(i)
  {
    cList.append(`<li class="monthList">${yearArr[i]}<span class="dotM"></span></li>`);
        if(indexMonth){
          if (indexMonth > yearArr.length-1){
            $('.monthList').eq(yearArr.length-1).addClass('current');
            indexMonth = yearArr.length-1;
            refreshData();
            return;
          }
          else{
            $('.monthList').eq(indexMonth).addClass('current');
          }
        }
        else {
          if (i === yearArr.length-1){
            $('.monthList').eq(i).addClass('current');
            indexMonth = i;
            refreshData();
            return;
          }
        }

  });
  
  cList.appendTo(main);
  main.append(`<hr id="hr2">`);
}
 function pad(num, size){
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

$( document ).ready(function() {

  createYearList();
  createMonthList();

  $('.yearList').click(function(e) 
   { 
      try
        {
          $('.monthList').remove();
          $('#hr2').remove();
          createMonthList(e.target.innerText);
          $('.yearList.current').removeClass('current');
          $(this).closest('li').addClass('current');
          yearT = $(this).text();
          refreshData();
        }
      catch(e){
        console.log(e)
        }
  });
});

   $(document).on('click','li.monthList', function( event ) {
       try{
        event.preventDefault();
        $('.monthList.current').removeClass('current');
        $(this).closest('li').addClass('current');
          indexMonth = $(this).index();
          monthT = indexMonth +1;
          refreshData();
       }
       catch(e){
         console.error(e);
       }

});