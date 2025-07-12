🌍 Becoming a Global Citizen Infographic
이 프로젝트는 중학교 3학년을 위한 '세계시민 교육' 영어 수업 지도안을 시각적으로 표현한 대화형 인포그래픽 웹 애플리케이션입니다. 학생들이 세계시민의 개념을 이해하고, 주요 지구촌 문제에 대해 배우며, 일상생활에서 실천할 수 있는 구체적인 행동 계획을 세우는 데 도움을 주기 위해 설계되었습니다.

✨ 주요 기능
반응형 디자인: Tailwind CSS를 사용하여 다양한 화면 크기(모바일, 태블릿, 데스크톱)에서 최적화된 보기 환경을 제공합니다.

데이터 시각화: Chart.js 라이브러리를 활용하여 학생들이 관심 있는 지구촌 문제와 계획된 행동 유형에 대한 가상의 데이터를 시각적으로 표현합니다.

LLM 기반 행동 계획 확장: 사용자가 간단한 세계시민 실천 계획을 입력하면, Gemini API를 통해 LLM(대규모 언어 모델)이 이를 구체적이고 실천 가능한 여러 단계로 확장하여 제안해 줍니다.

파인만 기법 시각화: 'Explain Like I'm 7' 활동을 시각적으로 구성하여, 복잡한 개념을 단순하게 설명하는 파인만 기법의 중요성을 강조합니다.

🚀 프로젝트 실행 방법
이 인포그래픽은 단일 HTML 파일, CSS 파일, JavaScript 파일로 구성되어 있습니다. 다음 방법 중 하나를 선택하여 실행할 수 있습니다.

1. 로컬 환경에서 실행하기
아래 제공된 코드를 각각 index.html, style.css, script.js 파일로 저장합니다.

세 파일을 동일한 폴더에 저장합니다.

index.html 파일을 웹 브라우저(예: Chrome, Firefox)로 엽니다.

2. Codepen에서 테스트하기
Codepen은 HTML, CSS, JavaScript 코드를 온라인에서 쉽게 작성하고 테스트할 수 있는 플랫폼입니다.

Codepen 웹사이트로 이동하여 새 Pen을 생성합니다.

아래 index.html 코드 내용을 Codepen의 HTML 섹션에 붙여넣습니다.

아래 style.css 코드 내용을 Codepen의 CSS 섹션에 붙여넣습니다.

아래 script.js 코드 내용을 Codepen의 JS 섹션에 붙여넣습니다.

Codepen은 자동으로 변경 사항을 렌더링하여 인포그래픽을 실시간으로 보여줄 것입니다.

📄 코드 파일
index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Infographic: Becoming a Global Citizen</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Chart.js CDN -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    <!-- Custom Styles -->
    <link rel="stylesheet" href="style.css">
