# 프리 온보드 코스 과제

### 🔗 배포 사이트 : [Link](https://dongwonnn.github.io/pre_onboarding_course/)

### 📜 json-server 이용한 테스트 방법

현재는 일반 data를 이용해 redux로만 구현되어 있습니다. **json-server**를 이용하여 **redux-saga로 비동기 네트워크 통신**을 구현했습니다. 아래 두 소스를 변경만 해주시면 테스트 가능합니다.

1. 새 터미널에 `json-server --watch db.json --port 3001` 로 **json server** 구동
2. **src/pages/HomePage.tsx** 주석 내용 교체

- 임시 data를 이용한 Redux 구현

  ```javascript
  // src/pages/HomePage.tsx
  import { loadNavigationSuccess } from "../reducers/navigation";
  import { loadFieldSuccess } from "../reducers/field";
  import { navData } from "../lib/data";
  import { fieldData } from "../lib/data";

  useEffect(() => {
    dispatch(loadNavigationSuccess(navData));
    dispatch(loadFieldSuccess(fieldData));
  }, [dispatch]);
  ```

- json-server를 이용한 네트워크 비동기 통신

  ```javascript
  import { loadNavigationRequest } from "../reducers/navigation";
  import { loadFieldRequest } from "../reducers/field";

  useEffect(() => {
    dispatch(loadNavigationRequest());
    dispatch(loadFieldRequest());
  }, [dispatch]);
  ```

### 📚 사용 라이브러리

#### 1. React with Typescript

- 원티드같이 검색 결과가 중요한 사이트는 SSR이 더 적합하지만 SSR 라이브러리에 typescript를 붙이는 과정이 익숙치 않아 CSR을 이용했습니다.
- **CSR에서 SEO 최적화를 진행했습니다.**
  - `react-helmet` : **메타 정보** 변경
  - `react-snap` : **hydrate** 이용한 **pre-render**
  - `loadable/component` : **코드 스플리팅**

#### 2. styled-components

- scss는 무겁다고 판단해 CSS-in-JS 인 **styled-components**를 이용했습니다.

#### 3. Redux, Redux-Saga 전역 상태 라이브러리

- 글로벌 네비게이션 데이터, 탐색의 **데이터들을 전역**으로 저장하기 위해 **Redux**를 이용했습니다.
- 임시 서버로 `json-server`를 이용해 `Redux-Saga`를 이용해 *네트워크 비동기 처리*를 구현했습니다.

#### 4. json-server

- 백엔드가 아직 구현되지 않았다는 가정하에, 네트워크 통신을 하기 위해 사용했습니다.

### ⚙️ 주요 기능 설명

#### 1. 컴포넌트 설계

- 페이지가 여러 개 있다고 가정하고 pages 폴더에 HomePage 컴포넌트를 구현했습니다.
- **GlobalLayout 컴포넌트**를 생성, children을 이용해 **글로벌 네비게이션을 구현**했습니다.

#### 2. 드랍다운 구현

- `onMouseOver` 이벤트 리스너를 사용, 탐색 카테고리에 **마우스가 올라가 있을 때** boolean 변수를 이용, display css 값을 조작했습니다.
  **카테고리별로 id를 지정**해 탐색 카테고리 `mouse over` 시 변수를 업데이트했습니다. 탐색이 아닌 다른 카테고리를 `mouse over` 시에 변수를 false로 설정했습니다.

  ```javascript
  // 글로벌 네비게이션 탐색, 그 외 부분
  const onMouseOver = useCallback(
    (e) => {
      if (e.target.id === "1") {
        setIsSearchMouseOver(true);
      } else {
        setIsSearchMouseOver(false);
      }
    },
    [setIsSearchMouseOver, setIsFocused]
  );
  ```

- dim 화면 중, `e.stopPropagation()`를 이용해 어두운 화면에만 `mouse over` 시, 드랍다운이 꺼지도록 구현했습니다.

  ```javascript
  const BodyBlackout = () => {
    const onMouseOver = useCallback(
      (e) => {
        e.stopPropagation();
        setIsSearchMouseOver(false);
        setIsFocused(false);
      },
      [setIsSearchMouseOver, setIsFocused]
    );

    return <BodyBlackoutStyled isActive={isActive} onMouseOver={onMouseOver} />;
  };
  ```

