// Footer component
window.app.component('footer-section', {
    template: `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-logo">
                        <i class="fas fa-coins"></i>
                        <span>BullionSync</span>
                        <p>Automated gold price updates for Shopify jewelry stores</p>
                    </div>
                    
                    <div class="footer-links">
                        <div class="footer-column">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#benefits">Benefits</a></li>
                                <li><a href="#" @click.prevent>Pricing</a></li>
                                <li><a href="#" @click.prevent>Documentation</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#" @click.prevent>About Us</a></li>
                                <li><a href="#" @click.prevent>Blog</a></li>
                                <li><a href="#" @click.prevent>Careers</a></li>
                                <li><a href="#" @click.prevent>Contact</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#" @click.prevent>Terms of Service</a></li>
                                <li><a href="#" @click.prevent>Privacy Policy</a></li>
                                <li><a href="#" @click.prevent>Cookie Policy</a></li>
                                <li><a href="#" @click.prevent>GDPR Compliance</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4>Connect</h4>
                            <div class="social-links">
                                <a href="#" @click.prevent class="social-link"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" @click.prevent class="social-link"><i class="fab fa-twitter"></i></a>
                                <a href="#" @click.prevent class="social-link"><i class="fab fa-instagram"></i></a>
                                <a href="#" @click.prevent class="social-link"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                            <div class="shopify-partner">
                                <img src="https://cdn.shopify.com/s/files/1/0067/0257/1882/files/shopify-partner-badge-white.svg" alt="Shopify Partner">
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; {{ currentYear }} BullionSync. All rights reserved.</p>
                    <p>BullionSync is not affiliated with or endorsed by Shopify Inc.</p>
                </div>
            </div>
        </footer>
    `,
    data() {
        return {
            currentYear: new Date().getFullYear()
        }
    }
});
