pipeline {
    agent any

    tools {
        nodejs "NodeJS" // Ensure this matches the name configured in Jenkins
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Server') {
            steps {
                bat 'node index.js'
            }
        }
    }
}
