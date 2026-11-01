export const isQueenAttacking = (queen1, queen2) => {
    const sameRow = queen1.row === queen2.row;

    const sameColumn = queen1.col === queen2.col;

    const sameDiagonal =
        Math.abs(queen1.row - queen2.row) ===
        Math.abs(queen1.col - queen2.col);

    return sameRow || sameColumn || sameDiagonal;
};

export const countConflicts = (queens) => {
    let conflicts = 0;

    for (let i = 0; i < queens.length; i++) {
        for (let j = i + 1; j < queens.length; j++) {

            if (isQueenAttacking(queens[i], queens[j])) {
                conflicts++;
            }
        }
    }

    return conflicts;
};

export const isGameSolved = (queens, boardSize) => {
    const conflicts = countConflicts(queens);

    return queens.length === boardSize && conflicts === 0;
};