#### 3. 전역 상태 관리

- `json-server`를 이용해 임시 네트워크 비동기 통신을 구현했습니다. HomePage에 처음 접속했을 때 `useEeffect`를 통해 불러오도록 설정했습니다.

  ```javascript
  // HomePage.tsx
  useEffect(() => {
    dispatch(loadNavigationRequest());
    dispatch(loadFieldRequest());
  }, [dispatch]);
  ```

- field, navigation reducer에 data, loading, error를 구현, 처리했습니다.

  ```javascript
  // navCategory.tsx
  // 로딩 처리
  if (navLoading) {
    return <p>로딩 중..</p>;
  }

  // 오류 처리
  if (navError) {
    return <p>네트워크 오류</p>;
  }
  ```

#### 4. 스타일링

- **dim 처리**.
  드랍다운이 생성될 때 나머지 부분을 BodyBlackout 컴포넌트를 통해 구현했습니다.

  ```javascript
  export const BodyBlackoutStyled =
    styled.div <
    { isActive: boolean } >
    `
  display: ${(props) => (props.isActive ? "block" : "none")};
  
  width: 100%;
  height: 100%;
  
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: -1;
  
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.1);
  `;
  ```

- **animation 지정**.
  boolean형 변수를 이용해 display를 조작했습니다. 이를 구현하기 위해 **keyframes을** 사용해 animation을 처리했습니다.

  ```javascript
  const slideDown = keyframes`
    from {
      height: 0vh;
      opacity: 0;
    }
    to {
      height: 324px;
      opacity: 1;
    }
  `;

  export const FieldWrapper =
    styled.article <
    { isActive: boolean } >
    `
    display: ${(props) => (props.isActive ? "display" : "none")};
  
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${slideDown};
    animation-fill-mode: forwards;
  `;
  ```

- **반응형 디자인**.
  **break point <= 768px** 에서 드랍다운이 사라지도록 구현

  ```javascript
  export const FieldWrapper =
    styled.article <
    { isActive: boolean } >
    `
    @media screen and (max-width: 768px) {
      display: none;
    }
    `;
  ```

  **dim** 부분 사라지도록 구현

  ```javascript
  export const BodyBlackoutStyled =
    styled.div <
    { isActive: boolean } >
    `
    @media screen and (max-width: 768px) {
      display: none;
    }
  `;
  ```

#### 5. SEO 최적화

- `react-helmet` 이용한 메타 내용 변경

  ```javascript
  // src/pages/HomePage.tsx
  const HomePage = () => {
    return (
      <>
        <Helmet>
          <title>커리어 여정을 행복하게, 원티드</title>
        </Helmet>
      </>
    );
  };
  ```

- `react-snap`, `hydrate` 이용한 `pre-render`

  ```javascript
  // src/index.tsx
  const rootElement = document.getElementById("root");

  if (rootElement !== null && rootElement.hasChildNodes()) {
    hydrate(
      <BrowserRouter basename="pre_onboarding_course">
        <Provider store={store}>
          <App />
          <GlobalStyles />
        </Provider>
      </BrowserRouter>,
      rootElement
    );
  } else {
    render(
      <BrowserRouter basename="pre_onboarding_course">
        <Provider store={store}>
          <App />
          <GlobalStyles />
        </Provider>
      </BrowserRouter>,
      rootElement
    );
  }
  ```

- `@loadable/component` 이용한 코드 스플리팅

  ```javascript
  // src/app.tsx
  import loadable from "@loadable/component";

  const HomePage = loadable(() => import("./pages/HomePage"));
  ```

#### 6. 임시 캐러셀, 카드 데이터 생성

- 구현 테스트를 위해 간단하게 더미 컴포넌트를 구현했습니다.
- src/components/dummyCarousel, dummyCard

### 📄 설치목록

yarn create react-app pre_onboarding_course --template typescript </br>
yarn add styled-components @types/styled-components styled-reset </br>
yarn add antd @types/antd @ant-design/icons </br>
yarn add react-cions @types/react-icons </br>
yarn add redux react-redux @types/react-redux redux-devtools-extension redux-saga </br>
yarn add axios json-server </br>
yarn add react-helmet react-snap @loadable/component @types/loadable\_\_component </br>
