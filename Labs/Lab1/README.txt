README for Lab 1

Group Work Log:

Our first step was collecting all 200 articles to be displayed on the site.  The articles were collected from a 
variety of news platforms including NY Times, Yahoo News, and Apple News. These articles were presented in XML format. 
As JSON is simpler to work with, the news article data was converted from XML to JSON using an online converter. 
The next step was building a webpage to store the articles. To do this, we used HTML, CSS and Bootstrap.  
The final step actually involved displaying the news articles. To do this, an AJAX Get request was used to retrieve the 
JSON data in the “news.json” file. Next, in the “getsNewsArticles” function, we are looping through the JSON data and 
displaying 5 items at a time every 4 seconds. The five articles that are going to be displayed are saved in an 
array called “articlesForPage.” The last step is actually populating the page with the news data which is 
done in the “populatedPage” function. In this function, the article name, link and description are displayed in its 
respective location on the HTML page. 

Manya’s Work Log:

I gathered XML data from New York Times RSS feeds and converted it to JSON using an online converter. After 
finishing gathering all 200 articles, I validated the JSON code and corrected any errors that appeared. 
In terms of creativity, I helped with styling certain aspects such as adding a footer and various Google Fonts. 
Additionally, I added the date function to the top of the page.  



Helena's Work Log:
 For Lab 1, I assisted with gathering a portion of the 200 XML articles. Once I
 found them, I converted the XML articles to JSON and added the news items 
 to the news.json file. I found and converted the news articles during a
 Visual Studio Live Share.

 In addition, I helped with the creative aspect of the webpage for Lab 1.
 I moved the timestamp and added some stylistic elements (lines) to the
 index.html file. I also changed the date format using the toLocaleString()
 method.

 Development Process:
  During the entire process of the lab, I didn't get stuck with any specific
  part of it. I found that the work that I did for the lab to be very reasonable. 
  
  
  Simi's Work Log: 
  
  For Lab1 I also worked on gathering the 200 articles from XML and into the Json file. I did this on visual studio code using different RSS our team found. 
  This was very similar to a lab we had completed in web systems so it was okay. 
