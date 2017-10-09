module.exports = function scoreletter(score) {
  if(score == null) {
    return 'empty'
  }
  else if(score <= 55) {
    return 'E'
  }
  else if(score <= 70) {
    return 'C'
  }
  else if(score <= 85) {
    return 'B'
  }
  else if(score <= 100) {
    return 'A'
  }
}
