pipeline {
    agent any
    stages {
        stage("checkout"){
            steps {
                checkout scm
            }
        }

        stage("test"){
            steps{
                sh 'cd api'
                sh 'npm install'
                sh 'npm test'
            }
        }

        stage("build"){
            steps {
                sh 'cd api'
                sh 'npm build'
            }
        }
    }
}