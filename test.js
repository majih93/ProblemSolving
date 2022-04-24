// Linked List
// 기본적으로, JS가 내장객체로 제공하는 자료구조가 아닌 자료구조를 구현하는 것은 내장되어 있는 자료구조를 기반으로 구현하는 거시
// 배열, 객체, Set, Map 을 활용해서 하는 것이다.

// 그리고 기본적으로 custom 자료구조는, 기존의 자료구조를 활용할 때보다 더 최선의 해결책이 될때 사용해야하는 것을 명심하자.

// custom Object
// blueprint of the data structure we wanna build

// nodes, head, tail

class LinkedList {
  constructor() {
    this.head = null; // 첫 번째 노드
    this.tail = null; // 마지막 노드
  }
  // 리스트 마지막에 새로운 요소를 더하는 로직
  append(value) {
    // 새롭게 생성되는 각 노드는 객체형태여야한다. 왜? 단순히 값을 담는 것 뿐만 아니라 다음 값에 대한 pointer 도 가져야함
    const newNode = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  // 리스트 제일 앞에 새로운 요소 더하는 로직
  prepend(value) {
    const newNode = { value: value, next: this.head };

    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  // 요소 찾기
  // 중복된 요소가 있으면 첫 등장만 반환
  // 한번 직접 구현해보자.
  find()

  // 요소 삭제
  // 리스트 어디에 위치했는지와, 중복값이 몇개인지와 무관하게 value 가 일치하는 데이터를 모두 삭제할 수 있어야한다.
  delete(value) {
    // 리스트가 비었으면 바로 return
    if (!this.head) {
      return null;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curNode = this.head;

    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  // 리스트 안에 값을 출력하기 위한 method
  toArray() {
    const elements = [];

    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }
}

const linkedList1 = new LinkedList();

linkedList1.append(2);
linkedList1.append(3);
linkedList1.append(4);
linkedList1.append("안녕");
linkedList1.append(true);
linkedList1.prepend("first");

console.log(linkedList1.head);
console.log(linkedList1.tail);
console.log(linkedList1.toArray());

linkedList1.delete(4);

console.log(linkedList1.toArray());
