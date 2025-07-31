// Event Branding Trend Analyzer Tool
document.addEventListener('DOMContentLoaded', function() {
    const analyzeBtn = document.getElementById('analyzeTrends');
    const results = document.getElementById('trendResults');
    const trendContent = document.getElementById('trendContent');

    analyzeBtn.addEventListener('click', function() {
        const eventType = document.getElementById('trendEventType').value;
        const targetAudience = document.getElementById('targetAudience').value;
        const budgetLevel = document.getElementById('budgetLevel').value;
        const sustainabilityPriority = document.getElementById('sustainabilityPriority').value;

        const analysis = analyzeTrends(eventType, targetAudience, budgetLevel, sustainabilityPriority);
        displayTrendResults(analysis);
    });

    function analyzeTrends(eventType, audience, budget, sustainability) {
        const trends = {
            sustainable: {
                name: 'Sustainable Materials',
                description: 'Eco-friendly materials and reusable systems',
                priority: getSustainabilityPriority(sustainability),
                recommendations: getSustainableRecommendations(budget, eventType)
            },
            interactive: {
                name: 'Interactive Elements',
                description: 'Digital integration and interactive displays',
                priority: getInteractivePriority(audience, eventType),
                recommendations: getInteractiveRecommendations(budget, audience)
            },
            personalization: {
                name: 'Personalization',
                description: 'Custom and personalized signage solutions',
                priority: getPersonalizationPriority(audience, eventType),
                recommendations: getPersonalizationRecommendations(budget, eventType)
            },
            technology: {
                name: 'Emerging Technologies',
                description: 'Cutting-edge tech like AR, 3D printing, and smart materials',
                priority: getTechnologyPriority(budget, audience),
                recommendations: getTechnologyRecommendations(budget, eventType)
            }
        };

        // Calculate overall trend score
        const overallScore = calculateOverallScore(trends);
        const topTrends = getTopTrends(trends);
        const budgetRecommendations = getBudgetRecommendations(budget, eventType);

        return {
            trends: trends,
            overallScore: overallScore,
            topTrends: topTrends,
            budgetRecommendations: budgetRecommendations,
            eventType: eventType,
            audience: audience,
            budget: budget
        };
    }

    function getSustainabilityPriority(sustainability) {
        const priorities = {
            'low': 2,
            'medium': 4,
            'high': 7,
            'essential': 9
        };
        return priorities[sustainability] || 5;
    }

    function getInteractivePriority(audience, eventType) {
        let baseScore = 5;
        
        // Audience adjustments
        if (audience === 'tech-savvy') baseScore += 3;
        if (audience === 'young-professionals') baseScore += 2;
        if (audience === 'creative-industry') baseScore += 2;
        if (audience === 'traditional') baseScore -= 2;
        
        // Event type adjustments
        if (eventType === 'trade-show') baseScore += 2;
        if (eventType === 'conference') baseScore += 1;
        if (eventType === 'wedding') baseScore -= 1;
        
        return Math.min(10, Math.max(1, baseScore));
    }

    function getPersonalizationPriority(audience, eventType) {
        let baseScore = 6;
        
        if (audience === 'senior-executives') baseScore += 2;
        if (audience === 'creative-industry') baseScore += 1;
        if (eventType === 'corporate') baseScore += 1;
        if (eventType === 'wedding') baseScore += 2;
        
        return Math.min(10, Math.max(1, baseScore));
    }

    function getTechnologyPriority(budget, audience) {
        let baseScore = 4;
        
        if (budget === 'luxury') baseScore += 3;
        if (budget === 'premium') baseScore += 2;
        if (audience === 'tech-savvy') baseScore += 2;
        if (budget === 'budget') baseScore -= 2;
        
        return Math.min(10, Math.max(1, baseScore));
    }

    function getSustainableRecommendations(budget, eventType) {
        const recommendations = [];
        
        if (budget === 'budget') {
            recommendations.push('Recycled paper materials', 'Reusable fabric banners', 'Eco-friendly adhesives');
        } else if (budget === 'mid-range') {
            recommendations.push('Plant-based vinyl alternatives', 'Modular display systems', 'LED lighting solutions');
        } else {
            recommendations.push('Biodegradable materials', 'Smart energy systems', 'Carbon-neutral production');
        }
        
        if (eventType === 'corporate') {
            recommendations.push('Digital signage to reduce waste');
        }
        
        return recommendations;
    }

    function getInteractiveRecommendations(budget, audience) {
        const recommendations = [];
        
        if (budget === 'budget') {
            recommendations.push('QR code integration', 'Simple touch displays');
        } else if (budget === 'mid-range') {
            recommendations.push('Interactive kiosks', 'Motion-activated displays');
        } else {
            recommendations.push('Augmented reality experiences', 'Holographic displays');
        }
        
        if (audience === 'tech-savvy') {
            recommendations.push('Mobile app integration');
        }
        
        return recommendations;
    }

    function getPersonalizationRecommendations(budget, eventType) {
        const recommendations = [];
        
        if (budget === 'budget') {
            recommendations.push('Variable data printing', 'Custom color schemes');
        } else if (budget === 'mid-range') {
            recommendations.push('Personalized welcome signs', 'Custom branded elements');
        } else {
            recommendations.push('Fully customized experiences', 'Personalized AR content');
        }
        
        if (eventType === 'wedding') {
            recommendations.push('Personalized guest experiences');
        }
        
        return recommendations;
    }

    function getTechnologyRecommendations(budget, eventType) {
        const recommendations = [];
        
        if (budget === 'luxury') {
            recommendations.push('3D printed elements', 'Smart materials', 'Holographic displays');
        } else if (budget === 'premium') {
            recommendations.push('LED integration', 'Advanced projection mapping');
        } else {
            recommendations.push('Digital displays', 'Modern printing techniques');
        }
        
        return recommendations;
    }

    function calculateOverallScore(trends) {
        const scores = Object.values(trends).map(trend => trend.priority);
        const average = scores.reduce((a, b) => a + b, 0) / scores.length;
        return Math.round(average);
    }

    function getTopTrends(trends) {
        return Object.values(trends)
            .sort((a, b) => b.priority - a.priority)
            .slice(0, 2);
    }

    function getBudgetRecommendations(budget, eventType) {
        const recommendations = {
            'budget': 'Focus on cost-effective solutions with maximum impact',
            'mid-range': 'Balance innovation with practicality',
            'premium': 'Invest in quality materials and technology',
            'luxury': 'Go all-out with cutting-edge solutions'
        };
        
        return recommendations[budget] || recommendations['mid-range'];
    }

    function displayTrendResults(analysis) {
        const audienceLabels = {
            'young-professionals': 'Young Professionals (25-40)',
            'senior-executives': 'Senior Executives (40+)',
            'creative-industry': 'Creative Industry',
            'tech-savvy': 'Tech-Savvy Audience',
            'traditional': 'Traditional/Conservative'
        };

        const budgetLabels = {
            'budget': 'Budget-Friendly',
            'mid-range': 'Mid-Range',
            'premium': 'Premium',
            'luxury': 'Luxury/High-End'
        };

        trendContent.innerHTML = `
            <div class="trend-summary">
                <div class="score-indicator">
                    <h5>Innovation Score</h5>
                    <div class="score">${analysis.overallScore}/10</div>
                    <p>Based on your event profile</p>
                </div>
                <div class="profile-info">
                    <p><strong>Event Type:</strong> ${analysis.eventType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                    <p><strong>Target Audience:</strong> ${audienceLabels[analysis.audience]}</p>
                    <p><strong>Budget Level:</strong> ${budgetLabels[analysis.budget]}</p>
                </div>
            </div>

            <div class="top-trends">
                <h5>Top Trends for Your Event</h5>
                ${analysis.topTrends.map(trend => `
                    <div class="trend-item">
                        <h6>${trend.name}</h6>
                        <p>${trend.description}</p>
                        <div class="trend-recommendations">
                            <strong>Recommendations:</strong>
                            <ul>
                                ${trend.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="budget-guidance">
                <h5>Budget Guidance</h5>
                <p>${analysis.budgetRecommendations}</p>
            </div>

            <div class="all-trends">
                <h5>All Trend Priorities</h5>
                <div class="trend-priorities">
                    ${Object.values(analysis.trends).map(trend => `
                        <div class="priority-item">
                            <span class="trend-name">${trend.name}</span>
                            <div class="priority-bar">
                                <div class="priority-fill" style="width: ${trend.priority * 10}%"></div>
                            </div>
                            <span class="priority-score">${trend.priority}/10</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        results.style.display = 'block';
        results.scrollIntoView({ behavior: 'smooth' });
    }


}); 