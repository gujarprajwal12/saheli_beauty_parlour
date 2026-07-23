# Saheli Beauty & Bridal Studio Website

An ultra-sleek, luxury 3-page web application for **Saheli Beauty & Bridal Studio** featuring:
- **Home (`index.html`)**: Hero presentation, live store status indicator ("Open Now" / "Closed"), categorized service menu, values, client testimonials, and FAQ accordion.
- **Gallery (`gallery.html`)**: Dynamic portfolio gallery fetching photos from Google Apps Script (Google Drive) with local fallback cards and lightbox viewer.
- **Contact & Booking (`contact.html`)**: Interactive reservation form with direct custom WhatsApp message generation (+91 96042 13027), working hours, and Google Maps location link.
- **Luxury Design System (`style.css`)**: Deep Burgundy Maroon, Soft Cream Ivory, Warm Metallic Champagne Gold, custom serif typography, glassmorphism navigation bar, responsive drawer, and floating WhatsApp widget.

---

## 🚀 How to Publish & Host for Free on GitHub Pages

### Method 1: Using GitHub Website (Easiest - No command line required)

1. **Log in to GitHub**: Go to [github.com](https://github.com) and log in.
2. **Create a New Repository**:
   - Click the **"+"** icon in the top right corner and select **"New repository"**.
   - Name your repository (e.g., `saheli-beauty-parlour`).
   - Set visibility to **Public**.
   - Click **"Create repository"**.
3. **Upload Project Files**:
   - On the new repository page, click **"uploading an existing file"**.
   - Drag and drop **all files and folders** from this directory (`index.html`, `gallery.html`, `contact.html`, `style.css`, `script.js`, `favicon.svg`, `images/` folder).
   - Click **"Commit changes"**.
4. **Enable GitHub Pages Free Hosting**:
   - Go to your repository **Settings** → **Pages** (left menu).
   - Under **"Build and deployment" → "Branch"**, choose `main` (or `master`) branch and `/ (root)` folder.
   - Click **Save**.
5. **Done!**: In 1–2 minutes, your website will be live at:
   `https://<your-github-username>.github.io/saheli-beauty-parlour/`

---

### Method 2: Using Git Command Line

Open your terminal/PowerShell in `e:\psg` and run:

```bash
# 1. Initialize Git repository
git init

# 2. Add all project files
git add .

# 3. Create initial commit
git commit -m "Initial release of Saheli Beauty & Bridal Studio website"

# 4. Link to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<your-github-username>/saheli-beauty-parlour.git

# 5. Push code to GitHub
git branch -M main
git push -u origin main
```

Then turn on **GitHub Pages** under Repository **Settings → Pages → Branch: main → Save**.

---

## 📸 Dynamic Photo Gallery Configuration

`gallery.html` automatically fetches photos from your Google Apps Script URL:
```js
https://script.google.com/macros/s/AKfycbxqZo1dh37gjkJdVFa7G_1AGp0Qy7kaiI0VsrFDozMzx2I8yTC5m8wCvNe2lRokw7PH/exec
```

When uploading photos to your Google Drive folder, make sure:
- The Google Apps Script is deployed as a **Web App** with **Access: Anyone**.
- The Google Drive folder containing photos is set to **Anyone with link can view**.

---

## 📞 Business Info Customization

To edit details in the future:
- **WhatsApp Phone**: Edit `wa.me/919604213027` in `index.html`, `contact.html`, and `script.js`.
- **Instagram Handle**: Edit `@saheli_makeup_artist` links.
- **Working Hours**: Edit table in `contact.html` and logic in `script.js`.
