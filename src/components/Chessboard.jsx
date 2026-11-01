import { ChessQueen } from "lucide-react";

const Chessboard = ({ boardSize, isRunning, queens,setQueens }) => {
    
    const indexes = Array.from(
        {length:boardSize},(_,index)=>index
    )
    const rows = Array.from(
        { length: boardSize },
        (_, index) => boardSize - index
    );
    const columns = Array.from(
        { length: boardSize },
        (_, index) => String.fromCharCode(65 + index)
    );

    const handleCellClick = (row, col) => {

        // Step 1: Game running hai ya nahi?
        if (!isRunning) return;

        // Step 2: Clicked cell par queen already hai?
        const isQueenPresent = queens.some(
            queen => queen.row === row && queen.col === col
        );

        // Step 3: Queen present hai toh remove karo
        if (isQueenPresent) {
            setQueens(prev =>
                prev.filter(
                    queen => !(queen.row === row && queen.col === col)
                )
            );
        } 

        // Step 4: Queen present nahi hai toh add karo
        else {
            // Maximum N queens ki limit
            if (queens.length >= boardSize) return;

            setQueens(prev => [...prev, { row, col }]);
        }
    };

    return (
    <div className="w-full min-h-0 flex items-center justify-center">
        <div
            className="grid grid-cols-[24px_minmax(0,1fr)_24px] grid-rows-[24px_minmax(0,1fr)_24px] gap-2 max-w-[720px]"
            style={{
                width: "min(100%, 82vh, 760px)",
                aspectRatio: "1 / 1"
            }}
        >
                <div className="col-start-2 row-start-1 flex justify-around items-center text-white">
                    {columns.map((col) => (
                        <div key={col}>{col}</div>
                    ))}
                </div>
                <div className="col-start-1 row-start-2 flex flex-col justify-around items-center text-white">
                    {rows.map((row) => (
                        <div key={row}>{row}</div>
                    ))}
                </div>
                <div className="col-start-2 row-start-2 grid h-full w-full"
                    style={{
                        gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))`
                    }}
                >
                    {/* Your nested map */}
                    {
                        indexes.map(row =>(
                            indexes.map(col=>(
                                <div key={`${row}-${col}`} className={`flex items-center justify-center aspect-square max-w-[720px] border border-purple-500/30 bg-[#100b1c] p-2
                                    ${(row+col)%2===0?"bg-[#503078]":"bg-[#241632]"}
                                    text-black`}
                                    onClick={() => handleCellClick(row, col)}
                                    >
                                            <span className=" text-white text-xs">
                                                {queens.some(
                                                        queen => queen.row === row && queen.col === col
                                                    ) ? (
                                                        <ChessQueen className="w-8 h-8 text-white" />
                                                    ) : null
                                                }
                                            </span>
                                </div>
                            ))
                        ))
                    }
                </div>  
                <div className="col-start-3 row-start-2 flex flex-col justify-around items-center text-white">
                    {rows.map((row) => (
                        <div key={row}>{row}</div>
                    ))}
                </div>
                <div className="col-start-2 row-start-3 flex justify-around items-center text-white">
                    {columns.map((col) => (
                        <div key={col}>{col}</div>
                    ))}
                </div>
        </div>
    </div>
);
};

export default Chessboard;


