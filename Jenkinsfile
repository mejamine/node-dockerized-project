pipeline {
    agent any
    stages {
        stage("checkout") {
            steps {
                checkout scm
            }
        }

        stage("test") {
            steps {
                dir('api') {
                    bat 'npm install'
                    bat 'npm test'
                }
            }
        }

        stage("build") {
            steps {
                dir('api') {
                    bat 'npm run build'
                }
            }
        }

        stage("build docker image"){
            steps {
                scripts {
                    bat 'docker --version'
                    bat 'docker-compose --version'
                    bat 'docker-compose  build '
                }
            }
        }
    }
}
