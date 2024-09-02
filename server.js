/* import express library and execute it, creating a new express application call "app" */
import express from "express";
const app = express();
app.use(express.json()); // read posts as json


/* REQUESTS */
app.get ("/messages", function(request, response) {
    response.json({ message: "Hello, World!" });
});
app.post("/messages", function (request, response) {
    response.json({message: `Your message was ${request.body.msg}. So cool`});
}); // send post request for {"msg": "####"} to get response


/* listen for requests */
app.listen(3000, function() {
    console.log("Server is listening on port 3000...");
});

