import express from 'express';

export const app = express();

app.use(express.static('../client/dogs-app/build/'));

const port = process.env.PORT || 8080;
app.listen(port);

console.log("Server is listening on http://localhost:" + port);