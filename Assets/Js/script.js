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
 //  generate time blocks for standard business hours
 function generateTimeBlocks() {
    var workdayStart = 9; // (9 AM)
    var workdayEnd = 17; //  (5 PM)

    var schedulerDiv = $('#scheduler');
    var currentTime = dayjs().hour(); // Current hour

    for (var i = workdayStart; i <= workdayEnd; i++) {
        var timeBlock = $('<div class="row align-items-center"></div>');
        var hourDiv = $('<div class="hour col-md-1"></div>').text(dayjs().hour(i).format('h A'));
        var descriptionTextarea = $('<textarea class="description form-control col-md-10"></textarea>');

        // Set different classes based on past, present, or future hour
        if (i < currentTime) {
            descriptionTextarea.addClass('past');
        } else if (i === currentTime) {
            descriptionTextarea.addClass('present');
        } else {
            descriptionTextarea.addClass('future');
        }

        var saveBtn = $('<button class="saveBtn btn btn-primary col-md-1"><i class="fa fa-save"></i></button>');

        timeBlock.append(hourDiv, descriptionTextarea, saveBtn);
        schedulerDiv.append(timeBlock);
    }
}


    // Function to save events to local storage
    function saveEvent() {
        var hour = $(this).siblings('.hour').text();
        var event = $(this).siblings('.description').val();
        localStorage.setItem(hour, event);
    }


    // Call functions to initialize the page
    displayCurrentDay();
    generateTimeBlocks();


    // Event listener for save buttons
    $('.saveBtn').on('click', saveEvent);
});
