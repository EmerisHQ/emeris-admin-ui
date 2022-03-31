const fs = require('fs')

const branch = require('child_process').execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

var API_URL;
if (process.env.API_URL) {
    API_URL = process.env.API_URL;
} else {
    switch (branch) {
        case 'develop':
            API_URL = "https://dev.demeris.io/v1";
            break;
        case 'staging':
            API_URL = "https://staging.demeris.io/v1";
            break;
        default:
            API_URL = "https://api.emeris.com/v1";
    }
}

var CNS_URL = process.env.CNS_URL || (API_URL + "/cns");

fs.writeFileSync('./.env', 
`
API_URL=${API_URL}
CNS_URL=${CNS_URL}
BASE_URL=${process.env.BASE_URL || "/"}`)