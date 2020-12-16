const path = require('path');
const cypress = require('cypress');
const uuidv1 = require('uuid/v1');
const rimraf = require('rimraf');
const shell = require('shelljs');
const combine = require('./combine.js');


    const data = combine.combineMochaAwesomeReports();
    const uuid = uuidv1();
    combine.writeReport(data, uuid);
    rimraf(path.join(__dirname, '..', '../reports'), () => {});
    shell.exec(`"node_modules/.bin/marge" ./test-results/index.json  --inline`, (code, stdout, stderr) => {
        if (stderr) throw stderr;
        // cleanup
        rimraf(path.join(__dirname, '..', '../test-results/index.json'), () => {});
    });