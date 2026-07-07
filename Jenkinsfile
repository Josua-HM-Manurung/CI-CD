pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Mengambil source code dari Git...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Menginstall dependencies...'
                sh 'npm install'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Menjalankan aplikasi...'
                sh '''
                    pkill -f "node index.js" || true
                    nohup node index.js > app.log 2>&1 &
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline berhasil! Aplikasi sudah ter-deploy.'
        }
        failure {
            echo 'Pipeline gagal, cek log di atas.'
        }
    }
}