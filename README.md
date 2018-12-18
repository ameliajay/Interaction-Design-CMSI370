# Interaction-Design-CMSI370
*Loyola Marymount University Interaction Design class projects from Fall 2018*

## Front End Design
The aim of this first project was to design a web app using knowledge of design principles and usability metrics. These metrics include learnability (how fast a person can learn how to use the app), memorability (how fast a person can navigate the web app after not seeing it for a long period of time), efficiency (how many different actions a person has to do to complete a certain function), error (how often a person takes a certain action expecting a different outcome than what happens), and satisfiability (how satisfied a person is with using the web app). The web app I designed was a simple task manager. In *front-end-design.md* I have included a write up about why I chose to design my app the way I did, and there are several annotated mockups that show how the web app should look and function.

## Front End Development
The aim of this project was to create a version of the web app designed in the Front End Design assignment using HTML, CSS, and JavaScript. Instead of using a real API service, we were assigned the task of writing functions that would call our "fake" API. We were instructed to use the documentation from a real API service to build that data and the calls based on how they do it. I chose the Google Tasks API, so my data was constructed in the same way Google Tasks constructs it. For example, each task list had a an id and a title. Because the data was hardcoded and I was not using a real API service, there were a few functions that did not work exactly like they would with the real Google Tasks API. When adding a new list, every time the "New List" button is clicked, the same new list is created (called Interaction Design). When adding a new task, the same new task is always created as well (called Homework 2). The other thing to note about adding a new task, is that since the new task is hardcoded, the list that task is in is hardcoded as well, so a new task can only be created in the Logic Design list, because that is the list that Homework 2 is a part of. 

Below are a several screenshots from the different pages of the task manager. This first one is the home screen where all the lists can be seen. By clicking the "Home" button in the top right corner, the user is always taken back to this screen.

![screen shot 2018-12-18 at 8 43 12 am](https://user-images.githubusercontent.com/31746937/50168885-48730b00-02a1-11e9-8bb9-7cd8218323a2.png)

If you click the "New List" button, this new list appears and the screen looks like this.

![screen shot 2018-12-18 at 8 43 28 am](https://user-images.githubusercontent.com/31746937/50169057-a869b180-02a1-11e9-98d6-50a9d850708e.png)

If you click on the "View Tasks" button on any of the lists, the user is taken to that specific list's screen. All the tasks in that list are listed there.


