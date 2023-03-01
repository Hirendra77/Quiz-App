const questions=[
   
     {
        'que':"which of the following is a markup language",
        'a':'HTML',
        'b':'CSS',
        'c':'Javascript',
        'd':'Php',
        'correct':'a'
    },
    {
        'que':"which year was Javascript launched",
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'none of the above',
        'correct':'b'
    },
    {
        'que':"what does CSS stands for?",
        'a':'Hyper Text Markup Langyage',
        'b':'Cascading Style Sheet',
        'c':'Jason oObject Notation',
        'd':'Hyper Text Markup link',
        'correct':'b',
    },
]
let  index=0; 
let total = questions.length;
let right = 0;
wrong =0;

const quesBox = document.getElementById("quesBox") 
const optionInputs = document.querySelectorAll('.option')
const loadQuestion=()=>{
if (index === total){
    return endQuiz()
}
    reset();
     const data = questions[index]
    console.log(data)
    quesBox.innerText= `${index+ 1}) ${data.que}`;
    optionInputs [0].nextElementSibling.innerText = data.a; 
    optionInputs [1].nextElementSibling.innerText = data.b; 
    optionInputs [2].nextElementSibling.innerText = data.c; 
    optionInputs [3].nextElementSibling.innerText = data.d; 
} 

const submitQuiz = ()=>{ 
    const data = questions[index]
        const ans = getAnswer()
        // console.log(ans,data.correct)
        if(ans === data.correct){
     right++;
        }else{
            wrong++;
        }
        index++;
        loadQuestion();
        return;
}

const getAnswer = () =>{
    let answer;
        optionInputs.forEach(   
            (input)=>{
                if(input.checked){
                    // console,log("yes")
                    //  console.log(input.value)
                    answer= input.value;
                }
                else{
                    console.log("No")
                }
            }
        )
        return answer;
}

const reset= ()=>{
    optionInputs.forEach(
        (input)=>   {
            input.checked = false;
        }
    )
}


const endQuiz = ()=>{
    document.getElementById("box").innerHTML=`
    <div style ="text-align:center">
    <h3>Thank you for playing the quiz</h3>
    <h2>${right}/${total}</h2>
    </div>`
}
    //initial call
    loadQuestion();