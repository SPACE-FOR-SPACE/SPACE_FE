function MyXY(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 0) {
                return [i, j];
            }
        }
    }
    return null;
}

export function Up(arr, setArr) {
    const newArray = [...arr];
    let [X, Y] = MyXY(newArray);
    const targetX = X - 1;

    if (targetX >= 0 && newArray[targetX][Y] !== 3 && Math.floor(newArray[targetX][Y] / 2000) !== 1) {
        [newArray[X][Y], newArray[targetX][Y]] = [2, newArray[X][Y]];
        setArr([...newArray]);
    }
}

export function Down(arr, setArr) {
    const newArray = [...arr];
    let [X, Y] = MyXY(newArray);
    const targetX = X + 1;

    if (targetX < newArray.length && newArray[targetX][Y] !== 3 && Math.floor(newArray[targetX][Y] / 2000) !== 1) {
        [newArray[X][Y], newArray[targetX][Y]] = [2, newArray[X][Y]];
        setArr([...newArray]);
    }
}

export function Left(arr, setArr) {
    const newArray = [...arr];
    let [X, Y] = MyXY(newArray);
    const targetY = Y - 1;

    if (targetY >= 0 && newArray[X][targetY] !== 3 && Math.floor(newArray[X][targetY] / 2000) !== 1) {
        [newArray[X][Y], newArray[X][targetY]] = [2, newArray[X][Y]];
        setArr([...newArray]);
    }
}

export function Right(arr, setArr) {
    const newArray = [...arr];
    let [X, Y] = MyXY(newArray);
    const targetY = Y + 1;

    if (targetY < newArray[X].length && newArray[X][targetY] !== 3 && Math.floor(newArray[X][targetY] / 2000) !== 1) {
        [newArray[X][Y], newArray[X][targetY]] = [2, newArray[X][Y]];
        setArr([...newArray]);
    }
}