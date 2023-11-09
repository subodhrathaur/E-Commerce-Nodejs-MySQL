// swagger-config.js

const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Specify the OpenAPI version
    info: {
      title: 'E-Commerce API', // Title of your API
      version: '1.0.0', // Version of your API
      description: 'API for the E-Commerce application', // Description of your API
    },
  },
  apis: ['./routes/*.js'], // Specify the path to your route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
