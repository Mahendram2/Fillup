import axios from "axios"
import { useEffect, useState } from "react"
import QuestionCard from "./QuestionCard"
import QuizQuestion from "../QuizQuestions.json"
import { useNavigate, Redirect,Route, Navigate  } from 'react-router-dom';


const Game = () => {

  console.log(QuizQuestion)

  const [questionsWorth,setQuestionsWorth] = useState()
  const [total,setTotal] = useState(0)
  const [waterLevel,setWaterLevel] = useState(0)
  const [waterImage,setWaterImage] = useState("water-empty")
  const [questionNumber,setQuestionNumber] = useState(0)
  const [questions,setQuestion] =useState([])
  const [showQuestion,setShowQuestion] = useState()
  const [worth,setWorth] = useState(0)
  const imageLevels = ["water-empty","water-low","water-medium","water-full"]
  const navigate  = useNavigate()

  useEffect(()=>{
      setQuestion(QuizQuestion)  
  },[])

  useEffect(()=>{
    console.log("total is changing ",total)
    console.log(document.getElementsByClassName("water-empty")[0].style.height=(total+95)+"px")
    console.log(document.getElementsByClassName("water-empty")[0].style.marginTop=(373-(total+80))+"px")
  },[total])

  useEffect(()=>{
    console.log("questions are in ")
    setShowQuestion(allQuestion[questionNumber])
    setWorth(questions[questionNumber]?questions[questionNumber].points:"")
  },[questions])

  useEffect(()=>{
    if(questionNumber == questions.length && questions.length > 0){
      console.log("put in winning factor here")
      console.log(waterLevel)
      navigate('/Win/'+total)
    }
    setShowQuestion(allQuestion[questionNumber])
    setWaterImage(imageLevels[questionNumber])
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
    return <QuestionCard key={"val"+ind} waterLevel={waterLevel} setWaterLevel={setWaterLevel} total={total} setTotal={setTotal} setWorth={setWorth} worth={worth} correctAnswer={correctAnswer} wrongAnswer={wrongAnswer} question={question}/>
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
              <div className="water-empty"> </div>
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