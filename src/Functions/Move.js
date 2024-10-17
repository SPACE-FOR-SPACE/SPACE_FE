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

    if (X > 0) {
        [newArray[X][Y], newArray[X - 1][Y]] = [2, newArray[X][Y]]; // 0을 2로 변경
        setArr([...newArray]); // 배열을 업데이트
    }
}

export function Down(arr, setArr) {
    const newArray = [...arr];
    let [X, Y] = MyXY(newArray);

    if (X < newArray.length - 1) {
        [newArray[X][Y], newArray[X + 1][Y]] = [2, newArray[X][Y]]; // 0을 2로 변경
        setArr([...newArray]); // 배열을 업데이트
    }
}

export function Left(arr, setArr) {
    const newArray = [...arr];
    let [X, Y] = MyXY(newArray);

    if (Y > 0) {
        [newArray[X][Y], newArray[X][Y - 1]] = [2, newArray[X][Y]]; // 0을 2로 변경
        setArr([...newArray]); // 배열을 업데이트
    }
}

export function Right(arr, setArr) {
    if (!Array.isArray(arr)) {
        console.error('Right 함수에 전달된 arr가 배열이 아닙니다:', arr);
        return;
    }
    const newArray = arr.map(row => [...row]);  // 2차원 배열의 깊은 복사
    let [X, Y] = MyXY(newArray);

    if (Y < newArray[X].length - 1) {
        [newArray[X][Y], newArray[X][Y + 1]] = [2, newArray[X][Y]]; // 0을 2로 변경
        setArr(newArray); // 배열을 업데이트
    }
}
