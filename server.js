const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const { v4: uuid } = require("uuid");

const port = process.env.PORT || 4000;

let allUsers = [];
let allMessages = [];

const nsp = io.of("/");

nsp.on("connection", function (socket) {
  socket.on("join", ({ chatId, userName }) => {
    socket.join(chatId);

    const user = { id: userName.toLowerCase(), name: userName, chatId };
    allUsers.push(user);

    let users = allUsers.filter((user) => user.chatId === chatId);
    let messages = allMessages.filter((message) => message.chatId === chatId);

    socket.emit("you have joined the chat", { user, users, messages });
    console.log(`${userName}: ${socket.id} has joined the chat: ${chatId}`);

    socket.broadcast.in(chatId).emit("a new user has joined the chat", {
      users,
      newUser: user.name,
    });

    socket.on("message", ({ message }) => {
      message = {
        id: uuid(),
        text: message,
        timestamp: Date.now(),
        userId: userName.toLowerCase(),
        userName,
        chatId,
      };

      allMessages.push(message);
      messages = allMessages.filter((message) => message.chatId === chatId);

      nsp.to(chatId).emit("a new message was sent in the chat", { messages });
      console.log(`${user.name} said '${message.text}' in the chat: ${chatId}`);
    });

    socket.on("disconnect", () => {
      const disconnectUser = () => {
        allUsers = allUsers.filter(
          (user) => user.id !== userName.toLowerCase()
        );
        users = allUsers.filter((user) => user.chatId === chatId);
        socket.broadcast.in(chatId).emit("a user has left the chat", {
          users,
          oldUser: user.name,
        });
        console.log(`${userName}: ${socket.id} has left the chat: ${chatId}`);
      };
      disconnectUser();
    });
  });
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
      status: err.status,
    },
  });
});

http.listen(port, function () {
  console.log(`listening on port ${port}`);
});
