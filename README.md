## 홈쿡 프로젝트 

<p align="center">
  <img src="https://github.com/cotatohomecook/homecook_frontend/assets/109844803/b40bd106-5187-4f3a-a44e-eb1af94c58ea" alt="image" width="270" height="300" />
</p>


## 🖥️ 프로젝트 소개
React Native과 Spring Boot를 통해 개발한 안드로이드 전용 홈메이드 집밥 배달 앱입니다. 
<br>

## 🕰️ 프로젝트 진행 기간
* 23.03.01 - 23.09.30

### 🧑‍🤝‍🧑 맴버구성
 - 기획자 (박세라, 김인서, 최윤경)
 - 디자이너 (정이진)
 - 프론트엔드 (전유정, 박소현)
 - 백엔드 (김민욱, 조용헌)
   
### ⚙️ 개발 환경
- `React Native @0.71.4`


## 📌 주요 기능
#### 로그인 - (구현중) 

#### 회원가입 - (구현중)

### 구매자 메인페이지
- Main 배너 이미지 슬라이드 구현
- 랭킹별 자동 슬라이드 구현
- 맛집 종류별 무한 스크롤 구현
- 랜덤 상점, 랭킹별 상점, 카테고리별 상점 API를 GET 요청

### 구매자 지도 
- 구글맵 API를 사용하여 반경 3km 이내 상점 표시
- 지도상 마커 UI를 상점별 리뷰점수가 적힌 마커로 교체 
- 지도 내 마커를 클릭하면 보이는, 해당 상점 정보가 담긴 슬라이드 구현 
- 지도에 표시할 정보 API GET 요청 

### 구매자 검색창 모달 
- 검색 유형(상호명 또는 메뉴명)을 선택하는 드롭다운 메뉴 
- LocalStorage에 검색 기록 저장
- 메뉴명, 상호명 검색 API GET 요청

### 구매자 검색 결과 
- 검색 결과 무한 스크롤 구현
- 기존 검색어에서 주문순, 리뷰순, 거리순으로 검색 필터 구현
- 검색된 상점 라우팅 기능 구현
- 검색된 상점별 즐겨찾기 구현
- 주문순, 리뷰순, 거리순 검색 및 즐겨찾기 유무 API GET 요청
  
### 구매자 상점 즐겨찾기 
- 즐겨찾기 폴더 생성 기능 구현
- 즐겨찾기 상점 등록, 상점 삭제 기능 구현
- 즐겨찾기 등록, 삭제 API Post, Delete 요청
  
### 구매자 메뉴 주문 
- 메뉴 주문을 장바구니에 추가하는 기능 
- 입력된 주소를 LocalStorage에 검색 기록 저장
- 가게 정보, 메뉴 정보, 수량, 가격, 이미지 정보를 request body 파라미터로 POST 요청
- 결제 화면 UI 구현

### 구매자 리뷰 
- 전체 주문 내역 확인
- 주문 정보 API GET 요청 
- 리뷰 작성, 수정 기능 구현 

### 마이페이지 
- 마이페이지 UI 구현
- 개인정보 수정 UI 구현 

### 판매자 페이지 (구현중)
