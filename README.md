# funQuotes

A Simple Website that displays a Library of Quotes, with user input

### Structure:

app.component.html - The Main entry point of the program. Asks user to type in a name in order to login

subclasses: quote-model.ts - Class blueprint for quotes
            quote-library.ts -Imports the quote-model class as a blueprint and generates an Array of quotes from it, can have new quotes from the quote-creator component pushed to it.

##### nav-bar component

Component that displays a simple blue navbar

##### quote-view component 

Imports quotes from the quote-library and displays them, has functionality for users to vote on it

##### quote-creator component 

Allows user to generate new quotes and pushes them to quote-library.
 
