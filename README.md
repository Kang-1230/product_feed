# 상품 페이지 사이트
![title](https://private-user-images.githubusercontent.com/175091912/443528359-f1462e19-7df5-448d-95b7-201516a12b64.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcyMTAwNjMsIm5iZiI6MTc0NzIwOTc2MywicGF0aCI6Ii8xNzUwOTE5MTIvNDQzNTI4MzU5LWYxNDYyZTE5LTdkZjUtNDQ4ZC05NWI3LTIwMTUxNmExMmI2NC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxNFQwODAyNDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ZDgxYTMzMjQ1MDhjZGQ3MWY0MjIzNDgzZjFiZTdlY2UwY2MxNmMyNWRlM2IyZTA4NWY4N2VjMmIxN2RlMTFhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.8Jt5FPJPwWWTbaNSjO0W1mdEyUEI4W69_GWGjcRm-Cc)   

## 기술 스택
React, Next.js(App Router), TypeScript, React Query, Tailwind CSS

## 폴더 구조

```
src
 ┣ app
 ┃ ┣ components
 ┃ ┃ ┣ Header.tsx
 ┃ ┃ ┣ InfiniteScrollTrigger.tsx
 ┃ ┃ ┣ ProductGridCard.tsx
 ┃ ┃ ┣ ProductGridSkeleton.tsx
 ┃ ┃ ┣ ProductListCard.tsx
 ┃ ┃ ┣ ProductListSkeleton.tsx
 ┃ ┃ ┣ ProductSection.tsx
 ┃ ┃ ┣ SearchForm.tsx
 ┃ ┃ ┣ SortForm.tsx
 ┃ ┃ ┗ StarRating.tsx
 ┃ ┣ favicon.ico
 ┃ ┣ globals.css
 ┃ ┣ layout.tsx
 ┃ ┣ page.tsx
 ┃ ┗ Providers.tsx
 ┣ lib
 ┃ ┣ api.ts
 ┃ ┣ utils.ts
 ┃ ┗ viewMode.ts
 ┗ types
 ┃ ┣ product.ts
 ┃ ┗ viewMode.ts
```


## 기능 소개
- API를 이용하여 데이터 가져오기
- 페이지 진입 시, 20개의 아이템이 기본으로 노출
- 상품명, 상품 설명, 썸네일 이미지, 별점, 리뷰 수 포함

![title](https://private-user-images.githubusercontent.com/175091912/443548864-9b48b144-5699-4b81-9c15-14e1e31ac478.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcyMDkxMzUsIm5iZiI6MTc0NzIwODgzNSwicGF0aCI6Ii8xNzUwOTE5MTIvNDQzNTQ4ODY0LTliNDhiMTQ0LTU2OTktNGI4MS05YzE1LTE0ZTFlMzFhYzQ3OC5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxNFQwNzQ3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNjRlMmY3Zjc4NDI2M2Q0YjQzOTk5OGQ3NzQzOGQ1N2NlZWIyOGM0ZGE1MzQ0ODlhMzUxMzdhMTQwMGI3NGE1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.C73tnSafQtWx5la3HdwbViFXXVbhCgHjz6ydbcSQUvg)   


- 페이지 최초 진입 시 50%확률로 랜덤하게 View 방식 결정
- 결정된 방식은 24시간 동안 유지/이후 다시 랜덤 결정

![title](https://private-user-images.githubusercontent.com/175091912/443548860-b91cc1ba-e3c0-41db-b814-c4fdd383323c.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcyMDkxMzUsIm5iZiI6MTc0NzIwODgzNSwicGF0aCI6Ii8xNzUwOTE5MTIvNDQzNTQ4ODYwLWI5MWNjMWJhLWUzYzAtNDFkYi1iODE0LWM0ZmRkMzgzMzIzYy5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxNFQwNzQ3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kYTNlZjg3YjM1YWNkNjE1MTlkNjRlZjFkNTM2NmE1MzNlZTEyNjYxNzA2ZDRkNjNjYjlhYzFkZGU0NjJhMjQyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.iY-_rhJGz1CJI0fGJNc4iOFh_h1XWSSR2bWlqHqLZFo)   

- searchAPI를 활용한 문자열 검색 가능
- sortAPI를 활용해 별점 내림차순으로 정렬 가능
- 검색 버튼 구현, 새로고침 시에도 필터 값 유지됨
- 검색 시 별점순 버튼 사라짐
- 검색 결과 없을 시 '일치하는 결과가 없습니다'문구 표시

![title](https://private-user-images.githubusercontent.com/175091912/443548858-9069fea6-aa5b-4f3c-ad57-7d121ca39995.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcyMDk0MTAsIm5iZiI6MTc0NzIwOTExMCwicGF0aCI6Ii8xNzUwOTE5MTIvNDQzNTQ4ODU4LTkwNjlmZWE2LWFhNWItNGYzYy1hZDU3LTdkMTIxY2EzOTk5NS5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxNFQwNzUxNTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MDFiMWY3NTY5NGE4ZjZmZjAyMGMxMGFhNjRlMzY1ODk5NTJmMmU2ODEwZDlkYjlkODg3YTdmYjFkMzAxNjgyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.nO8kaWEoEtlUjVvUc1sNPCycW25SGcVFXjy8BtBSNag)   

- 무한 스크롤 구현, 검색/정렬시에도 동일하게 적용
-페이지 하단 도달 시 다음 20개의 아이템 자동으로 로드
- 마지막 데이터 로드 시 '더 이상 불러올 수 없습니다'문구 표시

![title](https://private-user-images.githubusercontent.com/175091912/443548863-b38c96a2-4cb0-4763-9f38-894f7e90f8a4.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcyMDk0MTAsIm5iZiI6MTc0NzIwOTExMCwicGF0aCI6Ii8xNzUwOTE5MTIvNDQzNTQ4ODYzLWIzOGM5NmEyLTRjYjAtNDc2My05ZjM4LTg5NGY3ZTkwZjhhNC5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxNFQwNzUxNTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wOTMyYjc1ZTg3ZWEyNzc2YTg3MzQ0OTIyZTg5MzM0ZDA3N2NkNjgxMzE0OWI3Zjk0MTg2ZmE5ZWZiNDdjZGY5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.8elFNxppnuoIaiUIBmOYn_igB9b4E-D-jaJwo-i3jlI)   



