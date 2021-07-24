# BannerGenerator

React를 이용해서 Velog 같은 곳에서 사용할 수 있는 Banner를 만들 수 있는 웹 앱

[사이트 바로가기](https://bannergenerator.netlify.app/)

* React
* Material UI + Styled-Component
  * Material UI 사용 연습
* Figma로 프로토타이핑

## 프로토타이핑
프로젝트를 만들기 전에 먼저 **Figma** 를 사용해서 전체적인 프로토타이핑을 하였다. **Figma**를 사용하는 것이 이번이 처음이라 간단하게만 만들었다.

[Figma](https://www.figma.com/file/6Zw2wvZwwoxJipNAGP5FNr/Banner-Generator)

<p align="center"><img src="https://user-images.githubusercontent.com/71371075/120612394-1dd89500-c490-11eb-856e-22bdca660aea.png"></p>

## 스크린샷
|              메인화면 - 데스크탑          |              메인화면 - 모바일            |
| ---------------------------------------- | ---------------------------------------- |
| ![메인화면 - 데스크탑](./screenshot/main-desktop.png)| ![메인화면 - 모바일](./screenshot/main-mobile.png)|

## 기술 스택
* React
* React-redux
* Styled-Component + Material UI
* Figma

## 프로젝트를 하며 배운 지식
* Material UI를 사용하는 방법
* Figma를 사용하는 방법
* Context API를 사용해서 상태 관리하는 방법
* react-redux를 사용해서 전역 상태 관리하는 방법

### update 2021.07.23
* Context API대신 react-redux로 상태관리 하도록 리팩토링 함
* 미들웨어를 사용하진 않고 전역 상태관리만 하는 거라 별다른 변경점은 없지만 redux도 공부할 겸 리팩토링을 해보았다.
* 다른 프로젝트들도 redux로 변경 예정

### update 2021.07.24
* ducks pattern 적용