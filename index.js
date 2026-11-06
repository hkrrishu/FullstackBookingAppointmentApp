
const express = require("express");
const cors = require("cors");

const sequelize = require("./utils/db-connection");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);

sequelize.sync()
    .then(() => {
        console.log("Database connected successfully!");

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    })
    .catch((error) => {
        console.log(error);
    });
