# typescript

### 강좌

-   https://www.youtube.com/watch?v=2LnqQTj27cE&t=8s
    -   Typescript를 이용해서 NodeJS의 Express를 시작하기

### get started

-   sudo npm install -g typescript
    -   global로 typescript 설치 (이미 설치시 생략 가능)
-   tsc --version
    -   typescript version 확인
-   tsc --init
    -   tsconfig.json 설치
-   npm init -y
    -   npm 설치
-   npm i express
    -   express 설치 (배포 버전)
-   npm i -D ts-node nodemon @types/express @types/node typescript@next
    -   ts node, express 사용자 정의 유형 설치 (개발 버전)

### 실행

-   컴파일
    -   tsc [file_name.ts]
    -   tsc -w
