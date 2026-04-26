pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/TamilvaaniDR/docker-compose-integration-pipeline'
            }
        }

        stage('Build & Run') {
            steps {
                sh 'docker compose down --remove-orphans'
                sh 'docker compose up --build -d'
            }
        }

        stage('Test') {
            steps {
                sh 'docker compose run test'
            }
        }
    }
}