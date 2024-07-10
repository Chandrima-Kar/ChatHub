
# ChatHub

## Celebal Technologies - React JS Summer Internship Final Project

Chat Application

This chat demonstrates real-time message transferring from one source to another. The process starts with the client sending regular HTTP requests to the server. With the knowledge of web sockets and socket.io, it becomes easy to code. The real-time communication support feature of NodeJS can be used here. Here, the messages get updated without refreshing the page which can be done using routers. Socket.io can be used to build real-time applications which can be used to receive and send messages. The use of mongoose provides a lot of convenience in the creation and management of data in ongoDB. Moment helps you manipulate and format dates in JavaScript. Moreover, this application represents Messenger.

## Check the demo video below ->



https://github.com/Chandrima-Kar/ChatHub/assets/138314529/f6242617-7bde-4e36-b25c-101286447699




## Features

- One-to-one chat and group chat
- Add and remove users from group and update group name (only for admin)
- Real-time messaging without refreshing the page( Real-time data transfer)
- Signup, Login and Logout

## Installation

### Getting Started with Cloning the Repo
1. Download the zip file.
2. Unzip it. You can see a folder is extracted name - `CHATHUB`
3. Go inside it and open it in your VS code. 

### Go the terminal and write -

##### For installing the dependencies for backend and starting the backend:
```bash
    npm i
    npm start
```

##### For installing the dependencies for frontend and starting the frontend:
```bash
    cd frontend
    npm i
    npm start
```

#### Runs the app in the development mode:

##### Open http://localhost:3000 to view it in your browser.

#### ⚠️ In case tailwind CSS is not installed then install it for React [https://tailwindcss.com/docs/guides/create-react-app]

In the terminal paste this ->

 ```
 npm install -D tailwindcss
```
 ```
 npx tailwindcss init
```

Then go to the tailwind.config.js file and make the changes ->

```
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
```

Now go to the index.css file and update it with this ->

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
