## 👨‍💻팀원 소개

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

## 🤝협업 툴

- Discord
- Notion
- Github
- Figma

## 📝과제 목적

- 여행 상품 리스트를 보고 장바구니에 저장할 수 있는 사이트 구현
- Best Practice 만들어 제출하기

## 🔗[배포주소]

## ⚙️설치 및 실행 가이드

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

## 🚀기능

### 메인 페이지

- 여행 상품 정보 (Mock JSON) 를 활용하여 여행 상품 정보 노출
- 예약 버튼 클릭 시 여행 상품 장바구니에서 사용 할 수 있도록 상품 데이터를 저장
- 여행 상품 정보 클릭 시 모달창을 통해 여행 상품을 자세히 안내
- 여행 상품 조회 시 필터 기능 (가격, 지역, 다중 필터)

### 장바구니 페이지

- 장바구니 내부 여행 상품 조회
- 장바구니 내부 여행 상품 삭제
- 장바구니 내부 여행 상품의 구매 수량 변경
- 장바구니 내부 여행 상품의 총 결제액,  총 상품 개수를 계산하여 표시

### DEMO
#### 예약하기 기능
![](https://velog.velcdn.com/images/hyorimm/post/6fa2f2c5-d6ae-4f02-9855-c60bb839f007/image.gif)
#### 다중 필터링 기능
![](https://velog.velcdn.com/images/hyorimm/post/95ec840f-49bc-4885-aed5-77988cd6b4e9/image.gif)
#### 장바구니 기능
![](https://velog.velcdn.com/images/hyorimm/post/bad2bf0e-01f8-4927-a69c-a284c8dc62b1/image.gif)

## ✨기술 스택

- React
- Typescript
- redux-toolkit
- axios
- react-router-dom
- chakra-ui
- emotion
- craco → webpack 설정을 확장하기 위해 사용하였습니다. Path Alias를 사용합니다

## ✅과제 진행 방법

[기능 구현 목록](./REQUIREMENTS.md)을 작성 후 아래와 같이 분류하였습니다.

1. **main page 구현** 
2. **상품 필터 기능 구현** 
3. **reservations page 구현** 

분류에 따라 팀원 개개인이 과제를 수행했습니다. 리뷰 시간을 정하여 해당 시간에 PR에서 코드리뷰를 했습니다. 투표를 통해 Best Practice를 선정한 후, 다른 과제 중 좋았던 구현들을 의논하여 추가하였습니다.  [이슈](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/issues)와 [PR메시지](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/pulls)를 활용하여 문서화하였습니다.

## 🌟Best Practice Process

**Mar 8, 2023**  　|　[main page 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/pull/12)

- context API의 렌더링 이슈로 인해 context API가 아닌 redux/toolkit을 사용한 것
- 향후 각 페이지의 크기를 고려하여 lazy와 suspense를 사용해서 코드 스플리팅을 사용한 것
- toast message를 통한 UX 향상
- 코드 가독성
- 장바구니, 상품 상태 전역적 상태 관리

**Mar 9, 2023** 　|　[여행 상품 filter 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/pull/18)

- 필터링에 사용되는 항목들을 utils로 묶어서 코드 분리한 점
- 전역적으로 관리할 필요가 없는 항목에 대해 useState와 useEffect로 상품 필터 기능을 구현한 것 
- 공간 필터 버튼의 토글 기능을 통한 여러 조건의 필터링이 가능한 점
- 관심사의 분리가 잘 되서 좋은 가독성

**Mar 10, 2023**  　|　[reservations page 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/pull/29)

- 삭제 기능 실행 전 유저에게 확인받는 과정이 있는 점
- 재사용성과 관심사에 따라 적절한 코드 분리
- 장바구니에 관련된 action을 한 가지로 통일한 후 commandType을 전달하여 각 type에 맞게 state를 변경하는 방식을 통해 action을 직접 사용하는 코드 단에서 코드의 길이가 줄어들고, 가독성이 좋아짐
- 장바구니에 담긴 배열에서 findIndex를 통해 배열의 전체 순회를 딱 한 번만 실행하고, index를 통해 상품에 직접 접근하여 state를 변경시켜주는 부분
- Chakra-UI의 Table을 사용한 장바구니 UI 구현
- UI 관련 포멧팅 함수 작성
- 적절한 커밋 태그와 추가적인 설명이 필요하면 작성한 커밋 본문
- 중복되는 코드를 템플릿화 하여 줄임(toast 템플릿 생성기)

## 🐞이슈 및 버그

**Mar 7, 2023**  　|　[상태 관리 툴 사용 유무](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/issues/7)


## 🗂️파일 구조

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
