//변수 const나 let으로 변경, 변수이름 개선
const executionSequenceArray = [];

//arrow함수 이용
function printExecutionSequence() {
    executionSequenceArray.forEach((v, i) => {
        console.log((i + 1) + '번째 : ' + v)
    })
}

//1. isNum함수 개선 isNum함수를 위한 isThatNum 함수만들기
function isNum(number1, number2, number3) {
    for (let i = 1; i <= arguments.length; i++) {
        if (isTypeNumber(arguments[i - 1]) === false) {
            return false
        }
    }
    return true
}

function isTypeNumber(number) {
    return toString.call(number) === '[object Number]'
}


//2. 인자를 구분할 때 !== 를 최대한 안쓰고 단순화시키는 걸로 개선
//3. 계산하는 함수들의 이름과 인자들의 명칭들 모두 변경
function calcCircleWidth(radius1, radius2) {
    if (radius1 > radius2) {
        console.log(radius1 + '부터' + radius2 + '까지라구요? 다시 한번 생각해주세요')
        return;
    }
    if (isNum(...arguments) && arguments.length === 1) {
        const circleWidth = radius1 * radius1 * Math.PI
        console.log('반지름이 ' + radius1 + '인 원의넓이는' + circleWidth + '입니다.');
        executionSequenceArray.push('circle');
        return;
    } else if (isNum(...arguments) && arguments.length === 2) {
        for (let i = radius1; i <= radius2; i++) {
            console.log('반지름이' + i + '인 원의 넓이 : ' + (i * i * Math.PI));
            executionSequenceArray.push('circle')
        }
        return;
    }
    console.log('인자의 갯수가 맞지 않거나 숫자가 아닙니다.');
}


function calcRectWidth(RectLowerSide, RectHeight) {
    if(isNum(...arguments) && arguments.length === 2) {
        const RectWidth = RectLowerSide * RectHeight
        console.log('밑변이' + RectLowerSide + '높이가' + RectHeight + '인 사각형의 넓이는' + RectWidth + '입니다.');
        executionSequenceArray.push('Rect')
        return;
    }
    console.log('인자의 갯수가 맞지 않거나 숫자가 아닙니다.')
}

function calcTrapezoidWidth(trapezoidLowerSide, trapezoidTopSide, trapezoidHeight) {
    if(isNum(...arguments) && arguments.length === 3) {
        const trapezoidWidth = (trapezoidLowerSide + trapezoidTopSide) * trapezoidHeight / 2
        console.log('밑변이 ' + trapezoidLowerSide + '아랫변이 ' + trapezoidLowerSide + '높이가 ' + trapezoidHeight + '인 사다리꼴의 넓이는 ' + trapezoidWidth + '입니다.')
        executionSequenceArray.push('trapezoid');
        return;
    }
    console.log('인자의 갯수가 맞지 않거나 숫자가 아닙니다.')
}

function calcSylinderWidth (sylinderRadius, sylinderHeight) {
    if(isNum(...arguments) && arguments.length === 2) {
        const sylinderWidth = 2 * (sylinderRadius * sylinderRadius * Math.PI) + ((2 * Math.PI * sylinderRadius) * sylinderHeight)
        console.log('반지름이 ' + sylinderRadius + '높이가 ' + sylinderHeight + '인 원기둥의 넓이는 ' + sylinderWidth + '입니다.');
        executionSequenceArray.push('sylinder');
        return;
    }
    console.log('인자의 갯수가 맞지 않거나 숫자가 아닙니다.');
}


//4. 함수 인자의 갯수 확인
function getArea(polygon, num1, num2, num3) {
    if (polygon === 'circle' && arguments.length === 3) {
        calcCircleWidth(num1, num2)
        return;
    } else if (polygon === 'rect' && arguments.length === 3) {
        calcRectWidth(num1, num2)
        return;
    } else if (polygon === 'trapezoid' && arguments.length === 4) {
        calcTrapezoidWidth(num1, num2, num3)
        return;
    } else if (polygon === 'sylinder' && arguments.length === 3) {
        calcSylinderWidth(num1, num2)
        return;
    } else if (polygon === 'circle' && arguments.length === 2) {
        calcCircleWidth(num1)
        return;
    }
    console.log('인자의 갯수가 맞지 않거나 숫자가 아닙니다.')
}

getArea('circle', 2, 3);
getArea('rect', 2, 3);
getArea('trapezoid', 2, 3, 4);
getArea('sylinder', 2, 3);
getArea('meiv', 3, '2');