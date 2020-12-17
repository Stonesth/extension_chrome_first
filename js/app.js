
var notification = new Notification('Tuto', {
    icon : 'img/number_1.png',
    body : 'Une petite notification sympa'
})

$('#hours').click(function(){
    chrome.tabs.create({url : 'https://nn.myprotime.eu/#/calendar/person/113864/month/daydetail/113864/2020-12-17'})
});

$('#click').click(function(){
    chrome.tabs.create({url : 'https://www.youtube.com'})
});