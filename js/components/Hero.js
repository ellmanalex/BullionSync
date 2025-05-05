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
                    <div class="price-card">
                        <h3>Live Gold Price</h3>
                        <div class="gold-price-chart">
                            <canvas ref="goldChart"></canvas>
                        </div>
                        <div class="current-price">
                            <span>Current: ${{ currentGoldPrice }}</span>
                            <span class="price-change" :class="priceChangeClass">
                                <i :class="priceChangeIcon"></i> {{ priceChange }}%
                            </span>
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
            currentGoldPrice: '1,876.42',
            priceChange: '0.38',
            priceChangeClass: 'positive',
            priceChangeIcon: 'fas fa-arrow-up',
            goldChart: null,
            goldPriceData: [1865.20, 1868.45, 1872.30, 1869.15, 1871.80, 1876.42]
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initGoldChart();
        });
    },
    methods: {
        initGoldChart() {
            const ctx = this.$refs.goldChart.getContext('2d');
            
            this.goldChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['5d ago', '4d ago', '3d ago', '2d ago', 'Yesterday', 'Today'],
                    datasets: [{
                        label: 'Gold Price (USD)',
                        data: this.goldPriceData,
                        fill: true,
                        backgroundColor: 'rgba(212, 175, 55, 0.2)',
                        borderColor: 'rgba(212, 175, 55, 1)',
                        borderWidth: 2,
                        tension: 0.4,
                        pointBackgroundColor: 'rgba(212, 175, 55, 1)',
                        pointRadius: 3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                label: function(context) {
                                    return `$${context.raw.toFixed(2)}`;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            ticks: {
                                callback: function(value) {
                                    return '$' + value;
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
        }
    }
});
