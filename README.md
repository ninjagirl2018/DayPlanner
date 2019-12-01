This application is a small calendar/scheduler intended for one user.

The application lists out all the working hours of the day and uses the moments.js library to  manage day and time (among other things).  The application is set to make an API call to update the date and time every minute.

The scheduler will then compare the current date and time against each time slot in the calendar, and color codes the calendar according to whether that calendar hour is in the past, is present, or is in the future.

The scheduler uses javascript to process the conditions under which each time slot will change color, and allows for user input to create their personal calendar events and saves them to local storage and displays in the scheduler.

Limitations:  the calendar is functional only for the present day, from 9am to 6pm inclusive, after which time the colors are cleared out and the user will have to wait until 9am the next calendar day to interact with it again.

The calendar is styled with the bootstrap framework and additional CSS.  A link to the deployed application is listed here:

https://ninjagirl2018.github.io/DayPlanner/


