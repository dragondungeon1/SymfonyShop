import { createApp, compile } from 'vue';
import App from './pages/products';

createApp({
    render() {
        return compile(App)(this.$.ctx);
    }
}).mount('#app')