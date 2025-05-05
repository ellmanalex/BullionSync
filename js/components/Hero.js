// Hero section component
window.app.component('hero-section', {
    template: `
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <h1>Automate Your Jewelry Pricing with Live Gold Rates</h1>
                    <p>BullionSync automatically updates your Shopify store's jewelry prices based on real-time gold market values, saving you time and maximizing profits.</p>
                    <div class="hero-buttons">
                        <button class="btn-primary btn-large" @click="$emit('show-email-form')">
                            <i class="fas fa-download"></i> Install App
                        </button>
                        <a href="#features" class="btn-secondary btn-large">
                            <i class="fas fa-info-circle"></i> Learn More
                        </a>
                    </div>
                </div>
                <div class="hero-image">
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
            <div class="hero-wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    `,
    data() {
        return {
            // Simple data for hero section if needed in the future
        }
    }
});
