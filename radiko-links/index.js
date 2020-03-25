const MY_FAVORITES = [
    { 'station': 'FMT', 'hour': '0000', 'name': '---- Tokyo FM ----' },
    { 'station': 'FMT', 'hour': '0600', 'name': 'One Morning' },
    { 'station': 'FMT', 'hour': '0900', 'name': 'Blue Ocean' },
    { 'station': 'FMT', 'hour': '1130', 'name': 'Love Connection' },
    { 'station': 'FMT', 'hour': '1500', 'name': 'The Trad' },
    { 'station': 'FMT', 'hour': '0000', 'name': 'Jet Stream' },
    { 'station': 'FMT', 'hour': '0000', 'name': '---- J WAVE ----' },
    { 'station': 'FMJ', 'hour': '0600', 'name': 'J-WAVE Tokyo Morning Radio' },
    { 'station': 'FMJ', 'hour': '0900', 'name': 'Step One 1' },
    { 'station': 'FMJ', 'hour': '1000', 'name': 'Step One 2' },
    { 'station': 'FMJ', 'hour': '1300', 'name': 'Good neighbors 1' },
    { 'station': 'FMJ', 'hour': '1500', 'name': 'Good neighbors 2' },
];

const wdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

$(document).ready(function () {
    var links = "";
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var dates = [new Date(), yesterday];
    dates.forEach(function (target_date, idx1) {
        links += '<li>' + wdays[target_date.getDay()] + ' ' + target_date.getUTCDate() + '</li>'
        MY_FAVORITES.forEach(function (item, index) {
            var today = target_date;
            var tmonth = ("0" + (today.getMonth() + 1)).slice(-2);
            var tdate = ("0" + today.getDate()).slice(-2);
            var today_str = '' + today.getUTCFullYear() + tmonth + tdate;
            href = 'http://radiko.jp/#!/ts/' + item['station'] + '/' + today_str + item['hour'] + '00';
            links += '<li><a href="' + href + '">' + item['station'] + ' ' + item['hour'] + ' ' + item['name'] + '</a></li>';
        });
    });
    $("#my-links").html(links);
});
