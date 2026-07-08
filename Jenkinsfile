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
            sudo systemctl restart belajar-cicd
            sleep 2
            sudo systemctl status belajar-cicd --no-pager
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