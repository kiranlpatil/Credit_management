// Developed by KiranPatil
// SpaceShift (2-10-20)

// lib/server.ts
import app from "./app";
// tslint:disable-next-line:typedef
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

app.listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
});
