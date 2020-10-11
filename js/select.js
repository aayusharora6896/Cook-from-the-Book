const myChoices = selectInfo;

// Function to create Select Elements
function createSelectElement(selectId, divId) {
  let mySelect = document.createElement("select");
  document.getElementById(divId).appendChild(mySelect);
  mySelect.classList.add = "select";
  mySelect.id = selectId;
}
// Function to create Description of Options
function createOptionDescription(myChoice, select) {
  let myOption = document.createElement("option");
  myOption.classList.add("option");
  myOption.value = myChoice.key;
  myOption.textContent = myChoice.description;
  myOption.selected = this;
  myOption.disabled = true;
  document.getElementById(select).appendChild(myOption);
}
// Function to create Options
function createOptions(myChoice, select) {
  for (var i = 0; i < myChoice.option.length; i++) {
    let myOption = document.createElement("option");
    myOption.classList.add("option");
    myOption.value = myChoice.option[i];
    myOption.textContent = myChoice.option[i];
    document.getElementById(select).appendChild(myOption);
  }
}

// Function to create the list of images for the selected ingredients
function createFoodItemsList(recipeList, key) {
  const displayDiv = document.createElement("div");
  const content = document.querySelector(".content");
  content.appendChild(displayDiv);
  displayDiv.id = "displayDiv";
  for (var i = 0; i < myChoices.recipes.length; i++) {
    if (key == myChoices.recipes[i].key) {
      for (var j = 0; j < recipeList.recipes[i].options.length; j++) {
        for (var k = 0; k < recipeList.food.length; k++) {
          if (recipeList.recipes[i].options[j] == recipeList.food[k].key) {
            console.log(recipeList.food[k].key);
            var figure = document.createElement("figure");
            var text = document.createElement("div");
            var textNode = document.createTextNode(recipeList.food[k].key);
            figure.id = recipeList.food[k].key;
            var a = document.createElement("a");
            var img = document.createElement("img");
            img.src = recipeList.food[k].image;
            img.id = "dispImage";
            displayDiv.appendChild(figure);
            figure.appendChild(a);
            a.appendChild(img);
            text.appendChild(textNode);
            a.appendChild(text);
            text.classList.add("text");
            // adding the div at the footer that has the save, download buttons and other info
            figure.addEventListener("click", function () {
              var key = this.id;
              console.log(key);
              fadeOutEffect();
              var h4 = document.createElement("p");
              h4.id = "col2-text1";
              var h5 = document.createElement("p");
              h5.id = "col2-text2";
              var l = 0;
              while (recipeList.food[l].key != key) {
                l++;
              }
              var choiceText = document.createTextNode(
                recipeList.food[l].key + " is a great choice for your meal!!"
              );
              h4.appendChild(choiceText);
              var choiceIngredients = document.createTextNode(
                "Key Ingredients: " + recipeList.food[l].ingredients
              );
              h5.appendChild(choiceIngredients);
              var InfoDiv = document.querySelector("#InfoDiv");
              var row = InfoDiv.querySelector("#row1");
              var col2 = row.querySelector("#col2");
              col2.appendChild(h4);
              col2.appendChild(h5);
              row1.appendChild(col2);
              InfoDiv.appendChild(row1);

              // save button
              var saveRecipeButton = document.createElement("div");
              saveRecipeButton.id = "save";
              saveRecipeButton.classList.add("button");
              var underline = document.createElement("div");
              underline.id = "underline";
              var save = document.createElement("a");
              save.id = recipeList.food[l].key;
              var saveText = document.createTextNode("Save Recipe");
              save.appendChild(saveText);
              saveRecipeButton.appendChild(underline);
              saveRecipeButton.appendChild(save);
              //InfoDiv.appendChild(saveRecipeButton);
              var col3 = row1.querySelector("#col3");
              col3.appendChild(saveRecipeButton);

              var saveBtn = document.querySelector("#save");
              saveBtn.addEventListener("click", function () {
                console.log(saveBtn);
                var anchor = saveBtn.querySelector("a");
                setRecipeFromLocalStorage(anchor.id);
                console.log(anchor.id);
                var Tag = document.querySelector("#recipeTag");
                var value = document.querySelector("#recipeValue");
                var key = getRecipesFromLocalStorage();
                if (localStorage.getItem("length") >= 4) {
                  value.style.fontSize = "small";
                  Tag.style.fontSize = "small";
                }
                value.textContent = key;
              });

              // download button
              var downloadRecipeButton = document.createElement("div");
              downloadRecipeButton.id = "download";
              downloadRecipeButton.classList.add("button");
              var underline = document.createElement("div");
              underline.id = "underline";
              var download = document.createElement("a");
              download.href = recipeList.food[l].pdf;
              download.target = "_new";
              var downloadText = document.createTextNode("Download Recipe");
              download.appendChild(downloadText);
              downloadRecipeButton.appendChild(underline);
              downloadRecipeButton.appendChild(download);
              //InfoDiv.appendChild(downloadRecipeButton);
              col3.appendChild(downloadRecipeButton);
              row1.appendChild(col3);
              InfoDiv.appendChild(row1);
            });
          }
        }
      }
    }
  }
}

