import re

def update_index():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Animation frames
    content = content.replace("flava-depot/frames/ezgif-frame-${n}.jpg", "public/ezgif-frame-${n}.jpg")
    content = content.replace("ezgif-frame-001.webp (if supported) or ezgif-frame-001.jpg", "public/ezgif-frame-001.jpg")

    # 2. Titles and roles
    content = content.replace("Founder &amp; Master Builder", "Chief Projects &amp; Construction Officer &middot; Owner's Representative")
    content = content.replace("Founder & Master Builder", "Chief Projects & Construction Officer &middot; Owner's Representative")
    content = content.replace('"jobTitle": "Ultra-luxury custom home builder and historic coastal restoration specialist"', '"jobTitle": "Chief Projects & Construction Officer · Owner\'s Representative · Caribbean & Latin America"')

    # 4. Services framing
    content = content.replace("Ultra-luxury custom home builder and historic coastal restoration specialist. 37+ years of design-build construction management. $500M+ portfolio spanning California, Bahamas, Texas &amp; Montana.", "Chief Projects & Construction Officer · Owner's Representative · Caribbean & Latin America.")
    content = content.replace("Ultra-luxury custom homes, coastal restorations, design-build construction. California &bullet; Bahamas &bullet; Texas &bullet; Montana.", "Chief Projects & Construction Officer · Owner's Representative · Caribbean & Latin America.")
    content = content.replace("Ultra-luxury custom homes, historic coastal restorations, and design-build construction management. 37+ years, $500M+ portfolio.", "Chief Projects & Construction Officer · Owner's Representative · Caribbean & Latin America.")
    
    # Replacing services names in cards
    content = content.replace('<p class="service-title">Design-Build</p>', '<p class="service-title">Development Pipeline Leadership</p>')
    content = content.replace('<p class="service-title">Construction Management</p>', '<p class="service-title">Owner\'s Representative</p>')
    content = content.replace('<p class="service-title">Civil &amp; Site Work</p>', '<p class="service-title">Architecture &amp; Design Governance</p>')
    
    # Replace in intro
    content = content.replace("From conception to completion&mdash;we deliver integrated expertise across design-build, construction management, and complex site development.", "From conception to completion&mdash;delivering integrated expertise across development pipeline leadership, owner's representation, and architecture &amp; design governance.")

    # 5. Meta tags
    # title
    content = re.sub(r'<title>.*?</title>', '<title>Michael Chandler &mdash; Chief Projects &amp; Construction Officer</title>', content, flags=re.DOTALL)
    
    # 6. Discovery form
    form_html = """
                <form id="contact-form" action="#" method="POST" class="contact-form">
                    <div class="form-step active" id="step-1">
                        <p class="step-heading">Get in Touch</p>
                        <p class="step-sub">Please leave your details and a brief note.</p>
                        
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required placeholder="John Doe" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder="john@example.com" />
                        </div>
                        <div class="form-group">
                            <label for="note">Brief Note</label>
                            <textarea id="note" name="note" rows="4" required placeholder="How can I help you?"></textarea>
                        </div>
                        <div class="form-actions mt-4">
                            <button type="submit" class="btn btn-primary" id="submit-btn" style="width:100%;">Send Message</button>
                            <a href="/public/Michael_Chandler_Resume.pdf" class="btn btn-outline" style="width:100%; margin-top:1rem; text-align:center; display:block;" download>Download Resume</a>
                        </div>
                    </div>
                </form>
    """
    content = re.sub(r'<form id="contact-form".*?</form>', form_html, content, flags=re.DOTALL)

    # 7. Stats
    content = content.replace('data-target="500" data-prefix="" data-suffix="+"', 'data-target="500" data-prefix="$" data-suffix="M+"')
    content = content.replace('>500+<', '>$500M+<')
    content = content.replace('<p class="stat-label">Projects Delivered</p>', '<p class="stat-label">Portfolio</p>')
    
    # "4 Countries · 12 US States · 37 Years" might not be there currently, let's replace whatever the other stats are.
    # Let's search and replace other stats if they match.
    content = re.sub(r'data-target="37".*?Years of Excellence', 'data-target="37" data-prefix="" data-suffix=""></p>\n<p class="stat-label">Years</p>', content, flags=re.DOTALL|re.IGNORECASE)
    # Just generic replace for stats in next script if this fails.

    # 8. Resume download button
    nav_btn = '<a href="/public/Michael_Chandler_Resume.pdf" class="btn btn-primary" download>Download CV</a>'
    content = re.sub(r'(<a href="#contact" class="btn btn-primary.*?</a>)', r'\1\n                    ' + nav_btn, content)

    # 9. Footer regions
    content = content.replace('CA &middot; Bahamas &middot; TX &middot; MT &middot; UT &middot; FL', 'Caribbean &amp; Latin America &middot; CA &middot; Bahamas &middot; Mexico &middot; TX &middot; MT &middot; UT &middot; FL')

    # 10. Testimonials
    content = content.replace('R. &amp; J. Whitmore', 'Global Hospitality Group')
    content = content.replace('T. Harrington', 'International Resort Developers')
    content = content.replace('M. &amp; S. Davies', 'Private Island Consortium')
    content = content.replace('Private Estate Client', 'Board of Directors')
    content = content.replace('Coastal Mountain Civil Work', 'Owner\'s Representative &bull; $85M Portfolio')
    content = content.replace('Carmel Valley', 'VP of Development &bull; Global Operations')

    # 11. LinkedIn Link
    linkedin_html = '<a href="https://linkedin.com/in/michael-chandler-3858a63a" target="_blank" class="footer-col-link">LinkedIn</a>'
    content = content.replace('<a href="mailto:mike@chandler.com" class="footer-col-link">', linkedin_html + '\n                    <a href="mailto:mike@chandler.com" class="footer-col-link">')

    # 12. Process Section
    content = content.replace('<h3>Discovery &amp; Planning</h3>', '<h3>Feasibility &amp; Strategic Planning</h3>')
    content = content.replace('<h3>Execution &amp; Management</h3>', '<h3>Design Governance &amp; Delivery</h3>')
    content = content.replace('<h3>Legacy Completion</h3>', '<h3>Opening &amp; Handover</h3>')

    # 13. Remove Photo Editor
    content = re.sub(r'<!-- Photo Editor Modal -->.*?</div>\s*</div>\s*</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'<button id="open-photo-editor".*?</button>', '', content, flags=re.DOTALL)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

update_index()
