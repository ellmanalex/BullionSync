<template>
  <section id="benefits" class="benefits">
    <div class="container">
      <div class="section-header">
        <h2>Why Jewelry Merchants Love BullionSync</h2>
        <p>Save time, increase accuracy, and maximize profits with automated price updates</p>
      </div>
      
      <div class="benefits-container">
        <div class="benefit-item" v-for="(benefit, index) in benefits" :key="index">
          <div class="benefit-icon">
            <i :class="benefit.icon"></i>
          </div>
          <div class="benefit-content">
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
      
      <div class="benefits-cta">
        <div class="cta-content">
          <h3>Ready to streamline your jewelry pricing?</h3>
          <p>Join hundreds of jewelry merchants who trust BullionSync to keep their pricing accurate and competitive.</p>
          <button 
            class="btn-primary" 
            data-tally-open="w8WZYx" 
            data-tally-layout="modal" 
            data-tally-emoji-animation="wave"
            @click="trackInstallClick"
          >
            Get Started Today
          </button>
        </div>
        <div class="cta-stats">
          <div class="stat-item">
            <div class="stat-value">98%</div>
            <div class="stat-label">Accuracy Rate</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">5hr+</div>
            <div class="stat-label">Saved Weekly</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">15%</div>
            <div class="stat-label">Avg. Profit Increase</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BenefitsSection',
  data() {
    return {
      benefits: [
        {
          icon: 'fas fa-clock',
          title: 'Save Valuable Time',
          description: 'Eliminate the need for manual price updates. BullionSync automatically adjusts your prices, freeing up your time to focus on growing your business.'
        },
        {
          icon: 'fas fa-chart-line',
          title: 'Maximize Profits',
          description: 'Ensure your pricing always reflects current market conditions, helping you maintain optimal profit margins even as gold prices fluctuate.'
        },
        {
          icon: 'fas fa-calculator',
          title: 'Custom Formulas',
          description: 'Enter your own business logic and pricing formulas. Create complex calculations based on metal weight, purity, markup percentages, and more.'
        },
        {
          icon: 'fas fa-exclamation-triangle',
          title: 'Reduce Pricing Errors',
          description: 'Eliminate human error from your pricing process. Our automation ensures accurate calculations based on the latest metal prices.'
        },
        {
          icon: 'fas fa-user-friends',
          title: 'Build Customer Trust',
          description: 'Transparent, market-based pricing builds customer trust and loyalty, especially important for high-value jewelry purchases.'
        },
        {
          icon: 'fas fa-cogs',
          title: 'Effortless Integration',
          description: 'Quick and simple integration with your existing Shopify store. No technical knowledge required to get started.'
        }
      ]
    }
  },
  methods: {
    trackInstallClick() {
      // Track the install button click event
      if (this.$posthog) {
        this.$posthog.track('Install Button Clicked', {
          location: 'Benefits Section'
        });
      }
    }
  }
}
</script> 