///////////////////////////////////////////////////////////
// Creating the main div
const myDiv1 = document.createElement("div");
const content = document.querySelector(".content");
myDiv1.id = "myDiv1";
content.appendChild(myDiv1);

// Reset Button
var row = document.createElement("div");
row.classList.add("row2");
myDiv1.appendChild(row);
var resetButton = document.createElement("div");
resetButton.id = "reset";
resetButton.classList.add("button");
var underline = document.createElement("div");
underline.id = "underline";
var reset = document.createElement("a");
var resetText = document.createTextNode("reset");
reset.appendChild(resetText);
resetButton.appendChild(underline);
resetButton.appendChild(reset);
row.appendChild(resetButton);

resetButton.addEventListener("click", function () {
  var displayDiv = document.querySelector("#displayDiv");
  var select3 = document.querySelector("#select3");
  var select2 = document.querySelector("#select2");
  var saveButton = document.querySelector("#save");
  var downloadButton = document.querySelector("#download");
  var InfoDiv = document.querySelector("#InfoDiv");
  //for (var i = 0; i < displayDiv.length; i++) {
  if (displayDiv) {
    displayDiv.parentElement.removeChild(displayDiv);
  }
  // }
  if (select3) {
    select3.parentElement.removeChild(select3);
  }
  if (select2) {
    select2.parentElement.removeChild(select2);
  }
  if (select1) {
    select1.parentElement.removeChild(select1);
  }
  if (saveButton) {
    saveButton.parentElement.removeChild(saveButton);
  }
  if (downloadButton) {
    downloadButton.parentElement.removeChild(downloadButton);
  }
  if (InfoDiv) {
    InfoDiv.parentElement.removeChild(InfoDiv);
  }
  if (localStorage.getItem("username")) {
    // display name and saved recipes names
    displayInfo();
  } else {
    // username and email not in local storage
    location.reload();
  }
  selectFunction();
});

selectFunction();

