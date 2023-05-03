# IRIS_Rec23_221CS252_Express

<h1> INSTALLATION STEPS:</h1>

- First install mongodb to serve as the database,
- Refer : https://www.mongodb.com/docs/manual/installation/ (based on Operating System)
- git clone https://github.com/Cioraz/IRIS_Rec23_221CS252_Express / download the code as zip and unzip it on your systems prefered location.
- Open this folder, 
- now install npm, Refer (google)
- After npm is installed, type the following into the terminal where the file structure is present,
- npm i bcryptjs ejs express mongoose multer nodemailer
  
Now type the following on the terminal again
- mongod ( to connect to mongo shell)
- mongosh (to go into the mongo shell)
- use irisWeb;
- db.createCollection('students');
- db.students.insert({studentName:"%AdMiN",studentPassword:"1029",isAdmin:true}) // To create the admin user, in the real app we can use the iris servers to get this data but here im just forcefully inserting into the database using terminal
- npm install --save-dev nodemon ( to run the server.js file which showcases the main app )
- Refer for nodemon : https://www.youtube.com/watch?v=4N0d8HhU5DE&t=107s
- Finally, type on terminal 
- nodemon server.js ( to run the main file )

<h1>LIST OF IMPLEMENTED FEATURES :</h1>

- A login and registration system for new students to be registered on the iris database
- An email system to send a mail to the new registered user about their roll number and registration number.
- A system to generate roll number (based on number of candidates in that particular branch) and generate registration number (based on number of students registered on the iris database)
- A dashboard separate for the students and for the admin.
- The data gets stored in the students collection of the mongodb database where the password of the user is hashed using bcryptjs
- The admin has the power to register new companies to the database using the (Add new company) tab of their navbar view
- The new company to be registered must also be given a company icon so that it can be displayed on the company tab.


STUDENT DASHBOARD
- The student dashboard view has 3 compartments, companies, alumni advice and contact us
- In the companies view, the companies which are registered through the admin are made visible which can be later clicked upon for viewing details about the company


ADMIN DASHBOARD
- The admin dashboard also has 3 compartments, a company view, an add new company tab and contact us
- The company view shows all the companies visiting the campus for placements.
- The add new company can be used to upload details regarding a new company visiting the campus for placement season.
- The add company will take the details and store on mongo database, it also takes the company icon which is latered displayed on the companies tab in the dashboard of student/admin view

<h1>LIST OF PLANNED FEATURES  :</h1>

- To make the UI/UX look more robust and user friendly.
- To add full authentication using passport for login and registration.
- To add flash messages and use express sessions to temporarily store user data

<h1>LIST OF BUGS :</h1>
- User can log on to admin or any other account using the url and without knowing password (can be fixed using passport authentication)
- After registering a new company, it doesnt redirect properly

<h1>REFERENCES USED : </h1>
<p> Bootstrap Images : https://www.youtube.com/watch?v=PeF9p17K6-U</p>
<p>  Adding company Icons   https://www.youtube.com/watch?v=7oiJj5FcyTQ&t=1s</p>
<p>  Installing Nodemon : https://www.youtube.com/watch?v=4N0d8HhU5DE&t=107s</p>
<p>  Login and registration system : https://www.youtube.com/watch?v=6FOq4cUdH8k</p>
<p>  Encrypting the password : https://www.npmjs.com/package/bcrypt</p>


<h1>VIDEO:</h1>
- https://youtu.be/HbaYr53HUho
