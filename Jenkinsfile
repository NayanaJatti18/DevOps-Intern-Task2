
pipeline {
    agent any

    environment {
        IMAGE_NAME = 'my-node-app'
        CONTAINER_NAME = 'my-node-app'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t my-node-app:latest .'
            }
        }

        stage('Test') {
            steps {
                echo 'Checking Node.js application...'
                bat 'docker run --rm my-node-app:latest npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                bat '''
                    docker rm -f my-node-app || true
                    docker run -d \
                      --name my-node-app \
                      -p 3000:3000 \
                      my-node-app:latest
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}
