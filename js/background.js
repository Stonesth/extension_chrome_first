chrome.webNavigation.onCompleted.addListener(function(){
    // alert("background");
    // $('body').append('<style>.thisHasGotHref {color: white!important;background: black!important;}</style>');


    // Test to find the text Acheter et vendre des cryptomonaies
    // document.addEventListener('DOMContentLoaded', function() {
    //     const bar = document.getElementById("root");
    //     alert(bar.id);
    // });
    // var str = document.getElementById("root").innerHTML; 
    // var res = str.replace("Acheter et vendre des cryptomonaies", "W3Schools");
    // document.getElementById("root").innerHTML = res;

    // inserts a script into your tab content
    // chrome.tabs.executeScript(null, {

    //     // the script will click the button into the tab content
    //     code: "alert(document.getElementById('root').innerHTML);"
    // });
    


}, {url : [{urlMatches: "coinbase.com"}]});




chrome.webNavigation.onCompleted.addListener(function(){
    // chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    //     // console.log(tabs[0]);
    //     // const bar = tabs[0].getElementById("root");
    //     // alert(bar.id);
    //     var tabURL = tabs[0].url;
    //     // alert(tabURL);

    //     // var text = tabs[0].innerHTML;
    //     // alert(text);
    //   });
    chrome.tabs.executeScript( {  
    code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code  
    }, function(selection) {  
    // alert(selection);  
    });
}, {url : [{urlMatches: "https://www.coucoushop.be/"}]});

function modifyDOM() {  
    //You can play with your DOM here or check URL against your regex  

    // document.body.style.background = "red"

    document.body.innerHTML = document.body.innerHTML.replace('Coucou', 'Gwendoline');
    

    var div = document.createElement( 'div' );
    //append all elements
    document.body.appendChild( div );
    // div.appendChild( btnForm );
    // btnForm.appendChild( btn );
    //set attributes for div
    div.id = 'myDivId';
    div.style.position = 'fixed';
    div.style.top = '50%';
    div.style.left = '50%';
    div.style.width = '100%';   
    div.style.height = '100%';
    div.style.backgroundColor = 'red';


    return true;  
}  
// 

