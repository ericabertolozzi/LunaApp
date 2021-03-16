Team Luna Lab 4 README

API Description -

For the external API, we used the Spotify API. A clientid and clientsecret id were used to get access to
this API. A GET request was used to display the top three songs of an artist input by the user. This data was 
displayed on the /v1/singers/returnsong route.  A POST request was used to simply display the 
artist the user entered in the form. This data was displayed on /v1/singer page. There are two 
forms for each of these respective calls on the homepage. In addition to the GET and POST request, 
a DELETE and PUT request were also implemented. 



Individual Work Logs
--------------------

Erica Bertolozzi (@ericabertolozzi):
For this lab, I provided support for PUT and DELETE requests in the server.js file. 
For creativity, in one of the paths for making a delete request, I added regular expression (regex) 
middleware for typing in a user id that ends in the letter 'a' with any amount of letters before.

Simran Nambiar (@simrannambiar)
Added css and styling to homepage 

Lauren McAlarney (@mcalal)
Added css and styling when user inputs artist name to get their top tracks
