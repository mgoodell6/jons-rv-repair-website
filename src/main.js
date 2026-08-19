// ==========================================================================
// Big Sky Mobile RV Repair - Main JavaScript Logic
// Location: Missoula, MT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initCoverageSearch();
  initAutoYear();
});

// Mobile Navigation Toggle
function initMobileNav() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }
}

// Auto update copyright year
function initAutoYear() {
  const yearSpan = document.getElementById('yearSpan');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// FAQ Accordion Toggle
window.toggleFaq = function (button) {
  const item = button.parentElement;
  const isActive = item.classList.contains('active');

  // Close all other items for clean single accordion
  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('active');
  });

  if (!isActive) {
    item.classList.add('active');
  }
};

// Preselect service system in form from service card links
window.preselectService = function (systemName) {
  const select = document.getElementById('serviceSystem');
  if (select) {
    select.value = systemName;
  }
};

// Coverage Area Real-Time Search Filter
function initCoverageSearch() {
  const input = document.getElementById('coverageInput');
  const grid = document.getElementById('coverageGrid');

  if (input && grid) {
    input.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      const cards = grid.querySelectorAll('.coverage-card');

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(term)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}

// Photo File Selection & Drag Drop Preview
window.handleFileSelect = function (event) {
  const file = event.target.files[0];
  if (file) {
    showFilePreview(file);
  }
};

function showFilePreview(file) {
  const dropzoneContent = document.getElementById('dropzoneContent');
  const filePreview = document.getElementById('filePreview');
  const previewImg = document.getElementById('previewImg');
  const fileName = document.getElementById('fileName');

  if (filePreview && previewImg && fileName) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImg.src = e.target.result;
      fileName.textContent = `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
      if (dropzoneContent) dropzoneContent.classList.add('hidden');
      filePreview.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  }
}

window.removeFile = function () {
  const photoInput = document.getElementById('photoInput');
  const dropzoneContent = document.getElementById('dropzoneContent');
  const filePreview = document.getElementById('filePreview');

  if (photoInput) photoInput.value = '';
  if (dropzoneContent) dropzoneContent.classList.remove('hidden');
  if (filePreview) filePreview.classList.add('hidden');
};

// Lead Capture Form Submission Handler
window.handleFormSubmit = function (event) {
  event.preventDefault();

  const nameInput = document.getElementById('fullName').value.trim();
  const phoneInput = document.getElementById('phone').value.trim();
  const serviceForm = document.getElementById('serviceForm');
  const formSuccessBox = document.getElementById('formSuccessBox');
  const successName = document.getElementById('successName');
  const successPhone = document.getElementById('successPhone');

  if (successName) successName.textContent = nameInput || 'RVer';
  if (successPhone) successPhone.textContent = phoneInput || '(406) 555-0199';

  // Smooth transition to success box
  if (serviceForm && formSuccessBox) {
    serviceForm.classList.add('hidden');
    formSuccessBox.classList.remove('hidden');
    formSuccessBox.scrollIntoView({ behavior: 'smooth' });
  }
};

window.resetForm = function () {
  const serviceForm = document.getElementById('serviceForm');
  const formSuccessBox = document.getElementById('formSuccessBox');

  if (serviceForm && formSuccessBox) {
    serviceForm.reset();
    window.removeFile();
    formSuccessBox.classList.add('hidden');
    serviceForm.classList.remove('hidden');
  }
};
