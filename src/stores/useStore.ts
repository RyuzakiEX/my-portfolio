import { defineStore } from 'pinia';

export const useStore = defineStore('portfolio', {
  state: () => ({
    name: 'Jorge Gabriel Adrian Adanza',
    position: 'Software Developer',
    experience: [
      {
          title: 'Software Developer',
          company: 'Miller Solutions Development Inc.',
          period: 'June 2024 - Present',
          description: [
          'Collaborating with clients to deliver high-quality web applications tailored to their needs.',
          'Developing dynamic, user-friendly front-end interfaces using Vue.js, Nuxt.js, and Vuetify.',
          'Implementing Test-Driven Development (TDD) practices with Hapi.js to ensure code quality and reliability.',
          'Managing version control and collaboration using Git & GitHub.',
          'Organizing tasks and tracking progress with Trello & Jira.',
          'Building and integrating RESTful APIs for seamless communication between frontend and backend systems.'
          ]
      },
      {
          title: 'Software Engineer',
          company: 'Kyocera Document Solution Development Inc.',
          period: 'March 2023 - May 2024',
          description: [
          'Developed and maintained C/C++ applications to enhance system reliability and functionality.',
          'Integrated SOAP APIs to facilitate communication with external systems, enabling seamless data exchange.',
          'Utilized Perforce for version control and code submissions.',
          'Employed MobaXterm for remote system access, build server management, and troubleshooting.',
          'Actively participated in project management using JIRA & Confluence for collaboration and documentation.',
          'Debugged and tested printer functionality using Simulators, Virtual Engines, and Actual Target Models.'
          ]
      }
      ]
  }),
  actions: {
    updateExperience(newExperience: any) {
      this.experience.push(newExperience);
    }
  }
});
