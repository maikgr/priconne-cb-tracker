const fs = require('fs');
const api = require('./services/api');
const transformer = require('./services/transformer')
const updater = require('./services/updater')

const token = JSON.parse(process.env.TOKEN);
const credentials = JSON.parse(process.env.CREDENTIALS);
const spreadsheetId = '1QjRrz_i6MRHQNPQfI_1kyg4flyKw67Hj9lUIFyUbE64'
const range = 'Skill & Unique Equipment!A2:J'

try {
  const auth = api.authorize(credentials, token);
  api.getSheet(auth, { spreadsheetId, range, valueRenderOption: 'FORMULA' }, (rows) => {
    const chars = transformer.chars(rows);
    updater.update(chars)
  });
}
catch (e) {
  console.error(e);
}