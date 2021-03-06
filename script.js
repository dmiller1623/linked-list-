

var submitButton = document.querySelector('#submit-bookmark');
var userInputTitle = document.querySelector('#web-title');
var userInputUrl = document.querySelector('#user-url');
var bookmarksDisplay = $('#bookmarks-display');
var bookmarkForm = document.querySelector('#bookmark-form');

userInputTitle.addEventListener('keyup', disableButton);
userInputUrl.addEventListener('keyup', disableButton);
bookmarkForm.addEventListener('submit', function(e) {
  e.preventDefault();
  displayBookmarks();
})

function disableButton() {
  if (userInputTitle.value === "" || userInputUrl.value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

function displayBookmarks() {
  disableButton();
  var bookmark = new Bookmark(userInputTitle.value, userInputUrl.value);
  var title = bookmark.title
  var url = bookmark.url
  var template = (` 
    <article class="new-bookmark">
      <h2 class="title-header">${title}</h2>
      <a class="link-header" href ="${'https://' + url }">${url}</a>
      <button class="readbutton">Read</button>
      <button class="deletebutton">Delete</button>
    </article> 
  `);
  bookmarksDisplay.append(template);
  changeReadButton();
  deleteBookmark();
}

function Bookmark(title, url) {
  this.title = title;
  this.url = url;
 }

 function deleteBookmark() {
  var parentBox = document.querySelector('.new-bookmark');
  var deleteButton = document.querySelector('.deletebutton');
  parentBox.addEventListener('click', function(event) {
    if (event.target.className === "deletebutton") {
    this.classList.add('delete')
  }
  })
 }

function changeReadButton() {
  var parentBox = document.querySelector('.new-bookmark');
  var buttonRead = document.querySelector('.readbutton');
   parentBox.addEventListener('click', function(event) {
      if (event.target.className === "readbutton") {
      this.classList.add('new-read')
      console.log(event);
  }
  })
}  