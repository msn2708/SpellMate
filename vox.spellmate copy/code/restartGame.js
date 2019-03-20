module.exports.function = function restartGame (announcer) {
  if(announcer.questions != null) {
    var score = new Array ()
    i = 0
    for (i=0; i<questions.length; i++) {
      score[i].answer = {spelledWord:' '} 
      score[i].result = false
    }
    
    announcer.scoreBook.correctAnswerCount = 0
    announcer.counter = -1
    return announcer
    // return {questionBank:{questions:announcer.questions}, scoreBook:{score:score, correctAnswerCount:0}, counter:0}
  } else {
    return null
  }
  return announcer
}
