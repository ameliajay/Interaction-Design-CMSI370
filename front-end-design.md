# Front End Design

## Application Description
My application is a simple task manager that uses the Google Tasks API. It allows you to create lists of tasks,
create tasks, and complete those tasks. The main usability issues I want to focus on are learnability and satisfaction
because I want this app to be easy to use and aesthetically pleasing. Additionally, my task manager will be a web app. For a user, the mental model is a web app where they can organize and manage tasks they need to get done. For me, the designer, the mental model is a web app that can help people stay organized in a simple and effective way.

### Web Services Used
My web app will give the user the ability to create lists or projects using the *insert* call, and then select
a specific list using the *get* call. You can also see all of the lists using the *list* call. The app will also give
the user the ability to create and select a task, which also uses the *insert* and *get* calls. To complete
a task, my app will use the *update* call, which allows the status of that task to be changed from incomplete to complete. The *update* call also allows the user to add details about a task.

## Top Level Design/Layout
![home screen list screen](https://user-images.githubusercontent.com/31746937/45852962-98b8ec00-bcf7-11e8-9e3d-66814da7c4aa.JPG)
![task screen](https://user-images.githubusercontent.com/31746937/45852914-5b545e80-bcf7-11e8-9704-9d31249ea118.JPG)

My web app has three different types of screens that the user may see depending on what actions they are performing. The first screen is the home screen. This displays all of the lists in separate blocks. The home icon in the upper left corner is there on all screens, as is the name/logo of the app, for a consistent feel no matter what screen you are on. The home icon, when clicked, always takes the user back to the home screen. The second screen is the list screen. This is the screen you see when you click on a list block. The list screen is where you can see all the tasks in the list and check them off. The third screen is the task screen. This is where you can add more details about the specific task you click on. The natural mapping of the display should be pretty good. The blocks on the home page are labeled with the names of the lists but do not explicitly say to click on them in order to see the tasks. Even though they do not explicitely state that, it can be easily inferred from the design that clicking on the block will take you to that list. When the mouse hovers over the block, I want it to change shades from white to a light gray, so it is clear something will happen when the block is clicked on.

## Usage Scenarios

### Adding a Task to a List
![adding a task](https://user-images.githubusercontent.com/31746937/45855739-66fb5180-bd06-11e8-8514-4f0379fe6abc.JPG)

In this scenario, the user will be adding a task to the list of tasks they are currently in. In order to create a new task
for that specific list, the user will press a button that says "New Task", and from there, the user will be taken from the list screen to the task screen. This creation of the task is done using the API call *insert*. On the task screen, the user can write the name of the task and select the date and time the task should be completed by. The user can also add any notes they want to jot down about the task. To go back to the list of tasks, the user clicks the arrow button in the left corner, which uses the API call *list*. If the user wants to change the details of that task later, they can click the details button on the right side of the line that the task in on. This will bring them to the task screen again and uses the API call *update*.

### Completing a Task
![completing a task](https://user-images.githubusercontent.com/31746937/45855798-a75acf80-bd06-11e8-89b0-8774ffa4a25f.JPG)

In this scenario, the user will be completing, or checking off, a task in their list. In order to check off a task, the user just has to click the square box to the left of the name of the task. When the box is clicked, a check mark will appear in the box to show the user that the task has been completed. This uses the *update* API call, because when the box is clicked, the status of the task changes from incomplete to complete.

## Design Rationale
The two main priorities I have for my web app are that it is easy to use and aesthetically pleasing. For me, these two factors matter a lot when I am deciding whether or not to continue to use a certain web app or app on my phone. In terms of interaction design concepts, learnability, efficiency, and satisfaction are most important. Since my web app is a simple task manager, the design does not need to be complicated, but instead it needs to be something that is easy to learn how to use and hooks the user with how nicely it does its job. The reminders app on the iPhone inspired me to make the list screen and task screen look kind of like index cards, because I think that look is very appealing, especially for a tasks or to-do list app.

When it comes to guidelines, my design is consistent in labeling and graphic conventions because the blocks on the home screen and the list and task pages all are rectangle shaped with rounded edges, as are the buttons used for adding a new list and task. I am using check boxes which is also a suggested guideline for web apps. My design also is consistent throughout the different screens because there is always a home button and the title/logo of the app at the top of every screen. My web app also only presents data that is helpful for the user, keeping it simple. If the user needs more information than just the date and time to finish the task by they can click the details button to see notes about the task, but that is not shown unless the user wants to see it, so they are not presented with too much data on every screen.

In terms of principles, I focused mainly on Tognazzini's sixteen principles. Because my task manager is a web app, the size of the text on each screen is always going to be big enough to be readable. On the list screen, the name of the list is in bold which also adds to readability. The buttons, like the home button, are large enough that they are easy to click. The details buttons on the right side of the tasks are small but the task screen will be able to come up if the user clicks anywhere on the task name as well. I decided to add this feature after learning about Fitt's Law. When it comes to color blindness, I decided not to make any features of my web app reliant on color. However, I do want the background of the app to be a fun color, possible customizable, because that will bring some color to it since the blocks and list and task pages are going to be a white background with black text.

## Usability Metric Forecast
Since my web app is pretty simple, I predict that all of the usability metrics are quite strong. Adding a new list and new task is very easy because there are buttons clearly labeled for that purpose, and they both have a plus sign on them as well. In this way, learnability and memorability are pretty well satisfied because it is not hard to learn how to make a list or create tasks, even if you haven't used the web app for a long period of time. The only thing that the user would need to learn again is how to go to the details of a task since that button is not labeled "details". The user only has to click on the task one time though to learn or remember how simple it is to get to the task details screen. Errors should not be a big problem because a task manager has a very simple purpose and the user most likely is using the task manager with that purpose in mind: they want to create lists, create tasks, and complete them. The main error that might happen would be if the user tries to select a task by clicking on the check box and accidentally updates that task to having "complete" status. To combat this error, if the check box is clicked again, the check mark will go away and the task will go back to "incomplete" status. I think that this app is very aesthetically pleasing and would be fun to use, which is good for satisfaction. The design of this app makes it efficient too because there are only three screens you can go to in total, and in the click of one button you can always make it back to the home screen. To create a new list or new task you only have to click one button as well.

## References
https://developers.google.com/tasks/v1/reference/

https://developers.google.com/tasks/v1/reference/tasks

http://dondi.lmu.build/share/ixd/affordances.pdf

https://ebookcentral.proquest.com/lib/lmu/reader.action?docID=1190977&query=

http://dondi.lmu.build/share/ixd/principles.pdf

http://dondi.lmu.build/share/ixd/guidelines.pdf

https://developer.apple.com/design/human-interface-guidelines/macos/overview/visual-index/
