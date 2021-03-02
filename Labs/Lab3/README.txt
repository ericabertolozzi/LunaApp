Helena's Work Log: osullh
 For Lab 3, I helped with the initial setup of the Spotify API during LiveShare.
 I also added a couple of HTML/CSS elements to the landing page as well.

Erica's Work Log: ericabertolozzi
I helped with obtaining the keys to access the Spotify API through my personal Spotify account.
I also added a route parameterized URL to our application so users can type in any artist name in
the URL and see their top tracks. I was mostly confused by how our application is supposed to offer an
API while also using the external Spotify API.

Manya’s Work Log: Manya14
I helped with creating the form where the user would input an artist name. Through a POST call, I was
able to save this form data into a variable that would then be fed into the Spotify API call. I
also worked on the HTML/CSS for the landing page. I was mostly confused on how write the correct
route for the Get and Post request so it would print the correct information on the right page.

Lauren's Work Log: mcalal
I helped with setting up the Spotify Web API and retrieving the access token on the server js file.
When setting up the access token, Virginia and I were confused on how to retrieve the correct access
token. After reaching out to Dr. Callahan, we realized that we had to set up a small time delay,
since it was accessing the token too quickly before the token could refresh.

Virginia's Work Log: barnesv17
I helped set up the initialization of our connection with the Spotify API.
We realized the Spotify access tokens expire after a certain amount of time,
therefore our code needed a new access token every time the code ran. Coding
this took a while to figure out. I was testing the new access code
before Spotify had returned it, causing confusion. This issue was solved by
reaching out to Dr. Callahan and adding wait() statements before testing the
new access code.
