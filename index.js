const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk serving static files (jika ada)
app.use(express.static('public'));

// Route utama dengan tampilan yang lebih bagus
app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CI/CD Jenkins - Deployment</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
            }
            
            .container {
                background: white;
                border-radius: 20px;
                padding: 50px 60px;
                max-width: 700px;
                width: 100%;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                animation: slideUp 0.8s ease-out;
                text-align: center;
            }
            
            @keyframes slideUp {
                from {
                    transform: translateY(50px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            
            .icon-container {
                margin-bottom: 20px;
            }
            
            .icon {
                font-size: 70px;
                animation: bounce 2s infinite;
            }
            
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            
            h1 {
                color: #333;
                font-size: 2.5em;
                margin-bottom: 15px;
                font-weight: 700;
            }
            
            .highlight {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .subtitle {
                color: #666;
                font-size: 1.1em;
                margin-bottom: 30px;
                line-height: 1.6;
            }
            
            .status-card {
                background: #f8f9fa;
                border-radius: 12px;
                padding: 25px;
                margin: 25px 0;
                border-left: 5px solid #764ba2;
            }
            
            .status-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 0;
                border-bottom: 1px solid #e9ecef;
            }
            
            .status-item:last-child {
                border-bottom: none;
            }
            
            .status-label {
                color: #555;
                font-weight: 600;
                font-size: 0.95em;
            }
            
            .status-value {
                color: #333;
                font-weight: 500;
                background: white;
                padding: 4px 15px;
                border-radius: 20px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            }
            
            .badge {
                display: inline-block;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 8px 25px;
                border-radius: 30px;
                font-weight: 600;
                font-size: 0.9em;
                letter-spacing: 0.5px;
                margin-top: 10px;
                text-transform: uppercase;
            }
            
            .badge.success {
                background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
            }
            
            .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #f1f3f5;
                color: #888;
                font-size: 0.9em;
            }
            
            .deploy-info {
                display: flex;
                justify-content: center;
                gap: 20px;
                flex-wrap: wrap;
                margin: 10px 0;
            }
            
            .deploy-info span {
                background: #f1f3f5;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 0.85em;
                color: #555;
            }
            
            .version-tag {
                background: #764ba2;
                color: white;
                padding: 2px 12px;
                border-radius: 20px;
                font-size: 0.8em;
                font-weight: 600;
            }
            
            @media (max-width: 600px) {
                .container {
                    padding: 30px 20px;
                }
                
                h1 {
                    font-size: 2em;
                }
                
                .status-item {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 5px;
                }
                
                .deploy-info {
                    flex-direction: column;
                    gap: 8px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="icon-container">
                <div class="icon">🚀</div>
            </div>
            
            <h1>
                <span class="highlight">Halo!</span>
            </h1>
            
            <p class="subtitle">
                Ini deployment via <strong>Jenkins CI/CD</strong>
                <br>
                <span style="font-size: 0.9em; color: #999;">
                    Continuous Integration & Continuous Deployment
                </span>
            </p>
            
            <div class="status-card">
                <div class="status-item">
                    <span class="status-label">📦 Versi</span>
                    <span class="status-value">
                        <span class="version-tag">v4.0</span>
                    </span>
                </div>
                <div class="status-item">
                    <span class="status-label">🔄 Deployment</span>
                    <span class="status-value">Auto Deploy</span>
                </div>
                <div class="status-item">
                    <span class="status-label">📊 Status</span>
                    <span class="status-value" style="color: #00b894;">✓ Active</span>
                </div>
                <div class="status-item">
                    <span class="status-label">🕐 Server Time</span>
                    <span class="status-value">${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}</span>
                </div>
            </div>
            
            <div class="badge success">✅ Deployment Successful</div>
            
            <div class="footer">
                <div class="deploy-info">
                    <span>⚡ Jenkins Pipeline</span>
                    <span>🐳 Docker Container</span>
                    <span>🌐 Node.js ${process.version}</span>
                </div>
                <p style="margin-top: 15px; color: #aaa; font-size: 0.8em;">
                    Powered by Express.js • CI/CD Automation
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
  
  res.send(html);
});

// Route health check untuk monitoring
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    version: '4.0',
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di port ${PORT}`);
  console.log(`📱 Akses: http://localhost:${PORT}`);
  console.log(`🔄 Mode: Auto Deployment via Jenkins CI/CD`);
});