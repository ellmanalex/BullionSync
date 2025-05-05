// Main Vue application
const app = Vue.createApp({
    data() {
        return {
            isEmailFormVisible: false,
            showSuccessMessage: false,
            isMenuOpen: false
        }
    },
    methods: {
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
        // Add scroll event listener for header behavior
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});

// Mount the app after all components are registered
app.mount('#app');
