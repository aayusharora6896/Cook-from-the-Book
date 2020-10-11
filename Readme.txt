---
Project Name: Cook from the Book
Creator Name: Ayush Arora
Guided by: Prof. Andrew Distasi
ISTE754 Project 1 Interactive Form Elements
---
Cook from the Book
Functionality
Cook from the Book is a one stop destination for your food thoughts. You will never have to think about what you should cook. We have you covered. 
Just select ingredients you have from the drop-down menus and we get you the most desired and delicious food recipes across America. SignUp to 
create a personal recipebook with all your favourite recipes saved in one location for your ease and to download the recipes.

Technical Features
o Dynamically creating form elements depending upon the answer of the previous question, no hardcoded select menus.
o New selection shows from making a previous select. No need to click a button.
o Minimal HTML(only used to define the header). No <select> in HTML, etc.
o Data separation from code. Seperate data.js file that stores all the information including the links of the images and pdfs.
o Allows for changing data files in depths of three select menus and different number of options for each previously selected value.
o Once the user has made all  their selections, the app displays pictures for the possible combination of ingredients. 
o Hovering on the image displays the dishes name and clicking on it displays the name of the dish with a greeting message. 
o Clicking also activates the download and save recipes options given you are SignedIn.
o Also displays the username, email, recipes saved dynamically from the localStorage. 
o Changing the value of any ingredients in the any of the selects works with the dynamic data.
o Reset button can be used to start over again at any time. Reset Button won't Sign you Out.
o Everything done with own CSS. No layout with tables or bootstrap used. Flex displays used within CSS.  
o Use of DHTML in JavaScript. All the content is created dynamically except the header with the logo, title and the Dark Mode/ Light mode toggler.
o Yes there's option to toggle between the Night Mode and the Light Mode. 
o JS Animations - 
    o The sun/ moon on the toggler turn around when hovered giving a cute animation effect.
    o The progress bar in the form is animated dynamically. Hence changing questions in the form will dynamically alter the progress bar - 
        if there are 3 questions only 33.33% of the bar will be filled when one question is answered.
    o Animation in the form element once you answer all the question to SignIn.  
    o Fade Out Effect for the images when you click them.  
    o Buttons animate on hover.
o All selections are dynamically created.
o A form to Sign you in with validation of the Email address for the type "_____@____.____". 
o The use of  localStorage to store the username, email, recipe and the current theme.
o Include comments in the code to clearly explain functionality. 
o Delete localStorage using the New User button under the Welcome username greeting after you have Signed In.
o No use of innerHTML, innerText, etc.
// Only when changing/ deleting the localStorage values manually.
o Please do not delete the theme variable in the localStorage. Incase deleted by mistake click on the theme toggler 2-3 times to let 
  the value be stored again to acheive flawless user experience. 
o Also delete the length variable with the recipe variable to get proper results.

%% File Structure - To open the webpage click on Index.html file.
                    js/Index.js stores the JavaScript code associated with the theme toggler.
                    js/Select.js stores the JavaScript code to create the elements on the page dynamically.
                    js/data.js stores the data in form of arrays of object.
                    js/localStorage.js stores the function calls for activities linked to localStorage data.
                    style/index.css stores the styling code for the webpage.
                    img folder containg the images associated with the recipes.
                    docs folder containg the pdf recipes associated with the recipes.
                    font stores the Roboto font for the webpage.
                    
** Recipe pdfs have been retreived from allrecipes.com. 
** I am really sorry if all the food pictures make you feel hungry. This is totally unintentional!!
** Color palette generated from Coolors.com  
## For any invaluable suggestions/ feedbacks please contact aa7120@g.rit.edu.