// Function to call the createSelectElements in sequence and handle their removal too
function selectFunction() {
  let key = myChoices.choices[0].key;
  createSelectElement("select1", "myDiv1");
  if (key == myChoices.choices[0].key) {
    createOptionDescription(myChoices.choices[0], "select1");
    createOptions(myChoices.choices[0], "select1");
  }

  //check the value selected on the first select
  document.getElementById("select1").addEventListener("change", () => {
    var s2 = document.querySelector("#select2");
    if (s2 != null) {
      myDiv1.removeChild(s2);
    }
    var s3 = document.querySelector("#select3");
    if (s3 != null) {
      myDiv1.removeChild(s3);
    }
    var saveBtn = document.querySelector("#save");
    if (saveBtn != null) {
      saveBtn.parentElement.removeChild(saveBtn);
    }
    var downloadBtn = document.querySelector("#download");
    if (downloadBtn != null) {
      downloadBtn.parentElement.removeChild(downloadBtn);
    }
    var text1 = document.querySelector("#col2-text1");
    if (text1 != null) {
      text1.parentElement.removeChild(text1);
    }
    var text2 = document.querySelector("#col2-text2");
    if (text2 != null) {
      text2.parentElement.removeChild(text2);
    }
    var dispDiv = document.querySelector("#displayDiv");
    if (dispDiv != null) {
      dispDiv.parentElement.removeChild(dispDiv);
    }
    var key1 = select1.value;
    console.log(select1.value);
    createSelectElement("select2", "myDiv1");

    // Remove all the selects except the first one.
    for (var i = 0; i < myChoices.choices.length; i++) {
      if (key1 == myChoices.choices[i].key) {
        createOptionDescription(myChoices.choices[i], "select2");
        createOptions(myChoices.choices[i], "select2");
      }
    }
    ///////////////////////////////////////////////////////////////
    document.getElementById("select2").addEventListener("change", () => {
      var s3 = document.querySelector("#select3");
      if (s3 != null) {
        myDiv1.removeChild(s3);
      }
      var saveBtn = document.querySelector("#save");
      if (saveBtn != null) {
        saveBtn.parentElement.removeChild(saveBtn);
      }
      var downloadBtn = document.querySelector("#download");
      if (downloadBtn != null) {
        downloadBtn.parentElement.removeChild(downloadBtn);
      }
      var dispDiv = document.querySelector("#displayDiv");
      if (dispDiv != null) {
        dispDiv.parentElement.removeChild(dispDiv);
      }
      var text1 = document.querySelector("#col2-text1");
      if (text1 != null) {
        text1.parentElement.removeChild(text1);
      }
      var text2 = document.querySelector("#col2-text2");
      if (text2 != null) {
        text2.parentElement.removeChild(text2);
      }
      var key2 = select2.value;
      console.log(select2.value);
      createSelectElement("select3", "myDiv1");
      // Remove all the selects except the first one.
      for (var i = 0; i < myChoices.choices.length; i++) {
        if (key2 == myChoices.choices[i].key) {
          createOptionDescription(myChoices.choices[i], "select3");
          createOptions(myChoices.choices[i], "select3");
        }
      }
      document.getElementById("select3").addEventListener("change", () => {
        var dispDiv = document.querySelector("#displayDiv");
        if (dispDiv != null) {
          dispDiv.parentElement.removeChild(dispDiv);
        }
        var saveBtn = document.querySelector("#save");
        if (saveBtn != null) {
          saveBtn.parentElement.removeChild(saveBtn);
        }
        var downloadBtn = document.querySelector("#download");
        if (downloadBtn != null) {
          downloadBtn.parentElement.removeChild(downloadBtn);
        }
        var text1 = document.querySelector("#col2-text1");
        if (text1 != null) {
          text1.parentElement.removeChild(text1);
        }
        var text2 = document.querySelector("#col2-text2");
        if (text2 != null) {
          text2.parentElement.removeChild(text2);
        }
        var key3 = select3.value;
        console.log(key3);
        createFoodItemsList(myChoices, key3);
      });
    });
  });
}

// Form Creation

