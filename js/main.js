$(function () { 

    $.getJSON('https://api.myjson.com/bins/o81mx', function (data) {

        $.each(data.incidents, function (i, incident) {
            var tblRow =
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

            $(tblRow).appendTo("#incident-data tbody");
        });
    });
});