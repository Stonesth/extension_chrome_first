// chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//     let url = tabs[0].url;
//     // use `url` here inside the callback because it's asynchronous!
    


//     let texte = ;
//     alert(texte);
// });

chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    alert(tablink);



});

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    console.log();

    alert(tabs[0].innerHTML);
  });