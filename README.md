# Maneesha Ahamed's Portfolio Website

A personal portfolio website for Maneesha Ahamed, showcasing health promotion projects, certifications, and contact information. Built with **HTML**, **CSS**, **JavaScript**, and **jQuery**, it includes interactive components like modals, carousels, animations, and a contact form.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [Contact Section](#contact-section)
- [Development Notes](#development-notes)
- [License](#license)

---

## 🧾 Overview

This website highlights Maneesha Ahamed's work in health promotion through a modern, responsive design. It includes:

- Project showcases
- News and certification modals
- A Formsubmit-integrated contact form
- Scroll-based animations and interactive elements

---

## ✨ Features

- **Responsive Design**: Mobile-first layout with adaptive styling.
- **News Section**: Grid-based layout with modal popups for detailed content.
- **Modals**: Used for viewing projects, news, and certifications.
- **Contact Form**: Integrated with [Formsubmit](https://formsubmit.co) for direct email delivery.
- **Custom Cursor**: Stylish cursor interaction.
- **Animations**: Scroll-triggered fade-in using WOW.js.
- **Carousels**: Powered by Owl Carousel for smooth image sliders.
- **Google Maps Integration**: Embedded map pinpointing Kattakaduwa, Galgamuwa, Sri Lanka.

---

## ⚙️ Setup Instructions

### 1. Clone or Download

```bash
git clone <repository-url>
```

### 2. Serve Locally

Use a local server:

```bash
# Python 3
python -m http.server 8000
```

Open `http://localhost:8000` in your browser.

### 3. Configure Formsubmit

- The contact form submits to: `https://formsubmit.co/ahamedmaneesha@gmail.com`
- Check inbox and verify email with Formsubmit.

### 4. Verify Assets

Ensure the following are in place:

- News images: `img/news/*.jpg`
- SVG icons: `img/svg/*.svg`

### 5. Test Site

- Responsive design across devices.
- Modal popups and animations.
- Contact form success/error flow.

---

## 📁 File Structure

```
portfolio-website/
├── css/
│   ├── style.css
│   ├── plugins.css
│   └── dark.css
├── js/
│   ├── init.js
│   ├── plugins.js
│   └── jquery.js
├── img/
│   ├── news/
│   ├── svg/
├── index.html
└── README.md
```

---

## 📦 Dependencies

- **jQuery** – DOM manipulation and interactivity
- **Owl Carousel** – Image sliders
- **Magnific Popup** – Modal popups
- **WOW.js** – Scroll-triggered animations
- **Formsubmit** – Contact form submission
- **Google Maps Embed** – Location iframe

> ⚠️ Ensure `plugins.js` and `plugins.css` are included and loaded correctly.

---

## 📬 Contact Section

**Details:**

- **Address**: No 21, Kattakaduwa, Galgamuwa, Sri Lanka  
- **Phone**: 076 6820884  
- **Email**: ahamedmaneesha@gmail.com  

**Contact Form:**

- Validates name, email, and message
- Success message: `Message Sent Successfully!`
- Error message: `Submission Failed`
- Map iframe points to the address above

---

## 🛠 Development Notes

- Ensure all assets (SVGs, images) are present
- Confirm Formsubmit verification
- Test responsiveness, animations, and popups
- Adjust map pin if more accuracy is required

---

## 📄 License

This project is for personal use by **Maneesha Ahamed**.  
No public license is specified. Contact the owner for permission to use or modify this project.

---

**Last Updated**: April 25, 2025
```
