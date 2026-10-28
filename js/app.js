/**
 * HIDIN 3D - Main Application Logic
 * Optimized for mobile webviews (Instagram, Safari, Chrome).
 * Manages search, filtering, product modal, WhatsApp integration, and UI interactivity.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Load user saved WhatsApp number from localStorage if present, otherwise default to official +91 9087055806
  const savedWaNumber = localStorage.getItem('hidin3d_wa_number');
  if (savedWaNumber) {
    window.CONFIG.whatsapp.number = savedWaNumber;
  } else {
    window.CONFIG.whatsapp.number = "919087055806";
  }

  // State
  let currentCategory = 'all';
  let searchQuery = '';
  let activeProduct = null;

  // DOM Elements
  const productsGrid = document.getElementById('products-grid');
  const searchInput = document.getElementById('search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const categoryChipsContainer = document.getElementById('category-chips');
  const categoryCardsContainer = document.getElementById('category-cards-grid');
  const productCountDisplay = document.getElementById('product-count-display');
  const emptyState = document.getElementById('empty-state');
  
  // Modal Elements
  const productModal = document.getElementById('product-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImg = document.getElementById('modal-img');
  const modalCategoryBadge = document.getElementById('modal-category');
  const modalSpecBadge = document.getElementById('modal-spec-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalFeaturesList = document.getElementById('modal-features');
  const modalColorsContainer = document.getElementById('modal-colors');
  const modalSizesContainer = document.getElementById('modal-sizes');
  const modalMaterialsList = document.getElementById('modal-materials');
  const modalCustomNoteInput = document.getElementById('modal-custom-note');
  const modalWhatsappBtn = document.getElementById('modal-whatsapp-btn');
  
  // Custom Quote Form Elements
  const customQuoteForm = document.getElementById('custom-quote-form');
  
  // Mobile Nav Elements
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // WhatsApp Config Modal Elements
  const configModal = document.getElementById('config-modal');
  const openConfigBtn = document.getElementById('open-config-btn');
  const closeConfigBtn = document.getElementById('close-config-btn');
  const configWaInput = document.getElementById('config-wa-number');
  const saveConfigBtn = document.getElementById('save-config-btn');
  const resetConfigBtn = document.getElementById('reset-config-btn');

  // Helper: WhatsApp URL Generator (Optimized for mobile webviews)
  function getWhatsAppUrl(encodedText) {
    const phone = window.CONFIG.whatsapp.number.replace(/[^0-9]/g, '');
    return `https://wa.me/${phone}?text=${encodedText}`;
  }

  // Update floating WA button href
  const floatingWaBtn = document.getElementById('floating-wa-btn');
  if (floatingWaBtn) {
    const defaultMsg = encodeURIComponent("Hi HIDIN 3D! I'd like to enquire about your custom 3D printing creations.");
    floatingWaBtn.href = getWhatsAppUrl(defaultMsg);
  }

  // Render Category Cards (Top Section)
  function renderCategoryCards() {
    if (!categoryCardsContainer) return;
    categoryCardsContainer.innerHTML = '';

    window.CATEGORIES.forEach(cat => {
      const card = document.createElement('div');
      card.className = 'category-card group';
      card.setAttribute('data-category-id', cat.id);

      card.innerHTML = `
        <div class="category-icon-wrapper">
          <i data-lucide="${cat.icon}" class="category-icon"></i>
        </div>
        <div class="category-info">
          <h3 class="category-title">${cat.name}</h3>
          <p class="category-desc">${cat.description}</p>
        </div>
        <div class="category-footer">
          <span class="category-badge">${cat.count} items</span>
          <span class="category-link">View Collection <i data-lucide="arrow-right" class="inline-icon"></i></span>
        </div>
      `;

      card.addEventListener('click', () => {
        selectCategory(cat.id);
        const catalogueSection = document.getElementById('catalogue');
        if (catalogueSection) {
          catalogueSection.scrollIntoView({ behavior: 'smooth' });
        }
      });

      categoryCardsContainer.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // Render Category Filter Chips (Above Catalogue Grid)
  function renderCategoryChips() {
    if (!categoryChipsContainer) return;
    categoryChipsContainer.innerHTML = '';

    // "All Creations" chip
    const allChip = document.createElement('button');
    allChip.type = 'button';
    allChip.className = `filter-chip ${currentCategory === 'all' ? 'active' : ''}`;
    allChip.innerHTML = `All Creations <span class="chip-count">${window.PRODUCTS.length}</span>`;
    allChip.addEventListener('click', () => selectCategory('all'));
    categoryChipsContainer.appendChild(allChip);

    // Each official category chip
    window.CATEGORIES.forEach(cat => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `filter-chip ${currentCategory === cat.id ? 'active' : ''}`;
      chip.innerHTML = `${cat.shortName} <span class="chip-count">${cat.count}</span>`;
      chip.addEventListener('click', () => selectCategory(cat.id));
      categoryChipsContainer.appendChild(chip);
    });
  }

  // Category Selection
  function selectCategory(catId) {
    currentCategory = catId;
    renderCategoryChips();
    filterAndRenderProducts();
  }

  // Render Product Cards
  function filterAndRenderProducts() {
    if (!productsGrid) return;

    let filtered = window.PRODUCTS.filter(product => {
      // Category match
      const matchesCategory = currentCategory === 'all' || product.categoryId === currentCategory;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = !query || 
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        (product.materials && product.materials.some(m => m.toLowerCase().includes(query))) ||
        (product.colors && product.colors.some(c => c.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });

    // Update count display
    if (productCountDisplay) {
      productCountDisplay.textContent = `Showing ${filtered.length} creation${filtered.length === 1 ? '' : 's'}`;
    }

    // Handle Empty State
    if (filtered.length === 0) {
      productsGrid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    } else {
      if (emptyState) emptyState.classList.add('hidden');
    }

    productsGrid.innerHTML = '';

    filtered.forEach((product, index) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.style.animationDelay = `${(index % 8) * 0.04}s`;

      // WhatsApp prefilled message for card button
      const defaultEnquiry = window.CONFIG.whatsapp.buildProductEnquiry(product.name);
      const waUrl = getWhatsAppUrl(encodeURIComponent(defaultEnquiry));

      card.innerHTML = `
        <div class="product-media-wrapper" role="button" tabindex="0" aria-label="View ${product.name} details">
          <img 
            src="${product.image}" 
            alt="${product.name} - Custom 3D Print" 
            class="product-image" 
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85'"
          />
          <div class="product-overlay-gradient"></div>
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
          ${product.printSpec ? `
            <div class="product-print-spec">
              <span class="spec-dot"></span>
              <span>${product.printSpec}</span>
            </div>
          ` : ''}
          <div class="quick-view-badge">
            <i data-lucide="eye" class="quick-view-icon"></i> Details
          </div>
        </div>

        <div class="product-content">
          <div class="product-category-tag">${product.category}</div>
          <h3 class="product-title" role="button" tabindex="0">${product.name}</h3>
          <p class="product-description">${product.shortDescription}</p>

          <div class="product-actions">
            <a 
              href="${waUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-whatsapp-card"
              aria-label="Enquire on WhatsApp about ${product.name}"
            >
              <i data-lucide="message-circle" class="wa-icon inline-icon"></i>
              <span>Enquire on WhatsApp</span>
            </a>

            <button 
              type="button" 
              class="btn-details-card" 
              aria-label="View specifications for ${product.name}"
            >
              <i data-lucide="info" class="inline-icon"></i>
            </button>
          </div>
        </div>
      `;

      // Open Modal on card click (excluding direct WhatsApp link click)
      const mediaWrapper = card.querySelector('.product-media-wrapper');
      const titleElem = card.querySelector('.product-title');
      const detailsBtn = card.querySelector('.btn-details-card');

      const openDetailsHandler = () => openProductModal(product);
      mediaWrapper.addEventListener('click', openDetailsHandler);
      titleElem.addEventListener('click', openDetailsHandler);
      detailsBtn.addEventListener('click', openDetailsHandler);

      // Keyboard accessibility (Enter/Space on card)
      mediaWrapper.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProductModal(product);
        }
      });

      productsGrid.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // Open Product Details Modal
  function openProductModal(product) {
    activeProduct = product;

    // Reset customizations selection
    let selectedColor = product.colors && product.colors.length > 0 ? product.colors[0] : '';
    let selectedSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : '';

    modalImg.src = product.image;
    modalImg.alt = product.name;
    modalCategoryBadge.textContent = product.category;
    
    if (modalSpecBadge) {
      if (product.printSpec) {
        modalSpecBadge.textContent = product.printSpec;
        modalSpecBadge.classList.remove('hidden');
      } else {
        modalSpecBadge.classList.add('hidden');
      }
    }

    modalTitle.textContent = product.name;
    modalDesc.textContent = product.fullDescription || product.shortDescription;

    // Features list
    if (modalFeaturesList) {
      modalFeaturesList.innerHTML = '';
      if (product.features && product.features.length > 0) {
        product.features.forEach(feat => {
          const li = document.createElement('li');
          li.innerHTML = `<i data-lucide="check" class="check-icon"></i> <span>${feat}</span>`;
          modalFeaturesList.appendChild(li);
        });
      }
    }

    // Materials pills
    if (modalMaterialsList) {
      modalMaterialsList.innerHTML = '';
      if (product.materials) {
        product.materials.forEach(mat => {
          const tag = document.createElement('span');
          tag.className = 'spec-pill';
          tag.textContent = mat;
          modalMaterialsList.appendChild(tag);
        });
      }
    }

    // Color options
    if (modalColorsContainer) {
      modalColorsContainer.innerHTML = '';
      if (product.colors && product.colors.length > 0) {
        product.colors.forEach((col, idx) => {
          const opt = document.createElement('button');
          opt.type = 'button';
          opt.className = `option-pill ${idx === 0 ? 'selected' : ''}`;
          opt.textContent = col;
          opt.addEventListener('click', () => {
            modalColorsContainer.querySelectorAll('.option-pill').forEach(b => b.classList.remove('selected'));
            opt.classList.add('selected');
            selectedColor = col;
            updateModalWhatsAppLink();
          });
          modalColorsContainer.appendChild(opt);
        });
      }
    }

    // Size options
    if (modalSizesContainer) {
      modalSizesContainer.innerHTML = '';
      if (product.sizes && product.sizes.length > 0) {
        product.sizes.forEach((sz, idx) => {
          const opt = document.createElement('button');
          opt.type = 'button';
          opt.className = `option-pill ${idx === 0 ? 'selected' : ''}`;
          opt.textContent = sz;
          opt.addEventListener('click', () => {
            modalSizesContainer.querySelectorAll('.option-pill').forEach(b => b.classList.remove('selected'));
            opt.classList.add('selected');
            selectedSize = sz;
            updateModalWhatsAppLink();
          });
          modalSizesContainer.appendChild(opt);
        });
      }
    }

    // Clear custom note
    if (modalCustomNoteInput) {
      modalCustomNoteInput.value = '';
      modalCustomNoteInput.oninput = updateModalWhatsAppLink;
    }

    // Dynamic update function for the modal WhatsApp link
    function updateModalWhatsAppLink() {
      const note = modalCustomNoteInput ? modalCustomNoteInput.value.trim() : '';
      const text = window.CONFIG.whatsapp.buildProductEnquiry(activeProduct.name, {
        color: selectedColor,
        size: selectedSize,
        customNote: note
      });
      modalWhatsappBtn.href = getWhatsAppUrl(encodeURIComponent(text));
    }

    updateModalWhatsAppLink();

    // Show Modal
    productModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.lucide) window.lucide.createIcons();
  }

  // Close Product Details Modal
  function closeProductModal() {
    productModal.classList.add('hidden');
    document.body.style.overflow = '';
    activeProduct = null;
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProductModal);

  // Keyboard Escape listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!productModal.classList.contains('hidden')) {
        closeProductModal();
      }
      if (configModal && !configModal.classList.contains('hidden')) {
        configModal.classList.add('hidden');
      }
    }
  });

  // Search Input Handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        if (searchQuery.length > 0) {
          searchClearBtn.classList.remove('hidden');
        } else {
          searchClearBtn.classList.add('hidden');
        }
      }
      filterAndRenderProducts();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClearBtn.classList.add('hidden');
      searchInput.focus();
      filterAndRenderProducts();
    });
  }

  // Interactive Custom Print Idea Builder
  if (customQuoteForm) {
    customQuoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const category = document.getElementById('custom-category')?.value || 'Custom 3D Print';
      const material = document.getElementById('custom-material')?.value || 'Recommended';
      const color = document.getElementById('custom-color')?.value || 'Any';
      const desc = document.getElementById('custom-desc')?.value || '';

      const msg = window.CONFIG.whatsapp.buildCustomRequest({
        category: category,
        material: material,
        color: color,
        description: desc
      });

      const url = getWhatsAppUrl(encodeURIComponent(msg));
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  // Hero "Request a Custom Print" Button Handler
  const heroCustomBtn = document.getElementById('hero-custom-btn');
  if (heroCustomBtn) {
    heroCustomBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const msg = window.CONFIG.whatsapp.generalEnquiry;
      const url = getWhatsAppUrl(encodeURIComponent(msg));
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  // Mobile Menu Toggle
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const isOpen = mobileNav.classList.contains('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // WhatsApp Config Modal Logic (Allows testing custom phone numbers)
  if (openConfigBtn && configModal) {
    openConfigBtn.addEventListener('click', () => {
      if (configWaInput) configWaInput.value = window.CONFIG.whatsapp.number;
      configModal.classList.remove('hidden');
    });
  }

  if (closeConfigBtn && configModal) {
    closeConfigBtn.addEventListener('click', () => {
      configModal.classList.add('hidden');
    });
  }

  if (saveConfigBtn && configWaInput) {
    saveConfigBtn.addEventListener('click', () => {
      const cleanNum = configWaInput.value.replace(/[^0-9]/g, '');
      if (cleanNum.length >= 8) {
        window.CONFIG.whatsapp.number = cleanNum;
        localStorage.setItem('hidin3d_wa_number', cleanNum);
        showToast(`WhatsApp updated to +${cleanNum}!`);
        configModal.classList.add('hidden');
        filterAndRenderProducts();
        if (floatingWaBtn) {
          floatingWaBtn.href = getWhatsAppUrl(encodeURIComponent(window.CONFIG.whatsapp.generalEnquiry));
        }
      } else {
        alert('Please enter a valid international phone number (e.g., 919087055806).');
      }
    });
  }

  if (resetConfigBtn) {
    resetConfigBtn.addEventListener('click', () => {
      localStorage.removeItem('hidin3d_wa_number');
      window.CONFIG.whatsapp.number = "919087055806";
      if (configWaInput) configWaInput.value = "919087055806";
      showToast('Reset to default +91 9087055806');
      configModal.classList.add('hidden');
      filterAndRenderProducts();
      if (floatingWaBtn) {
        floatingWaBtn.href = getWhatsAppUrl(encodeURIComponent(window.CONFIG.whatsapp.generalEnquiry));
      }
    });
  }

  // Toast Notification
  function showToast(message) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.className = 'app-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('visible');
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 3200);
  }

  // Initial renders
  renderCategoryCards();
  renderCategoryChips();
  filterAndRenderProducts();
});
