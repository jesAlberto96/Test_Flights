<template>
	<div v-for="(item, index) in flights" :key="index">
		<template v-for="(journey, i) in item.journeys" :key="index">
			<ItemFlight :journey="journey" :carriers="carriers"></ItemFlight>
		</template>
	</div>
</template>

<script>
	import { ref, computed } from 'vue'
	import flight from '@/store/flight.js'
	import ItemFlight from './ItemFlight.vue'

	export default {
		name: 'ListFlights',

		components: {
			ItemFlight,
		},

		setup() {
			const flights = ref([])
			const carriers = ref([])

			const getAirlines = async () => {
				const response = await flight.dispatch('getFlights');
				flights.value = response.data.options;
				carriers.value = response.data.carriers;
			}

			getAirlines();

			return {
				getAirlines,
				flights,
				carriers,
			}
    	}
	}
</script>