

var submitButton = document.querySelector('#submit-bookmark');
var userInputTitle = document.querySelector('#web-title');
var userInputUrl = document.querySelector('#user-url');
var bookmarksDisplay = document.querySelector('#bookmarks-display');
var bookmarkForm = document.querySelector('#bookmark-form');
var bookmarkArray = [];
var arrayLength = bookmarkArray.length;
bookmarkForm.addEventListener('submit', function(e) {
  e.preventDefault();
  createBookmark();
})

function createBookmark() {
  var bookmark = new Bookmark(userInputTitle.value, userInputUrl.value);
  bookmarkArray.push(bookmark);
  console.log(bookmarkArray[0]);
  displayBookmarks();
}

function displayBookmarks() {
  var title = bookmarkArray[0].title
  var url = bookmarkArray[0].url
  bookmarkArray{} ++;
  var template = ` <article class="new-bookmark">
    <h2 class="title-header">${title}</h2>
    <p class ="link-header">${url}</p>
    <button class="read">Read</button>
    <button class="delete">Delete</button>
  </article> `;
  bookmarksDisplay.innerHTML = template;
}


function Bookmark(title, url) {
  this.title = title;
  this.url = url;
}

