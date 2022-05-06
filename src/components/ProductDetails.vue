<template>
		<div class="producto">
			<router-link to="/producto">
				<img class="producto__imagen" :src="resolve_img_url(image)" alt="Imagen camisa">
				<div class="producto__informacion">
					<p class="producto__nombre">{{name}}</p>
					<p class="producto__precio">{{price}}</p>
				</div>
			</router-link>
		</div>
</template>
<script>
export default {
	name: 'ProductDetails',
	props: {
		name: String,
		price: String,
		image: String,
	},
	methods: {
		resolve_img_url(path) {
			const images = require.context('../../public/assets/img/', false, /\.png$|\.jpg$/);
			return images(`./${path}`);
		},
	},
};
</script>
