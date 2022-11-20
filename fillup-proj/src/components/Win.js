import { Link, useParams } from "react-router-dom"

const Win = () => {

    const {score} = useParams()
    console.log(useParams)
  return (
    <div className="m-8">
        <div className="flex m-12 justify-center bg-blue-700">
            <div className="m-8" >
                <div className="flex justify-center">
                <h1>
                    🎉 congratulations!
                </h1>
                </div>
                
                <h1>You finished 2 questions, and now you have {score} Liters </h1>
            </div>
        </div>
        <div className="flex justify-center m-4">
             <p>
                Complete Today's Mission
            </p>
        </div>
        <div className="flex justify-center ml-12 mr-12 mb-8 ">
            <p>
                The villagers need your help. They are running low on clean water. You can help them by transferring your warer to the village's water tank
            </p>
        </div>
        <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                <Link to="/village"> My Village </Link>
            </button>
        </div>
            
            

    </div>
  )
}

export default Win