# 🍽️ Boiler-Plate

## 👍 실행
```bash
npm i  # 실행 시 husky 및 커밋 메시지 템플릿 적용
```

<br />

## 🗂️ Boiler-Plate 폴더 구조
```bash
├── .husky
│
├── public
│
└── src
    ├── api
    │
    ├── components
    │
    ├── constants
    │
    ├── interface
    │
    ├── lib
    │   ├── hooks
    │   │
    │   └── utils
    │
    ├── pages
    │
    └── Router
```

<br />

## husky
### pre-commit

- staged 된 파일들이 있을 때, 그 파일들만 prettier format합니다. 

- formatted된 파일들은 수정 된 것이기 때문에 해당 파일들을 다시 git add로 stage에
올려줍니다.

- 우리 팀의 노션에 공유된 커밋 컨벤션, 히스토리 관리 도움말 링크를 출력합니다.

### pre-push

- eslint로 검사 한 결과를 보여주고, warning, error가 있다면 수정 하기 위해
push를 중단 할 것인지 선택합니다.(user interaction)

- 위 선택에서 중단하지 않고 계속 진행하거나, eslint 검사를 통과했다면 push를 통해 업데이트 되는 내용(커밋 메시지와 파일명)에 대해 다시 한번 push 진행 여부를 선택합니다.(user interaction)

- push로 업데이트 되는 목록의 범위 : <origin/master 브랜치> ... <HEAD>

- 우리 팀의 노션에 공유된 협업 flow 관련 도움말 링크를 출력합니다.

<br />

## commit message template
- 노션에 공유 된 저희 팀의 컨벤션과 이슈를 링크하고 또 커밋과 함께 닫는
  방법을 적어 두었습니다. 

- 기존에 템플릿이 없는 경우에만 지정된 파일로 템플릿이 지정됩니다.
  
- package.json의 postinstall script를 이용했으며, 지정된 파일은
  .commitTemplate 입니다.