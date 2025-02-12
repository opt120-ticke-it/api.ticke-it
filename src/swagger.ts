import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API documentation for the project',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes.ts', './src/modules/*/*.routes.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;