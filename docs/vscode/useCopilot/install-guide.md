---
title: "설치방법"
metaTitle: "설치방법"
metaDescription: "설치방법"
sidebar_position: 1
hide_title: true
---

## 설치방법

### VS Code에서의 Copilot 사용

1. https://github.com/features/copilot 에 접속하여 구매 혹은 무료평가판 시작
2. 본인의 Github/GitLab 계정과 연동
3. 보안설정
   <div className="img-wrapper">
      <img src={require('@site/static/img/install-copilot/install-copilot2.png').default} />
   </div>

- Github 접속 및 로그인
- 프로필 아이콘 클릭 > Settings
- 좌측 탭에서 Copilot 선택
- Suggestions matching public code를 “Blocked”로 변경
- Allow GitHub to use my code snippets for product improvements 체크해제

4. VS Code Extensions에서 Github Copilot 검색 및 install
   <div className="img-wrapper">
      <img src={require('@site/static/img/install-copilot/install-copilot.png').default} />
   </div>
5. 결제했던 Github/GitLab 계정으로 로그인
6. 즐거운 사용!

VS Code에서의 Gibhub Copilot은 크게 4가지 방법으로 나눌 수 있다.

- 주석을 통한 생성
- 새로운 초안 작성
- 변수, 메소드명을 통한 생성
- 오류 수정
