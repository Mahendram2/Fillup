import { Link, useParams } from "react-router-dom"
import {TbConfetti} from "react-icons/tb"
import QuizQuestion from "../QuizQuestions.json"

const Win = () => {

    const {score} = useParams()
    console.log(useParams)
  return (
    <div className="m-8">
        <div className="flex m-12 justify-center bg-[#0F2648]">
            <div className="m-8" >
                <div className="flex justify-center text-white">
                <h1 className="flex justify-center text-4xl ">
                    <TbConfetti className="mr-8 text-6xl"/> <p style={{fontFamily:"Bad Script", fontStyle:"italic",fontSize:"36px", fontWeight:400, lineHeight: "71px" , textAlign:"center"}} className="flex items-center">Congratulations!</p>
                </h1>
                </div>
                
                <h1 className="text-white mt-4">You finished {QuizQuestion.length} questions, and now you have {score} Liters </h1>
            </div>
        </div>
        <div className="flex justify-center m-4 text-3xl">
             <p>
                Complete Today's Mission
            </p>
        </div>
        <div className="flex justify-center ml-12 mr-12 mb-8 ">
            <p className="text-center">
                The villagers need your help. They are running low on clean water. You can help them by transferring your warer to the village's water tank
            </p>
        </div>
        <div className="flex justify-center">
            <button className="bg-white-500 hover:bg-blue-700 hover:text-white text-blue-700 font-bold py-2 px-4 border border-blue-700 rounded">
                <Link to="/Info"> More Info </Link>
            </button>
        </div>
            
            

    </div>
  )
}

export default Win