</head>
<body class="text-[#073B4C]">
    <div class="container mx-auto p-4 md:p-8 max-w-7xl">
        <header class="text-center my-8 md:my-16">
            <h1 class="text-4xl md:text-6xl font-black text-[#1A535C]">Becoming a Global Citizen</h1>
            <p class="text-lg md:text-xl mt-4 max-w-3xl mx-auto">An infographic visualizing the key steps and concepts from the Middle School English lesson plan for nurturing responsible and aware global citizens.</p>
        </header>

        <main>
            <section id="what-is-a-global-citizen" class="my-12">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold">What is a Global Citizen?</h2>
                    <p class="mt-2 max-w-2xl mx-auto">A global citizen understands that we are all interconnected. The lesson plan focuses on three core principles that form the foundation of this understanding.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="text-6xl mb-4">🤝</div>
                        <h3 class="text-2xl font-bold text-[#FF6B6B]">Respect</h3>
                        <p class="mt-2">Valuing diverse cultures, backgrounds, and perspectives is essential. It's about treating everyone with dignity.</p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="text-6xl mb-4">🌍</div>
                        <h3 class="text-2xl font-bold text-[#4ECDC4]">Responsibility</h3>
                        <p class="mt-2">Recognizing our duty to care for the planet and for each other, both locally and globally.</p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="text-6xl mb-4">🎨</div>
                        <h3 class="text-2xl font-bold text-[#FFE66D]">Diversity</h3>
                        <p class="mt-2">Celebrating the richness that different languages, traditions, and ways of life bring to our world.</p>
                    </div>
                </div>
            </section>

            <section id="key-issues" class="my-12 py-12 bg-white rounded-lg shadow-md">
                <div class="text-center mb-8 px-6">
                    <h2 class="text-3xl font-bold">Understanding the Key Issues</h2>
                    <p class="mt-2 max-w-2xl mx-auto">The first step towards action is awareness. Based on activities like the "Global Citizen Quiz," students identify the issues that concern them most. This chart shows a sample distribution of student concerns.</p>
                </div>
                <div class="chart-container h-96">
                    <canvas id="issuesBarChart"></canvas>
                </div>
            </section>

            <section id="action-plan" class="my-12">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div class="text-left">
                        <h2 class="text-3xl font-bold">My Global Citizen Action Plan</h2>
                        <p class="mt-4">Moving from awareness to action is a key goal. In the "My Global Citizen Action Plan" activity, students commit to small, manageable steps. This chart visualizes the types of actions students plan to take, showing a strong focus on tangible environmental and social efforts.</p>
                    </div>
                    <div class="chart-container h-80 md:h-96">
                        <canvas id="actionsDonutChart"></canvas>
                    </div>
                </div>
            </section>
            
            <section id="llm-action-expander" class="my-12 py-12 bg-white rounded-lg shadow-md">
                <div class="text-center mb-8 px-6">
                    <h2 class="text-3xl font-bold">✨ 나의 행동 계획 확장하기 ✨</h2>
                    <p class="mt-2 max-w-2xl mx-auto">여러분의 간단한 세계시민 실천 계획을 입력하면, LLM이 구체적인 실천 단계들을 제안해 드립니다. 무엇을 실천할지 고민될 때 활용해 보세요!</p>
                </div>
                <div class="max-w-xl mx-auto px-4">
                    <textarea id="actionInput" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] text-[#073B4C]" rows="3" placeholder="예: 저는 플라스틱 사용을 줄일 거예요."></textarea>
                    <button id="expandActionButton" class="mt-4 w-full bg-[#4ECDC4] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#3AA89F] transition duration-300 shadow-md">
                        ✨ 나의 행동 계획 확장하기 ✨
                    </button>
                    <div id="loadingIndicator" class="text-center mt-4 text-[#1A535C] hidden">
                        생각 중... 잠시만 기다려 주세요!
                    </div>
                    <div id="expandedActionOutput" class="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-[#073B4C] min-h-[100px]">
                        여기에 확장된 행동 계획이 나타납니다.
                    </div>
                </div>
            </section>

            <section id="the-why" class="my-12 py-12 bg-white rounded-lg shadow-md">
                <div class="text-center mb-12 px-6">
                    <h2 class="text-3xl font-bold">Explaining The "Why"</h2>
                    <p class="mt-2 max-w-3xl mx-auto">The lesson plan uses the Feynman Technique ("Explain Like I'm 7") to deepen understanding. Students must explain not just *what* they will do, but *why* it's important in simple terms. This process connects a small action to its larger impact.</p>
                </div>
                <div class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-center px-4">
                    <div class="bg-gray-100 rounded-lg p-6 w-full md:w-1/4">
                        <h3 class="font-bold text-lg text-[#FF6B6B]">My Action</h3>
                        <p class="mt-2 text-xl">"I will reduce plastic."</p>
                    </div>
                    <div class="flow-arrow transform md:rotate-0 rotate-90">➔</div>
                    <div class="bg-gray-100 rounded-lg p-6 w-full md:w-1/4">
                        <h3 class="font-bold text-lg text-[#4ECDC4]">The Simple "Why"</h3>
                        <p class="mt-2 text-xl">"Because it hurts the ocean."</p>
                    </div>
                    <div class="flow-arrow transform md:rotate-0 rotate-90">➔</div>
                    <div class="bg-gray-100 rounded-lg p-6 w-full md:w-1/4">
                        <h3 class="font-bold text-lg text-[#FFE66D]">The Bigger Impact</h3>
                        <p class="mt-2 text-xl">"Protecting marine life and our planet's health."</p>
                    </div>
                </div>
            </section>

            <section id="collective-impact" class="my-12 text-center">
                 <h2 class="text-3xl font-bold">Our Collective Impact</h2>
                 <p class="mt-2 max-w-2xl mx-auto">The final takeaway is one of empowerment. While individual actions may seem small, they inspire others and contribute to a significant collective change. The journey of a thousand miles begins with a single step.</p>
                <div class="bg-[#1A535C] text-white rounded-lg shadow-lg p-8 mt-8 max-w-md mx-auto">
                    <p class="text-2xl">After the lesson, over</p>
                    <p class="text-7xl font-black my-2">85%</p>
                    <p class="text-2xl">of students feel they can personally make a positive difference in the world.</p>
                </div>
            </section>
        </main>

        <footer class="text-center py-8 mt-12 border-t border-gray-300">
            <p class="text-gray-600">Infographic created based on the "세계시민 교육을 위한 영어 수업 지도안".</p>
            <p class="text-sm text-gray-500 mt-2">This is a visual representation and uses sample data for illustrative purposes.</p>
        </footer>
    </div>

    <!-- Custom JavaScript -->
    <script src="script.js"></script>
</body>
</html>

style.css
/* Custom CSS for Global Citizen Infographic */
body {
    font-family: 'Inter', sans-serif;
    background-color: #F2F2F2;
}
.chart-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    height: 300px;
    max-height: 400px;
}
@media (min-width: 768px) {
    .chart-container {
        height: 400px;
    }
}
.flow-arrow {
    font-size: 2rem;
    color: #4ECDC4;
    line-height: 1;
}

