// Display the current day at the top of the calender when a user opens the planner.

// Present timeblocks for standard business hours when the user scrolls down.

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page

$(document).ready(function() {
    // Function to display the current day at the top of the calendar
    function displayCurrentDay() {
        var currentDay = dayjs().format('dddd, MMMM D, YYYY');
        $('.dayTime').text(currentDay);
    }

    // Call functions to initialize the page
    displayCurrentDay();

    // Event listener for save buttons
    $('.saveBtn').on('click', saveEvent);
});
