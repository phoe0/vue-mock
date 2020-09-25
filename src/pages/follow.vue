<template>
	<div class="follow pd-top">
		<uc-cell v-for="(item,index) of list " :key="item._id" :data="item" :index="index" collectionName="follow">
		</uc-cell>
	</div>
</template>

<script>
	import UcCell from '../components/uc-cell/uc-cell.vue'
	export default {
		name: 'follow',
		props: {},
		data() {
			return {
				list: [
					// {_id: 1,title: 'hahaha1',des: 'xxoo'},
					// {_id: 2,title: 'hahaha1',des: 'xxoo'},
					// {_id: 3,title: 'hahaha1',des: 'xxoo'},
					// {_id: 4,title: 'hahaha1',des: 'xxoo'},
					// {_id: 5,title: 'hahaha1',des: 'xxoo'},
				]
			}
		},
		components: {
			UcCell
		},
		mounted() {
			this.$axios({
				url: '/api/follow',
				params: {
					_limit: 20,
					_page: 1
				}
			}).then(
				res => {
					// console.log(res.data.data);
					this.list = res.data.data;
				}
			)
		},
		updated() {},
		methods: {}
	}
</script>

<style>
	.follow {
		padding: 0 0.34rem;
	}
</style>
