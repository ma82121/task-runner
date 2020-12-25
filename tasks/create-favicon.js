const icongen = require('icon-gen')

icongen('./src/images/favicon.svg', './static', { report: true })
  .then(results => {
    console.log(results)
  })
  .catch(err => {
    console.error(err)
  })
