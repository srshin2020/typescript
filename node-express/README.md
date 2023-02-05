# typescript

### youtube 강좌

-   https://www.youtube.com/watch?v=2LnqQTj27cE&t=8s
    -   Typescript를 이용해서 NodeJS의 Express를 시작하기

### get started

-   global로 typescript 설치 (이미 설치시 생략 가능)
    -   sudo npm install -g typescript
-   typescript version 확인
    -   tsc --version
-   tsconfig.json 설치
    -   tsc --init
-   npm 설치
    -   npm init -y
-   express 설치 (배포 버전)
    -   npm i express
-   ts node, express 사용자 정의 유형 설치 (개발 버전)
    -   npm i -D ts-node nodemon @types/express @types/node
    -   npm install -D typescript@next

### 실행

-   컴파일
    -   tsc [file_name.ts]
    -   tsc -w
