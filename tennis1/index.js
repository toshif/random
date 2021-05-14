$(document).ready(function () {
    var links = "";
    var saturday = new Date();
    while (saturday.getDay() != 6) { // 6: Saturday
        saturday.setDate(saturday.getDate() + 1);
    }

    var dates = [saturday, new Date(), new Date(), new Date(), new Date(), new Date()];
    dates[1].setDate(saturday.getDate() + 1);
    dates[2].setDate(saturday.getDate() + 7);
    dates[3].setDate(saturday.getDate() + 8);
    dates[4].setDate(saturday.getDate() + 14);
    dates[5].setDate(saturday.getDate() + 15);
    var locations = ['AvondalePark', 'KensingtonMemorialPark', 'HollandPark2'];
    dates.forEach(function (date, idx1) {
        links += '<h4>' + date.toDateString() + '</h4>'
        date_str = date.toISOString().substring(0, 10)
        locations.forEach(function (loc, idx2) {
            href = 'https://clubspark.lta.org.uk/' + loc + '/Booking/BookByDate#?date=' + date_str + '&role=member';
            links += '<p><a href="' + href + '">' + loc + '</a></p>';
        });
    });
    $("#my-links").html(links);
});
