<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="logo">
          <i class="fas fa-coins"></i>
          <span>BullionSync</span>
        </div>
        <nav class="nav">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><button class="btn-secondary" @click="showEmailForm">Contact</button></li>
            <li>
              <button 
                class="btn-primary" 
                @click="openTallyForm"
              >
                Install App
              </button>
            </li>
          </ul>
        </nav>
        <div class="menu-toggle" @click="toggleMenu">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </header>

    <main>
      <HeroSection @show-email-form="showEmailForm"></HeroSection>
      <BenefitsSection @show-email-form="showEmailForm"></BenefitsSection>
      <FooterSection></FooterSection>
    </main>

    <EmailForm 
      v-if="isEmailFormVisible" 
      @close="hideEmailForm"
      @submit-success="handleSubmitSuccess">
    </EmailForm>

    <div class="success-message" v-if="showSuccessMessage">
      <div class="success-content">
        <i class="fas fa-check-circle"></i>
        <h3>Thank You!</h3>
        <p>We'll be in touch with installation instructions shortly.</p>
        <button class="btn-primary" @click="hideSuccessMessage">Close</button>
      </div>
    </div>

    <div class="overlay" v-if="isEmailFormVisible || showSuccessMessage" @click="closeAllModals"></div>
  </div>
</template>

<script>
// Import components
import HeroSection from './components/Hero.vue';
import FooterSection from './components/Footer.vue';
import BenefitsSection from './components/Benefits.vue';
import EmailForm from './components/EmailForm.vue';
// Import other components as needed
// import FeaturesSection from './components/Features.vue';
// import TestimonialsSection from './components/Testimonials.vue';

export default {
  components: {
    HeroSection,
    FooterSection,
    BenefitsSection,
    EmailForm,
    // Register other components
    // FeaturesSection,
    // TestimonialsSection,
  },
  data() {
    return {
      isEmailFormVisible: false,
      showSuccessMessage: false,
      isMenuOpen: false
    }
  },
  methods: {
    openTallyForm() {
      // Track the install button click event
      this.$posthog.track('Install Button Clicked', {
        location: 'Header Nav'
      });
      
      // Check if Tally is loaded
      if (window.Tally) {
        window.Tally.openPopup('w8WZYx', {
          width: 540,
          emoji: 'wave',
          layout: 'modal',
          alignLeft: false,
          hideTitle: false
        });
      } else {
        // Fallback to direct URL if Tally isn't loaded
        window.open('https://tally.so/r/w8WZYx', '_blank');
      }
    },
    showEmailForm() {
      this.isEmailFormVisible = true;
      document.body.classList.add('no-scroll');
    },
    hideEmailForm() {
      this.isEmailFormVisible = false;
      document.body.classList.remove('no-scroll');
    },
    handleSubmitSuccess() {
      this.hideEmailForm();
      this.showSuccessMessage = true;
    },
    hideSuccessMessage() {
      this.showSuccessMessage = false;
      document.body.classList.remove('no-scroll');
    },
    closeAllModals() {
      this.hideEmailForm();
      this.hideSuccessMessage();
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      const nav = document.querySelector('.nav');
      if (this.isMenuOpen) {
        nav.classList.add('nav-open');
      } else {
        nav.classList.remove('nav-open');
      }
    }
  },
  mounted() {
    // Track initial page view
    this.$posthog.trackPageView({
      page_name: 'Home'
    });
    
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Check if Tally script is loaded, if not, load it
    if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }
}
</script> 