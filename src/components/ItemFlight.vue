<template>
    <div class="content-flights">
        <div class="origin">
            <img src="https://mdbootstrap.com/img/new/avatars/1.jpg" alt="">
            <div>
                <b v-text="journey.originPlace.code"></b>
                <div v-text="setFormatDate(journey.segments[0].departureDateTime)"></div>
            </div>
        </div>

        <div class="airline">
            <p class="airline__name" v-text="journey.segments[0].marketingAirline"></p>
            <hr>
            <p class="airline__time" v-text="journey.segments[0].duration + ' Minutes'"></p>
        </div>

        <div class="destination">
            <b v-text="journey.destinationPlace.code"></b>
            <div v-text="setFormatDate(journey.segments[0].arrivalDateTime)"></div>
        </div>
    </div>
</template>

<script>
	import { ref, computed } from 'vue'
	import moment from 'moment';
	import flight from '@/store/flight.js'

	export default {
		name: 'ItemFlight',

        props: ['journey', 'carriers'],

		setup(props) {
            const journey = ref(props.journey);
            const carriers = ref(props.carriers);

			const setFormatDate = (date) => {
				return moment(date).format('LL LT');
			}

			return {
				journey,
				setFormatDate,
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
		width: 300px;
		justify-content: space-between;
		align-items: center;
		align-content: center;
	}
	.origin div{
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: flex-start;
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