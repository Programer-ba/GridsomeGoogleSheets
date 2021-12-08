// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: '1aveVsrLZ6YvADupdIK8GCOvZlZqYn3Wz628ejU4NLpk', 
        apiKey: '1044592236252-9l45cqkpqc44q5kljoj6nojrqrp60li6',
        route: '/:Id', //Optional - omit if not using routes
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
    }
  }
  ]
}
