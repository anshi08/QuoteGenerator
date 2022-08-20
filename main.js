let btn = document.getElementById("generate-btn")
// console.log(btn)

let quote = document.getElementById("quote")
// console.log(quote)

let author = document.getElementById("quote-author")
// console.log(author) 

const words = [
    {text:'The purpose of our lives is to be happy.' ,
    authorName:"Dalai lama"    
},  {text:'Life is what happens when you are busy making other plans. ' ,
    authorName:" John Lennon"    
},  {text:'Get busy living or get busy dying.',
    authorName:" Stephen King "    
},  {text:'You only live once, but if you do it right, once is enough.' ,
     authorName:" Mae West"    
},  {
    text:'If you want to live a happy life, tie it to a goal, not to people or things.',
    authorName:" Albert Einstein"
},  {
    text:'Never let the fear of striking out keep you from playing the game.',
    authorName:"Babe Ruth"
},  {
    text:'Not how long, but how well you have lived is the main thing.',
    authorName:" Seneca"
},  {
    text:'In order to write about life first you must live it.',
    authorName:"Ernest Hemingway"
},  {
    text:'The big lesson in life, baby, is never be scared of anyone or anything.',
    authorName:"Frank Sinatra"
},   {
    text:'The unexamined life is not worth living.',
    authorName:"Socrates"
},    {
    text:"Turn your wounds into wisdom.",
    authorName:"Oprah Winfrey"
}
  
]

// generate()

btn.addEventListener("click",()=>generate(words))

//function mei jo call krana h array naam aayega!!!
function generate(newwords){
    console.log(newwords)
    // alert(words)
    let randomIdx = Math.floor(Math.random() * words.length )
    // console.log(newwords[randomIdx].text,newwords[randomIdx].authorName)
    console.log(newwords[randomIdx].text) 
    quote.textContent = newwords[randomIdx].text
    author.textContent = newwords[randomIdx].authorName
}








