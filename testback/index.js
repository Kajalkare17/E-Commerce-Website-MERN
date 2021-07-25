const express = require("express");
const app = express();

const port = 8000
app.get("/home", (req,res) => {
    return res.send("Home page");
});
app.get("/login", (req,res) => {
    return res.send("you are visiting login route");
});

app.get("/signup", (req,res) => {
    return res.send("you are visiting signup route");
});

const admin = (req,res) => {
    return res.send("Admin daashboard");
};

const isAdmin = (req,res, next) => {
    console.log("isAdmin running");
    next();
};

app.get("/admin",isAdmin, admin);

app.get("/admin", (req,res) => {
    return res.send("Admin route");
})
app.listen(port, () => {
    console.log("Server is up and running...");
});

// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
