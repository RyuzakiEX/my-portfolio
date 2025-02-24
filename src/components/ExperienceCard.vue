<template>
  <div class="experience-card">
    <h3>{{ title }}</h3>
    <h4>{{ company }}</h4>
    <p class="period">{{ period }}</p>
    <p class="description">Experience:</p>
    <ul class="experience-list">
      <li v-for="(exp, index) in description" :key="index">{{ exp }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'ExperienceCard',
  props: {
    title: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    period: {
      type: String,
      required: true
    },
    description: {
      type: Array as PropType<string[]>,
      required: true
    }
  }
});
</script>

<style scoped>
.experience-card {
  background: rgba(0, 0, 0, 0.6); /* Dark translucent for readability */
  backdrop-filter: blur(10px); /* Glassmorphism effect */
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.experience-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 15px rgba(173, 216, 230, 0.8), 0 0 30px rgba(0, 255, 255, 0.5);
}

.experience-card h3 {
  font-size: 1.8rem;
  color: #0ff; /* Neon cyan */
  margin-bottom: 10px;
  font-weight: 700;
}

.experience-card h4 {
  font-size: 1.5rem;
  color: #f39c12; /* Warm neon contrast */
  margin-bottom: 12px;
}

.experience-card .period {
  font-size: 1.2rem;
  color: #bbb;
  margin-bottom: 20px;
  font-style: italic;
}

.experience-card .description {
  font-weight: bold;
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 12px;
}

.experience-list {
  list-style-type: disc;
  padding-left: 25px;
  color: #ccc;
  line-height: 1.8;
}

.experience-card ul li {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #ddd;
  transition: color 0.3s ease;
}

.experience-card ul li:hover {
  color: #0ff; /* Neon effect */
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .experience-card {
    padding: 20px;
  }

  .experience-card h3 {
    font-size: 1.6rem;
  }

  .experience-card h4 {
    font-size: 1.3rem;
  }

  .experience-card .period {
    font-size: 1rem;
  }

  .experience-card .description {
    font-size: 1rem;
  }

  .experience-card ul li {
    font-size: 1rem;
  }
}
</style>
