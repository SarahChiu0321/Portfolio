/**
 * Sarah Chiu Portfolio Data
 * 更新資料時，只需修改下方的物件與陣列即可。
 */

const skillsData = {
    "Programming": ["Python", "C++", "SQL", "JavaScript"],
    "AI / ML": ["RAG Architecture", "Prompt Engineering", "LLM Application"],
    "Web Development": ["React", "Tailwind CSS", "HTML/CSS"],
    "Financial Analysis": ["Technical Indicators", "Financial Statements", "Quant Analysis"]
};

const projectsData = [
    {
        title: "AI 投資特助系統",
        status: "Completed",
        description: "利用 LangChain 與 OpenAI 構建的 RAG 應用。整合市場情緒與技術指標（RSI, MA），為使用者提供個人化投資建議。",
        tech: ["Python", "RAG", "LangChain", "OpenAI"]
    },
    {
        title: "金融數據分析儀表板",
        status: "Completed",
        description: "自動化抓取證券數據並進行技術面視覺化分析，針對股價走勢產出易於理解的趨勢報告。",
        tech: ["Python", "Pandas", "Matplotlib"]
    },
    {
        title: "總體經濟數據視覺化工具",
        status: "Completed",
        description: "透過爬蟲技術獲取政府公開經濟數據，並以互動式圖表呈現宏觀指標間的歷史關聯性。",
        tech: ["JavaScript", "API Integration"]
    }
];

const coursesData = [
    {
        name: "大型語言模型與資訊安全系統",
        meta: "114-2 | AI & Security",
        desc: "學習將 LLM 應用於資安領域，掌握 AI Agent 的開發流程與系統防禦策略。",
        tags: ["AI Agents", "Cybersecurity"]
    },
    {
        name: "Python 生成式 AI 實作",
        meta: "114-2 | AI Practice",
        desc: "深入實作生成式 AI 應用，透過 Python 掌握 Prompt Engineering 與模型調校。",
        tags: ["GenAI", "Python"]
    },
    {
        name: "電子學 II (Microelectronics II)",
        meta: "114-2 | Engineering",
        desc: "研究進階半導體元件物理與電路設計，培養分析複雜硬體系統的基礎能力。",
        tags: ["Circuit Design"]
    },
    {
        name: "電磁學 (Electromagnetics)",
        meta: "114-2 | Engineering",
        desc: "理解電磁場理論與波傳播原理，建立嚴謹的數學物理模型分析能力。",
        tags: ["Field Theory"]
    },
    {
        name: "微積分 II (Calculus II)",
        meta: "114-2 | Mathematics",
        desc: "掌握進階積分技巧與多變數運算，為經濟計量與工程數學奠定基礎。",
        tags: ["Calculus"]
    }
];

/**
 * 渲染邏輯
 */

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    
    Object.entries(skillsData).forEach(([category, skills]) => {
        const div = document.createElement('div');
        div.className = 'skill-category';
        div.innerHTML = `
            <h3>${category}</h3>
            <div class="skill-tags">
                ${skills.map(s => `<span class="tag">${s}</span>`).join('')}
            </div>
        `;
        container.appendChild(div);
    });
}

function renderCards(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        const tags = item.tech || item.tags || [];
        const metaInfo = item.status || item.meta;
        const title = item.title || item.name;
        const bodyText = item.description || item.desc;

        card.innerHTML = `
            <span class="meta">${metaInfo}</span>
            <h3>${title}</h3>
            <p>${bodyText}</p>
            <div class="card-footer">
                ${tags.map(t => `<span class="mini-tag">${t}</span>`).join('')}
            </div>
        `;
        container.appendChild(card);
    });
}

// 網頁載入完成後執行
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderCards(projectsData, 'projects-container');
    renderCards(coursesData, 'courses-container');
    
    console.log("Sarah Chiu Portfolio: All systems functional.");
});