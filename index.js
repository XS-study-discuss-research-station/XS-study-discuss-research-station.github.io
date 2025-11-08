// 音频播放功能
const playlist = [
    'TGA2024年度最佳「交响乐串烧」 - 千里星寻.mp3',
    'Inner Light - Skye Lewin、Michael Salvatori、Rotem Moav.mp3',
    '世界需要更多英雄（开场动画配乐） - Neal Acree、Sam Cardon、Derek Duke、Cris Velasco、Overwatch.mp3',
    'Reach for the Summit - Lena Raine.mp3',
    'Pride of a Nameless Hunter - 牧野忠義.mp3'
];
let currentSongIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');

function loadSong(index) {
    try {
        audioPlayer.src = playlist[index];
        audioPlayer.load();
        audioPlayer.play().catch(err => {
            console.log('音频播放需要用户交互:', err);
            // 当浏览器阻止自动播放时，提供用户交互触发
            document.addEventListener('click', () => {
                audioPlayer.play().catch(err => console.log('播放失败:', err));
            }, { once: true });
        });
    } catch (err) {
        console.log('音频加载失败:', err);
        // 自动切换到下一首
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
    }
}

audioPlayer.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
});

// 初始化音频
document.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSongIndex);
});

// 实时时间显示功能
function updateTime() {
    const now = new Date();
    
    // 格式化日期时间：年月日 时分秒 星期
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekDay = weekDays[now.getDay()];
    
    const timeString = `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds} ${weekDay}`;
    document.getElementById('currentTime').textContent = timeString;
}

// 初始化时间并每秒更新
updateTime();
setInterval(updateTime, 1000);

// 移动菜单切换
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

// 轮播图优化
const slideshow = document.querySelector('.slideshow');
const images = slideshow.querySelectorAll('img');
const indicators = document.querySelectorAll('.slide-indicator');
const prevBtn = document.querySelector('.slide-prev');
const nextBtn = document.querySelector('.slide-next');
let currentIndex = 0;
let slideInterval;

// 显示指定索引的图片
function showImage(index) {
    // 隐藏所有图片
    images.forEach(img => {
        img.style.display = 'none';
        img.style.opacity = '0';
    });
    
    // 移除所有指示器的active类
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // 显示当前图片
    images[index].style.display = 'block';
    setTimeout(() => {
        images[index].style.opacity = '1';
    }, 50);
    
    // 激活当前指示器
    indicators[index].classList.add('active');
    
    // 更新当前索引
    currentIndex = index;
}

// 下一张图片
function nextImage() {
    let newIndex = (currentIndex + 1) % images.length;
    showImage(newIndex);
}

// 上一张图片
function prevImage() {
    let newIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(newIndex);
}

// 指示器点击事件
indicators.forEach(indicator => {
    indicator.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        showImage(index);
        // 重置定时器
        clearInterval(slideInterval);
        slideInterval = setInterval(nextImage, 5000);
    });
});

// 箭头点击事件
prevBtn.addEventListener('click', function() {
    prevImage();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextImage, 5000);
});

nextBtn.addEventListener('click', function() {
    nextImage();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextImage, 5000);
});

// 自动播放
slideInterval = setInterval(nextImage, 5000);

// 鼠标悬停时暂停轮播
slideshow.addEventListener('mouseenter', function() {
    clearInterval(slideInterval);
});

// 鼠标离开时恢复轮播
slideshow.addEventListener('mouseleave', function() {
    slideInterval = setInterval(nextImage, 5000);
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 130, // 适配导航栏高度
                behavior: 'smooth'
            });
            
            // 移动端点击后关闭菜单
            if(window.innerWidth <= 768) {
                document.querySelector('.nav-links').style.display = 'none';
            }
        }
    });
});

// 表单提交处理
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // 这里可以添加表单提交逻辑
        alert('提交成功！我们会尽快与您联系。');
        this.reset();
    });
});