<template>
	<div v-for="(item, index) in flights" :key="index">
		<template v-for="(journey, i) in item.journeys" :key="index">
			<div class="content-flights">
				<div class="origin">
					<img src="https://mdbootstrap.com/img/new/avatars/1.jpg" alt="">
					<p>
						<b>
						{{ journey.originPlace.code }}
						</b><br>
						{{ journey.segments[0].departureDateTime }}
					</p>
				</div>
				<div class="airline">
					<p class="airline__name">{{ journey.segments[0].operatingAirline }}</p>
					<hr>
					<p class="airline__time">{{ journey.segments[0].duration }} Minutes</p>
				</div>
				<p class="destination">
					<b>{{ journey.destinationPlace.code }}</b>
					{{ journey.segments[0].arrivalDateTime }}
				</p>
			</div>
		</template>
	</div>
</template>

<script>
	import { ref, computed } from 'vue'
	import flight from '@/store/flight.js'

	export default {
		name: 'ListFlights',

		setup() {
			const flights = ref([])

			const getAirlines = async () => {
				const response = await flight.dispatch('getFlights');
				flights.value = response.data.options;
			}

			getAirlines();

			return {
				getAirlines,
				flights,
			}
    	}
	}
</script>
<style scoped>
	.content-flights{
		display: flex;
    	justify-content: space-between;
		background-color: #eeeeeed1;
		border-radius: 20px;
		padding: 0 16px 0 16px;
		margin-bottom: 20px;
	}
   .origin{
		display: flex;
		width: 200px;
		justify-content: space-between;
		align-items: center;
		align-content: center;
	}
	.origin img{
		width: 60px;
		height: 60px;
	}
	.origin p{
		text-align: left;
	}
	.airline{
		width: 300px;
		/* display: flex; */
		flex-direction: column;
		justify-content: center;
		align-content: center;
		text-align: center;
	}
	.airline .airline__name, .airline .airline__time{
		margin-top: 16px;
	}
	.destination{
		display: flex;
		justify-content: center;
		align-items: flex-end;
		text-align: right;
		flex-direction: column;
	}
</style>