const readline = require('readline');
const { google } = require('googleapis');

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {Object} token The token for this client.
 * @returns {google.auth.OAuth2} google OAuth2
 */
module.exports.authorize = function (credentials, token) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  oAuth2Client.setCredentials(token);

  return oAuth2Client;
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
module.exports.getNewToken = function (oAuth2Client, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        return console.error('Error while trying to retrieve access token', err)
      }

      callback(token);
    });
  });
}

/**
 * Parse spreadsheet:
 * @see 
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 * @param {Object} params request parameter
 * @param {String} params.spreadsheetId the spreadsheet ID to request
 * @param {String} params.range the sheet!range of the spreadsheet to request
 * @param {String} params.valueRenderOption the ValueRenderOption for the cells
 * @param {sheetCallback} callback the callback after the request is done
 */
module.exports.getSheet = function (auth, params, callback) {
  const sheets = google.sheets({
    version: 'v4',
    auth
  });

  sheets.spreadsheets.values.get(params, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    callback(res.data.values);
  });
}

/**
 * @callback sheetCallback
 * @param {Object[][]} rows the array of rows of the sheet
 */