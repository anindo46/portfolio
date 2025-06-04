const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

// Toggle the dropdown menu when the menu button is clicked
menuBtn.addEventListener('click', () => {
  const expanded = dropdownMenu.classList.toggle('active');
  dropdownMenu.setAttribute('aria-hidden', !expanded);

  // Manage tabindex for accessibility
  const links = dropdownMenu.querySelectorAll('a');
  if (dropdownMenu.classList.contains('active')) {
    links.forEach(link => link.tabIndex = 0);
    links[0].focus();
  } else {
    links.forEach(link => link.tabIndex = -1);
    menuBtn.focus();
  }
});

// Allow opening the menu with the Enter or Space key for accessibility
menuBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    menuBtn.click();
  }
});

// Scroll to top functionality when logo is clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close dropdown menu when clicking outside
document.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    dropdownMenu.classList.remove('active');
    dropdownMenu.setAttribute('aria-hidden', 'true');
    dropdownMenu.querySelectorAll('a').forEach(link => link.tabIndex = -1);
  }
});

// Skill Bars Animation
function animateSkills() {
  const skillsSection = document.getElementById('skills');
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const sectionPos = skillsSection.getBoundingClientRect();

  if (sectionPos.top < window.innerHeight && sectionPos.bottom >= 0) {
    skillBars.forEach(bar => {
      const targetPercent = bar.getAttribute('data-percent');
      bar.style.width = targetPercent + '%';
      bar.textContent = targetPercent + '%';
    });
    // Remove event listener after animation runs once
    window.removeEventListener('scroll', animateSkills);
  }
}

// Trigger skill bar animation on scroll and load
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
