import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/Index";

//create App Vue
const app = createApp(App);

//gunakan "router" di Vue dengan plugin "use"
app.use(router);

app.mount("#app");
