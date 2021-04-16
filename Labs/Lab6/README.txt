Team Luna Lab 6 README

Instructions for Running the Application
----------------------------------------

1. Open one terminal and navigate to the node root directory (Labs/Lab6)
2. Run the npm install -g @angular/cli command, npm install mongodb, npm install fast-csv, npm install json2csv and then run the node server command
3. Open a second terminal and navigate to the angular root directory (Labs/Lab6/lab6)
4. run npm install --save-dev @angular-devkit/build-angular
5. run ng build --watch
6. Open a browser and navigate to localhost:3000
7. Go to each group member's page by pressing the button with their name in the top navbar

Individual Work Logs
--------------------

- Erica Bertolozzi (@ericabertolozzi)
For this lab, I created data for the Users collection in the luna database. I made 7 users with varying ages and app modes. For my visualization, I decided to use the age and app mode data to see how many users fall into each category and the age ranges of users on the app, since that information is important for app developers. I created the angular components for each group member so we can set up the lab more robustly this time around. I struggled with connecting the angular front end to the node back end through the HTTP service, but I got help from Dr. Callahan in office hours to set up my services correctly. I was also confused with how to have the csv file download to the user's computer in the browser, so I am still trying to figure that out.

Manya Trehan (@Manya14)

First, I created a collection called Cycle Tracking within the luna database. This collection
contains data for 10 users about the start date of their cycle, cycle length, period length, mood
and sleep. Second, I used the fast-csv module to create the CSV file from the database after the
button is clicked. The entire database except the auto created id is present in the CSV file. The
CSV file is found in Labs/Lab6. The last step was to make visualizations which I used R to do. I
created a Pi chart to show the different moods people experience and a bar chart to show the frequency
of the different types of sleep. For creativity, I added CSS styling to make the page easier to
understand. I also added a message that appears after the button was clicked to create the CSV file.
I had difficulty making this work, but I was able to get it working after doing some online research
and adjusting the ts file.
