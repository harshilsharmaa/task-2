const express = require('express');
const router = require('../programming/Infoware-NodeJs-Task-master/api/user/user.routes');

const app = express();

const routes = require("./index.js");
routes.initialize(app);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})