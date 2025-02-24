<template>
  <div class="contact-me">
    <h2>Contact Me</h2>
    <p>If you'd like to reach out, feel free to email me at:</p>
    <p>
      <a href="mailto:freelance.adanzajorge@gmail.com">adanzajorge.dev@gmail.com</a>
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContactMe',
};
</script>

<style scoped>
.contact-me {
  background: rgba(0, 0, 0, 0.6); /* Dark translucent for readability */
  backdrop-filter: blur(10px); /* Glassmorphism */
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 90%;
  max-width: 600px;
  margin: 50px auto;
}

.contact-me:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.8), 0 0 30px rgba(173, 216, 230, 0.5);
}

.contact-me h2 {
  font-size: 2.5rem;
  color: #0ff; /* Neon cyan */
  margin-bottom: 15px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
}

.contact-me p {
  font-size: 1.3rem;
  color: #ddd;
  margin-bottom: 10px;
}

.contact-me a {
  font-size: 1.5rem;
  color: #f39c12; /* Warm neon contrast */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.contact-me a:hover {
  color: #ff0;
  text-shadow: 0 0 10px rgba(255, 255, 0, 0.8);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .contact-me {
    padding: 30px;
  }

  .contact-me h2 {
    font-size: 2rem;
  }

  .contact-me p {
    font-size: 1.1rem;
  }

  .contact-me a {
    font-size: 1.3rem;
  }
}
</style>
