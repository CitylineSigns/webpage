// Venue Compliance Checklist Tool
document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateReport');
    const results = document.getElementById('complianceResults');
    const complianceContent = document.getElementById('complianceContent');

    generateBtn.addEventListener('click', function() {
        const checklistItems = document.querySelectorAll('.checklist-item input[type="checkbox"]');
        const report = generateComplianceReport(checklistItems);
        displayComplianceResults(report);
    });

    function generateComplianceReport(checklistItems) {
        let completed = 0;
        let total = checklistItems.length;
        let missingItems = [];
        let completedItems = [];

        checklistItems.forEach(item => {
            if (item.checked) {
                completed++;
                completedItems.push(item.id);
            } else {
                missingItems.push(item.id);
            }
        });

        const percentage = Math.round((completed / total) * 100);
        let status = '';
        let recommendations = [];

        if (percentage >= 90) {
            status = 'Excellent';
            recommendations.push('Your installation plan is comprehensive and ready for execution.');
        } else if (percentage >= 75) {
            status = 'Good';
            recommendations.push('Most requirements are covered, but review missing items before proceeding.');
        } else if (percentage >= 50) {
            status = 'Needs Attention';
            recommendations.push('Several critical items need to be addressed before installation.');
        } else {
            status = 'Requires Immediate Action';
            recommendations.push('Significant planning gaps identified. Review all missing items.');
        }

        // Add specific recommendations based on missing items
        missingItems.forEach(itemId => {
            const recommendation = getRecommendationForItem(itemId);
            if (recommendation) {
                recommendations.push(recommendation);
            }
        });

        return {
            percentage: percentage,
            status: status,
            completed: completed,
            total: total,
            missingItems: missingItems,
            completedItems: completedItems,
            recommendations: recommendations
        };
    }

    function getRecommendationForItem(itemId) {
        const recommendations = {
            'venue-review': 'Schedule a venue walkthrough to review all restrictions and requirements.',
            'surface-test': 'Test your materials on a small area of the venue surface before full installation.',
            'material-approval': 'Submit all materials to venue management for pre-approval.',
            'timeline-confirmed': 'Confirm installation and removal times with venue coordinator.',
            'surface-clean': 'Ensure all surfaces are properly cleaned and prepared before installation.',
            'tools-ready': 'Organize and prepare all tools and materials the day before installation.',
            'team-briefed': 'Conduct a team briefing to review installation procedures and safety protocols.',
            'safety-check': 'Review all safety protocols and ensure proper equipment is available.',
            'bubble-check': 'Use proper application techniques to avoid air bubbles and wrinkles.',
            'alignment-check': 'Use templates or measuring tools to ensure proper alignment.',
            'durability-check': 'Verify all signage is securely mounted and can withstand event conditions.',
            'venue-inspection': 'Schedule a final inspection with venue management after installation.'
        };

        return recommendations[itemId] || null;
    }

    function displayComplianceResults(report) {
        const statusColors = {
            'Excellent': '#28a745',
            'Good': '#17a2b8',
            'Needs Attention': '#ffc107',
            'Requires Immediate Action': '#dc3545'
        };

        complianceContent.innerHTML = `
            <div class="compliance-summary">
                <div class="status-indicator" style="background-color: ${statusColors[report.status]}">
                    <h5>${report.status}</h5>
                    <div class="percentage">${report.percentage}% Complete</div>
                </div>
                <div class="progress-stats">
                    <p><strong>${report.completed}</strong> of <strong>${report.total}</strong> items completed</p>
                </div>
            </div>

            ${report.missingItems.length > 0 ? `
            <div class="missing-items">
                <h5>Items Requiring Attention</h5>
                <ul>
                    ${report.missingItems.map(itemId => {
                        const label = document.querySelector(`label[for="${itemId}"]`);
                        return `<li>${label ? label.textContent : itemId}</li>`;
                    }).join('')}
                </ul>
            </div>
            ` : ''}

            <div class="recommendations">
                <h5>Recommendations</h5>
                <ul>
                    ${report.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                </ul>
            </div>

            ${report.percentage < 75 ? `
            <div class="urgent-notice">
                <h5>⚠️ Important Notice</h5>
                <p>Your compliance score indicates potential issues. We recommend consulting with our experts before proceeding with installation.</p>
            </div>
            ` : ''}
        `;

        results.style.display = 'block';
        results.scrollIntoView({ behavior: 'smooth' });
    }

    // Add visual feedback for checklist items
    const checklistItems = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    checklistItems.forEach(item => {
        item.addEventListener('change', function() {
            const label = this.nextElementSibling;
            if (this.checked) {
                label.style.textDecoration = 'line-through';
                label.style.color = '#28a745';
            } else {
                label.style.textDecoration = 'none';
                label.style.color = 'inherit';
            }
        });
    });


}); 