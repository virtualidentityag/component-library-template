const fs = require('fs');
const glob = require('glob');

glob('src/components/**/*.html', function (er, files) {
  const componentMap = files.reduce((aggr, current) => {
    const componentName = current.split('/')[current.split('/').length - 2];
    return {
      ...aggr,
      [componentName]: current,
    };
  }, {});
  fs.writeFileSync(__dirname  + '/src/components/components.json', JSON.stringify(componentMap));
});
