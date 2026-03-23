pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Deploy') {
            steps {
                // 1. 먼저 빌드를 성공시킨다 (실패하면 여기서 중단됨)
                sh 'docker build -t my-jenkins-app .'
                
                // 2. 빌드 성공 시에만 기존 컨테이너 교체
                sh 'docker stop my-app-container || true'
                sh 'docker rm my-app-container || true'
                sh 'docker run -d --name my-app-container -p 80:80 my-jenkins-app'
            }
        }
    }
}