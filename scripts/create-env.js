const fs = require('fs')
fs.writeFileSync('./.env', 
`
API_URL=${process.env.API_URL}
CNS_URL=${process.env.CNS_URL}
BASE_URL=${process.env.BASE_URL}`)