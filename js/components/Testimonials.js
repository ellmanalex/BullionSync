// Testimonials section component
app.component('testimonials-section', {
    template: `
        <section id="testimonials" class="testimonials">
            <div class="container">
                <div class="section-header">
                    <h2>What Our Customers Say</h2>
                    <p>Hear from jewelry store owners who have transformed their pricing with BullionSync</p>
                </div>
                
                <div class="testimonial-slider">
                    <div class="testimonial-controls">
                        <button class="testimonial-prev" @click="prevTestimonial">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button class="testimonial-next" @click="nextTestimonial">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                    
                    <div class="testimonial-wrapper" ref="testimonialWrapper">
                        <div 
                            v-for="(testimonial, index) in testimonials" 
                            :key="index"
                            class="testimonial-card"
                            :class="{ 'active': currentTestimonial === index }"
                        >
                            <div class="testimonial-content">
                                <div class="quote-icon">
                                    <i class="fas fa-quote-left"></i>
                                </div>
                                <p class="testimonial-text">{{ testimonial.quote }}</p>
                                <div class="testimonial-rating">
                                    <i class="fas fa-star" v-for="star in 5" :key="star"></i>
                                </div>
                            </div>
                            <div class="testimonial-author">
                                <div class="author-avatar">
                                    <i :class="testimonial.avatar"></i>
                                </div>
                                <div class="author-info">
                                    <h4>{{ testimonial.name }}</h4>
                                    <p>{{ testimonial.position }}, {{ testimonial.company }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="testimonial-dots">
                        <span 
                            v-for="(dot, index) in testimonials.length" 
                            :key="index"
                            class="dot"
                            :class="{ 'active': currentTestimonial === index }"
                            @click="setTestimonial(index)"
                        ></span>
                    </div>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            testimonials: [
                {
                    quote: "BullionSync has completely changed how we manage our gold jewelry pricing. We used to spend hours updating prices manually every week. Now it's all automated and perfectly accurate!",
                    name: "Sarah Johnson",
                    position: "Owner",
                    company: "Golden Memories Jewelry",
                    avatar: "fas fa-user-circle"
                },
                {
                    quote: "The formula-based pricing feature is incredible. We can set different markup rules for different product categories, and BullionSync handles all the calculations automatically.",
                    name: "Michael Rodriguez",
                    position: "Manager",
                    company: "Prestige Gold & Gems",
                    avatar: "fas fa-user-circle"
                },
                {
                    quote: "Our profit margins have increased by 18% since implementing BullionSync. The stop-loss feature ensures we never sell below our threshold, even when gold prices are volatile.",
                    name: "Jennifer Liu",
                    position: "CEO",
                    company: "Luxury Metals Boutique",
                    avatar: "fas fa-user-circle"
                },
                {
                    quote: "As a small jewelry shop, keeping up with gold price changes was overwhelming. BullionSync made it simple, and our customers appreciate that our pricing is always fair and transparent.",
                    name: "David Miller",
                    position: "Founder",
                    company: "Heritage Goldsmith",
                    avatar: "fas fa-user-circle"
                }
            ],
            currentTestimonial: 0,
            testimonialInterval: null
        }
    },
    mounted() {
        this.startAutoSlide();
    },
    beforeUnmount() {
        this.stopAutoSlide();
    },
    methods: {
        nextTestimonial() {
            this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
            this.resetAutoSlide();
        },
        prevTestimonial() {
            this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
            this.resetAutoSlide();
        },
        setTestimonial(index) {
            this.currentTestimonial = index;
            this.resetAutoSlide();
        },
        startAutoSlide() {
            this.testimonialInterval = setInterval(() => {
                this.nextTestimonial();
            }, 5000);
        },
        stopAutoSlide() {
            clearInterval(this.testimonialInterval);
        },
        resetAutoSlide() {
            this.stopAutoSlide();
            this.startAutoSlide();
        }
    }
});
