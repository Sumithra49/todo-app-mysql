# todo-app-mysql
#  To-Do List App (MERN + MySQL)

# Deployment
- frontend:https://todo-app-mysql.vercel.app/
-  backend:https://todo-app-mysql-1.onrender.com


# Folder structure
![image](https://github.com/user-attachments/assets/11e4e916-2f6a-4563-8a30-3e1f7cea9fd7)

![image](https://github.com/user-attachments/assets/8b12f2a2-5645-4bc3-9767-961e8e6e33bb)





##  Features

- Create a to-do item
- View all to-do items
- Toggle complete/incomplete
- Delete a to-do item
- Connected to MySQL using Sequelize

 # .env
-  DB_HOST=your_db_host
- DB_PORT=3306
- DB_USERNAME=your_db_user
- DB_PASSWORD=your_db_password
- DB_DATABASE=your_db_name
- PORT=

#  Tech Stack
- React.js
- Node.js
- Express.js
- MySQL
- Sequelize ORM
- Axios
- CORS
# Importing the Database
mysqldump --set-gtid-purged=OFF --single-transaction \
  -h <your_host> \
  -u <your_username> \
  -p <your_database_name> > db-export.sql

   # UI
  ![image](https://github.com/user-attachments/assets/b64955b4-0a00-411e-98a9-c18d9308b7d4)





