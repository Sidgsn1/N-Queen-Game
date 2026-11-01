import { useState } from "react";
import queenImage from "../assets/leftpanel.png";
import { Play, RotateCcw } from "lucide-react";
const LeftPanel = ({boardSize,onBoardSizeChange,onStart,onReset,onPause}) => {
   

    const decrementFnc = ()=>{
        onBoardSizeChange(prev=>Math.max(prev-1,4));
    }

    const incrementFnc = ()=>{
        onBoardSizeChange(prev => Math.min(prev+1,8));
    }
    return (
        <div className="bg-gradient-to-br from-[#080312] via-[#130525] to-[#200044] rounded-2xl overflow-hidden">

            {/* Content */}
            <div className="bg-cover bg-right p-6"
                    style={{
                        backgroundImage: `url(${queenImage})`,
                        backgroundPosition:"right top"
                    }}>
                <h1 className="text-5xl font-bold text-white tracking-tight">
                    Solve the
                    <span className="block text-purple-500">
                        N Queens
                    </span>
                    Problem
                </h1>

                <p className="w-1/2 text-gray-400 mt-3">
                    Place N queens on an N × N board so that
                    no two queens attack each other.
                </p>    
            </div>

            {/* Queen Image */}
            <div className="p-6 flex flex-col gap-4">
                <h1 className="text-white my-4">Board Size (N)</h1>
                <div className="rounded-lg bg-[#171126] border border-[#302044] flex justify-between items-center outline-violet-100">
                    <button className="px-8 py-5 bg-[#302044] rounded-lg hover:bg-purple-700 transition text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                        onClick={decrementFnc} disabled={boardSize === 4}
                    >-</button>
                    <div className="text-white">{boardSize}</div>
                    <button className="px-8 py-5 bg-[#302044] rounded-lg hover:bg-purple-700 transition text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                        onClick={incrementFnc} disabled={boardSize === 8}
                    >+</button>
                </div>

                <div className="flex flex-col gap-4">
                    <button className="w-full py-4 flex items-center justify-center bg-purple-700  text-white rounded-lg"
                        onClick={onStart}
                    >
                        <Play size={28}/>
                        Start Game
                    </button>
                    <button className="w-full py-4 flex items-center justify-center bg-[#302044] text-white rounded-lg"
                        onClick={onReset}    
                    >
                        <RotateCcw size={28} />
                        Reset Board
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LeftPanel;