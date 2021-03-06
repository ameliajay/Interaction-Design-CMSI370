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

If you click on the "View Tasks" button on any of the lists, the user is taken to that specific list's screen. All the tasks in that list are listed there. If the box next to the name of a task is clicked, the box will turn blue and a little check mark will appear there signifying that the task has been completed!

![screen shot 2018-12-18 at 8 43 41 am](https://user-images.githubusercontent.com/31746937/50169182-e8c92f80-02a1-11e9-938a-b0532569dbc3.png)

![screen shot 2018-12-18 at 8 44 32 am](https://user-images.githubusercontent.com/31746937/50169641-d4396700-02a2-11e9-9902-236b1afb89ff.png)

If you click the "New Task" button, this new task appears and the screen looks like this. (Note: as previously mentioned, the new task function only adds the task to the Logic Design list because of the nature of the hardcoded data.)

![screen shot 2018-12-18 at 8 43 50 am](https://user-images.githubusercontent.com/31746937/50169301-2ded6180-02a2-11e9-961d-7f22918e4a78.png)

If you click on the "Details" button for one of the tasks, the user is taken to that specific task's screen. To go back to the list, the user can click the "Back to List" button. There is also a text box for notes about the task below the name of the task. This assignment required us to write functions that simulated three different calls to the API. The calls I chose were *list, get,* and *insert*. The *list* call listed out all the tasklists or all of the tasks that should be able to be viewed. The *get* call selected a specific tasklist or task that was to be viewed. The *insert* call created a new tasklist or task. I wanted to go further and add functions that simulated the *update* call which would allow data about tasks to be saved (like notes and whether or not a task was marked completed), but I have not gotten to it yet. For now, the user can write notes about the task in the text box, but those notes are not saved when the user goes back to that task.

![screen shot 2018-12-18 at 8 44 19 am](https://user-images.githubusercontent.com/31746937/50170011-c0423500-02a3-11e9-9b01-6ca17a08590d.png)

## Front End Design Vision
The aim of this assignment was to look back at the web app we had created, and envision what could make it better, and what the ultimate goal of that type of web app might look like. In *front-end-vision.md* I included the new features I would add to my task manager that would increase the satisfiability of it, as well as other usability metrics. I also included annotated mockups to show how each new feature and different page of the web app would work.

## Direct Manipulation
The aim of this assignment was to write our own code to create a component (in my case a slider) that you can use to directly manipulate something else on the page. My slider changed that background color. Depending on where the user has dragged the slider ball, the background will be one of five different colors.

Below are a couple of screenshots of what the slider page looks like depending on where the slider ball is.

![screen shot 2018-12-18 at 9 32 32 am](https://user-images.githubusercontent.com/31746937/50171681-f08bd280-02a7-11e9-8bd5-dccda98a21a4.png)

![screen shot 2018-12-18 at 9 32 47 am](https://user-images.githubusercontent.com/31746937/50171729-174a0900-02a8-11e9-8d8c-c60af7871864.png)



