import { Check, ChessQueen, Grid3x3, Swords, Timer } from "lucide-react"

const RightPanel = ({elapsedTime,gameStatus,queenPlaced,boardSize})=>{

    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    return(
        <div className="h-full flex flex-col justify-between">
            {/* Status Card */}
            <section className="flex gap-4 items-center rounded-lg px-4 py-8  border border-[#302044] text-white bg-gradient-to-br from-[#080312] via-[#130525] to-[#200044] ">
                <div className="flex items-center justify-content-center px-4 py-4 rounded-xl bg-green-400 border-4 border-green-700">
                    <Check />
                </div>
                <div>
                    <h1 className="text-2xl">Solved!</h1>
                    <p>All 8 queens placed successfully</p>
                </div>
            </section>
            {/* BoardStats */}
            <section className="flex flex-col justify-center rounded-lg border border-[#302044] text-white px-4 bg-gradient-to-br from-[#080312] via-[#130525] to-[#200044] ">
                <div className="py-6 flex justify-between items-center border-b border-[#302044]">
                    <h1 className="flex gap-4">
                        <Grid3x3 size={28}/> Board Size
                    </h1>
                    <h3>{`${boardSize} X ${boardSize}`}</h3>
                </div>
                <div className="py-6 flex justify-between items-center border-b border-[#302044]">
                    <h1 className="flex gap-4">
                        <ChessQueen /> Queens Placed
                    </h1>
                    <h3>{`${queenPlaced} / ${boardSize}`}</h3>
                </div>
                <div className="py-6 flex justify-between items-center">
                    <h1 className="flex gap-4">
                        <Swords /> Conflicts
                    </h1>
                    <h3>0</h3>
                </div>
      
            </section>
            {/* TimerCard */}
            <section className="flex flex-col gap-4 items-center rounded-lg px-4 py-8  border border-[#302044] text-white bg-gradient-to-br from-[#080312] via-[#130525] to-[#200044] ">
                <h1 className="flex gap-4">
                    <Timer size={28}/>
                    Time Elapsed
                </h1>
                <div className="text-4xl font-bold tabular-nums">
                    {formattedTime}
                </div>
                <h1 className="px-4 py-1 bg-green-900 rounded-xl text-green-300">{gameStatus}</h1>
            </section>
        </div>
    )
}

export default RightPanel