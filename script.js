// ---------- Saheli Beauty Parlour & Bridal Studio Interactive Engine ----------

// 1. Dynamic Footer Year
(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// 2. Real-time Store Status (Mon-Sat: 10AM-8PM, Sun: 11AM-6PM)
(function () {
  var statusEl = document.getElementById('storeStatus');
  if (!statusEl) return;

  var now = new Date();
  var day = now.getDay(); // 0 is Sunday
  var hour = now.getHours();

  var isOpen = false;
  var statusText = "";

  if (day === 0) { // Sunday
    if (hour >= 11 && hour < 18) {
      isOpen = true;
      statusText = "Open Now • Closes 6 PM";
    } else {
      statusText = "Closed • Opens Mon 10 AM";
    }
  } else { // Mon - Sat
    if (hour >= 10 && hour < 20) {
      isOpen = true;
      statusText = "Open Now • Closes 8 PM";
    } else {
      statusText = "Closed • Opens 10 AM";
    }
  }

  statusEl.innerHTML = '<span class="status-dot"></span> ' + statusText;
  if (!isOpen) {
    var dot = statusEl.querySelector('.status-dot');
    if (dot) {
      dot.style.background = '#e74c3c';
      dot.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.25)';
    }
  }
})();

// 3. Mobile Nav Drawer Toggle
(function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// 4. Services Filter Tabs
(function () {
  var tabs = document.querySelectorAll('.tab-btn');
  var cards = document.querySelectorAll('.service-card');
  if (!tabs.length || !cards.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      var cat = tab.getAttribute('data-category');
      cards.forEach(function (card) {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
})();

// 5. FAQ Accordion
(function () {
  var questions = document.querySelectorAll('.faq-question');
  if (!questions.length) return;

  questions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.parentElement;
      var isActive = item.classList.contains('active');
      
      // Close other open questions
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
})();

// 6. WhatsApp Appointment Form Builder (Contact Page & Modal)
function sendWhatsAppBooking(e) {
  if (e) e.preventDefault();
  
  var name = document.getElementById('bookName') ? document.getElementById('bookName').value : '';
  var service = document.getElementById('bookService') ? document.getElementById('bookService').value : '';
  var date = document.getElementById('bookDate') ? document.getElementById('bookDate').value : '';
  var time = document.getElementById('bookTime') ? document.getElementById('bookTime').value : '';
  var notes = document.getElementById('bookNotes') ? document.getElementById('bookNotes').value : '';

  var message = "Hello Saheli Beauty Parlour! 👋\nI would like to book an appointment:\n";
  if (name) message += "• *Name:* " + name + "\n";
  if (service) message += "• *Service:* " + service + "\n";
  if (date) message += "• *Preferred Date:* " + date + "\n";
  if (time) message += "• *Time Slot:* " + time + "\n";
  if (notes) message += "• *Note:* " + notes + "\n";

  var encoded = encodeURIComponent(message);
  var whatsappUrl = "https://wa.me/919604213027?text=" + encoded;
  window.open(whatsappUrl, '_blank');
}

// 7. Gallery Engine & Lightbox Viewer
var GALLERY_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqZo1dh37gjkJdVFa7G_1AGp0Qy7kaiI0VsrFDozMzx2I8yTC5m8wCvNe2lRokw7PH/exec";

// Fallback high quality beauty gallery images when API is loading or offline
var FALLBACK_GALLERY = [
  { url: "images/bridal_hero.jpg", name: "Royal Maharani Bridal Glam", tag: "Bridal Makeup" },
  { url: "images/parlour_salon.jpg", name: "Luxury Hair Salon & Styling", tag: "Hair Cut & Styling" },
  { url: "images/spa_facial.jpg", name: "Radiant Skin Facial Spa", tag: "Spa & Facial" },
  { url: "images/bridal_hero.jpg", name: "HD Engagement Party Makeup", tag: "Party Makeup" }
];

(function () {
  var grid = document.getElementById('galleryGrid');
  var state = document.getElementById('galleryState');
  if (!grid) return; // Not on gallery page

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(src, title) {
    lightboxImg.src = src;
    lightboxImg.alt = title || 'Saheli Beauty Parlour';
    lightbox.hidden = false;
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  function renderGalleryItems(items) {
    if (state) state.remove();
    grid.innerHTML = '';

    items.forEach(function (item) {
      var card = document.createElement('div');
      card.className = 'gallery-card';

      var img = document.createElement('img');
      img.src = item.url;
      img.alt = item.name || 'Makeup work';
      img.loading = 'lazy';

      var overlay = document.createElement('div');
      overlay.className = 'gallery-card-overlay';
      overlay.innerHTML = '<div class="gallery-card-title">' + (item.name || 'Saheli Makeup') + '</div>' +
                          '<div class="gallery-card-tag">' + (item.tag || 'Bridal & Beauty') + '</div>';

      card.appendChild(img);
      card.appendChild(overlay);

      card.addEventListener('click', function () {
        openLightbox(item.url, item.name);
      });

      grid.appendChild(card);
    });
  }

  // Render fallbacks immediately for instant visual gratification
  renderGalleryItems(FALLBACK_GALLERY);

  // Fetch live photos from Google Apps Script (Drive)
  fetch(GALLERY_SCRIPT_URL)
    .then(function (res) {
      if (!res.ok) throw new Error('Request failed');
      return res.json();
    })
    .then(function (data) {
      var list = Array.isArray(data) ? data : (data.files || data.images || data.data || []);
      if (list && list.length) {
        var parsed = list.map(function (item) {
          if (typeof item === 'string') return { url: item, name: 'Bridal Work', tag: 'Makeup Work' };
          var url = item.url || item.webContentLink || item.webViewLink || item.thumbnailLink;
          return { url: url, name: item.name || 'Bridal Work', tag: 'Gallery' };
        }).filter(function (x) { return x.url; });

        if (parsed.length) renderGalleryItems(parsed);
      }
    })
    .catch(function (err) {
      console.log('Using local gallery fallback photos:', err);
    });
})();
