// Event Signage Planning Tool
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const results = document.getElementById('results');
    const resultsContent = document.getElementById('resultsContent');

    calculateBtn.addEventListener('click', function() {
        const eventType = document.getElementById('eventType').value;
        const eventDuration = parseInt(document.getElementById('eventDuration').value);
        const attendance = parseInt(document.getElementById('attendance').value);
        const venueType = document.getElementById('venueType').value;

        const calculations = calculateRequirements(eventType, eventDuration, attendance, venueType);
        displayResults(calculations);
    });

    function calculateRequirements(eventType, duration, attendance, venueType) {
        // Base calculations
        let baseCost = 0;
        let timeline = 0;
        let signageItems = [];
        let specialRequirements = [];

        // Event type multipliers
        const eventMultipliers = {
            'corporate': { cost: 1.2, timeline: 1.0, complexity: 'high' },
            'wedding': { cost: 0.8, timeline: 0.8, complexity: 'medium' },
            'trade-show': { cost: 1.5, timeline: 1.3, complexity: 'very-high' },
            'conference': { cost: 1.1, timeline: 1.1, complexity: 'high' },
            'party': { cost: 0.7, timeline: 0.6, complexity: 'low' }
        };

        // Venue type considerations
        const venueFactors = {
            'hotel': { restrictions: 'moderate', installation: 'standard', cost: 1.0 },
            'outdoor': { restrictions: 'low', installation: 'complex', cost: 1.3 },
            'warehouse': { restrictions: 'low', installation: 'standard', cost: 0.9 },
            'restaurant': { restrictions: 'high', installation: 'delicate', cost: 1.2 }
        };

        const eventMultiplier = eventMultipliers[eventType];
        const venueFactor = venueFactors[venueType];

        // Calculate base requirements
        baseCost = attendance * 2.5 * eventMultiplier.cost * venueFactor.cost;
        timeline = Math.max(8, Math.ceil(12 * eventMultiplier.timeline));

        // Determine signage items based on event type and attendance
        if (attendance < 50) {
            signageItems = ['Welcome Sign', 'Directional Signs (3-5)', 'Table Numbers', 'Banner/Backdrop'];
        } else if (attendance < 200) {
            signageItems = ['Welcome Sign', 'Directional Signs (5-8)', 'Table Numbers', 'Banner/Backdrop', 'Registration Sign', 'Schedule Display'];
        } else {
            signageItems = ['Welcome Sign', 'Directional Signs (8-12)', 'Table Numbers', 'Banner/Backdrop', 'Registration Sign', 'Schedule Display', 'Sponsor Recognition', 'Information Kiosk'];
        }

        // Add event-specific items
        if (eventType === 'corporate') {
            signageItems.push('Company Logo Display', 'Presentation Backdrop');
        } else if (eventType === 'wedding') {
            signageItems.push('Wedding Timeline', 'Photo Backdrop', 'Guest Book Sign');
        } else if (eventType === 'trade-show') {
            signageItems.push('Booth Graphics', 'Product Displays', 'Interactive Elements');
        }

        // Special requirements based on venue
        if (venueFactor.restrictions === 'high') {
            specialRequirements.push('Adhesive-free solutions required', 'Limited installation time windows', 'Surface protection measures');
        } else if (venueFactor.installation === 'complex') {
            specialRequirements.push('Weather-resistant materials', 'Sturdy mounting systems', 'Additional safety measures');
        }

        // Duration considerations
        if (duration > 1) {
            specialRequirements.push('Durable materials for multi-day use', 'Storage solutions between days');
            baseCost *= 1.1; // 10% increase for multi-day events
        }

        return {
            baseCost: Math.round(baseCost),
            timeline: timeline,
            signageItems: signageItems,
            specialRequirements: specialRequirements,
            eventType: eventType,
            venueType: venueType,
            complexity: eventMultiplier.complexity
        };
    }

    function displayResults(calculations) {
        const complexityLabels = {
            'low': 'Low Complexity',
            'medium': 'Medium Complexity',
            'high': 'High Complexity',
            'very-high': 'Very High Complexity'
        };

        const venueLabels = {
            'hotel': 'Hotel/Conference Center',
            'outdoor': 'Outdoor Venue',
            'warehouse': 'Warehouse/Industrial',
            'restaurant': 'Restaurant/Private Venue'
        };

        resultsContent.innerHTML = `
            <div class="result-item">
                <h5>Estimated Timeline</h5>
                <p><strong>${calculations.timeline} weeks</strong> recommended planning time</p>
            </div>
            <div class="result-item">
                <h5>Budget Estimate</h5>
                <p><strong>$${calculations.baseCost.toLocaleString()}</strong> - $${Math.round(calculations.baseCost * 1.3).toLocaleString()}</p>
                <small>Range includes basic to premium materials</small>
            </div>
            <div class="result-item">
                <h5>Recommended Signage Items</h5>
                <ul>
                    ${calculations.signageItems.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            ${calculations.specialRequirements.length > 0 ? `
            <div class="result-item">
                <h5>Special Considerations</h5>
                <ul>
                    ${calculations.specialRequirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            <div class="result-item">
                <h5>Project Complexity</h5>
                <p><strong>${complexityLabels[calculations.complexity]}</strong></p>
                <p>Venue: ${venueLabels[calculations.venueType]}</p>
            </div>
        `;

        results.style.display = 'block';
        results.scrollIntoView({ behavior: 'smooth' });
    }


}); 