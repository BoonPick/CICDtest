# Nginx를 기반으로 한 경량 이미지 정적 웹 서버 설정
FROM nginx:alpine

# 로컬의 정적 파일들을 Nginx의 기본 HTML 배포 경로로 복사
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

# 포트 80 노출
EXPOSE 80

# Nginx 실행 (이미지 기본 명령이므로 생략 가능하나 명시)
CMD ["nginx", "-g", "daemon off;"]
