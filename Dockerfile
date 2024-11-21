# Node.js 베이스 이미지 사용
FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 프로젝트 전체 파일 복사
COPY . .

# 빌드 수행
RUN npm run build

# 프로덕션 서버 실행을 위한 패키지 설치 
RUN npm install -g serve

# 기본 포트 노출 (vite 기본 포트)
EXPOSE 5173

# 빌드된 애플리케이션 실행
CMD ["serve", "-s", "dist", "-l", "5173"]