const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");


const options = {


	definition: {
		openapi: "3.0.0",
		info: {
			title: "API",
			version: "1.0.0",
			description: "",
      contact:{
        email: "harshilsharmaa0@gmail.com"
      },
      schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
      _postman_id: "dea0afa6-045f-417f-8c5b-fc16ea4b66d4",
		name: "Suposhan",
		},
    host: process.env.DOMAIL_URL,
    basePath: "/api",
    produces: ["application/json"],
    schemes: ["https",'http'],
    securityDefinitions: {
      JWT: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
      },
      API_KEY: {
        type: "apiKey",
        in: "header",
        name: "Auth-Token",
      },
    },
		servers: [
			{
				url: "http://localhost:3000",
			},
		],
	},
  apis: ["./api.js"],


};


const specs = swaggerJsDoc(options);




const initialize = (app) => {


  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

  

};

module.exports = { initialize };