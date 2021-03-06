// Connects button 'verify' to the function 'verifyAge'
document.getElementById('enter').addEventListener('click', enterAge)

// Creates a variable named "age" and sets it to 0.
let age = 0

function enterAge () {
  // Gets the age that the user inputs and stores it in the variable 'age' and sets it to an integer
  age = document.getElementById('age').value
  age = parseInt(age)

  // Decides if the user is old enough to watch a certain movie and places them in an age category to tell them what type of movie they can watch alone.
  if (age >= 17) {
    document.getElementById('text').innerHTML = 'You can see an R rated movie alone'
  } else if (age >= 13) {
    document.getElementById('text').innerHTML = 'You can see a PG-13 movie alone'
  } else if (age >= 5) {
    document.getElementById('text').innerHTML = 'You can see a G or PG movie alone'
  } else {
    document.getElementById('text').innerHTML = 'Sorry, but you are too young to watch most things'
  }
}
