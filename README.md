## 프로젝트 기획

#### 프로젝트 명

    영화 리뷰 사이트

#### 제작 의도

    현재 상영 영화에 대한 정보와 관람객들의 리뷰를 제공하고 개봉 예정 영화들을 소개하기 위함. 뿐만 아니라 예전 영화들의 리뷰 및 정보를 제공하기 위함.

#### 개발 목표

    한눈에 알아보기 쉬운 UI로 pc, 테블릿, 모바일 등 다양한 기기에 알맞은 사이즈로 제작

    header
    -> 로고와 아이콘으로 구성
    -> 로그인시 로그인 버튼 로그아웃으로 변경

    home
    -> 스와이프를 활용한 슬라이드로 카테고리별 영화 리스트 제작

    detail
    -> 리뷰 등록 폼을 만들어 리뷰를 등록 할 수 있게 함.
    -> 로그인 하지 않을시 리뷰 작성이 되지 않게 구현.
    -> 리뷰가 100자 이상시 더보기 버튼 구현
    -> 관련영상 더보기를 만들어 예고편등 영화 소개 영상 구현

    search
    -> 인기 검색어 콘텐츠가 검색하면 사라짐

    login
    -> 아이디는 4자 이상, 비밀번호는 8자 이상

    Sign-up
    -> 아이디, 비밀번호 입력으로 간단한 가입
    -> 공백,한글 아이디,비밀번호 사용 금지

### 사이트 이용법

#### 활용 스킬

    HTML, CSS, JS, Node.js, React

#### API 참고 사이트

[바로가기](https://developer.themoviedb.org/)

#### 사이트 맵

    Router - home
           - detail
           - search
           - login
           - sign-up
           - pageNotFound

#### 설치 라이브러리

- React Router DOM
- styled-components
- 폰트어썸
- react-style-reset
- swiper
- node-fetch@2
- axios
- @tanstack/react-query
- react-hook-form
- react-spinners
- react-helmet-async
- gh-pages

#### 개발 계획

    1일차(화)
    [x] 라우터 구성
    [x] header 컴포넌트 제작
    [x] 폰트어썸으로 필요한 아이콘 연결
    [x] footer 컴포넌트 제작
    [x] globalStyled 컴포넌트 제작
    [x] styled-reset 연결
    [x] 폰트 연결

    2일차(수)
    [x] home 컴포넌트 제작
    [x] home api 구성
    [x] home 컨텐츠 링크 연결
    [x] detail 컴포넌트 제작
    [x] detail api 구성

    3일차(목)
    [x] search api 구성
    [x] search 컴포넌트 제작

    4일차(금)
    [x] 로그인시 헤더 로그아웃으로 변경
    [x] 로그인 안할시 리뷰 작성 안되게 하기
    [x] login 컴포넌트 제작
    [x] sign-up 컴포넌트 제작
    [x] 회원가입 에러메세지 설정
    [x] 로그인 에러메세지 설정
    [x] loading 컴포넌트 제작

    5일차(토)
    [x] pageNotFound 컴포넌트 제작
    [x] 상세페이지에 예고편 만들기(더보기)
    [x] 뒤로가기 만들기
    [x] 배포 테스트

    6일차(일)
    [x] 페이지별 타이틀(헬멧) 등록
    [x] 페이지 상단이동

    7일차(월)
    [x] 댓글 글자제한 두고 더보기 만들기
    [x] 오류 해결
    [x] 배포 테스트

    모바일 반응형 제작
    [x] home
    [x] detail
    [x] search
    [x] login
    [x] sign-up

    태블릿 반응형 제작
    [x] home
    [x] detail
    [x] search
    [x] login
    [x] sign-up

    해결해야할것
    [x] 검색 후 다른 페이지 갔다가 돌아오면 undefined값으로 검색되는 현상

## 개발 일정

- 기간: 11.23 (목)

  > 프로젝트 기획, 사이트맵 구성 및 라우터

- 기간: 11.24 (금)

  > 디자인 관련 리서치 및 수집

- 기간: 11.25 (토)

  > pc 버전 와이어 프레임 제작

- 기간: 11.26 (일)

  > 반응형 와이어 프레임 제작(모바일, 태블릿)

- 기간: 11.27 (월)

  > 디자인 기획 컨펌 후 수정 후 인터렉션 구성

- 기간: 11.28 (화)

  > 프로젝트 생성 후 라우터 연결, header & footer 컴포넌트 개발

- 기간: 11.29 (수)

  > Home 컴포넌트 개발 api 연결, Detail 컴포넌트 개발 후 api 연결 및 링크 연결

- 기간: 11.30 (목)

  > Search 컴포넌트 개발 후 api 연결 및 링크 연결

- 기간: 12.1 (금)

  > login & sign-up 컴포넌트 개발

- 기간: 12.2(토)

  > pageNotFound 컴포넌트,loading 컴포넌트 개발 후 배포 테스트

- 기간: 12.3(일)

  > 오류 해결하고 배포 테스트

- 기간: 12.4 (월)

  > 검사 후 오류 수정

- 기간: 12.5 (화)

  > 검사 후 배포
