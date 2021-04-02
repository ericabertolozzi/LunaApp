Team Luna Lab 5 README

Steps to Access Application:

Step 1: Run Angular in one terminal -
cd LunaApp/Labs/Lab5/Lab4
Install the following:
npm install express --save
npm install --save-dev @angular-devkit/build-angular
ng serve

Step 2: Run Node in a second terminal - 
cd/LunaApp/Labs/Lab5
node server

Step 3: Open a browser and navigate to localhost:4200. You will see buttons to direct you to each member's front end page.

API Description -
For the external API, we used the Spotify API.

Individual Work Logs
--------------------

Erica Bertolozzi (@ericabertolozzi):
For Part 0, I created the schema for the database and then transformed the data to follow the schema. I used JSON to rewrite the data to match the same schema. I did not find an online tool to help with this. Next, I wrote validation for the schema in MongoDBCompass to give a warning if the main attributes were not present in new data.
For Part 1, I made my HTML page have a button to trigger the GET request for data. My idea was to write a query getting all of the songs in the database with a genre of Pop, and display them in a list on the front end. I wrote a simple HTML list structure for this, and the code to make this query execute and retrieve the correct data from the database. I struggled with figuring out how to write the query and execute it, but I found MongoDB documentation that explained it. I also struggled with building the HTML output and variable scoping. I tried to build a string of the data based on what the cursor.each function returned, but the variables outside of the function were never modified. So I had to just nest everything in the function. This same error appeared in Part 2 so I just nested all the variables in innermost scopes.
For Part 2, my idea was to use the Spotify getAlbumTracks API call to get the first song from an album that the user entered into an HTML form and add that song and its respective information to the database. The getAlbumTracks function requires an album ID that Spotify creates for each album, so I struggled with figuring out how to get this ID value. I had to call the Spotify searchAlbums function to obtain the ID given an album name. Once I got these, I was able to gain all of the other information from the array. Then I inserted the data to the database using code found online.
To access my front-end, click on the "Erica" button on the home page at localhost:4200. You will see two buttons: one for part 1 and a text box with a form for part 2. For part 1, you will see direct output on the next page after clicking the button. For part 2, refer to the console for viewing success messages about inserting data into the database.

Simran Nambiar (@simrannambiar)
For Part 0, I uploaded 10 songs from Spotify into the collection. We initially each did 100 songs but the Professor said that would make our database too big. 
For Part 1, I searched through the database for songs that had the genre 'Country' and took those top Country songs and printed them to my own HTML page. 
For Part 2, I was kind of confused but I tried to take those Country songs, and search through Spotify's API and print those artists songs to the top tracks page. I don't think this works, because it threw a lot of errors. 

Lauren McAlarney (@mcalal):
For Part0, I uploaded 10 documents from Spotify into the collection.
For Part1, I edited server js from lab 4 and created GETs for everyone to their own respective html files. I then output the list of artists from the collection.
I did not get to Part 2, I unexpectedly started receiving errors saying that my token had expired, although that was not the case for anyone else. I had not changed the previous code from lab 4, so I could not figure out why this was the case. 

Virginia Barnes (@barnesv17):
For Part0, I setup the database in MongoDB by creating and sharing a cluster with
the rest of the team.

For Part1, I began by connecting our MongoDB database to our Node server. The
password to the database contained '@' which had to be url encoded.
My next step was to pull all documents/objects from the database and display them on the frontend.
I do not know an easy way to update HTML using Node, so I hardcode/update my HTML
in the server.js file and edit/resend all the HTML whenever the page needs updating.
My webpage takes all of the names of artists found in the database, asks Spotify API
to send back a photo of each artist, and then the frontend displays a collage of all the artists
in the database. The page takes a few moments to load.

For Part2, I created a form where the user can enter any name of an artist. Node
will search for this artist using the Spotify API, gather all necessary information
on that artist, and add them to our database. Then, the page will refresh, and if everything
worked, the new artist should appear in the collage and in the database. Again, the page
takes a few moments to load.

If any errors occur when displaying or adding an artist, the console will say.

Helena's Work Log: (@osullh)
 For Lab 5, I helped with part 0, by helping devise a schema for our data, 
 transforming the raw data into the schema and then putting the transformed
 data into the Lab5 database. 

 For Part 1, my webpage displays a sorted list of all the songs/tracks within
 the database in Alphabetical order.

 For Part 2, my webpage takes in an input of an albumn name, calls the API to
 populate it with the correct data, and then inserts it into the lab5 database.

 During the entire process of the lab, I got stuck on a couple of different aspects
 of it. The the initial set-up for part 0 of the lab wasn't too bad, but I did
 struggle on parts 1 and 2. I kept getting a lot of error messages, and half the
 time the get and post functions stopped working. I kept getting connection
 issue errors, and it was very difficult to test the lab as a result. Overall, I 
 found the lab to be quite difficult at times as my connection to the lab5 database
 was causing issues for me.

 For individual creativity, I added a HTML/CSS animated floating box background
 to my personal HTML page (helena.html).

Manya Trehan (@Manya14) 
Part 0 - In this part, I added 10 documents to the database from a JSON file that contains
information related to artist, album, and track name. 

Part 1 -In this part, I displayed the database contents on the page. I first connected to the
database through the defined URL and then connected to the ‘transformed’ collection. I then used
the find function to select the documents in the 'transformed' collection that contain Artist Name, 
Track Name, and Album Name.I then added all these documents to a list and printed it out. 
The one problem I faced in this partwas that I was using res.send twice in one request.
One was to send the file and the second wasto send the output. In order to fix this, 
I simply split it into different two different routes.

Part 2 -In this part, users are able to add to the database. A form is created on the HTML page
and the user can insert an artist, track, album and date. All fields are required. Each form input
was then saved to its respective variable using req.body.  When the user submits the form, a new
document will get added to the database. 

For creativity, the part 1 database can be displayed after the user clicks the “display database”
button on the main page. The benefit of doing this is so the page is no so cluttered and all the
information is spread out. I also added CSS to both the main page as well as the different route
pages to make it look nice for the user. 
