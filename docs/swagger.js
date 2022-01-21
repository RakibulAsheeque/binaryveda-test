module.exports = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Binaryveda Login API server", 
            version: '1.0.0',
            description: 'Basic Sign-up and Sign-in API server' 
        }
    },
    apis: ['./docs/*.js']
}