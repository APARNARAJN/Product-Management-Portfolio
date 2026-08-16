document.addEventListener('DOMContentLoaded', () => {
  // --- INJECT PORTFOLIO DATA ---
  const injectPortfolioData = () => {
    // Check if portfolioData is available on this page (only index.html/main landing)
    if (typeof portfolioData === 'undefined') {
      return;
    }

    const { hero, products, caseStudies, toolkit, contact } = portfolioData;

    // Browser Title & Navigation Logo
    if (hero.name) {
      document.title = `${hero.name} | Product Management Portfolio`;
      const logoName = document.getElementById('logoName');
      if (logoName) {
        logoName.innerHTML = `${hero.name}<span class="logo-dot"></span>`;
        logoName.href = '#about';
      }
      const footerBrand = document.getElementById('footerBrand');
      if (footerBrand) {
        footerBrand.textContent = hero.name;
      }
      const footerCopy = document.getElementById('footerCopy');
      if (footerCopy) {
        footerCopy.innerHTML = `&copy; ${new Date().getFullYear()} ${hero.name}. Built with product focus.`;
      }
    } else {
      document.title = 'Product Management Portfolio';
    }

    // Navigation Resume URL
    const navResume = document.getElementById('navResume');
    if (navResume) {
      if (hero.resume) {
        navResume.href = hero.resume;
        navResume.style.display = 'inline-block';
      } else {
        navResume.style.display = 'none';
      }
    }

    // Hero Section Injection
    const heroEyebrow = document.getElementById('heroEyebrow');
    if (heroEyebrow) heroEyebrow.textContent = hero.eyebrow || '';

    const heroHeadline = document.getElementById('heroHeadline');
    if (heroHeadline) heroHeadline.textContent = hero.headline || '';

    const heroAbout = document.getElementById('heroAbout');
    if (heroAbout) {
      if (hero.about) {
        heroAbout.textContent = hero.about;
        heroAbout.style.display = 'block';
      } else {
        heroAbout.style.display = 'none';
      }
    }

    const heroSubline = document.getElementById('heroSubline');
    if (heroSubline) {
      if (hero.subline) {
        heroSubline.textContent = hero.subline;
        heroSubline.style.display = 'block';
      } else {
        heroSubline.style.display = 'none';
      }
    }

    // Hero Profile Photo
    const photoContainer = document.getElementById('photoContainer');
    const aboutVisual = document.getElementById('aboutVisual');
    if (photoContainer && aboutVisual) {
      if (hero.photo) {
        photoContainer.innerHTML = `<img src="${hero.photo}" alt="${hero.name || 'Profile photo'}">`;
        aboutVisual.style.display = 'flex';
      } else {
        aboutVisual.style.display = 'none';
      }
    }

    // Hero Actions (LinkedIn & Resume)
    const heroLinkedIn = document.getElementById('heroLinkedIn');
    if (heroLinkedIn) {
      if (hero.linkedin) {
        heroLinkedIn.href = hero.linkedin;
        heroLinkedIn.style.display = 'inline-flex';
      } else {
        heroLinkedIn.style.display = 'none';
      }
    }

    const heroResume = document.getElementById('heroResume');
    if (heroResume) {
      if (hero.resume) {
        heroResume.href = hero.resume;
        heroResume.style.display = 'inline-flex';
      } else {
        heroResume.style.display = 'none';
      }
    }

    // Hide hero actions container if both links are missing
    const heroActions = document.getElementById('heroActions');
    if (heroActions && !hero.linkedin && !hero.resume) {
      heroActions.style.display = 'none';
    }

    // Products Injection (Exactly 2 product cards)
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
      productsGrid.innerHTML = '';
      let visibleProductsCount = 0;

      products.forEach(product => {
        if (!product.name) return; // Skip if no name provided

        visibleProductsCount++;
        const card = document.createElement('article');
        card.className = 'product-card animate-fade-in';

        // Tech Stack Chips
        const techChips = (product.techStack || [])
          .map(tech => `<span class="toolkit-chip">${tech}</span>`)
          .join('');

        // Action Buttons
        let actionButtonsHtml = '';
        if (product.caseStudyUrl) {
          actionButtonsHtml += `<a href="${product.caseStudyUrl}" class="btn btn-primary">Case Study</a>`;
        }
        if (product.githubUrl) {
          actionButtonsHtml += `<a href="${product.githubUrl}" class="btn btn-secondary" target="_blank" rel="noopener">GitHub Repo</a>`;
        }

        const buttonsContainer = actionButtonsHtml
          ? `<div class="product-card-actions">${actionButtonsHtml}</div>`
          : '';

        // Image Section
        const imgHtml = product.image
          ? `<img src="${product.image}" alt="${product.name}">`
          : `<div class="placeholder-image-box" style="width:100%;height:100%;min-height:180px;background:var(--bg-secondary);display:flex;align-items:center;justify-content:center;color:var(--text-muted);font-weight:600;font-size:0.9rem;">[No Image]</div>`;

        card.innerHTML = `
          <div class="product-card-image">
            ${imgHtml}
          </div>
          <div class="product-card-content">
            <div class="product-card-header">
              <h3 class="product-card-name">${product.name}</h3>
              ${product.description ? `<p class="product-card-tagline">${product.description}</p>` : ''}
            </div>
            ${product.shortDescription ? `<p class="product-card-desc">${product.shortDescription}</p>` : ''}
            ${product.techStack && product.techStack.length > 0 ? `<div class="product-card-tech">${techChips}</div>` : ''}
            ${buttonsContainer}
          </div>
        `;
        productsGrid.appendChild(card);
      });

      // Hide section if no products are rendered
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.style.display = visibleProductsCount > 0 ? 'block' : 'none';
      }
    }

    // Case Studies Injection (Exactly 4 cards)
    const caseStudiesGrid = document.getElementById('caseStudiesGrid');
    if (caseStudiesGrid) {
      caseStudiesGrid.innerHTML = '';
      let visibleCaseStudiesCount = 0;

      caseStudies.forEach(cs => {
        if (!cs.title) return; // Skip if no title

        visibleCaseStudiesCount++;
        const card = document.createElement('article');
        card.className = 'case-study-card animate-fade-in';

        const imgHtml = cs.image
          ? `<img src="${cs.image}" alt="${cs.title}">`
          : `<div class="placeholder-image-box" style="width:100%;height:100%;min-height:120px;background:var(--bg-secondary);display:flex;align-items:center;justify-content:center;color:var(--text-muted);font-weight:600;font-size:0.9rem;">[No Image]</div>`;

        // View Case Study Button
        const linkHtml = cs.url
          ? `<a href="${cs.url}" class="case-study-card-link">View Case Study <span>&rarr;</span></a>`
          : '';

        card.innerHTML = `
          <div class="case-study-card-image">
            ${imgHtml}
          </div>
          <div class="case-study-card-content">
            ${cs.subtitle ? `<span class="case-study-card-subtitle">${cs.subtitle}</span>` : ''}
            <h3 class="case-study-card-title">${cs.title}</h3>
            ${cs.description ? `<p class="case-study-card-desc">${cs.description}</p>` : ''}
            ${linkHtml}
          </div>
        `;
        caseStudiesGrid.appendChild(card);
      });

      // Hide case studies section if none are visible
      const caseStudiesSection = document.getElementById('case-studies');
      if (caseStudiesSection) {
        caseStudiesSection.style.display = visibleCaseStudiesCount > 0 ? 'block' : 'none';
      }
    }

    // Product Toolkit Injection
    const toolkitGrid = document.getElementById('toolkitGrid');
    if (toolkitGrid) {
      toolkitGrid.innerHTML = '';
      
      const categoriesMap = {
        product: 'Product',
        design: 'Design',
        development: 'Development',
        backendData: 'Backend & Data',
        aiMl: 'AI / ML',
        tools: 'Tools',
        other: 'Other Skills'
      };

      let visibleCategoriesCount = 0;

      Object.keys(categoriesMap).forEach(key => {
        const skillsList = toolkit[key] || [];
        if (skillsList.length === 0) return; // Skip empty category

        visibleCategoriesCount++;
        const catCard = document.createElement('div');
        catCard.className = 'toolkit-category-card';

        const chipsHtml = skillsList
          .map(skill => `<span class="toolkit-chip">${skill}</span>`)
          .join('');

        catCard.innerHTML = `
          <h3 class="toolkit-category-title">${categoriesMap[key]}</h3>
          <div class="toolkit-chips-container">
            ${chipsHtml}
          </div>
        `;
        toolkitGrid.appendChild(catCard);
      });

      // Hide toolkit section if no categories are populated
      const toolkitSection = document.getElementById('toolkit');
      if (toolkitSection) {
        toolkitSection.style.display = visibleCategoriesCount > 0 ? 'block' : 'none';
      }
    }

    // What's Next (CTA) Injection
    const whatsNextHeading = document.getElementById('whatsNextHeading');
    if (whatsNextHeading) whatsNextHeading.textContent = contact.heading || "What's next?";

    const whatsNextDescription = document.getElementById('whatsNextDescription');
    if (whatsNextDescription) {
      if (contact.description) {
        whatsNextDescription.textContent = contact.description;
        whatsNextDescription.style.display = 'block';
      } else {
        whatsNextDescription.style.display = 'none';
      }
    }

    const contactLinkedIn = document.getElementById('contactLinkedIn');
    if (contactLinkedIn) {
      if (contact.linkedin) {
        contactLinkedIn.href = contact.linkedin;
        contactLinkedIn.style.display = 'inline-flex';
      } else {
        contactLinkedIn.style.display = 'none';
      }
    }

    const contactEmail = document.getElementById('contactEmail');
    if (contactEmail) {
      if (contact.email) {
        contactEmail.href = `mailto:${contact.email}`;
        contactEmail.style.display = 'inline-flex';
      } else {
        contactEmail.style.display = 'none';
      }
    }

    // Hide What's Next action buttons container if both are missing
    const contactButtons = document.getElementById('contactButtons');
    if (contactButtons && !contact.linkedin && !contact.email) {
      contactButtons.style.display = 'none';
    }

    // Hide What's Next section if everything is empty
    const whatsNextSection = document.getElementById('whats-next');
    if (whatsNextSection && !contact.description && !contact.linkedin && !contact.email) {
      whatsNextSection.style.display = 'none';
    }
  };

  // --- HEADER & NAVIGATION LOGIC ---
  const header = document.getElementById('mainHeader');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Change header styling on scroll
  const handleHeaderScroll = () => {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll(); // Set initial state

  // Mobile navigation drawer toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu on click of nav link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // --- ACTIVE LINK OBSERVER ---
  const sections = document.querySelectorAll('section[id]');
  if (sections.length > 0 && navLinks.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => observer.observe(sec));
  }

  // --- CASE STUDY TOC HIGHLIGHTING ---
  const caseStudySections = document.querySelectorAll('.case-study-body section[id]');
  const tocLinks = document.querySelectorAll('.toc-link');

  if (caseStudySections.length > 0 && tocLinks.length > 0) {
    const tocObserverOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0.1
    };

    const tocObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          tocLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, tocObserverOptions);

    caseStudySections.forEach(sec => tocObserver.observe(sec));
  }

  // Run dynamic portfolio content injection
  injectPortfolioData();
});
