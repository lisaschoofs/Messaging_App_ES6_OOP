# Hospitality Messaging Application

## How to run the program locally:

After downloading the project, open the index.html file in a browser compatible with ES6 (a recent version of Google Chrome is recommended).

The UI is pretty basic and doesn't give any feedback right now. Open up the console (right click, then select 'Inspect') to view each selection being chosen and the final message output.

Click a selection from guests, companies, and templates, then submit!

## Technologies Used
- AngularJS with ECMAScript 6
- HTML
- CSS
- Bootstrap

Reasoning: Due to time constraints, I wanted to use something familiar. Though my experience with ES6 is limited at this point, I chose to use it so I could utilize classes and take the project in an object-oriented direction.

## Design Decisions & Reasoning
I intended to have the majority of my logic housed in a 'Message' class, and potentially in a 'Dashboard' class as well. The class(es) would be instantiated within the Dashboard Service, and accessed by the Dashboard Controller. That way, my code could be more modular/extensible in files that could easily be brought into other projects. Unfortunately, I spent more time than I anticipated figuring out how to handle the message templates/variables. I laid out my code how I am used to in the controller/factory, and didn't get everything moved over to classes as I intended.

I left the start of the Message class in the files so you can see the road I was starting to go down.

For this project, I brought in the JSON as constants in a data folder. In a larger project, I would envision the data being store in a modules folder in the server, or living in a database.

## My process for verifying correctness
- Using a linter w/ my IDE to help identify syntactical issues.

- Setting up a basic UI to test things out.

- Console logs. Lots of console logs.

## What I didn't get to // what I would do with more time
- I didn't get to allowing the user to create a custom template - they could only select when of the pre-generated templates. With more time, I would set up a text field to allow a user to input a custom message, and adjust the sendMessage function with if/else logic or create a new function that would bypass the 'updateMessage' step that fills in variables.

- With more time, I would finish moving my logic to classes. I conceptually know what I want to achieve, I just don't have the comfortability & practice yet to make it happen in 2-4 hours.

- I would build out a better UI with dropdowns, give the user feedback when things have been selected, and show the user the final message they've 'sent'.

- I would spend more time considering edge case possibilities.

---
Thank you for taking the time to look through this! It's been a fun challenge to dive into. -LS
