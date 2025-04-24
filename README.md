Maneesha Ahamed's Portfolio Website
This is a personal portfolio website for Maneesha Ahamed, showcasing health promotion projects, certifications, and contact information. The site is built using HTML, CSS, and JavaScript, with jQuery for interactivity and third-party plugins for features like carousels, modals, and animations.
Table of Contents

Overview
Features
Setup Instructions
File Structure
Dependencies
Contact Section
Development Notes
License

Overview
The portfolio website highlights Maneesha Ahamed's work in health promotion, including news, projects, certifications, and a contact form. It features a responsive design, interactive modals, and a contact form integrated with Formsubmit for email submissions. The site uses a clean, modern aesthetic with animations and a grid-based layout for news images.
Features

Responsive Design: Adapts to desktop, tablet, and mobile screens.
News Section: Displays news items with a grid layout and modal popups, including a responsive image grid similar to social media platforms.
Contact Section: Includes a form with Formsubmit integration, a success/error popup, and a Google Maps iframe showing a pin at Kattakaduwa, Galgamuwa, Sri Lanka.
Modals: Interactive popups for news, projects, and certifications with dynamic content and close buttons.
Animations: Uses WOW.js for fade-in effects on scroll.
Carousels: Owl Carousel for testimonials and project images.
Custom Cursor: Enhances user interaction with a custom cursor effect.

Setup Instructions

Clone or Download:

Clone the repository or download the project files.

git clone <repository-url>


Serve the Website:

Use a local server (e.g., VS Code Live Server, Node.js http-server, or Python http.server) to serve the files, as some features (e.g., Formsubmit) require a server environment.

python -m http.server 8000


Open http://localhost:8000 in a browser.


Configure Formsubmit:

The contact form submits to https://formsubmit.co/ahamedmaneesha@gmail.com. Verify the email address with Formsubmit by following the confirmation link sent to ahamedmaneesha@gmail.com.
Test the form to ensure submissions are received.


Ensure Assets:

Confirm all images (img/news/*.jpg, img/svg/*.svg) and SVGs (img/svg/cancel.svg, img/svg/checkcircle.svg, img/svg/x-circle.svg) are in the correct directories.
If SVGs are missing, replace with alternative icons or update paths in index.html and init.js.


Test the Site:

Check responsiveness on different screen sizes.
Test the contact form for success/error popups.
Verify modals, carousels, and animations work as expected.



File Structure
portfolio-website/
├── img/
│   ├── news/
│   │   ├── 001_1.jpg
│   │   ├── 002_1.jpg
│   │   └── ... (news images)
│   ├── svg/
│   │   ├── cancel.svg
│   │   ├── checkcircle.svg
│   │   ├── x-circle.svg
│   │   ├── location-2.svg
│   │   ├── telephone-2.svg
│   │   ├── email-2.svg
│   │   └── ... (other SVGs)
├── css/
│   ├── style.css
│   ├── plugins.css
│   ├── dark.css
├── js/
│   ├── init.js
│   ├── plugins.js
│   ├── jquery.js
├── index.html
├── README.md


index.html: Main HTML file with the portfolio structure.
style.css: Custom styles for layout, modals, and contact section.
init.js: JavaScript for interactivity (modals, form submission, carousels).
plugins.css/js: Third-party plugin styles and scripts (e.g., Owl Carousel, Magnific Popup, WOW.js).
jquery.js: jQuery library.
img/: Images and SVGs for news, icons, and modals.

Dependencies

jQuery: Core library for DOM manipulation and event handling.
Owl Carousel: For sliders in testimonials and project modals.
Magnific Popup: For modal popups (news, projects, certifications).
WOW.js: For scroll-based animations.
Formsubmit: For contact form email submissions.
Google Maps Embed API: For the contact section map (no API key required for embed).

Ensure plugins.js and plugins.css include these dependencies. If missing, add them via CDN or local files.
Contact Section
The contact section (#contact) is designed to facilitate communication with Maneesha Ahamed. Key features include:

Contact Information:

Address: No 21, Kattakaduwa, Galgamuwa, Sri Lanka
Phone: 076 6820884
Email: ahamedmaneesha@gmail.com
Introductory Text: "I'm always open to discussing health promotion opportunities or partnerships."


Formsubmit Integration:

Form submits to https://formsubmit.co/ahamedmaneesha@gmail.com.
Validates name, email, and message fields, showing an error if any are empty.
Displays a success popup (Message Sent Successfully!) or error popup (Submission Failed) based on submission status.


Popup:

Styled with a dark overlay and centered white box.
Success state shows checkcircle.svg and a success message.
Error state shows x-circle.svg and an error message.
Closes via a "Close" button or background click.


Map:

Google Maps iframe with a pin at Kattakaduwa, Galgamuwa, Sri Lanka.
Embedded using a static URL (no API key required).
Adjust the iframe URL in index.html if a more precise pin location is needed.



Testing the Contact Form

Fill out the form with valid data and submit to verify the success popup and email delivery.
Submit with empty fields to check the .empty_notice display.
Simulate a failed submission (e.g., offline mode) to test the error popup.

Development Notes

Assets: Ensure all images and SVGs are present in the img/ directory. Missing assets (e.g., checkcircle.svg) will cause broken icons.
Formsubmit: Verify the email address with Formsubmit to enable submissions. Check spam/junk folders for confirmation emails.
Map Accuracy: The map pin is set to Kattakaduwa, Galgamuwa. If the location is imprecise, provide exact coordinates or a Google Maps URL for adjustment.
Responsive Design: Test the contact section on mobile devices to ensure the popup, form, and map display correctly.
Dependencies: Missing plugins.js, jquery.js, or plugins.css may break features like modals or animations. Include these files or share them for debugging.
News Section: The news section uses a grid layout for images in modals, as per previous updates. Ensure news images (img/news/*.jpg) exist.

License
This project is for personal use by Maneesha Ahamed. No license is specified for public distribution. Contact the owner for permission to use or modify the code.

Last Updated: April 25, 2025