if (localStorage.getItem("username")) {
  // display name and saved recipes names
  displayInfo();
} else {
  // username and email not in local storage
  displayForm();
}
function displayInfo() {
  var InfoDiv = document.createElement("div");
  var content = document.querySelector(".content");
  InfoDiv.id = "InfoDiv";
  content.appendChild(InfoDiv);
  var h2 = document.createElement("h2");
  var username = getUserNameFromLocalStorage();
  var email = getEmailFromLocalStorage();
  var recipes = getRecipesFromLocalStorage();
  if (recipes == false) {
    console.log("recipe value = " + recipes);
    recipes = "No saves yet!!";
  }
  console.log(recipes);
  var welcomeText = document.createTextNode("Logged in as " + username + "!!");
  h2.appendChild(welcomeText);
  h2.id = "Welcome";
  InfoDiv.appendChild(h2);
  // user button
  var newUser = document.createElement("div");
  newUser.id = "user";
  newUser.classList.add("button");
  var underline = document.createElement("div");
  underline.id = "underline";
  var userText = document.createTextNode("New User");
  newUser.appendChild(userText);
  newUser.appendChild(underline);
  InfoDiv.appendChild(newUser);
  newUser.addEventListener("click", function () {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("recipes");
    cont.parentElement.removeChild(cont);
    newUser.parentElement.removeChild(newUser);
    h2.parentElement.removeChild(h2);
    displayForm();
  });
  // continue button
  var cont = document.createElement("div");
  cont.id = "cont";
  cont.classList.add("button");
  var underline = document.createElement("div");
  underline.id = "underline";
  var contText = document.createTextNode("Continue");
  cont.appendChild(contText);
  cont.appendChild(underline);
  InfoDiv.appendChild(cont);
  cont.addEventListener("click", function () {
    showInfo();
    cont.parentElement.removeChild(cont);
    newUser.parentElement.removeChild(newUser);
  });
  function showInfo() {
    h2.parentElement.removeChild(h2);
    var row1 = document.createElement("div");
    row1.id = "row1";
    row1.classList.add("row3");
    var col1 = document.createElement("div");
    col1.classList.add("col7");
    col1.id = "col1";
    var col2 = document.createElement("div");
    col2.classList.add("col3");
    col2.id = "col2";
    var col3 = document.createElement("div");
    col3.classList.add("col2");
    col3.id = "col3";
    row1.appendChild(col1);
    row1.appendChild(col2);
    row1.appendChild(col3);
    var usernameDiv = document.createElement("div");
    usernameDiv.classList.add("row4");
    var usernameText = document.createElement("p");
    var usernameTag = document.createElement("p");
    var usernameTagNode = document.createTextNode("Username: ");
    var usernameTextNode = document.createTextNode(username);
    usernameText.appendChild(usernameTextNode);
    usernameTag.appendChild(usernameTagNode);
    var emailDiv = document.createElement("div");
    emailDiv.classList.add("row4");
    var emailText = document.createElement("p");
    var emailTag = document.createElement("p");
    var emailTagNode = document.createTextNode("Email: ");
    var emailTextNode = document.createTextNode(email);
    emailTag.appendChild(emailTagNode);
    emailText.appendChild(emailTextNode);
    var recipeDiv = document.createElement("div");
    recipeDiv.id = "recipeDiv";
    recipeDiv.classList.add("row4");
    var recipesText = document.createElement("p");
    var recipesTag = document.createElement("p");
    var recipesTagNode = document.createTextNode("Recipes: ");
    var recipesTextNode = document.createTextNode(recipes);
    recipesTag.appendChild(recipesTagNode);
    recipesText.appendChild(recipesTextNode);
    recipesText.id = "recipeValue";
    recipesTag.id = "recipeTag";
    InfoDiv.appendChild(row1);
    col1.appendChild(usernameDiv);
    col1.appendChild(emailDiv);
    col1.appendChild(recipeDiv);
    usernameDiv.appendChild(usernameTag);
    usernameDiv.appendChild(usernameText);
    emailDiv.appendChild(emailTag);
    emailDiv.appendChild(emailText);
    recipeDiv.appendChild(recipesTag);
    recipeDiv.appendChild(recipesText);
    recipesText.style.fontSize = "medium";
    recipesTag.style.fontSize = "medium";
  }
}
// displaying the form
function displayForm() {
  var formDiv = document.createElement("div");
  var content = document.querySelector(".content");
  formDiv.id = "formDiv";
  content.appendChild(formDiv);
  // progress division
  var progressDiv = document.createElement("div");
  progressDiv.id = "progress";
  formDiv.appendChild(progressDiv);
  var centerDiv = document.createElement("div");
  centerDiv.classList.add("center");
  formDiv.appendChild(centerDiv);
  var loginTag = document.createElement("p");
  loginTag.id = "loginTag";
  var loginNode = document.createTextNode(
    "Please Sign Up to save/ download recipes"
  );
  loginTag.appendChild(loginNode);
  centerDiv.appendChild(loginTag);
  var registerDiv = document.createElement("div");
  registerDiv.id = "register";
  centerDiv.appendChild(registerDiv);
  var progressButton = document.createElement("img");
  progressButton.src = "./img/arrow-right.svg";
  progressButton.id = "progressButton";
  progressButton.classList.add("next");
  registerDiv.appendChild(progressButton);
  var inputContainer = document.createElement("div");
  inputContainer.id = "inputContainer";
  registerDiv.appendChild(inputContainer);
  var inputField = document.createElement("input");
  inputField.id = "inputField";
  inputField.required = "TRUE";
  inputField.autofocus = "TRUE";
  inputContainer.appendChild(inputField);
  var inputLabel = document.createElement("label");
  inputLabel.id = "inputLabel";
  inputContainer.appendChild(inputLabel);
  var inputProgress = document.createElement("div");
  inputProgress.id = "inputProgress";
  inputContainer.appendChild(inputProgress);

  // form functionality
  var questions = [
    { question: "What's your Username?" },
    { question: "What's your Email?", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  ];

  (function () {
    var tTime = 100; // transition transform time from #register in ms
    var wTime = 200; // transition width time from #register in ms
    var eTime = 1000; // transition width time from inputLabel in ms

    // init
    // --------------
    var position = 0;
    putQuestion();

    progressButton.addEventListener("click", validate);
    inputField.addEventListener("keyup", function (e) {
      transform(0, 0); // ie hack to redraw
      if (e.keyCode == 13) validate();
    });

    // functions
    // --------------

    // load the next question
    function putQuestion() {
      inputLabel.innerHTML = questions[position].question;
      inputField.value = "";
      inputField.type = questions[position].type || "text";

      showCurrent();
    }

    // when all the questions have been answered
    function done() {
      // remove the box if there is no next question
      register.className = "close";
      // add the h1 at the end with the welcome text
      var h1 = document.createElement("h1");
      console.log(questions[0].value);
      // h1.appendChild(
      //   document.createTextNode("Welcome " + questions[0].value + "!")
      // );
      setTimeout(function () {
        register.parentElement.appendChild(h1);
        // setTimeout(function () {
        //   h1.style.opacity = 1;
        // }, 50);
        setTimeout(function () {
          var username = questions[0].value;
          var email = questions[1].value;
          var recipes = [];
          console.log(username + " -> " + email);
          setUserLocalStorage(username, email, recipes);
          h1.parentElement.removeChild(h1);
          formDiv.parentElement.removeChild(formDiv);
          displayInfo();
        }, 500);
      }, eTime);
    }

    // when submitting the current question
    function validate() {
      // set the value of the field into the array
      questions[position].value = inputField.value;

      // check if the pattern matches
      if (!inputField.value.match(questions[position].pattern || /.+/)) wrong();
      else
        ok(function () {
          // set the progress of the background
          progress.style.width = (++position * 100) / questions.length + "vw";

          // if there is a new question, hide current and load next
          if (questions[position]) hideCurrent(putQuestion);
          else hideCurrent(done);
        });
    }

    // helper
    // --------------

    function hideCurrent(callback) {
      inputContainer.style.opacity = 0;
      inputProgress.style.transition = "none";
      inputProgress.style.width = 0;
      setTimeout(callback, wTime);
    }

    function showCurrent(callback) {
      inputContainer.style.opacity = 1;
      inputProgress.style.transition = "";
      inputProgress.style.width = "100%";
      setTimeout(callback, wTime);
    }

    function transform(x, y) {
      register.style.transform = "translate(" + x + "px ,  " + y + "px)";
    }

    function ok(callback) {
      register.className = "";
      setTimeout(transform, tTime * 0, 0, 10);
      setTimeout(transform, tTime * 1, 0, 0);
      setTimeout(callback, tTime * 2);
    }

    function wrong(callback) {
      register.className = "wrong";
      for (
        var i = 0;
        i < 6;
        i++ // shaking motion
      )
        setTimeout(transform, tTime * i, ((i % 2) * 2 - 1) * 20, 0);
      setTimeout(transform, tTime * 6, 0, 0);
      setTimeout(callback, tTime * 7);
    }
  })();
}
// Fadeout effects of the pictures
function fadeOutEffect() {
  var fadeTarget = document.getElementById("displayDiv");
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 200);
  fadeTarget.parentElement.removeChild(fadeTarget);
}
