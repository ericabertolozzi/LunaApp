Team Luna Lab 4 README

Steps to Access Application:

Step 1: Run Angular -
cd LunaApp/Labs/Lab5/Lab4
Install the following:
npm install express --save
npm install --save-dev @angular-devkit/build-angular
ng serve

Step 2: Run Node - 
cd/LunaApp/Labs/Lab5
node server

API Description -
For the external API, we used the Spotify API.

Individual Work Logs
--------------------

Erica Bertolozzi (@ericabertolozzi):

Simran Nambiar (@simrannambiar)

Lauren McAlarney (@mcalal)

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

Manya Trehan (@Manya14)
