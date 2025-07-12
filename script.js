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