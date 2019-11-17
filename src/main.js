import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from 'firebase';

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyAJLDhBG0ZsMYhgtEQdgicPPaElHbOP37c",
  authDomain: "neutwitterosclass.firebaseapp.com",
  databaseURL: "https://neutwitterosclass.firebaseio.com",
  projectId: "neutwitterosclass",
  storageBucket: "neutwitterosclass.appspot.com",
  messagingSenderId: "170173903456",
  appId: "1:170173903456:web:a865cb9675e03353afc905",
  measurementId: "G-GSSY4JDFH0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
