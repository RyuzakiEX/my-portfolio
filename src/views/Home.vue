    <template>
        <div class="home-container">
        <Navbar />
    
        <!-- Hero Section with your photo -->
        <div class="hero-section" id="home">
            <div class="intro">
            <img :src="photo" alt="Jorge Adrian" class="profile-photo" />
            <h1>{{ name }}</h1>
            <p class="position">{{ position }}</p>
            </div>
        </div>
    
        <!-- Experience Section -->
        <section class="experience-section" id="experience">
            <h2>Experience</h2>
            <ExperienceCard 
            v-for="(exp, index) in experiences" 
            :key="index" 
            :title="exp.title" 
            :company="exp.company" 
            :period="exp.period" 
            :description="exp.description"
            />
        </section>
    
        <section id="contact">
            <ContactMe />
        </section>
        </div>
    </template>
    
    <script lang="ts">
    import { defineComponent } from 'vue';
    import { usePortfolio } from '../composables/usePortfolio';
    import Navbar from '../components/Navbar.vue';
    import ContactMe from '../components/ContactMe.vue';
    import ExperienceCard from '../components/ExperienceCard.vue';
    
    import profileImage from '@/assets/profile/image.JPEG';
    
    export default defineComponent({
        components: {
        Navbar,
        ContactMe,
        ExperienceCard
        },
        setup() {
        const { getExperience, getName, getPosition } = usePortfolio();
        const name = getName();
        const position = getPosition();
        const experiences = getExperience();

        const photo = profileImage; 
    
        return { name, position, photo, experiences };
        }
    });
    </script>
    
    <style scoped>
    .home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('/mnt/data/background.jpg') no-repeat center center/cover;
    min-height: 100vh;
    }

    /* Hero Section */
    .hero-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    text-align: center;
    position: relative;
    padding: 40px;
    backdrop-filter: blur(10px); /* Glassmorphism effect */
    background: rgba(18, 0, 56, 0.6); /* Slightly darkened overlay */
    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(255, 0, 255, 0.3);
    }

    /* Profile Photo */
    .profile-photo {
    border-radius: 50%;
    width: 250px; 
    height: 250px; 
    object-fit: cover;
    margin-bottom: 20px;
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.5); /* Neon glow */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    .profile-photo:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(255, 0, 255, 0.8);
    }

    /* Intro Text */
    .intro {
    position: relative;
    animation: fadeIn 1s ease-in-out;
    }

    h1 {
    font-size: 3.8rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #ff00ff;
    text-shadow: 0 0 15px rgba(255, 0, 255, 0.8); /* Neon glow effect */
    transition: text-shadow 0.3s ease-in-out;
    }

    h1:hover {
    text-shadow: 0 0 25px rgba(255, 0, 255, 1);
    }

    .position {
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: #ffffff;
    opacity: 0.8;
    }

    /* Experience Section */
    .experience-section {
    padding: 100px 20px;
    width: 100%;
    max-width: 1200px;
    text-align: center;
    }

    h2 {
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #ff00ff;
    text-shadow: 0px 0px 15px rgba(255, 0, 255, 0.8);
    }

    /* Fade-in Animation */
    @keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
    }

    /* Responsive Adjustments */
    @media (max-width: 768px) {
    .hero-section {
        height: 80vh;
        padding: 20px;
    }

    h1 {
        font-size: 2.5rem;
    }

    .experience-card {
        padding: 20px;
    }
    }
    </style>
    