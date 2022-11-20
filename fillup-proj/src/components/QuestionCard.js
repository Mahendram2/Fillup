import { useEffect, useState } from "react"

const QuestionCard = (props) => {


    console.log(props)
    const [incorrect,setIncorrect] = useState(props.question.incorrectAnswers)
    const [popUp,setPopUp] = useState(false)
    const [message,setMessage] = useState()
    const [sortedAnswer,setSortedAnswer] = useState()
    const [solved,setSolved] = useState("#2C73D9")

    useEffect(()=>{
      console.log("a state has changed but no changes made")
    },[solved])
    const wrongChoice = () =>{
      setMessage(
        <div className="flex text-[#C91515] justify-center mb-8">
        <h1> Wrong Answer try again ! </h1>
       </div>
       )
    }

    const options = incorrect.map((incorrectAnswer,ind)=>{
      return <button onClick={wrongChoice} style={{width:"254px" , height:"76px" }} class="bg-[#2C73D9] focus:bg-[#C91515] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 ">      
      <div   key={ind}>
              <p> {ind} {incorrectAnswer} </p>
          </div></button>
    })
    
    useEffect(()=>{
      setSortedAnswer(options.sort(()=>Math.random()-0.5))
    },[])

    const closePopUp = () =>{
      setPopUp(false)
    }
    const openPopUp = () =>{
      setSolved ("#15C91C")
      setPopUp(true)
      setMessage(
      <div className="flex text-[#15C91C] justify-center mb-8">
      <h1> correct ! </h1>
     </div>
     )
    }
    const nextQuestion =() =>{
      props.correctAnswer()
    }

  

    console.log(incorrect)
   
    options.push(
    //     <button  onClick={props.correctAnswer} style={{width:"254px" , height:"76px", backgroundColor:"#2C73D9"}} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 ">
    //     <div key={options.length}>
    //     <p> {options.length} {props.question.correctAnswer} </p>
    // </div></button>
    <div>
<button type="button" onClick={openPopUp}  style={{width:"254px" , height:"76px", backgroundColor:`${solved}` }} className={` hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700`}>
      <div key={options.length}>
             <p> {options.length} {props.question.correctAnswer} </p>
      </div>
</button>


    </div>
    )

    

    
  return (
      <div className=" flex items-center justify-center  col-span-2">

        <div>
          <div className="relative">
          <div>
          {message}
          <div className="flex justify-center mb-8">
           <h1> {props.question.question} </h1>
          </div>
        <div className="relative">
          <div className="flex justify-center ">
            <div>
                <br/>
                 <div class="container grid gap-9 mt-8 grid-cols-2 grid-rows-2 ">
                    {sortedAnswer}
                    <br/>
                </div>
            </div>
         
        </div>

        <div  class={`modal fade ${popUp?"":"hidden"} top-0 left-0  w-full h-full  absolute outline-none overflow-x-hidden overflow-y-auto`}
          id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            
            <div   style={{height:"100%" }}className="flex justify-center items-center">
                <div style={{width:"100%" }} className="flex justify-center absolute">
              <div style={{width:"100%" , height:"100%"}} class="modal-dialog  w-auto pointer-events-none">
                  <div 
                  style={{backgroundColor:"#C1D9FB"}}
                    class="modal-content border-none shadow-lg  flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                      class="modal-header flex flex-shrink-0 items-center justify-between p-3 -b  rounded-t-md">
                         <button type="button"
                         onClick={closePopUp}
                        class="btn-close box-content w-4 h-4  text-black border-none rounded-none opacity-60 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal" aria-label="Close"><img src="https://www.clipartmax.com/png/small/1-10194_clip-art-x-medium-size-x-marks-the-spot-clipart.png"/></button>
                    
                        <div className="flex justify-center p-1">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvIEIgf6ozo1fpLNN9usqiVBuHiJ8k51w5Ig&usqp=CAU" width="65px"/>
                        </div>
                        <button type="button"
                        class="btn-close box-content w-4 h-4  text-black border-none rounded-none opacity-0 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal" aria-label="Close"><img src="https://www.clipartmax.com/png/small/1-10194_clip-art-x-medium-size-x-marks-the-spot-clipart.png"/></button>
                    
                      </div>
                    <div class="modal-body relative p-4">
                     {props.question.explanation}
                    </div>
                    <div
                      class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-center p-8  ">
                      <a href={props.question.url} target="blank">
                      <button type="button" class="px-6
                        py-2.5
                        bg-purple-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-purple-700 hover:shadow-lg
                        focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-purple-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out" data-bs-dismiss="modal">Learn More</button>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
            </div>
           
          
        </div>
        </div>
        </div>
        

          

         

          </div>
          <div className="flex justify-center">
            <button onClick={nextQuestion} class="bg-transparent hover:text-white hover:bg-blue-700 text-blue-700 font-bold py-2 px-4 border border-blue-700 rounded">
            Next Question
          </button>
          </div>
          
        </div>
        
           
        
       
        
        
    </div>
    
    
  )
}

export default QuestionCard