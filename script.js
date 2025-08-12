// Elements
const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');
const langBtn = document.getElementById('lang-btn');
const welcomeText = document.getElementById('welcome-text');

// Messages for languages
const translations = [
    { welcome: "Welcome! Glad to see you again.", aboutTitle: "About Me", aboutDesc: "I'm 17 years old junior developer. Currently a high school student.", projectsTitle: "Projects", projectsDesc: "Here are some of my recent projects and works.", contactTitle: "Contact", contactDesc: "Reach me at youremailaddress@example.com", footer: "© 2025 Placeholder. No rights reserved." },
    { welcome: "欢迎！很高兴再次见到你。", aboutTitle: "关于我", aboutDesc: "我是一名17岁的初级开发者，目前是一名高中生。", projectsTitle: "项目", projectsDesc: "以下是我最近的一些项目和作品。", contactTitle: "联系方式", contactDesc: "通过 youremailaddress@example.com 联系我", footer: "© 2025 Placeholder 保留所有权利。" },
    { welcome: "Добро пожаловать! Рад снова вас видеть.", aboutTitle: "Обо мне", aboutDesc: "Мне 17 лет, я начинающий разработчик и сейчас учусь в школе.", projectsTitle: "Проекты", projectsDesc: "Вот некоторые из моих недавних проектов и работ.", contactTitle: "Контакты", contactDesc: "Свяжитесь со мной: youremailaddress@example.com", footer: "© 2025 Placeholder. Все права защищены." }
];

let langIdx = 0;

// Menu toggle
menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('open');
});

// Theme toggle
function setTheme(dark) {
    if (dark) {
        document.documentElement.classList.add('dark');
        themeIcon.textContent = '☀️';
    } else {
        document.documentElement.classList.remove('dark');
        themeIcon.textContent = '🌙';
    }
}
let isDark = localStorage.getItem('theme') === 'dark';
setTheme(isDark);
themeBtn.addEventListener('click', () => {
    isDark = !isDark;
    setTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Language change
langBtn.addEventListener('click', () => {
    langIdx = (langIdx + 1) % translations.length;
    const t = translations[langIdx];
    welcomeText.textContent = t.welcome;
    document.getElementById('about-title').textContent = t.aboutTitle;
    document.getElementById('about-desc').textContent = t.aboutDesc;
    document.getElementById('projects-title').textContent = t.projectsTitle;
    document.getElementById('projects-desc').textContent = t.projectsDesc;
    document.getElementById('contact-title').textContent = t.contactTitle;
    document.getElementById('contact-desc').textContent = t.contactDesc;
    document.getElementById('footer-text').textContent = t.footer;
});