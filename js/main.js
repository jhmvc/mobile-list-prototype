$(function () { 

    // Pull JSON data from API url
    $.getJSON('https://api.myjson.com/bins/o81mx', function (data) {

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
            $(tableRow).appendTo("#incident-data tbody");
        });
    });
});