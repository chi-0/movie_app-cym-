## 프로젝트 기획

#### 프로젝트 명

    영화 리뷰 사이트

#### 제작 의도

    현재 상영 영화에 대한 정보와 관람객들의 리뷰를 제공하고 개봉 예정 영화들을 소개하기 위함.       뿐만 아니라 예전 영화들의 리뷰 및 정보를 제공하기 위함.

#### 개발 목표

    한눈에 알아보기 쉬운 UI로 단순한 header와 pc, 테블릿, 모바일 등 다양한 기기에 알맞은 사이즈로 제작

    header
    -> 로고와 아이콘으로 구성

    home
    -> 스와이프를 활용한 슬라이드로 카테고리별 영화 리스트 제작

    detail
    -> 리뷰 등록 폼을 만들어 리뷰를 등록 할 수 있게 함.
    -> 로그인 하지 않을시 리뷰 작성이 되지 않게 구현.

    search
    -> 엔터를 누르지 않아도 검색결과가 나오게 구현.

    login
    -> 아이디는 5자 이상, 비밀번호는 8자 이상
    -> 에러 메세지

    Sign-up
    -> 아이디, 비밀번호, 전화번호 입력으로 간단한 가입

#### 활용 스킬

    HTML, CSS, JS, Node.js, React

#### API 참고 사이트

[바로가기](https://developer.themoviedb.org/)

#### 예상 사이트 맵

    Router - home
           - detail
           - search
           - login
           - sign-up
           - pageNotFound

#### 개발 계획

    1일차
    [x] 라우터 구성
    [x] header 컴포넌트 제작
    [x] 폰트어썸으로 필요한 아이콘 연결
    [x] footer 컴포넌트 제작
    [x] globalStyled 컴포넌트 제작
    [x] styled-reset 연결
    [x] 폰트 연결

    2일차
    [] home 컴포넌트 제작
    [] home api 구성

    3일차
    [] detail 컴포넌트 제작
    [] detail api 구성
    [] home 컨텐츠 링크 연결

    4일차
    [] search 컴포넌트 제작
    [] search api 구성

    5일차
    [] login 컴포넌트 제작
    [] sign-up 컴포넌트 제작

    6일차
    [] 인터렉션 제작
    [] pageNotFound 컴포넌트 제작
    [] loading 컴포넌트 제작
    [] 페이지별 타이틀(헬멧) 등록
    [] 배포 테스트

    모바일 반응형 제작
    [] home
    [] detail
    [] search
    [] login
    [] sign-up

    태블릿 반응형 제작
    [] home
    [] detail
    [] search
    [] login
    [] sign-up

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

  > Home 컴포넌트 개발 api 연결

- 기간: 11.30 (목)

  > Detail 컴포넌트 개발 후 api 연결 및 링크 연결

- 기간: 12.1 (금)

  > Search 컴포넌트 개발 후 api 연결 및 링크 연결

- 기간: 12.2(토)

  > login & sign-up 컴포넌트 개발

- 기간: 12.3(일)

  > pageNotFound 컴포넌트,loading 컴포넌트 개발 후 배포 테스트

- 기간: 12.4 (월)

  > 검사 후 오류 수정

- 기간: 12.5 (화)

  > 검사 후 배포

### 설치 라이브러리

- React Router DOM
- styled-components
- 폰트어썸
- react-style-reset
- swiper
- axios
- @tanstack/react-query
