const env=process.env

module.exports = {
  databaseUserName: env.DATBASE_USERNAME || 'mongo',
  databasePassword: env.PASSWORD || 'QTtpqKXrVjJWDE2g',
  databaseHost: env.DATBASE_HOST || 'cluster0.hgtu8.mongodb.net',
  databaseName: env.DATBASE_NAME || 'binaryveda-test',
  PORT: env.PORT || 8080,

}