# 🎁 상품 페이지 사이트
![Image](https://github.com/user-attachments/assets/f1462e19-7df5-448d-95b7-201516a12b64)

## 🛠 실행 방법

> ⚙️ 실행 환경  
> - Node.js 18 이상  
> - npm 9 이상

### ✅ 실행 경로
클라이언트 실행 경로: `product_feed-main` 루트 디렉토리

```bash
# 루트 디렉토리에서 실행
# 1. 설치
npm install

# 2. 실행
npm run dev

# 3. 브라우저에서 접속
http://localhost:3000
```

## 🛠 기술 스택
React, Next.js(App Router), TypeScript, React Query, Tailwind CSS

## 📁 폴더 구조

```
src
├── app/                                              # App Router 기반 페이지 및 전역 설정
│   ├── components/                                   # UI 컴포넌트 모음
│   │   ├── Header.tsx                                # 상단 헤더 컴포넌트
│   │   ├── InfiniteScrollTrigger.tsx                 # 무한스크롤 감지용 IntersectionObserver
│   │   ├── ProductGridCard.tsx                       # 그리드형 상품 카드 UI
│   │   ├── ProductGridSkeleton.tsx                   # 그리드형 로딩 스켈레톤
│   │   ├── ProductListCard.tsx                       # 리스트형 상품 카드 UI
│   │   ├── ProductListSkeleton.tsx                   # 리스트형 로딩 스켈레톤
│   │   ├── ProductSection.tsx                        # 상품 목록 전체 영역 (검색/정렬/무한스크롤 포함)
│   │   ├── SearchForm.tsx                            # 검색 입력 및 URL 쿼리 적용
│   │   ├── SortForm.tsx                              # 정렬 버튼 및 URL 쿼리 적용
│   │   └── StarRating.tsx                            # 소수점 별점 시각화 (꽉 찬/반/빈 별)
│   ├── favicon.ico                                   # 브라우저 탭 아이콘
│   ├── globals.css                                   # Tailwind 전역 스타일
│   ├── layout.tsx                                    # 전역 레이아웃 설정 (html/body)
│   ├── page.tsx                                      # 메인 페이지 (루트 경로 `/`)
│   └── Providers.tsx                                 # React Query 등 전역 Provider 설정
├── lib/                                              # API 함수 및 상태 유틸
│   ├── api.ts                                        # 상품 fetch 함수 (기본/검색/정렬)
│   ├── utils.ts                                      # 공통 유틸 함수 (필요 시 확장 가능)
│   └── viewMode.ts                                   # 랜덤 뷰 모드 결정 + localStorage 만료 유지
└── types/                                            # 전역 타입 정의
├── product.ts                                        # 상품 데이터 타입 정의
└── viewMode.ts                                       # 뷰 모드 및 localStorage 구조 타입 정의
```


## ⚙ 기능 소개
- API를 이용하여 데이터 가져오기
- 페이지 진입 시, 20개의 아이템이 기본으로 노출
- 상품명, 상품 설명, 썸네일 이미지, 별점, 리뷰 수 포함

![Image](https://github.com/user-attachments/assets/9b48b144-5699-4b81-9c15-14e1e31ac478)

- 페이지 최초 진입 시 50%확률로 랜덤하게 View 방식 결정
- 결정된 방식은 24시간 동안 유지/이후 다시 랜덤 결정

![Image](https://github.com/user-attachments/assets/b91cc1ba-e3c0-41db-b814-c4fdd383323c)

- searchAPI를 활용한 문자열 검색 가능
- sortAPI를 활용해 별점 내림차순으로 정렬 가능
- 검색 버튼 구현, 새로고침 시에도 필터 값 유지됨
- 검색 시 별점순 버튼 사라짐
- 검색 결과 없을 시 '일치하는 결과가 없습니다'문구 표시

![Image](https://github.com/user-attachments/assets/9069fea6-aa5b-4f3c-ad57-7d121ca39995)

- 무한 스크롤 구현, 검색/정렬시에도 동일하게 적용
-페이지 하단 도달 시 다음 20개의 아이템 자동으로 로드
- 마지막 데이터 로드 시 '더 이상 불러올 수 없습니다'문구 표시

![Image](https://github.com/user-attachments/assets/b38c96a2-4cb0-4763-9f38-894f7e90f8a4)


## 🔧 기술 구현 상세 

### 1. 📦 랜덤 뷰 모드 설정 및 24시간 유지

- 페이지 첫 진입 시 `list` 또는 `grid` 뷰를 `Math.random()`으로 50% 확률로 결정함
- 결정된 뷰 모드는 `localStorage`에 저장되며, 24시간 후 만료되도록 설정함
- `useViewMode` 훅으로 추상화하여 재사용성과 일관성 확보함

> 🧠 **왜 이렇게 구현했는지?**  
> 요구사항에 24시간 동안 동일한 뷰 모드를 유지해야 한다는 조건이 있었음  
> `Math.random()`은 0 이상 1 미만의 부동소수점 난수를 반환하므로,  
> `0 ≤ n < 0.5 → list`, `0.5 ≤ n < 1 → grid`로 50% 확률 분기함  
> 처음에는 `boolean`을 써서 `isListMode`로 관리할까 했지만, `list` / `grid` 명시가 직관적이라 `ViewMode` 타입을 따로 선언함  
> 또한 HTML/CSS 속성은 대부분 소문자이므로 문자열 기반 `'list' | 'grid'`로 설계함

#### 핵심 코드 요약

```tsx
useEffect(() => {
  const savedViewMode = storage.get<ViewMode>('viewMode');
  if (savedViewMode) {
    setViewMode(savedViewMode);
  } else {
    const randomViewMode = Math.random() < 0.5 ? 'list' : 'grid';
    setViewMode(randomViewMode);
    storage.set('viewMode', randomViewMode);
  }
}, []);
````

---

### 2. 🔍 검색어 입력 시 URL 쿼리스트링 반영 및 API 연동

* 검색창 입력 후 검색 버튼 클릭 시 `form`의 `onSubmit`에서 `URLSearchParams`로 쿼리스트링을 구성함
* URL 변경을 통해 React Query가 쿼리 키 변화를 감지하고 자동으로 API 호출함
* 새로고침해도 검색어와 결과가 유지되며, SEO 측면에서도 유리함

> 🧠 **왜 이렇게 구현했는지?**  
> state만으로 관리할 경우 새로고침 시 초기화됨  
> 검색어를 URL에 반영해야 히스토리 관리와 공유가 가능함  

#### 핵심 코드 요약

```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const q = e.target.q.value;
  const params = new URLSearchParams();
  if (q) params.set('q', q);
  router.push(`?${params.toString()}`);
};
```



## 🛠️ 트러블슈팅

### ❗ 문제 : 별점 소수점 처리 문제
- API에서 제공되는 `rating` 값이 소수점 단위 (예: 3.4)로 반환되어
- 정확한 값만 비교하는 `switch` 문으로는 별점 UI를 구현하기 어려웠음

### 🔍 접근
- CSS `clip-path` 또는 HTML-only 방식도 고려했으나,
- React의 컴포넌트 방식으로 확장성과 통일성 확보가 더 중요하다고 판단
- `0.5 단위 반올림` 방식으로 `꽉 찬 별`, `반 별`, `빈 별` 렌더링 분기 처리

### 💡 구현 방식
```tsx
const fullStars = Math.floor(rating);
const hasHalfStar = rating - fullStars >= 0.5;
const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
예: 3.4 → 별 3개 + 반 별 1개 + 빈 별 1개
```

### ✅ 결과
사용자에게 자연스러운 시각적 피드백 제공

컴포넌트 재사용성 및 유지 보수 측면에서도 안정적

---

### ❗ 문제 : 홈에서 정렬 상태가 유지되는 문제
- 정렬 기능 (`sort=rating`)을 적용한 후, 홈으로 돌아와도 여전히 정렬된 product 리스트가 유지됨
- 즉, URL 쿼리에서는 정렬 파라미터가 빠졌음에도 정렬된 상태로 렌더링됨

### 🔍 원인 분석
- React Query는 동일한 `queryKey`에 대해 캐시된 데이터를 우선 반환함
- `useProducts`와 `useSortProducts`가 내부적으로 동일한 queryKey (`['products']`)를 사용하고 있었음
- 그 결과, 이전 정렬된 결과가 그대로 재사용됨

### 💡 해결
- 각 조건별로 `queryKey`를 명확히 분기 처리

```tsx
queryKey = ['products']; // 기본
queryKey = ['products', 'sort', 'rating']; // 정렬
queryKey = ['products', 'search', q]; // 검색
```
### ✅ 결과
React Query가 각각의 캐시를 구분하여 처리하게 되어, 정렬 → 홈 복귀 시 정상적으로 초기화된 상품 리스트를 보여줌
</details>

