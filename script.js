const questions = [
    {
        question:"What is Orange?",

        answer:[
            {text:"fruit" , correct:"true"},
            {text:"Vegetable" , correct:"false"},
            {text:"Salad" , correct:"false"},
            {text:"All of these" , correct:"false"},
            {text:"None of the above" , correct:"false"},
        ]
    },
    {
        question:"What is colour of orange",

        answer:[
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
        ]
    },
    {
        question:"What is colour of Mango",

        answer:[
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
        ]
    },
    {
        question:"What is colour of Banana ",

        answer:[
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
        ]
    },
    {
        question:"What is colour of Pineapple ",

        answer:[
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
            {text:"Hello" , correct:"false"},
        ]
    },
];

const question = document.querySelector("question");
const ansr = document.querySelector(".buttons");
const nxtbtn = document.querySelector("#start");

let currentindex = 0;


function startQuiz()
{
   document.querySelector(".buttons").style.display = "flex";
   document.querySelector("#buttons").style.display = "inline-block";
   document.querySelector("#question").style.display = "inline-block";
   document.querySelector("#start").style.display = "none";
   showQuestion();
  
   
}

function showQuestion()
{
    let currentquestion = questions[currentindex];


        currentquestion.answer.forEach((answer)=>{

        const newbutton = document.createElement("button");
        newbutton.innerHTML = answer.text;
        ansr.appendChild(newbutton);

    });

    console.log(currentquestion);

}


