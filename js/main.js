$(function () {

    // Pull JSON data from API url
    $.getJSON('https://api.myjson.com/bins/13uyap', function (data) {

        // Loop through API data and set <td> value to
        // applicable data in the dataset.
        $.each(data.incidents, function (i, incident) {
            var tableRow =
                "<tr>" +
                "<td>" + incident.Number + "</td>" +
                "<td>" + incident.Caller + "</td>" +
                "<td>" + incident.Priority + "</td>" +
                "<td>" + incident.Contact + "</td>" +
                "<td>" + incident.Category + "</td>" +
                "<td>" + incident.AssignmentGroup + "</td>" +
                "<td>" + incident.Updated + "</td>" +
                "<td>" + incident.ShortDescription + "</td>" +
                "</tr>"

            // Append tableRow to the body of the <table>
            $(tableRow).appendTo("#incident-table tbody");
        });
    }); //END .getJSON

});



$(function () {

    var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
    var customScroller;
    if (isIE11)
        customScroller = function () {
            $('thead th').css("left", -$("tbody").scrollLeft()); //if using IE11, fix the th element 
        };
    else
        customScroller = function () {
            $('thead').css("left", -$("tbody").scrollLeft()); //if not using IE11, fix the thead element
        };

    $('tbody').on('scroll', function (e) { //detect a scroll event on the tbody
        // Setting the thead left value to the negative valule of tbody.scrollLeft will make it track the movement
        // of the tbody element. Setting an elements left value to that of the tbody.scrollLeft left makes it maintain 
        // it's relative position at the left of the table.

        customScroller(); //fix the thead relative to the body scrolling
        $('thead').css("left", -$("tbody").scrollLeft()); //fix the thead relative to the body scrolling
        $('thead th:nth-child(1)').css("left", $("tbody").scrollLeft()); //fix the first cell of the header
        $('tbody td:nth-child(1)').css("left", $("tbody").scrollLeft()); //fix the first column of tdbody
    });

});

// // Find max height of the cell and set all td's to it. 
// var maxCellHeight = function () {
//     var cellHeight = '';
//     $('table td').each(function () {
//         cellHeight = Math.max($(this).height(), cellHeight);
//     }).height(cellHeight);

//     // Set all cells to biggestCell height
//     $('tbody tr td:nth-child(1)').height(cellHeight);

//     console.log(cellHeight);
// };

// maxCellHeight();