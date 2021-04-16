Team Luna Lab 6 README

Instructions for Running the Application
----------------------------------------

1. Open one terminal and navigate to the node root directory (Labs/Lab6)
2. Run the npm install -g @angular/cli command and then run the node server command
3. Open a second terminal and navigate to the angular root directory (Labs/Lab6/lab6)
4. run ng build --watch 
*** THIS MAY NOT WORK BECAUSE I DONT REMEMBER HOW TO SET UP FROM SCRATCH ***
5. Open a browser and navigate to localhost:3000
6. Go to each group member's page by pressing the button with their name in the top navbar

Individual Work Logs
--------------------

- Erica Bertolozzi (@ericabertolozzi)
For this lab, I created data for the Users collection in the luna database. I made 7 users with varying ages and app modes. For my visualization, I decided to use the age and app mode data to see how many users fall into each category and the age ranges of users on the app, since that information is important for app developers. I created the angular components for each group member so we can set up the lab more robustly this time around. I struggled with connecting the angular front end to the node back end through the HTTP service, but I got help from Dr. Callahan in office hours to set up my services correctly. I was also confused with how to have the csv file download to the user's computer in the browser, so I used res.download(csv) to download the csv file that I createds in the code earlier. I do not understand where the file goes after calling res.download, since I did not figure out a way to set a path for every user's computer Downloads folder.
