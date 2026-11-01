import { useEffect, useState } from "react";
import LeftPanel from "./components/LeftPanel"
import Navbar from "./components/Navbar"
import RightPanel from "./components/RightPanel"
import Chessboard from "./components/Chessboard";

const App = () => {
  const [noOfQueen,setNoOfQueen] = useState(4);
  const [isRunning,setIsRunning] = useState(false);
  const [gameStatus,setGameStatus] = useState("Not Started");
  const [queenPlaced,setQueenPlaced] = useState(0);
  const [elapsedTime,setElapsedTime] = useState(0);

  const startGame = ()=>{
    setIsRunning(true);
    setGameStatus("Running");
  }

  const pauseGame = ()=>{
    setIsRunning(false);
    setGameStatus("Paused");
  }

  const resetGame = ()=>{
    setIsRunning(false);
    setGameStatus("Not Started");
    setElapsedTime(0);
    setQueenPlaced(0);
  }


  useEffect(()=>{
    if(!isRunning) return

    const timerId = setInterval(()=>{
      setElapsedTime(prev => prev+1)
    },1000)

    return ()=>clearInterval(timerId)
  },[isRunning])


    return (
        <div className="w-full min-h-screen bg-slate-950">
            <Navbar />
            <section className="grid grid-cols-12">
              <div className="bg-red-400 col-span-3">
                <LeftPanel 
                    boardSize={noOfQueen}
                    onBoardSizeChange={setNoOfQueen}
                    onStart={startGame}
                    onReset={resetGame}
                    onPause={pauseGame}
                />
              </div>
              <div className="bg-blue-500 col-span-6">
                <Chessboard
                    boardSize={noOfQueen}
                    isRunning={isRunning}
                />
              </div>
              <div className="col-span-3">
                <RightPanel
                    elapsedTime={elapsedTime}
                    gameStatus={gameStatus}
                    queenPlaced={queenPlaced}
                    boardSize={noOfQueen}
                />
              </div>
            </section>
        </div>
    )
}

export default App