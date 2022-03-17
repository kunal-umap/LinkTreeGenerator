import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCP-0Dg3-caGSFRv356s_VhE2bZ_W6YLwk",
  authDomain: "linktree-e2459.firebaseapp.com",
  projectId: "linktree-e2459",
  storageBucket: "linktree-e2459.appspot.com",
  messagingSenderId: "1037012138041",
  appId: "1:1037012138041:web:fcda6e634b2289580835e8",
  measurementId: "G-CZPLSHBBHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export default analytics;
