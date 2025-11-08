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
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// 公告筛选功能
const filterTabs = document.querySelectorAll('.filter-tab');
const noticeCards = document.querySelectorAll('.notice-card');

filterTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // 更新选中状态
        filterTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const type = this.getAttribute('data-type');
        
        // 筛选公告
        noticeCards.forEach(card => {
            if (type === 'all' || card.getAttribute('data-type') === type) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 搜索功能
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', function() {
    const keyword = this.value.trim().toLowerCase();
    
    noticeCards.forEach(card => {
        const title = card.querySelector('.notice-card-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.notice-excerpt').textContent.toLowerCase();
        
        if (title.includes(keyword) || excerpt.includes(keyword)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// 分页功能
const pageBtns = document.querySelectorAll('.page-btn:not(.disabled)');
const pageInput = document.querySelector('.page-input');
const pageGo = document.querySelector('.page-go');

pageBtns.forEach(btn => {
    if (!btn.classList.contains('disabled')) {
        btn.addEventListener('click', function() {
            pageBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            pageInput.value = this.textContent;
            
            // 这里可以添加页面切换逻辑
        });
    }
});

pageGo.addEventListener('click', function() {
    const page = parseInt(pageInput.value);
    if (page >= 1 && page <= 12) {
        pageBtns.forEach(btn => {
            if (btn.textContent === page.toString()) {
                pageBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
        
        // 这里可以添加页面切换逻辑
    } else {
        alert('请输入1-12之间的页码');
        pageInput.value = 1;
    }
});

pageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        pageGo.click();
    }
});