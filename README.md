## 배포
### 배포링크 : [배포링크](https://react-shopping-products-five.vercel.app/)
![image](https://github.com/woowacourse/react-shopping-products/assets/86130706/032d7c7b-f980-45c1-a47a-3e33b87286c6)

( http api사용으로 인해, 안전하지 않은 콘텐츠를 허용해주셔야, 빈 페이지가 아닌 정상적 페이지가 보입니다. :) )

## 구현에 신경 쓴 부분
스텝1
- 각 비동기 API는 커스텀훅에서 담당하고, (useFetchAddCarts , useFetchProducts)
- 무한스크롤을 위한 훅을 만들어 구현하였습니다. (useIntersectionObserver)
- 테스팅을 위해 msw로 API 서버를 모킹하였습니다.
스텝2
- react-query로 서버실패 상태에대한 로직 구현
- RTL 비동기 테스트
- 지난미션에서 만든 모달을 활용하여 장바구니모달
- api호출 공통로직 ApiClient로 리팩토링


# Figma
![image](https://github.com/skiende74/react-shopping-products/assets/86130706/0cea08dc-3fe5-403d-9ea8-c223c5ffffc5)

# 기능 요구 사항

1. 상품 목록 조회

   - [x] API를 통해 상품 목록을 가져올 수 있다.
   - [x] 맨 처음 API 호출 시 20개의 목록을 불러온다.
   - [x] 이 후 추가 API 호출 시 4개의 목록을 불러온다.
   - [x] 무한 스크롤을 할 수 있다.

2. 상품 정렬 및 필터링

   - [x] 상품 카테고리별 필터링을 할 수 있다.
   - [x] 상품을 정렬 할 수 있다. (낮은 가격 순, 높은 가격 순)

3. 상품 장바구니 담기

   - [x] 사용자가 담기 버튼을 누르면, API를 통해 장바구니에 추가 될 수 있다.
   - [x] 이 때 장바구니에 담긴 상품 '종류'의 갯수로 장바구니 아이콘에 숫자를 표시한다.
   - [x] 장바구니에서 빼기 버튼을 누르면, 장바구니에서 해당 아이템이 제거되고 상품 목록 페이지의 담기 버튼은 활성화된다.

4. 테스트

   - [x] API 요청 시 MSW 서버를 모킹한다.
   - [x] API 요청 상태에 따른 변화(로딩상태 표시, 에러메세지 표시)를 검증한다.

5. 에러
   - [x] 상품목록을 불러오는 중 에러가 발생할 경우, 에러 메시지를 사용자에게 알려주는 UI를 표시한다.
