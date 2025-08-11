// DOM元素
const clickBtn = document.getElementById('clickBtn');
const resultArea = document.getElementById('result');
const deployTimeElement = document.getElementById('deployTime');

// 点击计数器
let clickCount = 0;

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 设置部署时间
    const now = new Date();
    deployTimeElement.textContent = now.toLocaleString('zh-CN');
    
    // 初始化结果区域
    resultArea.innerHTML = '<p>👆 点击上面的按钮开始测试!</p>';
    
    // 添加欢迎消息
    setTimeout(() => {
        showWelcomeMessage();
    }, 1000);
});

// 按钮点击事件
clickBtn.addEventListener('click', function() {
    clickCount++;
    
    // 更新按钮文本
    this.textContent = `已点击 ${clickCount} 次!`;
    
    // 生成随机励志语句
    const messages = [
        '🎉 太棒了！Netlify部署成功！',
        '✨ JavaScript正常工作！',
        '🚀 一切都在正常运行！',
        '💪 您的网站已就绪！',
        '🌟 部署测试完美通过！',
        '🎊 恭喜！您的demo运行良好！',
        '⚡ 超快的加载速度！',
        '🔥 网站性能优秀！'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // 更新结果区域
    resultArea.innerHTML = `
        <div class="click-result">
            <h3>${randomMessage}</h3>
            <p>您已经点击了 <strong>${clickCount}</strong> 次按钮</p>
            <p>当前时间: ${new Date().toLocaleTimeString('zh-CN')}</p>
        </div>
    `;
    
    // 添加动画效果
    resultArea.style.transform = 'scale(0.95)';
    setTimeout(() => {
        resultArea.style.transform = 'scale(1)';
    }, 150);
    
    // 特殊里程碑提示
    if (clickCount === 10) {
        showCelebration('🎉 您已经点击了10次！真是太棒了！');
    } else if (clickCount === 50) {
        showCelebration('🏆 哇！50次点击！您真的很喜欢这个按钮！');
    } else if (clickCount === 100) {
        showCelebration('🎊 100次！您是点击大师！');
    }
});

// 显示欢迎消息
function showWelcomeMessage() {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'welcome-message';
    welcomeDiv.innerHTML = `
        <div class="welcome-content">
            <h3>🎉 欢迎使用Netlify Demo!</h3>
            <p>这个演示展示了基本的HTML、CSS和JavaScript功能</p>
            <button onclick="this.parentElement.parentElement.remove()" class="close-btn">关闭</button>
        </div>
    `;
    
    // 添加样式
    welcomeDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.95);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        z-index: 1000;
        max-width: 300px;
        animation: slideInRight 0.5s ease-out;
    `;
    
    document.body.appendChild(welcomeDiv);
    
    // 5秒后自动关闭
    setTimeout(() => {
        if (welcomeDiv.parentNode) {
            welcomeDiv.remove();
        }
    }, 5000);
}

// 显示庆祝消息
function showCelebration(message) {
    const celebrationDiv = document.createElement('div');
    celebrationDiv.innerHTML = `
        <div class="celebration-content">
            <h2>${message}</h2>
        </div>
    `;
    
    celebrationDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 30px 40px;
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 1001;
        text-align: center;
        animation: popIn 0.5s ease-out;
    `;
    
    document.body.appendChild(celebrationDiv);
    
    // 3秒后自动移除
    setTimeout(() => {
        celebrationDiv.style.animation = 'popOut 0.5s ease-in';
        setTimeout(() => {
            celebrationDiv.remove();
        }, 500);
    }, 3000);
}

// 添加一些CSS动画到头部
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes popIn {
        from {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
        }
        to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
    
    @keyframes popOut {
        from {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        to {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
        }
    }
    
    .welcome-content {
        text-align: center;
    }
    
    .close-btn {
        background: #667eea;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
        transition: background 0.3s ease;
    }
    
    .close-btn:hover {
        background: #764ba2;
    }
    
    .click-result {
        animation: fadeInUp 0.3s ease-out;
    }
    
    .result-area {
        transition: transform 0.3s ease;
    }
`;

document.head.appendChild(style);

// 添加一些控制台输出用于调试
console.log('🚀 Netlify Demo JavaScript已加载!');
console.log('📅 页面加载时间:', new Date().toLocaleString('zh-CN'));
console.log('🌐 当前URL:', window.location.href);

// 检测部署环境
if (window.location.hostname.includes('netlify')) {
    console.log('✅ 在Netlify上运行!');
} else if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🏠 在本地环境运行');
} else {
    console.log('🌍 在其他环境运行:', window.location.hostname);
}
