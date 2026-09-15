/* ============================================================
    [Master Scripts]

    Theme Name:     BizVision     
    Theme URL:      http://
    Description:    BizVision -  Finance & Business Consulting HTML Template 
    Version:        1.0.0

============================================================== */ 

'use strict';
(function ($) {
  // Gsap Plugin Register
  gsap.registerPlugin(ScrollTrigger);

  /* ========================================
     Sticky Navbar Scroll Shadow Js
   ======================================== */
  const stickyNavbar = document.querySelector('.navbar.sticky');
  if (stickyNavbar) {
    const toggleNavbarShadow = () => {
      stickyNavbar.classList.toggle('navbar-scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', toggleNavbarShadow, { passive: true });
    toggleNavbarShadow();
  }

  /* ========================================
     Navbar Links Active  Js
   ======================================== */
  if ($('.navbar-nav').length) {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .dropdown-menu .dropdown-item');
    const removeActiveClass = () => {
      navLinks.forEach((link) => link.classList.remove('active'));
    };
    const setActiveLink = () => {
      const currentPath = window.location.pathname;
      removeActiveClass();

      navLinks.forEach((link) => {
        const linkPath = link.getAttribute('href');
        if (linkPath && currentPath.endsWith(linkPath)) {
          link.classList.add('active');

          const parentDropdown = link.closest('.dropdown-menu')?.previousElementSibling;
          if (parentDropdown) {
            parentDropdown.classList.add('active');
          }
        }
      });
    };
    setActiveLink();
  }

  /* ========================================
     Service hero proof band
   ======================================== */
  const servicePage = document.body.classList.contains('subpage-marketing')
    ? {
        image: 'images/work/w2.jpg',
        alt: 'Digital marketing team planning a campaign',
        title: 'From Reach To Revenue, <em>We Engineer Real Growth.</em>',
        copy: 'Great marketing is more than traffic. We turn audience insight into clear campaigns, useful content and measurable momentum for your brand.',
        link: 'More About Us',
        stats: [['700+', 'Campaigns launched'], ['10.2M+', 'Qualified leads generated'], ['50+', 'Years combined expertise'], ['15+', 'Growth specialists']],
      }
    : document.body.classList.contains('subpage-web')
      ? {
          image: 'images/work/work2.jpg',
          alt: 'Web development team collaborating on a project',
          title: 'From First Click To <em>Lasting Trust.</em>',
          copy: 'We combine purposeful design, clean development and smart performance so every screen helps your business move forward.',
          link: 'Our Approach',
          stats: [['100%', 'Responsive projects'], ['2.4s', 'Target load speed'], ['24/7', 'Digital availability'], ['1:1', 'Direct support']],
        }
      : document.body.classList.contains('subpage-payment')
        ? {
            image: 'images/logo/pay2.jfif',
            alt: 'Payment experience on a digital device',
            title: 'From Intent To Purchase, <em>Make Every Step Count.</em>',
            copy: 'We shape payment journeys that feel secure, clear and effortless across every device, helping more customers complete the journey.',
            link: 'Why DigiTech',
            stats: [['99.9%', 'Reliable journeys'], ['1-click', 'Simpler checkout'], ['24/7', 'Mobile ready'], ['100%', 'Trust focused']],
          }
        : null;

  const serviceHeroImage = document.body.classList.contains('subpage-marketing')
    ? 'images/logo/market1.jfif'
    : document.body.classList.contains('subpage-web')
      ? 'images/logo/web2.jfif'
      : document.body.classList.contains('subpage-payment')
        ? 'images/logo/pay1.jfif'
        : null;
  const serviceHeroImageElement = document.querySelector('.subpage-hero > .absolute img');
  if (serviceHeroImage && serviceHeroImageElement) {
    serviceHeroImageElement.src = serviceHeroImage;
  }

  const serviceWhy = document.body.classList.contains('subpage-marketing')
    ? {
        image: 'images/choose/choose-four-1.jpg',
        alt: 'Marketing team discussing a strategy',
        title: 'Why Choose DigiTech? <em>Because Growth Needs Clarity.</em>',
        copy: 'We align creative thinking with practical execution, so every campaign has a clear purpose, a measurable next step and a stronger reason for customers to remember you.',
        bars: [['Strategy And Action Plan', '95%'], ['Happy And Repeat Clients', '98%'], ['Best Value And ROI', '91%'], ['Reaching New Customers', '87%']],
      }
    : document.body.classList.contains('subpage-web')
      ? {
          image: 'images/about/about-three.jpg',
          alt: 'Web team working together',
          title: 'Why Choose DigiTech? <em>Because Better Experiences Win.</em>',
          copy: 'We keep design, development and performance connected from the first sketch to launch, giving you a website that looks right and works hard.',
          bars: [['Clear User Journeys', '96%'], ['Responsive Quality', '100%'], ['Performance Focus', '94%'], ['Launch Confidence', '97%']],
        }
      : document.body.classList.contains('subpage-payment')
        ? {
            image: 'images/services/servicesThree3.jpg',
            alt: 'Payment interface and digital checkout experience',
            title: 'Why Choose DigiTech? <em>Because Trust Converts.</em>',
            copy: 'We make payment experiences easier to understand, safer to use and simpler to improve, so customers feel confident right through checkout.',
            bars: [['Simple Checkout', '98%'], ['Customer Confidence', '96%'], ['Mobile Readiness', '99%'], ['Journey Visibility', '91%']],
          }
        : null;

  const serviceProcess = document.body.classList.contains('subpage-marketing')
    ? {
        title: 'Step-By-Step To <em>Your Growth.</em>',
        copy: 'We follow a clear, proven process to make sure your marketing efforts get the best results. You always know what we are working toward and what happens next.',
        image: 'images/teams/team-two1.jpg',
        alt: 'Marketing team planning together',
        steps: [['Discover & Plan', 'We learn about your audience, offer and goals, then shape a focused plan around the opportunities that matter most.'], ['Build & Launch', 'We create the content, campaigns and creative assets, then launch everything with a clear path to action.'], ['Watch & Improve', 'We track what is working, learn from the numbers and make focused changes for stronger results.']],
      }
    : document.body.classList.contains('subpage-web')
      ? {
          title: 'Step-By-Step To <em>A Better Website.</em>',
          copy: 'A clear process keeps your project moving. We turn your idea into a dependable, polished website through practical planning, careful build and thoughtful refinement.',
          image: 'images/work/work2.jpg',
          alt: 'Web development team working together',
          steps: [['Discover & Plan', 'We map your goals, audience, pages and features before a single line of code is written.'], ['Design & Build', 'We shape the interface and build the experience with responsive, maintainable code.'], ['Test & Launch', 'We check every important detail across devices, then help you launch with confidence.']],
        }
      : document.body.classList.contains('subpage-payment')
        ? {
            title: 'Step-By-Step To <em>Smoother Checkout.</em>',
            copy: 'We make payment improvement practical: understand the current journey, remove the friction and measure what changes for your customers.',
            image: 'images/logo/pay1.jfif',
            alt: 'Payment solution planning',
            steps: [['Map The Journey', 'We review the path from intent to payment and identify the moments that create hesitation.'], ['Improve The Flow', 'We simplify the experience, strengthen trust signals and make every step easier to understand.'], ['Measure & Refine', 'We watch completion patterns and use the insight to keep improving the payment journey.']],
          }
        : null;

  const serviceFaq = document.body.classList.contains('subpage-marketing')
    ? {
        title: 'Have <em>Questions?</em>',
        callout: 'Find The Right Solution<br>For Your Brand',
        items: [['What Kind Of Digital Marketing Do You Focus On?', 'We focus on content, SEO, social media and performance campaigns that bring the right audience closer to your business.'], ['What Makes Your Marketing Different?', 'Every campaign begins with your goals and audience, then gets measured against clear business outcomes.'], ['How Fast Will I See Results?', 'Some improvements appear quickly, while SEO and audience growth build over time. We set realistic milestones from the start.'], ['Can You Help A Small Business Starting Out?', 'Yes. We can begin with a focused plan and build the right marketing foundation step by step.'], ['Can You Improve My Current Campaigns?', 'Absolutely. We can review what you already have and improve the strategy, creative and conversion path.']],
      }
    : document.body.classList.contains('subpage-web')
      ? {
          title: 'Have <em>Questions?</em>',
          callout: 'Build The Right Website<br>For Your Next Stage',
          items: [['What Kind Of Websites Do You Build?', 'We build responsive business websites, landing pages, portfolios, stores and custom digital experiences.'], ['How Long Does A Website Take?', 'The timeline depends on the pages and features, but you will receive a clear plan before the build begins.'], ['Can You Improve My Existing Website?', 'Yes. We can improve the design, speed, structure and user journey without replacing everything unnecessarily.'], ['Will My Website Work On Mobile?', 'Every website is built responsively and checked across modern phone, tablet and desktop sizes.'], ['Do You Offer Support After Launch?', 'Yes. We stay available for practical updates, fixes and guidance after launch.']],
        }
      : document.body.classList.contains('subpage-payment')
        ? {
            title: 'Have <em>Questions?</em>',
            callout: 'Find A Smoother Checkout<br>For Your Customers',
            items: [['What Payment Experience Can You Improve?', 'We improve checkout clarity, payment flows, mobile journeys and the moments where customers commonly drop off.'], ['Can You Make Checkout Simpler?', 'Yes. We review the steps, remove unnecessary friction and make the next action easier to understand.'], ['How Do You Improve Payment Trust?', 'We use clearer status messages, consistent design and trust-focused touchpoints throughout the journey.'], ['Can You Help With Mobile Payments?', 'Absolutely. Mobile-first payment journeys are central to creating a smooth customer experience.'], ['Can You Review Our Current Checkout?', 'Yes. We can audit the existing flow and recommend practical improvements based on your goals.']],
          }
        : null;

  const serviceOffer = document.body.classList.contains('subpage-marketing')
    ? {
        eyebrow: 'Where Strategy Meets Conversion.',
        intro: 'We transform market insight into clear, actionable campaigns that capture attention and drive measurable revenue.',
        cards: [['Social Media Marketing', 'Shareable content and real conversations that keep your brand top-of-mind.'], ['SEO & Visibility', 'Technical SEO and content that make your brand easier to discover.'], ['Content Marketing', 'Authoritative stories that position your business as a trusted voice.'], ['Website Development', 'Conversion-focused pages that turn campaign attention into action.'], ['Email Marketing', 'Personalised sequences designed to build retention and repeat sales.'], ['PPC & Performance Ads', 'Focused ad campaigns built around intent, efficiency and ROI.']],
      }
    : document.body.classList.contains('subpage-web')
      ? {
          eyebrow: 'Where Design Meets Performance.',
          intro: 'Every screen has a job. We combine clear structure, strong visuals and dependable code to help visitors take the next step.',
          cards: [['Responsive Design', 'Polished layouts that feel natural on phones, tablets and desktop screens.'], ['UX & User Journeys', 'Clear navigation and purposeful flows that help people find their way.'], ['Custom Development', 'Clean, flexible builds shaped around your goals instead of a generic template.'], ['Speed Optimisation', 'Lean pages that load quickly and make a strong first impression.'], ['SEO Foundations', 'Search-friendly structure that gives your content room to grow.'], ['Launch & Support', 'Testing, handover and practical help after your website goes live.']],
        }
      : document.body.classList.contains('subpage-payment')
        ? {
            eyebrow: 'Where Trust Meets Checkout.',
            intro: 'We remove friction from the payment journey so customers can move from confidence to completion without hesitation.',
            cards: [['Simple Checkout', 'Fewer steps and clearer decisions from product choice to confirmation.'], ['Secure Payments', 'Trust-focused experiences that help customers feel safe paying online.'], ['Mobile Payments', 'Smooth payment journeys designed around the devices people use most.'], ['Conversion Recovery', 'Find drop-off points and improve the moments that cost you sales.'], ['Payment Support', 'Clear status updates and helpful guidance when customers need it.'], ['Business Insights', 'Useful reporting that shows where the journey can keep improving.']],
          }
        : null;

  const serviceHero = document.querySelector('.subpage-hero');
  if (servicePage && serviceHero && !document.querySelector('.subpage-proof-band')) {
    const stats = servicePage.stats.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join('');
    serviceHero.insertAdjacentHTML('afterend', `<section class="subpage-proof-band"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="subpage-proof-media"><img src="${servicePage.image}" alt="${servicePage.alt}"><span class="subpage-play" aria-hidden="true">&#9654;</span></div><div class="subpage-proof-grid"><div><h2>${servicePage.title}</h2></div><div><p>${servicePage.copy}</p><a href="about.html" class="subpage-proof-link">${servicePage.link} <span aria-hidden="true">&#8594;</span></a></div></div><div class="subpage-stats">${stats}</div></div></section>`);
  }

  const proofBand = document.querySelector('.subpage-proof-band');
  if (serviceOffer && proofBand && !document.querySelector('.subpage-offer-section')) {
    const cards = serviceOffer.cards.map(([title, copy], index) => `<article class="subpage-offer-card"><span class="subpage-offer-number">0${index + 1}</span><span class="subpage-offer-icon" aria-hidden="true">✦</span><h3>${title}</h3><p>${copy}</p></article>`).join('');
    proofBand.insertAdjacentHTML('afterend', `<section class="subpage-offer-section"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="subpage-offer-heading"><div><p class="subpage-kicker">Focused expertise</p><h2>${serviceOffer.eyebrow}</h2></div><p>${serviceOffer.intro}</p></div><div class="subpage-offer-grid">${cards}</div><a href="services.html" class="subpage-offer-button">View All Services <span aria-hidden="true">&#8594;</span></a></div></section>`);
  }

  const offerSection = document.querySelector('.subpage-offer-section');
  if (serviceWhy && offerSection && !document.querySelector('.subpage-why-section')) {
    const bars = serviceWhy.bars.map(([label, value]) => `<div class="subpage-progress"><div><span>${label}</span><strong>${value}</strong></div><i><b style="width: ${value}"></b></i></div>`).join('');
    offerSection.insertAdjacentHTML('afterend', `<section class="subpage-why-section"><div class="subpage-why-copy"><p class="subpage-kicker">The DigiTech difference</p><h2>${serviceWhy.title}</h2><p>${serviceWhy.copy}</p><div class="subpage-progress-list">${bars}</div></div><div class="subpage-why-image"><img src="${serviceWhy.image}" alt="${serviceWhy.alt}"></div></section>`);
  }

  const whySection = document.querySelector('.subpage-why-section');
  if (serviceProcess && whySection && !document.querySelector('.subpage-process-section')) {
    const steps = serviceProcess.steps.map(([title, copy], index) => `<article class="subpage-process-card"><span class="subpage-process-icon">${['✦', '↗', '◫'][index]}</span><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('');
    whySection.insertAdjacentHTML('afterend', `<section class="subpage-process-section"><div class="subpage-process-intro"><p class="subpage-kicker">How we work</p><h2>${serviceProcess.title}</h2><p>${serviceProcess.copy}</p><img src="${serviceProcess.image}" alt="${serviceProcess.alt}"></div><div class="subpage-process-list">${steps}</div></section>`);
  }

  const processSection = document.querySelector('.subpage-process-section');
  if (serviceFaq && processSection && !document.querySelector('.subpage-faq-section')) {
    const items = serviceFaq.items.map(([question, answer], index) => `<div class="subpage-faq-item ${index === 0 ? 'is-open' : ''}"><button type="button" aria-expanded="${index === 0 ? 'true' : 'false'}"><span>${question}</span><b>${index === 0 ? '−' : '+'}</b></button><div class="subpage-faq-answer" ${index === 0 ? '' : 'hidden'}>${answer}</div></div>`).join('');
    processSection.insertAdjacentHTML('afterend', `<section class="subpage-faq-section"><div class="subpage-faq-callout"><p class="subpage-kicker">Need a clear next step?</p><h2>${serviceFaq.title}</h2><div class="subpage-faq-box"><strong>${serviceFaq.callout}</strong><a href="contact.html">Book A Quick Call <span aria-hidden="true">&#8594;</span></a></div></div><div class="subpage-faq-list">${items}</div></section>`);
    document.querySelectorAll('.subpage-faq-item button').forEach((button) => button.addEventListener('click', () => {
      const item = button.closest('.subpage-faq-item');
      const open = item.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
      button.querySelector('b').textContent = open ? '−' : '+';
      const answer = item.querySelector('.subpage-faq-answer');
      if (open) answer.removeAttribute('hidden');
      else answer.setAttribute('hidden', '');
    }));
  }

  /* ========================================
   banner slider Js
  ======================================== */
  const bannerSliderSwiper = new Swiper('.banner-slider', {
    slidesPerView: 1,
    loop: true,
    pagination: false,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    autoplay: false,
    on: {
      init: animateActiveSlide,
      slideChangeTransitionStart: animateActiveSlide,
    },
  });

  function animateActiveSlide() {
    const activeSlide = document.querySelector('.swiper-slide-active');
    if (!activeSlide) return;

    const elements = {
      title: activeSlide.querySelector('h1'),
      subTitle: activeSlide.querySelector('.banner-sub-title'),
      btnGroup: activeSlide.querySelector('.button-group'),
      borderShape: activeSlide.querySelector('.border-shape'),
      img: activeSlide.querySelector('.banner-image img'),
      char_come: activeSlide.querySelector('h1'),
    };

    gsap.killTweensOf(Object.values(elements));

    const animations = [
      {
        element: elements.subTitle,
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.4 },
      },
      {
        element: elements.btnGroup,
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)", delay: 0.6 },
      },
      {
        element: elements.borderShape,
        from: { scale: 0.3, opacity: 0 },
        to: { scale: 1, opacity: 1, duration: 1, ease: "power3.out", delay: 0.7 },
      },
      {
        element: elements.img,
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2 },
      },
    ];

    animations.forEach(({ element, from, to }) => {
      if (element) gsap.fromTo(element, from, to);
    });

    if (elements.char_come) {
      const splitChar = new SplitText(elements.char_come, { type: "chars, words" });
      const staggerDuration = window.innerWidth < 768 ? 0.05 : 0.03;

      gsap.timeline({
        scrollTrigger: {
          trigger: elements.char_come,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          toggleActions: "play none none none",
        },
      }).from(splitChar.chars, {
        duration: 0.8,
        x: 70,
        autoAlpha: 0,
        stagger: staggerDuration,
      });
    }
  }

  /* ========================================
    service slider Js
  ======================================== */
  const servicesOneSwiper = new Swiper(".services-one-slid", {
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    },
  });

  /* ========================================
    case slider Js
  ======================================== */
  const caseOneSwiper = new Swiper(".case-studies", {
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    },
  });

  /* ========================================
    team slider Js
  ======================================== */
  const teamOneSwiper = new Swiper(".team-slide", {
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-number",
      type: "fraction",
    },
    navigation: {
      nextEl: ".slid-btn-next",
      prevEl: ".slid-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    },
  });

  const teamThreeSwiper = new Swiper(".team-three-slide", {
    slidesPerView: 3,
    spaceBetween: 24,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    },
  });

  const teamFourSwiper = new Swiper(".team-four-slide", {
    slidesPerView: 3,
    spaceBetween: 24,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    },
  });

  /* ========================================
    blog slider Js
  ======================================== */
  const blogOneSwiper = new Swiper(".blog-slide", {
    slidesPerView: 3,
    spaceBetween: 24,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    },
  });

  /* ========================================
    blog slider Js
  ======================================== */
  const blogTwoSwiper = new Swiper(".blogs-two-slide", {
    slidesPerView: 3,
    spaceBetween: 24,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    },
  });

  /* ========================================
    feedback slider Js
  ======================================== */
  const feedbackOneSwiper = new Swiper('.feedback-slide', {
    slidesPerView: 1,
    loop: true,
    pagination: false,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      '1200': {
        slidesPerView: 2,
      },
      '991': {
        slidesPerView: 2,
      },
      '0': {
        slidesPerView: 1,
      }
    },

  });

  /* ========================================
    feedback two slider Js
  ======================================== */
  const feedbackTwoSwiper = new Swiper('.feedback-two-slide', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 24,
    speed: 700,
    pagination: {
      el: ".swiper-number",
      type: "fraction",
    },
    navigation: {
      nextEl: ".slid-btn-next",
      prevEl: ".slid-btn-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  /* ========================================
    Brand slider Js
  ======================================== */
  const brandSwiper = new Swiper('.brand-active-slid', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    allowTouchMove: false,
    spaceBetween: 30,
    speed: 4000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  /* ========================================
    team two slider Js
  ======================================== */
  const teamTwoSwiper = new Swiper(".team-two-slide", {
    slidesPerView: 3,
    spaceBetween: 24,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    },
  });


  /* ========================================
    Cursor Design Js
  ======================================== */
  if (document.querySelector('.cursor, .cursor-trail')) {
    const cursor = document.querySelector('.cursor');
    const cursorTrail = document.querySelector('.cursor-trail');
    const interactiveElements = document.querySelectorAll('a, button, .cursor-slider');

    // Cursor movement
    document.addEventListener('mousemove', (event) => {
      gsap.to(cursor, { x: event.clientX, y: event.clientY, duration: 0.1 });
      gsap.to(cursorTrail, { x: event.clientX, y: event.clientY, duration: 0.3, ease: 'power2.out' });
    });

    // Interactive elements hover effects
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 1.05 });
        gsap.to(cursorTrail, { scale: 1.7, backgroundColor: 'rgba(255, 255, 255, 0.0)' });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1 });
        gsap.to(cursorTrail, { scale: 1, backgroundColor: 'rgba(255, 255, 255, 0.308)' });
      });
    });
  }

  /* ========================================
    cursor Js
  ======================================== */
  if (document.querySelector('.cursor-slider')) {
    const cursorSlider = document.querySelector('.cursor-slider');
    const body = document.body;
    const toggleClass = 'show-custom-cursor';
    const mediaQuery = window.matchMedia('(hover: hover)');

    document.addEventListener('pointermove', (e) => {
      const isHoverEnabled = mediaQuery.matches;
      const isInsideCarousel = e.target.closest('.carousel-wrapper');

      if (isHoverEnabled && isInsideCarousel) {
        body.classList.add(toggleClass);
        cursorSlider.style.setProperty('--cursor-x', `${e.clientX}px`);
        cursorSlider.style.setProperty('--cursor-y', `${e.clientY}px`);
      } else {
        body.classList.remove(toggleClass);
      }
    });
  }

  /* ========================================
    Title animation Js
  ======================================== */
  if ($(".title-animation").length) {
    const char_come = gsap.utils.toArray(".title-animation");
    char_come.forEach((char_come) => {
      const split_char = new SplitText(char_come, {
        type: "chars, words",
        lineThreshold: 0.5,
      });
      const staggerDuration = window.innerWidth < 768 ? 0.05 : 0.03;
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: char_come,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });
      tl2.from(split_char.chars, {
        duration: 0.8,
        x: 70,
        autoAlpha: 0,
        stagger: staggerDuration,
      });
    });
  }

  /* ========================================
    Sub title animation Js
  ======================================== */
  if ($(".sub-animation").length) {
    const animateTextFromBottom = gsap.utils.toArray(".sub-animation");
    animateTextFromBottom.forEach((item) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      });
      const splitText = new SplitText(item, { type: "chars, words, lines" });
      splitText.split({ type: "words" });
      tl.from(splitText.words, {
        duration: 1,
        y: 50,
        autoAlpha: 0,
        stagger: 0.05,
        onComplete: () => {
          splitText.revert();
        },
      });
    });
  }

  /* ========================================
    3d animation Js
  ======================================== */
  if ($(".animate-3d").length) {
    const animateLine3d = gsap.utils.toArray(".animate-3d");
    animateLine3d.forEach((item) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      });
      const animateLine3dSplitted = new SplitText(item, { type: "chars, words, lines" });
      gsap.set(item, { perspective: 400 });
      animateLine3dSplitted.split({ type: "lines" });
      tl.from(animateLine3dSplitted.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
        onComplete: () => {
          animateLine3dSplitted.revert();
        },
      });
    });
  }

  /* ========================================
    Button and text animation Js
  ======================================== */
  if ($(".btn-text-animate").length) {
    const animateTextFromBottom = gsap.utils.toArray(".btn-text-animate");
    animateTextFromBottom.forEach((item) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      });
      const animateTextFromBottomSplitted = new SplitText(item, { type: "chars, words, lines" });
      animateTextFromBottomSplitted.split({ type: "words" });
      tl.from(animateTextFromBottomSplitted.words, {
        duration: 1,
        y: 50,
        autoAlpha: 0,
        stagger: 0.05,
        onComplete: () => {
          animateTextFromBottomSplitted.revert();
        },
      });
    });
  }

  /* ========================================
    Generalized Fade-In animation Js
  ======================================== */
  function fadeIn(targets, properties = {}, options = {}) {
    const elements = gsap.utils.toArray(targets);
    if (elements.length === 0) return;
    gsap.from(elements, {
      opacity: properties.opacity ?? 0,
      y: properties.y ?? 0,
      x: properties.x ?? 0,
      duration: properties.duration ?? 1,
      delay: properties.delay ?? 0,
      stagger: options.stagger ?? 0.15,
      ease: options.ease ?? "power2.out",
      scrollTrigger: {
        trigger: elements,
        start: options.start || "top 90%",
        end: options.end || "bottom 60%",
        toggleActions: options.toggleActions || "play none none none",
      },
    });
  }
  function fadeInElements() {
    fadeIn(".animate-fadeInBottom", { y: 50 }, { stagger: 0.1 });
    fadeIn(".fadeIn_50", { y: 50 });
    fadeIn(".fadeIn_promo", { y: 80 });
    fadeIn(".fadeDown_testimonial", { y: 80 });
    fadeIn(".fadeIn_every", { y: 100 }, { stagger: 0.25 });
    fadeIn(".fadeIn_pricing", { y: 100 }, { stagger: 0.25 });
    fadeIn(".team-section__item", { y: 100 }, { stagger: 0.25 });
    fadeIn(".testimonial-slide__item", { y: 90 }, { stagger: 0.15 });

    fadeIn(".fadeDown_50", { x: -50 });
    fadeIn(".fadeDown_80", { x: -80 });
    fadeIn(".fadeDown_100", { x: -100 });
    fadeIn(".fadeIn_cases", { x: -100 });
    fadeIn(".fadeIn_faq", { x: -100 });
    fadeIn(".fadeIn_faq2", { x: 100 });
    fadeIn(".fadeIn_content", { x: -100 });

    fadeIn(".input-box", { duration: 2, delay: 0.25 }, { stagger: 0.25 });
    fadeIn(".fadeIn_1", { duration: 2, delay: 0.25 }, { stagger: 0.25 });
    fadeIn(".fadeIn_human", { duration: 2, delay: 0.25 }, { stagger: 0.25 });
    fadeIn(".blog-section__item", { duration: 1.8, delay: 0.20 }, { stagger: 0.25 });
  }
  fadeInElements();


  if ($(".reveal-img").length > 0) {
    gsap.utils.toArray(".reveal-img").forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          markers: false,
          onEnter: () => {
            el.classList.add("reveal-img-active");
          },
        },
      });
    });
  }

  const imageParallax = document.querySelectorAll(".parallax-image");

  if (imageParallax.length > 0) {
    imageParallax.forEach(function (element) {
      const wrapper = document.createElement("div");
      wrapper.className = "parallax-image-wrap";

      const innerWrapper = document.createElement("div");
      innerWrapper.className = "parallax-image-inner";

      element.parentNode.insertBefore(wrapper, element);
      wrapper.appendChild(innerWrapper);
      innerWrapper.appendChild(element);

      wrapper.style.overflow = "hidden";

      const animImageParallax = element;
      const imgParallaxWrapper = wrapper;
      const innerWrap = innerWrapper;

      const tlImageParallax = gsap.timeline({
        scrollTrigger: {
          trigger: imgParallaxWrapper,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onEnter: animImgParallaxRefresh,
        },
      });

      tlImageParallax.to(animImageParallax, {
        yPercent: 35,
        ease: "none",
      });

      function animImgParallaxRefresh() {
        tlImageParallax.scrollTrigger.refresh();
      }

      const tlZoomIn = gsap.timeline({
        scrollTrigger: {
          trigger: imgParallaxWrapper,
          start: "top 99%",
        },
      });

      tlZoomIn.from(innerWrap, {
        duration: 1.5,
        opacity: 0,
        scale: 1.2,
        ease: "power2.out",
        clearProps: "all",
      });
    });
  }

  /* ========================================
    Odometer Counter Up Js
   ======================================== */
  // data-odometer-final
  if ($('.odometer').length) {
    $(window).on('scroll', function () {
      $('.odometer').each(function () {
        if ($(this).isInViewport()) {
          if (!$(this).data('odometer-started')) {
            $(this).data('odometer-started', true);
            this.innerHTML = $(this).data('odometer-final');
          }
        }
      });
    });
  }
  // isInViewport helper function
  $.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };


  /* ========================================
     Scroll back to top  Js
   ======================================== */
  if ($('.progress-wrap').length) {
    const progressPath = document.querySelector('.progress-wrap path');
    const pathLength = progressPath.getTotalLength();

    // Set up the initial stroke styles
    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();

    // Set transition for stroke-dashoffset
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    const updateProgress = () => {
      const scroll = $(window).scrollTop();
      const height = $(document).height() - $(window).height();
      const progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    $(window).on('scroll', updateProgress);

    const offset = 50;
    const duration = 550;

    $(window).on('scroll', () => {
      $('.progress-wrap').toggleClass('active-progress', $(window).scrollTop() > offset);
    });

    $('.progress-wrap').on('click', (event) => {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, duration);
    });
  }
  // progress bar animate numbers
  if ($('.skill-container__item').length) {
    function animateNumbers(element) {
      const target = +element.getAttribute('data-target');
      const duration = 1500; // 1.5 second
      const step = target / (duration / 20);

      let current = 0;
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        element.textContent = Math.round(current) + "%";
      }, 20);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress-bar');
            const percentageText = entry.target.querySelector('.percentage');

            const targetWidth = percentageText.getAttribute('data-target') + '%';
            progressBar.style.width = targetWidth;
            progressBar.setAttribute('aria-valuenow', targetWidth);

            animateNumbers(percentageText);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('.skill-container__item').forEach((item) => observer.observe(item));
  }

  document.addEventListener('DOMContentLoaded', () => {
    const navPills = document.querySelector('.nav-pills');
    if (navPills) {
      const links = navPills.querySelectorAll('.nav-link');
      const indicator = navPills.querySelector('.nav-indicator');

      function updateIndicator(el) {
        if (el) {
          indicator.style.width = `${el.offsetWidth}px`;
          indicator.style.left = `${el.offsetLeft}px`;
        }
      }

      const activeLink = navPills.querySelector('.nav-link.active');
      if (activeLink) updateIndicator(activeLink);

      links.forEach(link => {
        link.addEventListener('click', () => {
          navPills.querySelector('.nav-link.active')?.classList.remove('active');
          link.classList.add('active');
          updateIndicator(link);
        });
      });
    }
  });

  $('.bg-img').css('background-image', function () {
    var bg = 'url(' + $(this).data('background-image') + ')';
    return bg;
  });

  $('.video-play-btn').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.services-one-box').hover(function () {
    $('.services-one-box').removeClass('active');
    $(this).addClass('active');
  });

  const scrollReveal = ScrollReveal({
    origin: 'top', distance: '60px', duration: 1300, delay: 100, mobile: false,
  })
  scrollReveal.reveal('.top-reveal', {
    delay: 60, distance: '60px', origin: 'top', interval: 100, mobile: false,
  })
  scrollReveal.reveal('.left-reveal', {
    delay: 60, origin: 'left', interval: 100, mobile: false,
  })
  scrollReveal.reveal('.right-reveal', {
    delay: 60, origin: 'right', interval: 100, mobile: false,
  })
  scrollReveal.reveal('.bottom-reveal', {
    delay: 60, origin: 'bottom', interval: 100, mobile: false,
  })
  scrollReveal.reveal('.scaleUp', {
    scale: 0.85, mobile: false,
  })

  /* ========================================
      Preloader Js
  ======================================== */
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    preloader.style.transition = 'height 0.5s, opacity 1s';
    preloader.style.opacity = '0';
    preloader.style.height = '0';
    preloader.style.borderBottomLeftRadius = '100%';
    preloader.style.borderBottomRightRadius = '100%';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  });

  /* ========================================
      Mobile nav + dropdown + accordion Js
      (vanilla replacement for Bootstrap's
      data-bs-toggle behaviour)
  ======================================== */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('primary-nav');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    mobileMenuOverlay?.classList.remove('opacity-0', 'pointer-events-none');
    mobileMenuOverlay?.classList.add('opacity-100');
    mobileMenuBtn?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('overflow-hidden');
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
    mobileMenuOverlay?.classList.add('opacity-0', 'pointer-events-none');
    mobileMenuOverlay?.classList.remove('opacity-100');
    mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('overflow-hidden');
  }

  mobileMenuBtn?.addEventListener('click', () => {
    if (mobileMenu?.classList.contains('translate-x-0')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
  mobileMenuOverlay?.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('[data-dropdown-toggle]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const menu = btn.nextElementSibling;
      if (!menu) return;
      const isOpen = !menu.classList.contains('hidden');

      document.querySelectorAll('[data-dropdown-menu]').forEach((m) => {
        if (m !== menu) m.classList.add('hidden');
      });
      document.querySelectorAll('[data-dropdown-toggle]').forEach((b) => {
        if (b !== btn) b.setAttribute('aria-expanded', 'false');
      });
      document.querySelectorAll('[data-dropdown-chevron]').forEach((c) => {
        if (c !== btn.querySelector('[data-dropdown-chevron]')) c.classList.remove('rotate-180');
      });

      menu.classList.toggle('hidden', isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
      btn.querySelector('[data-dropdown-chevron]')?.classList.toggle('rotate-180', !isOpen);
    });
  });

  document.addEventListener('click', (e) => {
    document.querySelectorAll('[data-dropdown]').forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.querySelector('[data-dropdown-menu]')?.classList.add('hidden');
        dropdown.querySelector('[data-dropdown-toggle]')?.setAttribute('aria-expanded', 'false');
        dropdown.querySelector('[data-dropdown-chevron]')?.classList.remove('rotate-180');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      document.querySelectorAll('[data-dropdown-menu]').forEach((m) => m.classList.add('hidden'));
    }
  });

  document.querySelectorAll('[data-accordion-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const panel = trigger.nextElementSibling;
      const item = trigger.closest('[data-accordion-item]');
      const group = trigger.closest('[data-accordion-group]');
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      if (group) {
        group.querySelectorAll('[data-accordion-trigger]').forEach((t) => {
          t.setAttribute('aria-expanded', 'false');
          t.nextElementSibling?.classList.add('hidden');
          t.closest('[data-accordion-item]')?.classList.remove('accordion-open');
          t.querySelector('.fa-plus, .fa-minus')?.classList.remove('rotate-45');
        });
      }

      if (!isOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        panel?.classList.remove('hidden');
        item?.classList.add('accordion-open');
        trigger.querySelector('.fa-plus, .fa-minus')?.classList.add('rotate-45');
      }
    });
  });

  /* ========================================
     Form Submit Toast Popup Js
   ======================================== */
  function showSiteToast(message) {
    let toast = document.getElementById('site-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'site-toast';
      toast.className = 'site-toast';
      toast.innerHTML = '<i class="fa-solid fa-circle-check"></i><span data-toast-text></span>';
      document.body.appendChild(toast);
    }
    toast.querySelector('[data-toast-text]').textContent = message;
    toast.classList.add('site-toast-show');
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
      toast.classList.remove('site-toast-show');
    }, 4000);
  }

  document.querySelectorAll('[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = form.querySelector('[data-form-note]');
      if (note) note.classList.remove('hidden');
      const message = form.getAttribute('data-success-message') || "Thanks — we've received your submission!";
      showSiteToast(message);
      form.reset();
    });
  });

})(jQuery);
