# Chat App

This app is built with **Node**, **Express** and **React**, using **Socket.io** to implement real time communication between server and client. A small frontend test suite is also set up using **Jest** for running and assertions and **Enzyme** for mocking UI components.

Here is how to run the application:

- Run the command **yarn** in the root folder to install the backend dependencies 
- Run the command **cd client/ && yarn** to install the frontend  dependencies 
- Run the command **yarn start** in the root folder to concurrently start both the backend and the frontend
- Run the command **cd client/ && yarn test** to launch the frontend test suite 

Here is how to use the application:

- Click on the **Create Chat** button
- Type a **User Name** of your choice
- Click on the **Create Chat** button again to create a chat with an automatically generated ID
- Open a new tab and visiting the url **http://localhost:3000/**
- Click on the **Join Chat** button 
- Type a **User Name** of your choice
- Copy paste the previously generated **Chat ID** from the previous tab's url
- Click on the **Join Chat** button to join the previously created chat
- **Type a Message** using the input and see the message appearing in both tabs