script.js
document.addEventListener('DOMContentLoaded', function () {
            
    function wrapText(text, maxChars) {
        if (typeof text !== 'string' || text.length <= maxChars) {
            return text;
        }
        const words = text.split(' ');
        const lines = [];
        let currentLine = '';
        words.forEach(word => {
            if ((currentLine + ' ' + word).length > maxChars && currentLine.length > 0) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = currentLine ? currentLine + ' ' + word : word;
            }
        });
        lines.push(currentLine);
        return lines;
    }

    const tooltipTitleCallback = function(tooltipItems) {
        const item = tooltipItems[0];
        let label = item.chart.data.labels[item.dataIndex];
        if (Array.isArray(label)) {
            return label.join(' ');
        } else {
            return label;
        }
    };
    
    const sharedChartOptions = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                        family: 'Inter'
                    },
                    color: '#073B4C'
                }
            },
            tooltip: {
                callbacks: {
                    title: tooltipTitleCallback
                },
                titleFont: {
                    size: 14,
                    family: 'Inter'
                },
                bodyFont: {
                    size: 12,
                    family: 'Inter'
                }
            }
        }
    };

    const issuesData = {
        labels: [
            wrapText('Reducing Plastic Waste and Pollution', 16), 
            'Climate Change Action', 
            'Promoting Cultural Understanding', 
            'Alleviating Global Poverty', 
            'Conserving Water Resources'
        ],
        datasets: [{
            label: 'Number of Students Concerned',
            data: [120, 95, 88, 65, 50],
            backgroundColor: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#1A535C', '#F7B267'],
            borderColor: '#ffffff',
            borderWidth: 2
        }]
    };

    const issuesBarCtx = document.getElementById('issuesBarChart').getContext('2d');
    new Chart(issuesBarCtx, {
        type: 'bar',
        data: issuesData,
        options: {
            ...sharedChartOptions,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: '#e0e0e0'
                    },
                    ticks: { color: '#073B4C', font: { family: 'Inter' } }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: { color: '#073B4C', font: { family: 'Inter', size: 12 } }
                }
            },
            plugins: { ...sharedChartOptions.plugins, legend: { display: false } }
        }
    });

    const actionsData = {
        labels: ['Reduce Waste', 'Respect Cultures', 'Save Energy', 'Learn & Share'],
        datasets: [{
            label: 'Planned Actions',
            data: [45, 25, 20, 10],
            backgroundColor: ['#4ECDC4', '#FFE66D', '#FF6B6B', '#1A535C'],
            hoverOffset: 4
        }]
    };

    const actionsDonutCtx = document.getElementById('actionsDonutChart').getContext('2d');
    new Chart(actionsDonutCtx, {
        type: 'doughnut',
        data: actionsData,
        options: {
            ...sharedChartOptions,
            maintainAspectRatio: false,
            cutout: '60%',
        }
    });

    // LLM Integration
    const actionInput = document.getElementById('actionInput');
    const expandActionButton = document.getElementById('expandActionButton');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const expandedActionOutput = document.getElementById('expandedActionOutput');

    expandActionButton.addEventListener('click', async () => {
        const userAction = actionInput.value.trim();
        if (!userAction) {
            expandedActionOutput.innerHTML = '<p class="text-red-500">행동 계획을 입력해 주세요!</p>';
            return;
        }

        loadingIndicator.classList.remove('hidden');
        expandedActionOutput.innerHTML = ''; // Clear previous output

        try {
            let chatHistory = [];
            const prompt = `As an educational assistant for middle school students, take the following global citizen action and expand it into 3-5 concrete, easy-to-understand steps or related activities. Focus on practical, daily life applications. Present the output as a numbered list.
User's simple action: ${userAction}`;
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };
            const apiKey = ""; 
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();
            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                expandedActionOutput.innerHTML = text.replace(/\n/g, '<br>'); // Display with line breaks
            } else {
                expandedActionOutput.innerHTML = '<p class="text-red-500">확장된 계획을 생성하는 데 실패했습니다. 다시 시도해 주세요.</p>';
            }
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            expandedActionOutput.innerHTML = '<p class="text-red-500">오류가 발생했습니다. 네트워크 연결을 확인하거나 나중에 다시 시도해 주세요.</p>';
        } finally {
            loadingIndicator.classList.add('hidden');
        }
    });
});
