// translationService.js
import axios from 'axios';

const API_KEY = 'YOUR_GOOGLE_CLOUD_API_KEY';

const translateText = async (text, targetLanguage) => {
//   const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
  const url = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
  const response = await axios.post(url, {
    q: text,
    target: targetLanguage
  });
  return response.data.data.translations[0].translatedText;
};

export default translateText;
