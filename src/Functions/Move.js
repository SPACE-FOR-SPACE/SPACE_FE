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

export function move(arr, setArr, direction, temp, setTemp, setDirection) {
    const newArray = [...arr];
    const position = MyXY(newArray);

    if (position === null) return;

    let [X, Y] = position;

    let targetX = X;
    let targetY = Y;


    if (direction === 'up') {
        setDirection("UP");
        targetX -= 1;
    }
    if (direction === 'down') {
        setDirection("DOWN");
        targetX += 1;
    }
    if (direction === 'left') {
        setDirection("LEFT");
        targetY -= 1;
    }
    if (direction === 'right') {
        setDirection("RIGHT");
        targetY += 1;
    }

    if (direction === 'action') {
        setTemp(2);
    } else if (
        targetX >= 0 && targetX < newArray.length &&
        targetY >= 0 && targetY < newArray[targetX].length &&
        newArray[targetX][targetY] !== 3 &&
        Math.floor(newArray[targetX][targetY] / 2000) !== 1
    ) {
        newArray[X][Y] = temp;
        setTemp(newArray[targetX][targetY]);
        newArray[targetX][targetY] = 0;

        setArr([...newArray]);
    }
}
