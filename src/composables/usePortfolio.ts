import { useStore } from '../stores/useStore';

export const usePortfolio = () => {
  const store = useStore();

  const getExperience = () => {
    return store.experience;
  };

  const getName = () => {
    return store.name;
  };

  const getPosition = () => {
    return store.position;
  };

  return { getExperience, getName, getPosition };
};
