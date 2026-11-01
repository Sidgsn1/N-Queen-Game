import { useEffect, useState } from "react";
import LeftPanel from "./components/LeftPanel"
import Navbar from "./components/Navbar"
import RightPanel from "./components/RightPanel"
import Chessboard from "./components/Chessboard";
import { countConflicts,isGameSolved } from "./utils/gameLogic";

const App = () => {
  const [noOfQueen,setNoOfQueen] = useState(4);
  const [isRunning,setIsRunning] = useState(false);
  const [gameStatus,setGameStatus] = useState("Not Started");
  const [elapsedTime,setElapsedTime] = useState(0);

  const [queens, setQueens] = useState([]);

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
    setQueens([]);
  }

  const handleBoardSizeChange = (size) => {
    setNoOfQueen(size);
    setIsRunning(false);
    setGameStatus("Not Started");
    setElapsedTime(0);
    setQueens([]);
  };


  useEffect(()=>{
    if(!isRunning) return

    const timerId = setInterval(()=>{
      setElapsedTime(prev => prev+1)
    },1000)

    return ()=>clearInterval(timerId)
  },[isRunning])



  const conflicts = countConflicts(queens);

  const isSolved = isGameSolved(queens, noOfQueen);


  useEffect(() => {
      if (isRunning && isSolved) {
          setGameStatus("Solved");
          setIsRunning(false);
      }
  }, [isRunning, isSolved]);
    return (
        <div className="w-full h-dvh overflow-hidden bg-slate-950 flex flex-col items-center">
            <Navbar />
            <section className="flex-1 min-h-0 grid grid-cols-12 overflow-hidden">
              <div className="col-span-3 min-h-0 min-w-0">
                <LeftPanel 
                    boardSize={noOfQueen}
                    onBoardSizeChange={handleBoardSizeChange}
                    onStart={startGame}
                    onReset={resetGame}
                    onPause={pauseGame}
                />
              </div>
              <div className="col-span-6 min-h-0 min-w-0 flex items-center justify-center">
                <Chessboard
                    boardSize={noOfQueen}
                    isRunning={isRunning}
                    queens={queens}
                    setQueens={setQueens}
                />
              </div>
              <div className="col-span-3 min-h-0 min-w-0">
                <RightPanel
                    elapsedTime={elapsedTime}
                    gameStatus={gameStatus}
                    queenPlaced={queens.length}
                    boardSize={noOfQueen}
                    conflicts={conflicts}
                />
              </div>
            </section>
        </div>
    )
}

export default App