const thankYouMessages = [];

function writeCards(name, event) {
  for (let i = 0; i < name.length; i++) {
    thankYouMessages.push (`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouMessages
}

function countDown () {
    let countdown = 10;
    while (countdown >= 0) 
    console.log(countdown--)
  }