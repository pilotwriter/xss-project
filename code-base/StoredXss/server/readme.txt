This is the example server to show the stored xss attack.

We don't filter the input that is coming from front end and keeping it in our database.
Since we are keeping the data in the database and retrieving it from database, 
it effects all users that are reaching this data. As and example we are showing 
only an alert box, but custom scripts can be written to do more specific and dangerous actions. \


requirements:
database - mysql

connection 
You can change database connection configurations manually from config/config.js file
or create a .env file and use it. 
You need to define DB_USERNAME, DB_PASS,DB_HOST and DB_NAME as environment variable in .env file.

Install the npm packages:
open a terminal at the root of the project and write
npm install
this command should download all dependencies.

migration:
We used sequelize ORM tool to manage the  database transactions and migrations. After you have created a database on mysql and filled the config.js file,
you need to migrate the migrations files. For migrations open a terminal at project root and write
sequelize db:migrate

Run the server:
Open  terminal at the root of the project and write

npm start

If you want to change the port, you can change it from index.js, but don't forget to change
it also from the frontend code!


Attack :
In order to show the attack, all setup must be done. After that we can open the frontend
and for the image url input place just paste, " onerror="alert('hacked')" and hit enter.
When you refresh the page, it is going to show you the an alert box




