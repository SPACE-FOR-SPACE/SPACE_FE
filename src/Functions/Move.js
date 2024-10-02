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

export function Up(arr, setArr, steps) {
    const newArray = [...arr];
    let [X, Y] = MyXY(newArray);

    for (let i = 0; i < steps; i++) {
        setTimeout(() => {
            if (X > 0) {
                [newArray[X][Y], newArray[X - 1][Y]] = [2, newArray[X][Y]]; // 0을 2로 변경
                X--; // 위쪽으로 한 칸 이동
                setArr([...newArray]); // 배열을 업데이트
            }
        }, i * 500); // 0.5초 간격으로 실행
    }
}

export function Down(arr, setArr, steps) {
    const newArray = [...arr];
    let [X, Y] = MyXY(newArray);

    for (let i = 0; i < steps; i++) {
        setTimeout(() => {
            if (X < newArray.length - 1) {
                [newArray[X][Y], newArray[X + 1][Y]] = [2, newArray[X][Y]]; // 0을 2로 변경
                X++; // 아래쪽으로 한 칸 이동
                setArr([...newArray]); // 배열을 업데이트
            }
        }, i * 500); // 0.5초 간격으로 실행
    }
}

export function Left(arr, setArr, steps) {
    const newArray = [...arr];
    let [X, Y] = MyXY(newArray);

    for (let i = 0; i < steps; i++) {
        setTimeout(() => {
            if (Y > 0) {
                [newArray[X][Y], newArray[X][Y - 1]] = [2, newArray[X][Y]]; // 0을 2로 변경
                Y--; // 왼쪽으로 한 칸 이동
                setArr([...newArray]); // 배열을 업데이트
            }
        }, i * 500); // 0.5초 간격으로 실행
    }
}

export function Right(arr, setArr, steps) {
    const newArray = [...arr];
    let [X, Y] = MyXY(newArray);

    for (let i = 0; i < steps; i++) {
        setTimeout(() => {
            if (Y < newArray[X].length - 1) {
                [newArray[X][Y], newArray[X][Y + 1]] = [2, newArray[X][Y]]; // 0을 2로 변경
                Y++; // 오른쪽으로 한 칸 이동
                setArr([...newArray]); // 배열을 업데이트
            }
        }, i * 500); // 0.5초 간격으로 실행
    }
}
