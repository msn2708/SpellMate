module.exports.function = function beginSpellMate (magicWord, announcer) {
  var mWord = JSON.stringify(magicWord)
  switch (mWord) {
    case 'Start Game': 
      magicWord = 'In Progress'
    case 'In Progress': 
      magicWord = 'In Progress'
  }
  return announcer
}
