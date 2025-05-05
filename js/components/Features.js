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
                    </div>
                    <div class="showcase-image">
                        <div class="app-demo">
                            <div class="demo-header">
                                <div class="demo-title">BullionSync Dashboard</div>
                                <div class="demo-controls">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div class="demo-body">
                                <div class="demo-sidebar">
                                    <div class="sidebar-item active">Dashboard</div>
                                    <div class="sidebar-item">Products</div>
                                    <div class="sidebar-item">Pricing Rules</div>
                                    <div class="sidebar-item">Settings</div>
                                    <div class="sidebar-item">Help</div>
                                </div>
                                <div class="demo-main">
                                    <div class="demo-widget price-widget">
                                        <div class="widget-header">Gold Price</div>
                                        <div class="widget-body">
                                            <div class="price">$1,876.42</div>
                                            <div class="change positive">+0.38%</div>
                                        </div>
                                    </div>
                                    <div class="demo-widget status-widget">
                                        <div class="widget-header">Products Status</div>
                                        <div class="widget-body">
                                            <div class="status-item">
                                                <span>Up to date</span>
                                                <span class="count">42</span>
                                            </div>
                                            <div class="status-item">
                                                <span>Needs update</span>
                                                <span class="count alert">8</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="demo-action">
                                        <button class="demo-button">Update All Prices</button>
                                    </div>
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
    }
});
