<template>
	<div v-if="products.length > 0" style="padding: 10px 10px 10px 10px">
		<div justify="space-between">
			<p class="title is-4" style="padding-left: 120px">Recently viewed:</p>
			<button @click="clear">clear</button>
		</div>
		<div class="columns is-centered is-multiline">
			<div class="card column is-one-quarter" v-for="product in products" :key="product.id">
				<products-default :product="product"></products-default>
			</div>
		</div>
	</div>
	<div v-else>
		<h4>Enjoy your journey through our store.</h4>
	</div>
</template>

<script>
import ProductsComponent from '../Products';

export default {
	name: 'ProductsRecentlyViewed',
	components: {
		'products-default': ProductsComponent
	},
	data () {
		return {
			products: []
		};
	},
	mounted() {
		this.$store.dispatch('get_ProductsRecentlyViewed')
		.then(products => {
			this.products = products;
		})
		.catch(error => {
			this.products = [];
			console.error(error);
		});
	},
	methods: {
		clear: function () {
			this.products = [];
			this.$store.dispatch('clear_ProductsRecentlyViewed');
		}
	}
};
</script>