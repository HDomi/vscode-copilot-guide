---
title: 기본 명령어
metaTitle: 기본 명령어
metaDescription: 기본 명령어
sidebar_position: 1
hide_table_of_contents: true
---

1. Copilot Chat에는 기본적으로 지원하는 명령어들이 있다.
<div className="img-wrapper">
    <img src={require('@site/static/img/chat-category/cate-1.png').default} />
</div>

2. /help를 이용해 알아보자
<div className="img-wrapper">
    <img src={require('@site/static/img/chat-category/cate-2.png').default} />
</div>

- @workspace - 워크스페이스에 대해 질문합니다.
- /explain - 선택한 코드의 작동 방식을 설명합니다.
- /tests - 선택한 코드에 대한 단위 테스트 생성하기
- /fix - 선택한 코드의 문제점에 대한 수정 제안
- /new - 새 워크스페이스에 대한 스캐폴드 코드 생성
- /newNotebook - 새 주피터 노트북 만들기
- @vscode - VS 코드에 대해 질문
- /search - 워크스페이스 검색을 위한 쿼리 매개변수 생성
- /api - VS 코드 확장 개발 관련 문의
- @terminal - 터미널에서 수행하는 방법 문의
- /clear - 세션 초기화

3. 해당하는 명령어를 통해 특정한 메소드, 파일별로 타입별 문의가 가능하며, 이는 질문의 정확도를 높여준다.

4. 물론 Copilot Chat 세션뿐만이 아닌, 편집기 내에서 Ctrl + I 를 눌러 나오는 UI에서도 동일한 질문이 가능하다.
원하는 메소드를 드래그 후에 /explain 입력, 한글 답변을 위해 "한글로 설명"도 적어주었다.
<div className="img-wrapper">
    <img src={require('@site/static/img/chat-category/cate-3.png').default} />
</div>

5. 좌측에 새로운 Copilot Chat 세션이 시작되며, 함수의 각 구성요소 설명 및 더 나은 코드를 위한 방향 또한 제시해 준다.
<div className="img-wrapper">
    <img src={require('@site/static/img/chat-category/cate-4.png').default} />
</div>
