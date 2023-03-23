# 원티드 프리온보딩 인턴쉽 2주차 과제

### [결과물 바로가기](https://pre-onboarding-9th-2-8.netlify.app)

Travel Tech 스타트업 [라이크어로컬](https://likealocal.co.kr/)  기업 과제입니다.  
이 프로젝트는 [CRA + TypeScript 템플릿](https://create-react-app.dev/docs/adding-typescript/)으로 제작되었습니다.

#### 과제 목적

- 여행 상품 리스트를 보고 장바구니에 저장할 수 있는 사이트 구현
- Best Practice 만들어 제출하기

#### 과제 진행 방법

[기능 구현 목록](./REQUIREMENTS.md)을 작성 후 아래와 같이 분류하였습니다.

1. Main page 구현
2. 상품 필터 기능 구현
3. Reservations page 구현

분류에 따라 팀원 개개인이 과제를 수행했습니다. PR에서 코드 리뷰를 진행 후. 투표를 통해 Best Practice를 선정 했습니다. [이슈](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/issues)와 [PR메시지](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/pulls)를 활용하여 문서화하였습니다.

<br/>

# What Did I Do

## Features

#### [Reservations page 구현 PR](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/pull/29) 
- 🏆 Best Practice 선정
- 예약 상품을 관리하는 장바구니 페이지 파트입니다.
- 기존 데이터 저장 방식에 비효율성을 제기하고 이를 개선하였습니다.
- 반복 작업을 줄이기 위해 UI 포매팅 함수 등을 분리 하였습니다.

#### [여행 상품 Filter 구현 PR](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/pull/18) 
- 🏆 Best Practice 선정
- 지역, 가격대 별 상품 필터링, 다중 필터링 기능 파트입니다.
- 필터링에 사용되는 항목들을 utils로 묶어서 코드 분리하였습니다.

#### [Main page 구현 PR](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/pull/10)
- 상품의 목록을 보여주고 장바구니 담기 등의 기능 파트입니다.
- 추후 기능 구현을 고려한 설계를 하였습니다.

## Issues
#### [기술 스택 선정에 관하여: 상태관리 라이브러리](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/issues/7)
- 상태관리 라이브러리의 필요성을 파악 후 리덕스 사용을 제안하였고 팀 기술 스택으로 채택되었습니다.


<br/>

# Team

<table border>
  <tbody>
    <tr>
       <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/67201870?v=4"  alt="김상연님"/><br />
        <br/>
        <a href="https://github.com/greyHairChooseLife">
          <img src="https://img.shields.io/badge/김상연-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src='https://avatars.githubusercontent.com/u/90181028?v=4'  alt="박지헌님"/><br />
        <br/>
        <a href="https://github.com/jiheon788">
          <img src="https://img.shields.io/badge/박지헌-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/106523012?v=4"  alt="복준우님"/><br />
       <br/>
        <a href="https://github.com/bokjunwoo">
          <img src="https://img.shields.io/badge/복준우-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/48446896?v=4"  alt="양소연님"/><br/>
                <br/>
        <a href="https://github.com/Noeyso">
          <img src="https://img.shields.io/badge/양소연-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
         <tr>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/62588402?v=4"  alt="정찬욱님"/><br />
       <br/>
        <a href="https://github.com/raw20">
          <img src="https://img.shields.io/badge/정찬욱-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/103406196?v=4"  alt="조효림님"/><br/>
       <br/>
        <a href="https://github.com/hyorimcho">
          <img src="https://img.shields.io/badge/팀장 : 조효림-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/82688516?v=4"  alt="최정훈님"/><br/>
                <br/>
        <a href="https://github.com/jhoon9494">
          <img src="https://img.shields.io/badge/최정훈-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/17325845?v=4"  alt="한호수님"/><br/>
       <br/>
        <a href="https://github.com/tnghgks">
          <img src="https://img.shields.io/badge/한호수-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
  </tbody>
</table>

<br/>

# Team History

## Features Best Practice

- Mar 10, 2023 | [Reservations Page 구현 Best Practice](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/pull/29)
- Mar 9, 2023 | [여행 상품 filter 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/pull/18)
- Mar 8, 2023 | [main page 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/pull/12)

## Issues

- Mar 7, 2023 | [기술 스택 선정에 관하여: 상태관리 라이브러리](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/issues/7)

<br/>

# Getting Started

#### Install

```
npm i
```

#### Build

```
npm run build
```

#### Start

```
npm start
```

<br/>

# Features

- PLP, PDP 
- CRUD 예약 상품 장바구니 (구매 수량 변경)
- 가격, 지역 별 필터링 및 다중 필터링
- 총 결제액, 총 상품 개수를 합산

<br/>

# Tech Stack

`React`, `Typescript`, `Redux-toolkit`, `Axios`, `React-router-dom`, `Chakra-UI`, `emotion`, `craco`

Collaboration Tool: `Discord`, `Notion`, `Github`, `Figma`

<br/>

# DEMO

#### 예약하기 기능

![](https://velog.velcdn.com/images/hyorimm/post/6fa2f2c5-d6ae-4f02-9855-c60bb839f007/image.gif)

#### 다중 필터링 기능

![](https://velog.velcdn.com/images/hyorimm/post/95ec840f-49bc-4885-aed5-77988cd6b4e9/image.gif)

#### 장바구니 기능

![](https://velog.velcdn.com/images/hyorimm/post/bad2bf0e-01f8-4927-a69c-a284c8dc62b1/image.gif)

<br/>

## Directory

```
src
 ┣ api
 ┃ ┗ product
 ┣ components
 ┃ ┣ main
 ┃ ┗ reservations
 ┣ constants
 ┣ interface
 ┣ lib
 ┃ ┣ hooks
 ┃ ┗ utils
 ┣ pages
 ┗ store
   ┗ slices

```

