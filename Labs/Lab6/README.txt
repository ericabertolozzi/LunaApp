Team Luna Lab 6 README

Instructions for Running the Application
----------------------------------------

1. Open one terminal and navigate to the node root directory (Labs/Lab6)
2. Run the npm install -g @angular/cli command, npm install mongodb, npm install fast-csv, npm install json2csv and then run the node server command
3. Open a second terminal and navigate to the angular root directory (Labs/Lab6/lab6)
4. Run npm install --save-dev @angular-devkit/build-angular
5. Run ng build --watch
6. Open a browser and navigate to localhost:3000
7. Go to each group member's page by pressing the button with their name in the top navbar

Individual Work Logs
--------------------

- Erica Bertolozzi (@ericabertolozzi)
For this lab, I created data for the Users collection in the luna database.
I made 7 users with varying ages and app modes. For my visualization,
I decided to use the age and app mode data to see how many users fall into each category
and the age ranges of users on the app, since that information is important for app developers.
I created the angular components for each group member so we can set up the lab more robustly this
time around. I struggled with connecting the angular front end to the node back end through the HTTP service,
but I got help from Dr. Callahan in office hours to set up my services correctly. I was also confused with how to
have the csv file download to the user's computer in the browser, so I used res.download(csv) to download the csv
file that I createds in the code earlier. I was able to get the file to show up in this directory (Lab6) but I could not 
get the download to show in the browser.

- Manya Trehan (@Manya14)
First, I created a collection called Cycle Tracking within the luna database. This collection
contains data for 10 users about the start date of their cycle, cycle length, period length, mood
and sleep. Second, I used the fast-csv module to create the CSV file from the database after the
button is clicked. There are two buttons that create two different CSV files. Both
CSV files are found in Labs/Lab6. The last step was to make visualizations which I used R to do. I
created a Pi chart to show the different moods people experience and a bar chart to show the frequency
of the different types of sleep. For creativity, I added CSS styling to make the page easier to
understand. I also added a message that appears after the button was clicked to create the CSV file.
I had difficulty making this work, but I was able to get it working after doing some online research
and adjusting the ts file.

Virginia Barnes
For this lab, I created data for the Articles collection in the luna database.
I was also confused with how to have the csv file download to the user's computer
in the browser, so I used res.download(csv) to download the csv file that is created
in the code earlier.
I tried to have two buttons on my main page, where clicking a button would show you
the prospective ETL's csv and visualization. I could not get the buttons to redirect, though.
I do not understand where the file goes after calling res.download, since
I did not figure out a way to set a path for every user's computer Downloads folder.

Simran Nambiar simrannambiar
I created a csv file of different users and whether or not they had certain symptoms while menstruating. I then used R to analyze the data to make 2 graphs. One showed the number of women who got cramps while menstruating, and the other showed headaches. Both showed that they got a lot, so now we can add more articles and products to their respective pages to help them with that. I had trouble trying to come up with how to make my csv file because I wasn't sure which was necessary information and which wasn't for what information I was trying to portrey.

- Lauren McAlarney (@mcalal)
I had to use the command "npm install --save-dev @angular-devkit/build-angular" after step 3 to make this lab work.
For this lab, I created a JSON file to upload to the Shopping collection in the luna database. I included 8 objects, of which were either type reusable, non reusable, or null (article). The hardest part of this lab for me was using RStudio. For some reason, importing the dataset did not work the same way as when we practiced in class. Customizing the barplot and histogram was also interesting to learn how to do.

Helena's Work Log: osullh
  For Lab 6, my main goal was to add Data Visualizations that would support the point that knowing more about menstruation and period-related
  symptoms will help individuals with managing periods. I added data to the Home Page collection in the luna database with 50 users based on
  the results of a recent study on menstruation.

  For Part 1, I created two frontend objects that query the Home Page database for the Pain Onset vs. Menarche data and all the Home Page data,
  perform an ETL action to convert the results of that query from JSON to CSV, and then produces a download of the CSV file.

  For Part 2, I created three data visualizations:
 	- Pain Onset vs. Menarche
    	This data visualization shows when individuals first feel the pain caused by a period with respect to their first menstrual period.
	- Pain Onset vs. Menstrual Flow
    	This data visualization shows when individuals first feel the pain caused by a period with respect to the beginning of the menstrual flow.
    - Effect of Periods on Performance/Absences of Individuals
	    This data visualization illustrates the relationship between school and social performances, and absenteeism of individuals on their periods.

  For Part 3, all three of my data visualizations are displayed when the frontend object is interacted with.

  During the entire process of the lab, I only really got stuck on getting the necessary information to populate the database with, but aside from
  that, I understood what to do. Overall, I found that the work that I did for the lab to be reasonable.

  For individual creativity, I added an additional data visualization pertaining to the school and social performances, and absenteeism of
  individuals on their periods.
