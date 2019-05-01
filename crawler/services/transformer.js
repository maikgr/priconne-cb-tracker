module.exports.chars = function (rows) {
  let chars = [];
  rows.forEach((row) => {
    if (row && row.length >= 8) {
      chars.push({
        char: {
          image: row[0].replace('=image("', '').replace('=IMAGE("', '').replace('")', ''),
          name: row[2],
          alias: row[1],
          rarity: row[3].replace('*', '')
        },
        type: row[4].replace('\n\n', '-'),
        skills: {
          union: row[5],
          skill1: row[6],
          skill2: row[7],
          ex: row[8]
        },
        unique: row[9] || ''
      });
    }
  });

  return chars;
}