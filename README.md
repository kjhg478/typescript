## Typescript with React

### React.FC를 이용해 얻을 수 있는 장점 2가지

- children 이라는 props가 기본적으로 탑재되어 있음
  (children이 react.node로 되어 있어서 별도로 값을 안 넣어줘도 됨
- 자동 완성의 기능

### React.FC 의 단점

- defaultProps가 제대로 작동하지 않음
- 그래서 function을 많이 사용하기도 함 ( function 사용시 defaultprops의 대한 조건을 명시해줘야 함 )

### Readonly 속성

- 읽기 전용 프로퍼티로 객체 생성 시 할당된 프로퍼티의 값을 바꿀 수 없다.
- ex) readonly studentID: number;

## 인터페이스, 타입

### 메소드 : 객체내에서 선언된 함수

### 인터페이스 (기본값 - void), 타입 (재사용 가능)

- 클래스 또는 객체를 위한 타입을 지정할 때 사용하는 문법
- 행위를 작성하지 않고 인터페이스가 가져야 할 속성만 기술할 수 있음
- 인터페이스를 타입으로 가지는 값은 인터페이스의 구조를 그 값으로 가지도록 강제 된다.
- 인터페이스 내에서 메소드도 사용 가능하다.
- 작성 중인 코드에 대한 더 많은 정보를 타입스크립트에게 제공
- 객체에 대한 타입을 설정할 때 인터페이스를 쓰면 인터페이스를 쭉, 타입이면 타입 쭉 일관성을 유지해야 한다.

### 함수의 반환 (Return) 타입

- 반환 값이 없을 경우 void
- ex) function 함수이름 (매개변수1, 매개변수2) : 타입 명시 { }

### 함수의 매개변수 (Parameter)

- parameter에 타입 명시
- 타입스크립트는 함수에 정의된 모든 매개 변수가 함수에 필요하다고 가정
- 함수 호출 시 타입스크립트 컴파일러는 함수의 정의 된 매개 변수와 함수를 호출할 때 전달하는 아규먼트를 비교 검사한다. 이 때, 매개 변수와 아규먼트 수가 일치하지 않으면 오류 발생 !

### 선택적 매개변수 (Optional Parameter)

- 매개 변수 이름 뒤에 물음표를 사용
- ex) function 함수이름 (message? : string)
- 전달되는 매개변수가 여러 개이고 몇 가지만 선택적 매개변수 인 경우, 필수 매개변수 뒤에 위치 시켜야 함

### 기본 매개변수 (Default Parameter)

- 아무런 값이 전달되지 않을 때, undefined 대신 할당 된 기본 값을 출력할 수 있다.
- ex) function 함수이름 (message? : string = 'there')

### Arrow Function

- function add (x, y) { return x + y; }
- const add = (x, y) ⇒ x + y / const add = (x, y) ⇒ return ({ x + y })
