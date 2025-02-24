<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo with gradient text effect matching hero section -->
      <div class="logo">
        <h1>RyuzakiX</h1>
      </div>

      <!-- Navigation links with hover effects -->
      <ul class="nav-links" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
        <li>
          <a href="#home" class="nav-link">Home</a>
        </li>
        <li>
          <a href="#experience" class="nav-link">Experience</a>
        </li>
        <li>
          <a href="#contact" class="nav-link" @click="scrollToSection">Contact Me</a>
        </li>
      </ul>

      <!-- Mobile menu trigger -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Navbar',
  data() {
    return {
      isMobileMenuOpen: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    scrollToSection(event: Event) {
      event.preventDefault(); // Prevent default anchor behavior
      const targetId = (event.target as HTMLElement)?.getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId || '');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.navbar {
  background: linear-gradient(45deg, #120038, #29005b); /* Dark futuristic gradient */
  color: #fff;
  padding: 1.5rem 3rem;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 2px solid rgba(255, 0, 255, 0.4); /* Neon pink border */
  box-shadow: 0px 0px 15px rgba(255, 0, 255, 0.4);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0px 2rem;
  color: #ff00ff; /* Neon pink text */
  text-shadow: 0px 0px 10px rgba(255, 0, 255, 0.8); /* Glow effect */
  transition: transform 0.3s ease-in-out;
}

.logo h1:hover {
  transform: scale(1.1);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 40px;
  margin: 0px 2rem;
}

.nav-links .nav-link {
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  padding: 10px 15px;
}

.nav-links .nav-link::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  left: 0;
  bottom: -5px;
  background: #ff00ff; /* Neon pink underline */
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.nav-links .nav-link:hover::after {
  transform: scaleX(1);
}

.nav-links .nav-link:hover {
  color: #ff00ff;
  text-shadow: 0px 0px 10px rgba(255, 0, 255, 0.8);
}

/* Mobile menu button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 12px;
}

.mobile-menu-btn span {
  width: 30px;
  height: 4px;
  background-color: #ff00ff;
  transition: 0.3s ease;
  box-shadow: 0px 0px 10px rgba(255, 0, 255, 0.8);
}

.mobile-menu-btn.open span:nth-child(1) {
  transform: rotate(45deg);
  position: relative;
  top: 8px;
}

.mobile-menu-btn.open span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.open span:nth-child(3) {
  transform: rotate(-45deg);
  position: relative;
  top: -8px;
}

/* Mobile view - Dropdown style */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 100%; /* Align with bottom border of navbar */
    right: 0; /* Align to the right side */
    width: 250px; /* Set a smaller width */
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    margin-top: 1.5rem;
    background-color: #120038; /* Match the navbar background */
    padding: 1rem 0;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: -1; /* Hide dropdown initially */
  }

  .nav-links.mobile-menu-open {
    display: flex;
    opacity: 1;
    z-index: 10; /* Show dropdown when opened */
  }

  .mobile-menu-btn {
    display: flex;
  }
}

</style>
