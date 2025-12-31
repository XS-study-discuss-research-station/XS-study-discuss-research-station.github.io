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

// 移动端菜单切换
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

// 初始化 Marked 配置（支持代码高亮）
marked.setOptions({
    highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
    },
    breaks: true, // 支持换行
    gfm: true,    // 支持 GitHub Flavored Markdown
    sanitize: false // 允许HTML标签
});

// 从 URL 获取公告ID（示例：notic-detail.html?id=1 或直接指定MD文件路径）
function getNoticeId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '1'; // 默认ID为1
}

// MD文件数据 - 直接嵌入到JS中
// 加载 Markdown 文件
async function loadMarkdownFile() {
    const noticeId = getNoticeId();
    // 这里假设 MD 文件路径为 ./notices/[ID].md，可根据实际路径修改
    const mdFilePath = `./notices/${noticeId}.md`;

    // 显示加载状态
    document.getElementById('loading').style.display = 'block';
    document.getElementById('error').style.display = 'none';
    document.getElementById('notice-content').style.display = 'none';

    try {
        // 发起请求加载 MD 文件
        const response = await fetch(mdFilePath);
        
        if (!response.ok) {
            throw new Error('文件不存在或加载失败');
        }

        const mdContent = await response.text();
        // 解析 MD 文件（分离元数据和内容）
        const { meta, content } = parseMarkdownWithMeta(mdContent);
        // 渲染 Markdown 内容
        renderMarkdownContent(meta, content);
        // 显示公告内容
        document.getElementById('loading').style.display = 'none';
        document.getElementById('notice-content').style.display = 'block';

    } catch (error) {
        console.error('加载MD文件失败：', error);
        // 显示错误状态
        document.getElementById('loading').style.display = 'none';
        document.getElementById('error').style.display = 'block';
    }
}

// 解析 MD 文件中的元数据（YAML格式）和内容
function parseMarkdownWithMeta(mdContent) {
    const metaRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
    const match = mdContent.match(metaRegex);
    
    let meta = {};
    let content = mdContent;

    if (match) {
        // 解析 YAML 元数据
        const metaStr = match[1];
        content = mdContent.replace(metaRegex, '');
        
        // 简单解析 YAML 格式（实际项目可使用 js-yaml 库）
        const lines = metaStr.split('\n');
        lines.forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length) {
                const value = valueParts.join(':').trim().replace(/["']/g, '');
                meta[key.trim()] = value;
            }
        });
    }

    // 默认元数据
    meta = {
        title: meta.title || '未命名公告',
        type: meta.type || 'notice',
        tags: meta.tags || '无',
        date: meta.date || new Date().toLocaleDateString().replace(/\//g, '-'),
        views: meta.views || '阅读 ',
        cover: meta.cover || '',
        attachments: meta.attachments ? meta.attachments.split(',').map(item => item.trim()) : []
    };

    return { meta, content };
}

// 渲染 Markdown 内容到页面
function renderMarkdownContent(meta, mdContent) {
    // 渲染标题
    document.getElementById('notice-title').textContent = meta.title;
    document.title = `${meta.title} - 学思学习讨论研究所`;

    // 渲染类型（设置对应的样式类）
    const typeElement = document.getElementById('notice-type');
    typeElement.textContent = getTypeName(meta.type);
    typeElement.className = `notice-type ${meta.type}`;

    // 渲染日期和阅读量
    document.getElementById('notice-date').textContent = meta.date;
    document.getElementById('notice-views').textContent = meta.views;

    // 渲染标签
    const tagsElement = document.getElementById('notice-tags');
    tagsElement.innerHTML = '';
    const tags = meta.tags.split(',').map(tag => tag.trim());
    tags.forEach(tag => {
        if (tag) {
            const tagElement = document.createElement('span');
            tagElement.className = 'notice-tag';
            tagElement.textContent = tag;
            tagsElement.appendChild(tagElement);
        }
    });

    // 渲染封面图
    const coverElement = document.getElementById('notice-cover');
    if (meta.cover && meta.cover !== './') {
        coverElement.src = meta.cover;
        coverElement.alt = meta.title + '封面';
        coverElement.style.display = 'block';
    } else {
        coverElement.style.display = 'none';
    }

    // 渲染 Markdown 内容
    const markdownRender = document.getElementById('markdown-render');
    const htmlContent = marked.parse(mdContent);
    markdownRender.innerHTML = htmlContent;

    // 代码高亮
    document.querySelectorAll('pre code').forEach(block => {
        hljs.highlightElement(block);
    });

    // 渲染附件
    const attachmentsElement = document.getElementById('notice-attachments');
    const attachmentList = document.getElementById('attachment-list');
    if (meta.attachments && meta.attachments.length > 0) {
        attachmentList.innerHTML = '';
        meta.attachments.forEach((attachment, index) => {
            if (attachment && attachment !== 'none') {
                const fileName = attachment.split('/').pop();
                const fileSize = '2.4MB'; // 实际项目可通过后端获取文件大小
                
                const attachmentItem = document.createElement('div');
                attachmentItem.className = 'attachment-item';
                attachmentItem.innerHTML = `
                    <span class="attachment-icon">📄</span>
                    <div class="attachment-info">
                        <span class="attachment-name">${fileName}</span>
                        <span class="attachment-size">${fileSize}</span>
                    </div>
                    <a href="${attachment}" class="attachment-download" download>下载</a>
                `;
                attachmentList.appendChild(attachmentItem);
            }
        });
        attachmentsElement.style.display = 'block';
    } else {
        attachmentsElement.style.display = 'none';
    }
}

// 根据类型值获取类型名称
function getTypeName(type) {
    const typeMap = {
        'notice': '研究所通知',
        'event': '活动公告',
        'resource': '资源更新',
        'recruit': '招募信息'
    };
    return typeMap[type] || '未分类';
}

// 页面加载完成后加载 MD 文件
window.addEventListener('DOMContentLoaded', function() {
    loadMarkdownFile();
});