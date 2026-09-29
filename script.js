const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  if (isOpen) {
    closeMenu();
  } else {
    navigation.classList.add('is-open');
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close navigation');
  }
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});
document.addEventListener('click', (event) => {
  if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});

document.querySelector('#year').textContent = new Date().getFullYear();

const roleText = document.querySelector('#role-text');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (roleText) {
  const roles = ['Python & Django developer', 'full-stack builder', 'problem solver'];
  let roleIndex = 0;
  let characterIndex = roles[0].length;
  let deleting = true;
  let roleTimeout;

  function animateRole() {
    if (reducedMotion.matches) return;
    if (document.hidden) {
      roleTimeout = window.setTimeout(animateRole, 500);
      return;
    }
    const phrase = roles[roleIndex];
    characterIndex += deleting ? -1 : 1;
    roleText.textContent = phrase.slice(0, characterIndex);

    if (characterIndex === 0) {
      roleIndex = (roleIndex + 1) % roles.length;
      deleting = false;
      roleTimeout = window.setTimeout(animateRole, 350);
    } else if (characterIndex === roles[roleIndex].length && !deleting) {
      deleting = true;
      roleTimeout = window.setTimeout(animateRole, 1900);
    } else {
      roleTimeout = window.setTimeout(animateRole, deleting ? 40 : 75);
    }
  }

  function configureRoleMotion() {
    window.clearTimeout(roleTimeout);
    if (reducedMotion.matches) {
      roleIndex = 0;
      characterIndex = roles[0].length;
      deleting = true;
      roleText.textContent = roles[0];
    } else {
      roleTimeout = window.setTimeout(animateRole, 2300);
    }
  }

  configureRoleMotion();
  reducedMotion.addEventListener?.('change', configureRoleMotion);
}

const revealItems = document.querySelectorAll('[data-reveal]');
let revealObserver;

function configureScrollMotion() {
  revealObserver?.disconnect();
  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    document.documentElement.classList.remove('has-motion');
    return;
  }

  document.documentElement.classList.add('has-motion');
  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
  revealItems.forEach((item) => revealObserver.observe(item));
}

configureScrollMotion();
reducedMotion.addEventListener?.('change', configureScrollMotion);

let scrollFramePending = false;
function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
  document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4));
  scrollFramePending = false;
}
window.addEventListener('scroll', () => {
  if (scrollFramePending) return;
  scrollFramePending = true;
  window.requestAnimationFrame(updateScrollProgress);
}, { passive: true });
window.addEventListener('resize', updateScrollProgress);
updateScrollProgress();
