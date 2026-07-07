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
                  pm2 delete belajar-cicd || true
                  pm2 start index.js --name belajar-cicd
                  pm2 save
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