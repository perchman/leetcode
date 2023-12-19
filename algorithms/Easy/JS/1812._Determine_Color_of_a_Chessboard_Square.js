const chessboard = [
    ['a1', 'black'], ['b1', 'white'], ['c1', 'black'], ['d1', 'white'],
    ['e1', 'black'], ['f1', 'white'], ['g1', 'black'], ['h1', 'white'],
    ['a2', 'white'], ['b2', 'black'], ['c2', 'white'], ['d2', 'black'],
    ['e2', 'white'], ['f2', 'black'], ['g2', 'white'], ['h2', 'black'],
    ['a3', 'black'], ['b3', 'white'], ['c3', 'black'], ['d3', 'white'],
    ['e3', 'black'], ['f3', 'white'], ['g3', 'black'], ['h3', 'white'],
    ['a4', 'white'], ['b4', 'black'], ['c4', 'white'], ['d4', 'black'],
    ['e4', 'white'], ['f4', 'black'], ['g4', 'white'], ['h4', 'black'],
    ['a5', 'black'], ['b5', 'white'], ['c5', 'black'], ['d5', 'white'],
    ['e5', 'black'], ['f5', 'white'], ['g5', 'black'], ['h5', 'white'],
    ['a6', 'white'], ['b6', 'black'], ['c6', 'white'], ['d6', 'black'],
    ['e6', 'white'], ['f6', 'black'], ['g6', 'white'], ['h6', 'black'],
    ['a7', 'black'], ['b7', 'white'], ['c7', 'black'], ['d7', 'white'],
    ['e7', 'black'], ['f7', 'white'], ['g7', 'black'], ['h7', 'white'],
    ['a8', 'white'], ['b8', 'black'], ['c8', 'white'], ['d8', 'black'],
    ['e8', 'white'], ['f8', 'black'], ['g8', 'white'], ['h8', 'black']
];

const squareIsWhite = function(coordinates) {
    const chessboardMap = new Map(chessboard);

    if (chessboardMap.get(coordinates) === 'white') {
        return true;
    } else {
        return false;
    }
};