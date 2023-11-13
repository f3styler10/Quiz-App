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
            {text:"orange" , correct:"true"},
            {text:"red" , correct:"false"},
            {text:"yello" , correct:"false"},
            {text:"blue" , correct:"false"},
            {text:"green" , correct:"false"},
        ]
    },
    {
        question:"What is colour of Mango",

        answer:[
            {text:"Yellow" , correct:"True"},
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

const question = document.querySelector("#question");
const ansr = document.querySelector(".buttons");
const startbtn = document.querySelector("#start");

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let currentindex = 0;
let score = 0;


function startQuiz()
{

   document.querySelector("#start").style.display = "none";
   showQuestion();
  
   
}

function showQuestion()
{   
    

    resetState();
    let currentquestion = questions[currentindex]; 

        question.innerHTML = currentindex +1 +". "+ currentquestion.question;

        



        currentquestion.answer.forEach((answer)=>{

        const newbutton = document.createElement("button");
        newbutton.innerHTML = answer.text;
        ansr.appendChild(newbutton);

        if(answer.correct)
        {
            newbutton.dataset.correct = answer.correct;  // creating a new attribute ie "correct" and storing value  in it.
        }

        newbutton.addEventListener('click' , selectAnswer);

        
    });

}


function resetState()
{
    
    while(ansr.firstChild)
    {
        ansr.removeChild(ansr.firstChild);
    }

}

function selectAnswer(e)
{
    const btn = e.target;
    const  iscorrect = btn.dataset.correct === "true"; //storing booelan value in const "iscorrect"
    
    if(iscorrect)
    {
        score++;
        btn.classList.add("correct");
        

    }

    else
    {
        btn.classList.add("incorrect");


    }
    
    Array.from(ansr.children).forEach((n)=>{
        if(n.dataset.correct==="true")
        {
            n.classList.add("correct");
        }

        n.disabled = true;
    });
    next.style.display = "inline-block";
    
}  


next.addEventListener('click',()=>{
    if(currentindex < questions.length)
    {
        handleButton();

    }
    else
    {
  
        currentindex = 0;
        let score = 0;
        ansr.style.display = "flex";
        next.innerHTML ="Next";
        next.style.width="50px";
        startQuiz();
    }

});


function handleButton(){
    currentindex++;

    if(currentindex < questions.length)
    {
        showQuestion();

    }
    else
    {
     showScore();
    }
}


function showScore(){
ansr.style.display = "none";
question.innerHTML = `Your Score is ${score}`;
next.innerHTML = "Play Again";
next.style.width="100px";



}