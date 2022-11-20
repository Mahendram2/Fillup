import axios from "axios"
import { useEffect, useState } from "react"
import QuestionCard from "./QuestionCard"
import QuizQuestion from "../QuizQuestions.json"
import { useNavigate, Redirect,Route, Navigate  } from 'react-router-dom';


const Game = () => {

  console.log(QuizQuestion)

  const [questionsWorth,setQuestionsWorth] = useState()
  const [waterLevel,setWaterLevel] = useState(0)
  const [waterImage,setWaterImage] = useState("water-empty")
  const [questionNumber,setQuestionNumber] = useState(0)
  const [questions,setQuestion] =useState([])
  const [showQuestion,setShowQuestion] = useState()
  const imageLevels = ["water-empty","water-low","water-medium","water-full"]
  const navigate  = useNavigate()

  useEffect(()=>{
      setQuestion(QuizQuestion)
  },[])
  useEffect(()=>{
    console.log("questions are in ")
    setShowQuestion(allQuestion[questionNumber])
  },[questions])

  useEffect(()=>{
    if(questionNumber == questions.length && questions.length > 0){
      console.log("put in winning factor here")
      console.log(waterLevel)
      navigate('/Win/'+waterLevel)
    }
    setShowQuestion(allQuestion[questionNumber])
    setWaterImage(imageLevels[questionNumber])
    setWaterLevel(waterLevel + 20)
    setQuestionsWorth()
  },[questionNumber])

  const correctAnswer = () =>{
    console.log("correct")
    setQuestionNumber(questionNumber+1)
  }
  const wrongAnswer = () =>{
    console.log("false")
  }

  // setQuestion(questions.map((question,ind) =>{
  //   return <QuestionCard key={"val"+ind} question={question}/>
  // }))
  const allQuestion = questions.map((question,ind) =>{
    return <QuestionCard key={"val"+ind} correctAnswer={correctAnswer} wrongAnswer={wrongAnswer} question={question}/>
  })

  // console.log(allQuestion)
  console.log(questions)

  return (
    <div>
        
        
        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style= {{width:`${questionNumber*100/allQuestion.length}%`}}> { `${Math.floor(questionNumber*100/allQuestion.length)}%`}</div>
  </div>
     

        
        <div className="flex justify-end m-8">
         
          
        
          <div className="flex justify-center items-center" >
        <div>
          <h1 className=""> Worth: {questions[questionNumber]?questions[questionNumber].points:""} Liters</h1>
        </div>  
          </div>
        </div>

        <div className="container grid gap-2  grid-cols-3  ">
      <div className="flex justify-center items-center">
        <div >
              <ul >
    
        <li class="water-bottle">
            <div className="cap mr-4">
                <div class="cap-top">
                </div>
                <div class="cap-seal">
                </div>
            </div>
          <div class="bottle fl ">
            <div className=" justify-center">
              <div class={waterImage}> </div>
            </div>
                
            </div>
        </li>
      </ul>
          </div>
      </div>
        {showQuestion}
        </div>

        
       
        
        
    </div>
  )
}

export default Game