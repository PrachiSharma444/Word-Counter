const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const  sentenceCount = document.querySelector("[data-sentence-count]");
const paragraphCount = document.querySelector("[data-paragraph-count]");

input.addEventListener("input" , function () {
    if(input.value){

        //count words
        const wordArray = input.value.split(" ").filter((word) => word != " ");
        wordCount.innerText = wordArray.length ;

        //count character
        characterCount.innerText = input.value.length;

        //count sentence
         const sentenceArray = input.value.split(/[.?!]/);
         sentenceCount.innerText = sentenceArray.length - 1;

         //count paragrapgh
         const paragraphArray = input.value.split("\n");
         paragraphCount.innerText = paragraphArray.length ;
    }
    else {
        wordCount = 
        characterCount = 
        sentenceCount = 
        paragraphCount = 
        0;

    }
});

