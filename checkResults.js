const fs = require('fs');
function checkResults() {
  if (!fs.existsSync('./.jest-test-results.json')) {
    fs.writeFileSync('./.jest-test-results.json', '{}');
    console.log('wrote jest-test-results.json');
  } else 
  console.log('.jest-test-results.json exists');
};
checkResults();
