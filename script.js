document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Language Toggle ---

    const langToggle = document.getElementById('lang-toggle');
    const htmlTag = document.documentElement;

    // All translations
    const translations = {
        ur: {
            metaTitle: "والید ٹائر شاپ - Waleed Tyre Shop",
            logo: "والید ٹائر شاپ",
            navHome: "ہوم",
            navAbout: "ہمارے بارے میں",
            navServices: "سروسز",
            navContact: "رابطہ",
            langToggle: "English",
            heroTitle: "والید ٹائر شاپ",
            heroSubtitle: "بائیک، کار اور وین کے لیے پنکچر، ٹائر چینج اور نئے/پرانے ٹائرز کی خرید و فروخت",
            ctaCall: "کال کریں",
            ctaWhatsapp: "واٹس ایپ",
            aboutTitle: "ہمارے بارے میں",
            aboutPara: "والید ٹائر شاپ میں خوش آمدید! 2018-2019 میں بھوٹی موڑ کے قلب میں قائم ہونے والی یہ دکان آپ کے اعتماد کا مرکز ہے۔ ہمارے بانی، حماد اختر، آٹوموٹو سروسز میں کئی سالوں کا تجربہ رکھتے ہیں اور بہترین کوالٹی اور ایمانداری پر یقین رکھتے ہیں۔ ہمارا مقصد صرف ٹائر بیچنا نہیں، بلکہ آپ کے سفر کو محفوظ بنانا ہے۔ ہم جدید ٹیکنالوجی اور ماہرانہ خدمات کے ذریعے اپنے ہر گاہک کو بہترین سروس فراہم کرنے کے لیے پرعزم ہیں۔ آپ کا بھروسہ ہی ہماری کامیابی ہے۔",
            aboutOwner: "مالک:",
            ownerName: "حماد اختر",
            aboutArea: "علاقہ:",
            areaName: "بھوٹی موڑ",
            aboutStarted: "آغاز:",
            startYear: "2018–2019",
            servicesTitle: "ہماری سروسز",
            servicePunctureTitle: "ٹائر پنکچر",
            servicePunctureDesc: "بائیک، کار اور وین کے لیے فوری اور قابلِ اعتماد پنکچر سروس۔",
            serviceChangeTitle: "ٹائر چینج",
            serviceChangeDesc: "جدید مشینری کے ذریعے ٹائروں کی پروفیشنل تبدیلی۔",
            serviceSaleTitle: "نئے/پرانے ٹائر",
            serviceSaleDesc: "نئے اور قابلِ بھروسہ پرانے ٹائرز کی وسیع ورائٹی برائے فروخت و خرید۔",
            serviceBalancingTitle: "وہیل بیلنسنگ",
            serviceBalancingDesc: "کمپیوٹرائزڈ وہیل بیلنسنگ برائے ہموار اور محفوظ ڈرائیو۔",
            serviceAirTitle: "ڈیجیٹل ایئر/نائٹروجن",
            serviceAirDesc: "گاڑیوں کے لیے ڈیجیٹل ایئر اور نائٹروجن فلنگ کی سہولت۔",
            contactTitle: "ہم سے رابطہ کریں",
            contactPhones: "ہمارے نمبرز",
            contactMap: "نقشہ پر دیکھیں",
            footerCopyright: "© [YEAR] والید ٹائر شاپ",
            footerDev: "Developed by ASH TECH"
        },
        en: {
            metaTitle: "Waleed Tyre Shop - Puncture, Tyre Change & Sales",
            logo: "Waleed Tyre Shop",
            navHome: "Home",
            navAbout: "About Us",
            navServices: "Services",
            navContact: "Contact",
            langToggle: "اردو",
            heroTitle: "Waleed Tyre Shop",
            heroSubtitle: "Puncture, Tyre Change, and Sale/Purchase of New/Old Tyres for Bikes, Cars, and Vans",
            ctaCall: "Call Now",
            ctaWhatsapp: "WhatsApp",
            aboutTitle: "About Us",
            aboutPara: "Welcome to Waleed Tyre Shop! Established in the heart of Bhoti Mord in 2018-2019, our shop is your center of trust. Our founder, Hammad Akhtar, brings years of experience in automotive services and believes in excellent quality and honesty. Our goal isn't just to sell tires, but to make your journey safer. We are committed to providing the best service to every customer through modern technology and expert services. Your trust is our success.",
            aboutOwner: "Owner:",
            ownerName: "Hammad Akhtar",
            aboutArea: "Area:",
            areaName: "Bhoti Mord",
            aboutStarted: "Started:",
            startYear: "2018–2019",
            servicesTitle: "Our Services",
            servicePunctureTitle: "Tyre Puncture",
            servicePunctureDesc: "Fast and reliable puncture service for bikes, cars, and vans.",
            serviceChangeTitle: "Tyre Change",
            serviceChangeDesc: "Professional tyre changing using modern machinery.",
            serviceSaleTitle: "New/Old Tyres",
            serviceSaleDesc: "Wide variety of new and reliable used tyres for sale and purchase.",
            serviceBalancingTitle: "Wheel Balancing",
            serviceBalancingDesc: "Computerized wheel balancing for a smooth and safe drive.",
            serviceAirTitle: "Digital Air/Nitrogen",
            serviceAirDesc: "Digital air and nitrogen filling facility for vehicles.",
            contactTitle: "Contact Us",
            contactPhones: "Our Numbers",
            contactMap: "View on Map",
            footerCopyright: "© [YEAR] Waleed Tyre Shop",
            footerDev: "Developed by ASH TECH"
        }
    };

    function updateText(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            let text = translations[lang][key] || el.textContent;

            // Special case for footer year
            if (key === 'footerCopyright') {
                text = text.replace('[YEAR]', new Date().getFullYear());
            }
            
            // Handle elements that have icons (like CTA buttons)
            if (el.children.length > 0 && (key === 'ctaCall' || key === 'ctaWhatsapp' || key === 'contactMap')) {
                // Keep the icon, only change the text node
                el.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = ` ${text} `;
                    }
                });
            } else {
                el.textContent = text;
            }
        });

        // Update document title
        document.title = translations[lang].metaTitle;
    }

    langToggle.addEventListener('click', () => {
        const currentLang = htmlTag.getAttribute('lang');
        
        if (currentLang === 'ur') {
            htmlTag.setAttribute('lang', 'en');
            htmlTag.setAttribute('dir', 'ltr');
            document.body.classList.add('lang-en');
            updateText('en');
        } else {
            htmlTag.setAttribute('lang', 'ur');
            htmlTag.setAttribute('dir', 'rtl');
            document.body.classList.remove('lang-en');
            updateText('ur');
        }
    });

    // --- 2. Mobile Hamburger Menu ---
    
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked (for single-page app behavior)
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- 3. Set Footer Year on Initial Load ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});