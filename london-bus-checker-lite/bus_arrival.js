// http://localhost:63342/chelper1/notes/bus/bus_arrival.html?line=391&stopPointId=490007057S

var stopPointId;
var busLine;

$(document).ready(function(){
  stopPointId = getUrlParameter("stopPointId");
  busLine = getUrlParameter("line");

  $("#button_refresh").click(refresh);

  // every 10 seconds
  refresh();
  setInterval(refresh, 10 * 1000);
});

function refresh() {
  $.get( "https://api.tfl.gov.uk/StopPoint/" + stopPointId + "/arrivals", function( data ) {
    var rows = "";
    var stopName = "";
    var platformName = "";
    // var timestamp = "";
    var refreshedAt = getHourMinSec(new Date());

    data.sort(function(a, b) {
      return a["timeToStation"] - b["timeToStation"];
    });

    for (var i in data) {
      var obj = data[i];

      if ( obj.lineId != busLine ) {
        continue;
      }

      stopName = obj["stationName"];
      platformName = obj["platformName"];
      // timestamp = getHourMinSec(new Date(obj["timestamp"]));

      var row = "<tr>";
      row += "<td>" + obj["lineId"] + "</td>";
      row += "<td>" + obj["destinationName"] + "</td>";
      row += "<td><b>" + (obj["timeToStation"] / 60).toFixed(1) + "</b></td>";

      var date = new Date(obj["expectedArrival"]);
      row += "<td>" + getHourMin(date) + "</td>";
      row += "</tr>"

      rows += row;
    }

    $( "#stopName" ).text( stopName + " - Stop " + platformName + " - Line " + busLine);
    // $( "#updatedAt" ).text( timestamp );
    $( "#refreshedAt" ).text( refreshedAt );
    $( "#loaded").fadeIn();
    setTimeout(function() {$( "#loaded").fadeOut("slow");}, 1000);
    $( "#table_rows" ).html( rows );
    $( "#button_refresh" ).removeClass("active");
  });
}

function getHourMin(date) {
  var dateStr = date.getHours() + ":";
  if ( date.getMinutes() < 10 ) {
    dateStr += "0";
  }
  dateStr += date.getMinutes();

  return dateStr;
}

function getHourMinSec(date) {
  var dateStr = getHourMin(date) + ":";
  if ( date.getSeconds() < 10 ) {
    dateStr += "0";
  }
  dateStr += date.getSeconds();

  return dateStr;
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};