var SPREADSHEET_ID_AND_TAB = "1S0YJZieMiBcaJoaCjybX5x4nNuIvpQW2LUnP6f-0jMo/1";
/* spreadsheet for portfolio/stream loaded, this is using the formatted sheet /1 */


$(document).ready(function () {
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
    
    console.log(data);
    
data.reverse().forEach(function (row, index) {

  let moreLink = "";

  if (row.link && row.link.trim() !== "") {
    moreLink = `<p><a href="${row.link}" target="_blank">more</a></p>`;
  }

  let div = $(`<div class="item"> 
    <h4>re: ${row.topic}</h4>
    <p>${row.post}</p>
    ${moreLink}
    <br>
    <p>${row.Timestamp}</p> 

  </div>`).appendTo("#content");

    });
  });
});

