# Form Submission Starter

_Starter project for the Form Submission Practice_

## Introduction

You are working on a web application that includes a search form. You want to create a few helper methods to make it easier to do common actions in the app. For this challenge you will be completing some of these helper methods.

## The HTML

The HTML page is named `index.html`. It contains a form and a list of articles. The form contain a single input field. When the form is submitted the articles are filtered by the search term entered on the form.

## The JavaScript

The JavaScript code is to be written in the file `index.js`. This is the only file that you need to edit. Write the required functions in this file.

## The Tests

Additionally there is a `test.js` file. You may ignore this file. It contains some test code that will provide some feedback on your progress. When you first open the web page in the browser you should see a series of messages indicating failed tests at the bottom of the HTML page.

As you write your code these tests should all pass.

## Getting started

To get started fork this repository. Clone your copy of the repository to your local machine.

```bash
git clone ...
```

You may want to start a local server to load the page in the browser. Navigate to the folder in which the repository was cloned and run the command:

```bash
npx lite-server
```

## The Tasks

#### `searchForm()`

Write a function that attaches an event listener to the search form on the HTML. You may create additional supporting functions if you wish. On submission of the form the following must occur:

##### Validate the form

Ensure that the form is not blank. By blank is meant the empty string as well as the string containing only spaces. If the form is blank display an error message by creating and appending a new error element to the end of the form. The error element must take the form:

```html
<div class="error" id="searchError">Please enter a search term</div>
```

If the form is not blank the error element should not be on the form.

##### Perform the search

Perform a case insensitive search of the titles of the articles (that is, the `innerHTML` values of the `h2` elements). If the search term matches any part of the title the article should be displayed, if the search term does not match any part of the title the article should be hidden.

To hide an article set the `style.display` property of the article to "none". To make it visible again set the `style.display` property to "block";

If a second search is conducted, articles hidden by any previous searches should be made visible again.
