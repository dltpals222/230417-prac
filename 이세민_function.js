//function함수

//1번째 덧셈
function examOne (first, second){
  if(typeof(first) === 'string'){
    console.log('first에 문자열 데이터를 입력하셨습니다.')
  } else if(typeof(second) === 'string'){
    console.log('second에 문자열 데이터를 입력하셨습니다.')
  } else {
    return first + second
  }
}

console.log(examOne(2,3));



//2번째 곱셈
function examTwo(first, second, third){
  if(typeof(first) !== 'number'){
    console.log('first인자가 숫자가 아닙니다.')
  } else if( typeof(second) !== 'number'){
    console.log('second인자가 숫자가 아닙니다.')
  } else if(typeof(third) !== 'number'){
    console.log('third인자가 숫자가 아닙니다.')
  } else {
    return first*second*third
  }
}

console.log(examTwo(2,3,4));



//3번째 문자열 길이 구하기
function examThree(str){
  if(typeof(str) === 'string'){
    let count = 0;
    const arrStr = str.split("")
    arrStr.map(element => count++)
    return count
  } else {
    console.log('문자열이 아닙니다.')
  }
}

console.log(examThree('hello'));



//4번째 최솟값 판별하기 (수정 1차)
function examFour(array){
  if(typeof array === "object"){ //이것만으로는 객체와 배열을 구분할 수 없음
    if(Array.isArray(array)===true){
      return Math.min(...array)
    } else {
      console.log('typeof에서 object이지만 배열이 아닙니다.')
    }
  } else {
    console.log('typeof에서 object가 아닙니다.')
  }
}

console.log(examFour([3,1,4,2]))




//5번째 배열값 누산(총합)구하기 (수정 1차)
function examFive(array){
  if(typeof array === 'object'){ //이것만으로는 객체와 배열을 구분할 수 없음
    if(Array.isArray(array)===true){
      let count = 0;
      array.map(element => count += element)
      return count
    } else {
      console.log('typeof에서 object이지만 배열이 아닙니다.')
    }
  } else {
    console.log('typeof에서 object가 아닙니다.')
  }
}

console.log(examFive([1,2,3]))
