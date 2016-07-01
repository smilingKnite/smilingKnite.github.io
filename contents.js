// contents.js
// Tyler Mondragon
// April 26 2016

//icons
var leftImageTag = "<img src='icons/white-left.png' />\n"
var homeImageTag = "<img src='icons/white-waffle.png' />\n"
var rightImageTag = "<img src='icons/white-right.png' />\n"

//pages in order
var contents =
[ "karmicEye_0.html",
 "bankseyMonkey_1.html",
 "owlTattoo_2.html",
 "geoffry_3.html",
 "Waffles_4.html",
 "dreamState_5.html",
 "stenciledSeattle_6.html",
 "openedApple_7.html",
 "personalSuicideSquad_8.html",
 "deadAstronaut_9.html",
 "deadByPineapple_10.html",
 "rick_11.html",
 "tickTackBrockenShack_12.html",
 "noiseMaker_13.html",
 "resume_14.html",
 "adobeIcons_15.html",
 "basketball_16.html",
 "spiderman_17.html",
 "missionStatement_18.html"];


function previous (page) {
    var item = contents.indexOf(page);
    item--;
    item += contents.length;
    item %= contents.length;
    return contents[item];
}

function next (page) {
    var item = contents.indexOf(page);
    item++;
    item %= contents.length;
    return contents[item];
}

function makeImageLink (link, image) {
    return "<a href='" + link + "' />" + image + "</a>\n";
    
}

function makeNav () {
    var navHtml = " ";
    var myUrl = document.location.href.split('/');
    var myFile = myUrl[ myUrl.length-1 ];
    
    navHtml += makeImageLink (previous (myFile), leftImageTag);
    navHtml += makeImageLink ('index.html', homeImageTag);
    navHtml += makeImageLink (next (myFile), rightImageTag);
    
    document.getElementById ('nav').innerHTML = navHtml;
}
