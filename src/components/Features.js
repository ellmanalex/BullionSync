// Features section component
window.app.component('features-section', {
    template: `
        <section id="features" class="features">
            <div class="container">
                <div class="section-header">
                    <h2>Powerful Features</h2>
                    <p>BullionSync offers everything you need to efficiently manage your jewelry pricing based on market rates</p>
                </div>
                
                <div class="features-grid">
                    <div class="feature-card" v-for="(feature, index) in features" :key="index">
                        <div class="feature-icon">
                            <i :class="feature.icon"></i>
                        </div>
                        <h3>{{ feature.title }}</h3>
                        <p>{{ feature.description }}</p>
                    </div>
                </div>
                
                <div class="features-showcase">
                    <div class="showcase-content">
                        <h3>See BullionSync in Action</h3>
                        <ul class="showcase-list">
                            <li v-for="(item, index) in showcaseItems" :key="index">
                                <i class="fas fa-check-circle"></i>
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                        <div class="cta-section">
                            <p>Ready to transform your jewelry pricing workflow?</p>
                            <button class="btn-primary" @click="showForm">
                                <i class="fas fa-download"></i> Install Now
                            </button>
                        </div>
                    </div>
                    <div class="showcase-image">
                        <div class="feature-image-grid">
                            <div class="feature-image-item">
                                <div class="feature-image-icon">
                                    <i class="fas fa-sync-alt"></i>
                                </div>
                                <div class="feature-image-text">
                                    <h4>Auto Updates</h4>
                                    <p>Prices adjust dynamically based on market rates</p>
                                </div>
                            </div>
                            <div class="feature-image-item">
                                <div class="feature-image-icon">
                                    <i class="fas fa-calculator"></i>
                                </div>
                                <div class="feature-image-text">
                                    <h4>Smart Formulas</h4>
                                    <p>Custom pricing rules based on metal weight and purity</p>
                                </div>
                            </div>
                            <div class="feature-image-item">
                                <div class="feature-image-icon">
                                    <i class="fas fa-shield-alt"></i>
                                </div>
                                <div class="feature-image-text">
                                    <h4>Price Protection</h4>
                                    <p>Never sell below your cost with stop-loss thresholds</p>
                                </div>
                            </div>
                            <div class="feature-image-item">
                                <div class="feature-image-icon">
                                    <i class="fas fa-chart-line"></i>
                                </div>
                                <div class="feature-image-text">
                                    <h4>Price Trends</h4>
                                    <p>Monitor market fluctuations and optimize pricing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            features: [
                {
                    icon: 'fas fa-sync-alt',
                    title: 'Live Price Updates',
                    description: 'Automatically update your product prices based on real-time spot market metal prices. Set it and forget it.'
                },
                {
                    icon: 'fas fa-mouse-pointer',
                    title: 'One Click Update',
                    description: 'Update all your product prices with a single click when you want to take manual control of when updates happen.'
                },
                {
                    icon: 'fas fa-calculator',
                    title: 'Formula Based Pricing',
                    description: 'Create custom formulas to calculate prices based on metal weight, purity, markup, and other variables.'
                },
                {
                    icon: 'fas fa-shield-alt',
                    title: 'Stop Loss Pricing',
                    description: 'Set minimum price thresholds to ensure you never sell below your cost, even if market prices drop.'
                }
            ],
            showcaseItems: [
                'Intuitive dashboard with live market rates',
                'Simple product categorization and tagging',
                'Transparent update history and logs',
                'Custom formula configuration tools',
                'Notifications for significant price changes'
            ]
        }
    },
    methods: {
        showForm() {
            // Emit an event to show the email form
            window.app.$emit('show-email-form');
        }
    }
});
