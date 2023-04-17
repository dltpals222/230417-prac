//3 번째 문제에서 딱 length만 직접적으로 안쓰고 길이 구하는 방법만 생각해서 연구해봄

//1번째 방법
const a = 'hello'
let aa = a.split("")
let countA = 0;
for(let i = 0; i<aa.length;i++){
  countA ++;
}
console.log(countA)
//for문제 length가 간접적으로도 사용된다.



//2번째 방법 (chat GPT에 물어봄)
const b = 'hello'
console.log(Buffer.byteLength(b))
//이 방법은 영어로 적으면 정확하게 나오지만 한글을 적는순간 정확도가 낮아진다.
//영어는 1바이트 한글은 3바이트이기 때문이다.



//3번재 방법
const c = 'hello'
const cc = c.split("")
let countC = 0;

cc.map((element) => {countC ++})

console.log(countC)
//간접적으로도 length를 사용하지 않음
