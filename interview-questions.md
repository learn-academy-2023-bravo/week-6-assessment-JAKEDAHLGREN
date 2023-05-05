# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

You need to define the relationship from the parent model Cohort to the child model Student. You can do this by linking them with belongs_to (ex. student belongs_to cohort). Then you will need to generate a migration to add_user_id_to_student user_id:integer. This will add a column to your student table called user_id: that will hold the foreign key. 
The foreign key is inherited by the Student model, and it is actually the prime key of the Cohort model. To break it down further, each Cohort will have a unique value, called a prime key. This is unique to every instance of cohort added to the model. So in the student model multiple students can inherit the prime key, that describes the cohorts name, and is converted to the foreign key of the Student model. For example, if the Prime key of the Bravo cohort is 1, and the students Greg, Nikki, and Jake are all in Bravo their foreign key would all be 1.

Researched answer:

To create a column for the foreign key using Rails migration, you start by creating a migration file with the commmand. rails generate migration. this will create a new file in the db/migrate directory of your Rails app with a unique timestamp as the filename. In the file, you will see the method add_foreign_key which will defien the foreign key. It take three arguments: the name of the table that the foreign key should be added to, the name of the colum that holds the foreign key, and a hash of options.

2. Which RESTful routes must always be passed params? Why?

Your answer:

The routes that need params are show, edit, update, and delete. These routes need params because you are accessing a specific instance to be seen, edited, updated or delete. If they didn't need params there would be no way of making sure you had the correct instance before running the methods route.

Researched answer:

The :id is the param that gets passed to the URL, and because the :id number is unique to each instance you need it when you want to preform show, edit, update, or destroy. These actions are to be done to a specific instance. If you didn't acces the instance by :id you might run the method on the incorrect instance.

3. Name three rails generator commands. What is created by each?

Your answer:
- rails db:generate: will create your databases

- rails generate model: is how you create a new Models

- rails generate resource: will setup a model with all of your get, patch, post, put, and delete routes

Researched answer:

- rails generate migration: creates a new migration file in your app

- rails generate controller: creates a new controller for the model class, with a skeleton class definition in app/controllers/name_controller.rb

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

Show - all the instances of the students table

action: "POST" location: /students

Create - content to the student table and redirect

action: "GET" location: /students/new

Show - form to make a new instance to the student table

action: "GET" location: /students/2

Show - the 2nd instance of students

action: "GET" location: /students/2/edit

Show - edit form of the 2nd instance of student 

action: "PATCH" location: /students/2

Update - the second instance of students

action: "DELETE" location: /students/2

Destroy - the 2nd instance of students

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see a model for ToDoList
  - it has columns for task: and completed:

2. As a user, I can see a landing page that shows all tasks of the model ToDoList

3. As a user, when I click on a task, I need to be able to see the details of that task on a new page

4. As a user, I need to be able to navigate back to the landing page from the task details page

5. As a user, I can create a new instances of ToDoList that are valid using the strong params of :task and :complete

6. As a user, once I create a new task and submit it, I will be redirected to the landing page.

7. As a user, I can update an existing task, so that I can update the status of complete: or rename the task:, and submit those changes to be seen on the landing show page, and be redirected to the landing page 

8. As a user, I can not add any tasks that are not valid when strong params are in place.

9. As a user, I can delete an instances, by finding the id:, and return to the landing page.

10. As a user, I can see options for deleting a task and adding a task to my To Do List on the landing page.
