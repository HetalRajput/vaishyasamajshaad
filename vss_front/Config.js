const withTrailingSlash = (value) => `${value.replace(/\/$/, "")}/`;

// Set VITE_API_URL in Hostinger before building the frontend.
export const Base_URL = withTrailingSlash(
  import.meta.env.VITE_API_URL || "http://localhost:8080"
);
export const Image_URL = withTrailingSlash(
  import.meta.env.VITE_IMAGE_URL || `${Base_URL}uploads`
);
export const Theme_Color = "rgb(255,20,146)";
export const DefaultKey = "TechbysonVSS9111321654";  
// rgb(255,20,146) 
// ${Theme_Color}

// SETTING UP FIREBASE
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAe-wzWVbETAl9trTEofd40X0SJVgspx_s",
  authDomain: "authenticationforweb-3110b.firebaseapp.com",
  projectId: "authenticationforweb-3110b",
  storageBucket: "authenticationforweb-3110b.appspot.com",
  messagingSenderId: "75092278601",
  appId: "1:75092278601:web:c432849b1363cf1e436e98",
  measurementId: "G-M6H05TKC6H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
