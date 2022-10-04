$("#calendar").evoCalendar({
    calendarEvents: [{
        id: 'bHay68s', // Event's ID (required)
        name: "New Year", // Event name (required)
        date: "January/1/2021", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
    }, {
        id: 'aIke89s',
        name: "Vacation Leave",
        date: ["January/13/2021", "January/15/2021"], // Date range
        description: "Vacation leave for 3 days.", // Event description (optional)
        type: "event",
    }, {
        id: 'Break',
        name: "Spring Break",
        date: ["March/15/2021", "March/19/2021"],
        type: "break",
        description: "Spring Break",
        everyYear: true
    }],
});


//allows the user to add an event by choosing a name and an option for a range of dates
function addEvent() {
    let eventName = prompt("Choose Event Name")
    var answer = window.confirm("Do you want to add a range of dates");

    if (answer) {
        let eventDate = prompt("Select a Date");
        let eventEndDate = prompt("Add an End Date")
        $("#calendar").evoCalendar('addCalendarEvent', [{
            id: eventName,
            name: eventName,
            date: [eventDate, eventEndDate],
            type: "event",


        }]);
        console.log("yes");

    } else {
        let eventDate = prompt("Select a Date");

        $("#calendar").evoCalendar('addCalendarEvent', [{
            id: eventName,
            name: eventName,
            date: eventDate,
            type: "event",

        }]);

    }
}

//when we click on event and remove event it allows us to removes the selected event
function removeEvent() {
    let currentEvent = $("#calendar").evoCalendar('getActiveEvents', ); // -> returns a object
    let calenderEventID = currentEvent[0]['id'];
    console.log(calenderEventID);
    $("#calendar").evoCalendar('removeCalendarEvent', [calenderEventID]);
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
/**
 * Themes
 */

//these change the themes to default
$("#default").click(function() {
    $("#calendar").evoCalendar('setTheme', 'Default');
    document.getElementById("addEvent").style.backgroundColor = "rgb(135, 115, 193)";
    document.getElementById("removeStuff").style.backgroundColor = "rgb(135, 115, 193)";
    document.getElementById("navBar").style.backgroundColor = "rgb(135, 115, 193)";
    document.getElementById("navBar2").style.backgroundColor = "rgb(135, 115, 193)";


});
//changes the theme to orange
$("#orange").click(function() {
    $("#calendar").evoCalendar('setTheme', 'Orange Coral');
    document.getElementById("addEvent").style.backgroundColor = "rgba(255, 153, 102, 0.65)";
    document.getElementById("removeStuff").style.backgroundColor = "rgba(255, 153, 102, 0.65)";
    document.getElementById("navBar").style.backgroundColor = "rgba(255, 153, 102, 0.65)";
    document.getElementById("navBar2").style.backgroundColor = "rgba(255, 153, 102, 0.65)";



});
//changes to a darker theme
$("#dark").click(function() {
    $("#calendar").evoCalendar('setTheme', 'Midnight Blue');
    document.getElementById("removeStuff").style.backgroundColor = "rgb(34, 40, 49)";
    document.getElementById("addEvent").style.backgroundColor = "rgb(34, 40, 49)";
    document.getElementById("navBar").style.backgroundColor = "rgb(34, 40, 49)";
    document.getElementById("navBar2").style.backgroundColor = "rgb(34, 40, 49)";


});
//changes to blue
$("#blue").click(function() {
    $("#calendar").evoCalendar('setTheme', 'Royal Navy');
    document.getElementById("removeStuff").style.backgroundColor = "rgb(33, 101, 131)";
    document.getElementById("addEvent").style.backgroundColor = "rgb(33, 101, 131)"
    document.getElementById("navBar").style.backgroundColor = "rgb(33, 101, 131)"
    document.getElementById("navBar2").style.backgroundColor = "rgb(33, 101, 131)"

});