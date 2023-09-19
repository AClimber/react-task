import enLocales from './en.json';
import ruLocales from './ru.json';
import { NAMESPACE } from '../config';

const resources = {
  ru: { [NAMESPACE]: ruLocales },
  en: { [NAMESPACE]: enLocales }
};

export default resources;