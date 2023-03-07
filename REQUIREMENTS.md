# Requirements

### Main
- [x] 유저가 페이지를 처음 열었을 때 `/main`에 도착
- [x] 여행 상품 정보 (mock JSON) 를 활용하여 여행 상품 정보 노출
- [x] 리스트에서 노출해야 하는 정보: `idx, name, mainImage, price, spaceCategory`
- [x] 예약 버튼 생성 
- [x] 예약 버튼 클릭 시 여행 상품 장바구니에서 사용 할 수 있도록 상품 데이터를 저장
  - [x] 이미 담겨있는 상품 Qty++
  - [x] 구매 한도 이상 불가
- [x] 여행 상품 정보 클릭 시 모달창을 통해 여행 상품을 자세히 안내
- [x] 모달에서 노출해야 하는 정보: `idx, name, mainImage, description, spaceCategory, price, maximumPurchases, registrationDate`

### Filtering
- [ ] 가격 필터링 기능 (가격만 필터)
- [ ] 공간(지역) 필터링 기능 (공간만 필터)
- [ ] 다중 필터링 기능

### Reservations
- [ ] 저장한 여행 상품의 리스트 보여주기
- [ ] 저장한 여행 상품 삭제
- [ ] 여행 상품의 구매 수량(Qty) 변경
  - [ ] 구매한도이상 불가
- [ ] 장바구니에 있는 여행 상품의 총 결제액 수를 계산하여 표시
