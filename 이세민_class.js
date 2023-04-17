//class 생성자 함수

//1번째 덧셈
class examOne {
  constructor(first, second) {
    this.first = first, 
    this.second = second;
  }

add(){
  if(typeof(this.first)==='string'){
    console.log('first에 문자열 데이터를 입력하셨습니다.')
  } else if (typeof(this.second) === 'string'){
    console.log('second에 문자열 데이터를 입력하셨습니다.')
  } else {
    return this.first + this.second
  }
}
}


const examAdd = new examOne(2,3);
console.log(examAdd.add());



//2번째 곱셈
class examTwo{
  constructor(first,second,third){
    this.first =first
    this.second = second
    this.third = third
  }
  set first(value){
    if(typeof(value) === 'number'){
      this._first = value
    } else {
      console.log('first인자가 숫자가 아닙니다.')
    }
  }
  set second(value){
    if(typeof(value) === 'number'){
      this._second = value
    } else {
      console.log('second인자가 숫자가 아닙니다.')
    }
  }
  set third(value){
    if(typeof(value) === 'number'){
      this._third = value
    } else {
      console.log('third인자가 숫자가 아닙니다.')
    }
  }

  multiplication(){
    return this._first*this._second*this._third
  }
}

const examMulti = new examTwo(2,3,4)
console.log(examMulti.multiplication())



//3번째 문자열 길이 구하기
class examThree{
  constructor(str){
    this.str = str;
  }
  set str(value){
    if(typeof(value)==='string'){
      this._str = value
    } else {
      console.log('문자열을 입력해주세요')
    }
  }

  threeLength (){
    let count = 0;
    const arrStr = this._str.split("")
    arrStr.map(element => count++)
    return count
  }
}
const examLength = new examThree('hello')
console.log(examLength.threeLength())



//4번째 최솟값 판별하기 (수정 1차)
class examFour{
  constructor(array){
    this.array = array
  };

  set array(value){
    if(typeof(value) === 'object'){ //이것만으로는 객체와 배열을 구분할 수 없음
      if(Array.isArray(value)=== true){
        this._array = value
      } else {
        console.log('typeof에서 object이지만 배열이 아닙니다.')
      }
    } else {
      console.log('typeof에서 object가 아닙니다.')
    };
  };
  
  min(){
    return Math.min(...this._array)
  }
}

const examMin = new examFour([3,1,4,2]);
console.log(examMin.min())



//5번째 배열값 누산(총합)하기 (수정 1차)
class examFive{
  constructor(array){
    this.array = array
  }
  
  set array(value){
    if(typeof value === 'object'){ //이것만으로는 객체와 배열을 구분할 수 없음
      if(Array.isArray(value)===true){
        this._array = value
      } else {
        console.log('typeof에서 object이지만 배열이 아닙니다.')
      }
    } else {
      console.log('typeof에서 object가 아닙니다.')
    }
  }

  accumulation(){
    let count = 0;
    this._array.map(element => count += element)
    return count
  }
}

const examSumming = new examFive([1,2,3])
console.log(examSumming.accumulation())