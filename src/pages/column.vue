<template>
	<div class="column pd-top">
		<uc-cell v-for="(item,index) of list " :key="item._id" :data="item" collectionName="column" />
	</div>
</template>

<script>
	import UcCell from "../components/uc-cell/uc-cell.vue";
	export default {
		name: "column",
		props: {},
		data() {
			return {
				list: [
					// { _id: 1, title: "hahaha1", des: "xxoo" },
					// { _id: 2, title: "hahaha2", des: "xxoo" },
					// { _id: 3, title: "hahaha3", des: "xxoo" },
					// { _id: 4, title: "hahaha4", des: "xxoo" },
					// { _id: 5, title: "hahaha5", des: "xxoo" },
				],
			};
		},
		components: {
			UcCell,
		},
		mounted() {
			this.$axios({
				url: '/api/column',
				params: {
					_limit: 10,
					_page: 1
				}
			}).then(
				res => {
					this.list = res.data.data;
				}
			);
		},
		updated() {},
		methods: {},
	};
</script>

<style>
	.column {
		.column {
			padding-left: 0.34rem;
			padding-right: 0.34rem;
			/* padding-top: 0.34rem; */
		}
	}
</style>
