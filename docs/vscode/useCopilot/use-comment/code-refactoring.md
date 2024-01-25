---
title: "코드 리팩토링"
metaTitle: "코드 리팩토링"
metaDescription: "코드 리팩토링"
sidebar_position: 1
hide_title: true
hide_table_of_contents: true
---

## 코드 리팩토링

```
※개발자는 리팩토링 된 함수를 그대로 사용하지 않고,
변경점과 기존 코드의 차이점을 살펴보며 공부하는게 중요하다.
```

효율성이나 가독성을 높이기 위해 Copilot에 코드의 특정 부분을 리팩터링하도록 요청할 수 있습니다.

1. 기존 코드
   <div className="img-wrapper">
      <img src={require('@site/static/img/use-comment/code-refactoring/refact-1.png').default} />
   </div>

2. 주석 작성
   <div className="img-wrapper">
      <img src={require('@site/static/img/use-comment/code-refactoring/refact-2.png').default} />
   </div>
3. 새로운 코드가 생성됨
   <div className="img-wrapper">
      <img src={require('@site/static/img/use-comment/code-refactoring/refact-3.png').default} />
   </div>
4. 실제 동작테스트 > 동작완료
   <div className="img-wrapper">
      <img src={require('@site/static/img/use-comment/code-refactoring/refact-4.png').default} />
   </div>

------------------추가------------------

1. 리팩토링 예시
    <div className="img-wrapper">
      <img src={require('@site/static/img/use-comment/code-refactoring/refact-5.png').default} />
   </div>
1. 이런 이상한 코드를 리팩토링 해달라고 했을 때
    <div className="img-wrapper">
      <img src={require('@site/static/img/use-comment/code-refactoring/refact-6.png').default} />
   </div>
1. 해줍니다.
    <div className="img-wrapper">
      <img src={require('@site/static/img/use-comment/code-refactoring/refact-7.png').default} />
   </div>
