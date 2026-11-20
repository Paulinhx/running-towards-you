/*
 * RUNNING TOWARDS YOU — INTERACTIONS
 * ----------------------------------
 * 1. Accessible mobile navigation
 * 2. Current year in footer
 * 3. Privacy-friendly YouTube click-to-load player
 * 4. Native <dialog> photo gallery lightbox
 * No frameworks or external JavaScript dependencies.
 */

// MOBILE NAVIGATION
const menuButton = document.getElementById('menuButton');
const navigation = document.getElementById('navigation');

menuButton?.addEventListener('click', () => {
  const isOpening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(isOpening));
  menuButton.setAttribute('aria-label', isOpening ? 'Close menu' : 'Open menu');
  navigation?.classList.toggle('is-open', isOpening);
});

// Close the mobile menu after selecting a section.
navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open menu');
  });
});

// FOOTER YEAR
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

// DOCUMENTARY VIDEO
// The YouTube iframe is intentionally not present on initial page load.
// It is created only after the visitor clicks the poster's play button.
const videoButton = document.getElementById('videoButton');
const videoFrame = document.getElementById('videoFrame');

videoButton?.addEventListener('click', () => {
  if (!videoFrame) return;

  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube-nocookie.com/embed/q-qYZlgJaJI?autoplay=1&rel=0';
  iframe.title = 'Running Towards You — Episode 01';
  iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';

  videoFrame.replaceChildren(iframe);
});

// PHOTO GALLERY LIGHTBOX
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');

document.querySelectorAll('.gallery-open').forEach((button) => {
  button.addEventListener('click', () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;

    const preview = button.querySelector('img');
    lightboxImage.src = button.dataset.full;
    lightboxImage.alt = preview?.alt || 'Gallery photograph';
    lightboxCaption.textContent = lightboxImage.alt;
    lightbox.showModal();
  });
});

document.getElementById('closeLightbox')?.addEventListener('click', () => {
  lightbox?.close();
});

// Clicking the dark backdrop closes the lightbox.
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
