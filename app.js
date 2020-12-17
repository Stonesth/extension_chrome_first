$('#click').click(function(){
    chrome.tabs.create({url : 'https://protime.myprotime.eu/mobile'})
});
var notification = new Notification('Tuto', {
    icon : 'img/number_1.png',
    body : 'Une petite notification sympa'
})

$('#hours').click(function(){
    chrome.tabs.create({url : 'https://protime.myprotime.eu/mobile'})
});