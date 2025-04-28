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
        stage('Build') {
            steps {
                bat 'npm run build' // Add this if your project requires a build step
            }
        }
        stage('Run Server') {
            steps {
                bat 'node public/index.js' // Adjust path to point to the correct location
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
        success {
            echo 'Pipeline executed successfully.'
        }
        failure {
            echo 'Pipeline execution failed.'
        }
    }
}
