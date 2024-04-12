/*---------------------constants----------------------*/

const questions = [
  {question: "Who is the tallest president?", answer: "Abraham Lincoln",
  incorrect: ["James Madison", "Joe Biden", "Barack Obama"]},

  {question: "Who is the youngest president?", answer: "Theodore Roosevelt",
  incorrect: ["William McKinley", "Joe Biden", "Bill Clinton"]},

  {question: "Who was president for one hour?", answer: "Pedro Lascurain",
  incorrect: ["Donald Trump", "Putin", "Coolidge"]},

  {question: "Which president was known for smiling?", answer: "Theodore Roosevelt",
  incorrect: ["Donald Trump", "George Washington", "Theodore Roosevelt"]},

  {question: "Which president died in 30 days?", answer: "William Henry Harrison",
  incorrect: ["Bill Clinton", "George Washington", "Ronald Reagan"]},

  {question: "Which president has 15 kids?", answer: "John Tyler",
  incorrect: ["Donald Trump", "James Buchanan", "Theodore Roosevelt"]},

  {question: "Which president was never married?", answer: "James Buchanan",
  incorrect: ["Donald Trump", "George Washington", "Theodore Roosevelt"]},

  {question: "Who was the oldest president?", answer: "George Bush",
  incorrect: ["Donald Trump", "Jimmy Carter", "Theodore Roosevelt"]},

  {question: "What is presidents day nickname?", answer: "Washington's Birthday",
  incorrect: ["Trump day", "Bill's Birthday", "Clinton Day"]},

  {question: "Who is the only president to be born on july 4?", answer: "Calvin Coolidge",
  incorrect: ["Donald Trump", "George Washington", "Theodore Roosevelt"]},
]

/*---------------------Variables----------------------*/


let score 
let currency 

/*--------------Cached Element References-------------------*/
const question = document.getElementById("questionsCtr")
const topRow = document.getElementById("topRow")
const bottomRow = document.getElementById("bottomRow")
// const resetBtn = document.getElementById("Play-again")

/*------------------Event Listeners----------------------*/
topRow.addEventListener('click', function() {
  console.log('i been clicked')
})
bottomRow.addEventListener('click', function() {
  console.log('clicked')
})
// resetBtn.addEventListener('click', init) 


/*---------------------Fuctions----------------------*/

init ()

function init() {
  score = 0
  currency = 0
  render()


}


function render() {

}


// function handleClick {
//   if correct
// }



