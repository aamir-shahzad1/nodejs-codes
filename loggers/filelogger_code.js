import fs from 'fs';

import util from 'util';

import moment from 'moment';

const logFile = fs.createWriteStream('./src/server/logs/mylog.log', { flags: 'a' });

let myLog = function () {

  logFile.write(util.format.apply(null, [(moment(new Date()).format('YYYY-MM-DD HH:mm:ss')).toString(), Object.values(arguments).toString()]) +'\n');

}

myLog("/////////////// MY LOGS \\\\\\\\\\\\\\\\\\\\")

export default {

    myLog

}
