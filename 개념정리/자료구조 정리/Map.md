# Maps

Set가 조금 더 디테일한 면이 있는 배열이었던 것처럼, Map은 조금 더 디테일한 면이 있는 객체라고 생각하면 되겠다.

## Map 의 특징

- key-value pair로 이루어진 데이터의 집합은 순서가 정해져있다.
- key를 통해 요소에 접근(key 는 unique)
- iterable(for of loop 사용 가능)
- 객체와는 다르게 key로는 무엇이든 가능하다(배열과 같은 reference value도 가능)
- 자바스크립트 객체와는 조금 다르게, meant to be pure data storages
  -> optimized for data access
  -> 물론, 자바스크립트에서는 결국 모든건 객체이지만, 조금 더 데이터 저장 및 조회 등 데이터를 담는 역할에 충실할 수 있도록 만들어진 자료구조라고 보면 되겠다.
  -> 객체와는 다르게, 메서드로 객체 내의 다른 key에 접근해서 특정 기능을 정의할 수 없다. 함수를 value로 저장하는 것은 가능하지만, 그 함수 내에서 Map 내에 다른 데이터에 접근할 수 없다.

## Map 내장 메서드

```javascript
// 새로운 Map 객체 생성
const resultData = new Map();

// set  메서드를 통해 Map 에 새로운 데이터 추가
// set(key, value) 형태로 추가
resultData.set("average", 1.53);
resultData.set("lastResult", null);

const Germany = { name: "Germany", population: 82 };

// 객체도 key로 지정하는 것이 가능
resultData.set(Germany, 0.89);

// iterable 이기 때문에 for of loop을 통해 순환 가능
for (let x of resultData) {
  console.log(x);
}
// [ 'average', 1.53 ]
// [ 'lastResult', null ]
// [ { name: 'Germany', population: 82 }, 0.89 ]
// Map 내의 값에 접근하면 key value pair 가 하나의 배열에 담겨 있는 것을 확인할 수 있다.

// 객체와 마찬가지로, 같은 key 값으로 다른 value를 전달해서 추가하게 되면 이전에 있던 value를 덮어씌운다.
resultData.set("average", 1.89);

console.log(resultData);
// Map(3) {
//   'average' => 1.89, => 기존의 1.53에서 1.89로 변경되었다
//   'lastResult' => null,
//   { name: 'Germany', population: 82 } => 0.89
// }

// get() 메서드를 통해서 값에 접근
// 객체와 같이 객체명.key이름  형태로 특정 value 에 접근하는 것은 안된다.(undefined 반환)
// => error 가 아니라 undefined 가 반환되는 이유는, Map 도 객체이기 때문
const average = resultData.get("average");

console.log(average);
// 1.89

// delete() 메서드를 통해 값을 삭제
resultData.delete(Germany);

console.log(resultData);
// Map(2) { 'average' => 1.89, 'lastResult' => null }
```

## 객체 vs Map

객체는 특정한 기능을 데이터와 함께 활용하고 싶을 때 사용하면 좋고, 배열과 마찬가지로 더 일반적인 데이터구조이다.

Map 같은 경우에는, 더 데이터 저장소 같은 특징이 강하다. 또한 데이터에 접근하는 것이 더 쉽다.
