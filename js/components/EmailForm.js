// Email Form component
app.component('email-form', {
    template: `
        <div class="modal email-form-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Install BullionSync</h3>
                    <button class="close-btn" @click="$emit('close')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Enter your details below and we'll send you installation instructions for your Shopify store.</p>
                    
                    <form @submit.prevent="submitForm" ref="emailForm">
                        <div class="form-group">
                            <label for="name">Full Name <span class="required">*</span></label>
                            <input 
                                type="text" 
                                id="name" 
                                v-model="formData.name" 
                                :class="{'error': validationErrors.name}"
                                @input="clearError('name')"
                                required
                            >
                            <span class="error-message" v-if="validationErrors.name">{{ validationErrors.name }}</span>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address <span class="required">*</span></label>
                            <input 
                                type="email" 
                                id="email" 
                                v-model="formData.email" 
                                :class="{'error': validationErrors.email}"
                                @input="clearError('email')"
                                required
                            >
                            <span class="error-message" v-if="validationErrors.email">{{ validationErrors.email }}</span>
                        </div>
                        
                        <div class="form-group">
                            <label for="storeName">Shopify Store Name <span class="required">*</span></label>
                            <input 
                                type="text" 
                                id="storeName" 
                                v-model="formData.storeName" 
                                :class="{'error': validationErrors.storeName}"
                                @input="clearError('storeName')"
                                required
                            >
                            <span class="error-message" v-if="validationErrors.storeName">{{ validationErrors.storeName }}</span>
                        </div>
                        
                        <div class="form-group">
                            <label for="storeUrl">Store URL <span class="required">*</span></label>
                            <input 
                                type="url" 
                                id="storeUrl" 
                                v-model="formData.storeUrl" 
                                placeholder="https://your-store.myshopify.com"
                                :class="{'error': validationErrors.storeUrl}"
                                @input="clearError('storeUrl')"
                                required
                            >
                            <span class="error-message" v-if="validationErrors.storeUrl">{{ validationErrors.storeUrl }}</span>
                        </div>
                        
                        <div class="form-group checkbox-group">
                            <input 
                                type="checkbox" 
                                id="termsAgree" 
                                v-model="formData.termsAgree"
                                :class="{'error': validationErrors.termsAgree}"
                                @change="clearError('termsAgree')"
                                required
                            >
                            <label for="termsAgree">I agree to BullionSync's <a href="#" @click.prevent>Terms of Service</a> and <a href="#" @click.prevent>Privacy Policy</a></label>
                            <span class="error-message" v-if="validationErrors.termsAgree">{{ validationErrors.termsAgree }}</span>
                        </div>
                        
                        <div class="form-actions">
                            <button type="submit" class="btn-primary" :disabled="isSubmitting">
                                <span v-if="isSubmitting"><i class="fas fa-spinner fa-spin"></i> Submitting...</span>
                                <span v-else>Submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            formData: {
                name: '',
                email: '',
                storeName: '',
                storeUrl: '',
                termsAgree: false
            },
            validationErrors: {},
            isSubmitting: false
        }
    },
    methods: {
        validateForm() {
            this.validationErrors = {};
            let isValid = true;
            
            if (!this.formData.name.trim()) {
                this.validationErrors.name = 'Please enter your name';
                isValid = false;
            }
            
            if (!this.formData.email.trim()) {
                this.validationErrors.email = 'Please enter your email address';
                isValid = false;
            } else if (!this.isValidEmail(this.formData.email)) {
                this.validationErrors.email = 'Please enter a valid email address';
                isValid = false;
            }
            
            if (!this.formData.storeName.trim()) {
                this.validationErrors.storeName = 'Please enter your store name';
                isValid = false;
            }
            
            if (!this.formData.storeUrl.trim()) {
                this.validationErrors.storeUrl = 'Please enter your store URL';
                isValid = false;
            } else if (!this.isValidUrl(this.formData.storeUrl)) {
                this.validationErrors.storeUrl = 'Please enter a valid URL (including https://)';
                isValid = false;
            }
            
            if (!this.formData.termsAgree) {
                this.validationErrors.termsAgree = 'You must agree to the Terms of Service and Privacy Policy';
                isValid = false;
            }
            
            return isValid;
        },
        
        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        
        isValidUrl(url) {
            try {
                new URL(url);
                return true;
            } catch (e) {
                return false;
            }
        },
        
        clearError(field) {
            if (this.validationErrors[field]) {
                this.$delete(this.validationErrors, field);
            }
        },
        
        submitForm() {
            if (!this.validateForm()) {
                return;
            }
            
            this.isSubmitting = true;
            
            // Here, we'll use a Google Sheet Web App as a form endpoint
            // This assumes you've created a Google Sheet with an Apps Script web app
            // that accepts form submissions via POST request
            
            // Submit to Google Sheets
            const formUrl = 'https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec';
            const formData = new FormData();
            
            // Add form data
            Object.keys(this.formData).forEach(key => {
                formData.append(key, this.formData[key]);
            });
            
            // For demonstration purposes, we'll simulate a successful submission
            // In a real application, you would make an actual API call
            setTimeout(() => {
                this.isSubmitting = false;
                this.$emit('submit-success');
                
                // Reset form
                this.formData = {
                    name: '',
                    email: '',
                    storeName: '',
                    storeUrl: '',
                    termsAgree: false
                };
            }, 1500);
            
            /* In a real application, you would use axios:
            axios.post(formUrl, formData)
                .then(response => {
                    this.isSubmitting = false;
                    this.$emit('submit-success');
                    
                    // Reset form
                    this.formData = {
                        name: '',
                        email: '',
                        storeName: '',
                        storeUrl: '',
                        termsAgree: false
                    };
                })
                .catch(error => {
                    this.isSubmitting = false;
                    alert('There was an error submitting your form. Please try again.');
                    console.error('Form submission error:', error);
                });
            */
        }
    }
});
