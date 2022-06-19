const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const verWordSearch = (lett, wor) => {
  const newVerArr = [];
  for (let i = 0; i < lett[0].length; i++) {
    const colArr = [];
    for (let j = 0; j < lett.length; j++) {
      colArr.push(lett[j][i]);
    }
    newVerArr.push(colArr.join(""));
    for (let l of newVerArr) {
      if (l.includes(wor)) {
        return true;
      }
    }
  }
  return false;
};

module.exports = { wordSearch, verWordSearch };
