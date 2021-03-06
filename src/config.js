import _ from 'lodash';
const bodyParser = require('body-parser');

let _config = {
  responseDir: './data',
  format: {
    request: 'json'
  }
};

function config(server, params) {
  if (_.isUndefined(server)) {
    return _config;
  }

  _config = _.merge(_config, params);
  addRequestParser(server);
}

function addRequestParser(app) {
  if (_config.format.request === 'json') {
    app.use(bodyParser.json());
  }

  //TODO: Add other parsers
}

export default config;
