import { createStore } from 'vuex'
import { API } from '@/api/API.js'

export default createStore({
    actions: {
        async getFlights(){
            return await API.GET(`https://sprout-backend-example.free.beeceptor.com/sprout/example`);
        },
    }
})