<template>
	<main class="contenedor">
		<h1>Nuestros Productos</h1>
		<div class="grid">
			<ProductDetails name="VueJS" price="$25" image="1.jpg" />
			<ProductDetails name="AngularJS" price="$25" image="2.jpg" />
			<ProductDetails name="ReactJS" price="$25" image="3.jpg" />
			<ProductDetails name="Redux" price="$25" image="4.jpg" />
			<ProductDetails name="Node.js" price="$25" image="5.jpg" />
			<ProductDetails name="SASS" price="$25" image="6.jpg" />
			<ProductDetails name="SASS" price="$25" image="7.jpg" />
			<ProductDetails name="GitHub" price="$25" image="8.jpg" />
			<ProductDetails name="BulmaCSS" price="$25" image="9.jpg" />
			<ProductDetails name="TypeScript" price="$25" image="10.jpg" />
			<ProductDetails name="Drupal" price="$25" image="11.jpg" />
			<ProductDetails name="Javascript" price="$25" image="12.jpg" />
			<ProductDetails name="GraphQL" price="$25" image="13.jpg" />
			<ProductDetails name="WordPress" price="$25" image="14.jpg" />
			<div class="grafico grafico--camisas"></div>
			<div class="grafico grafico--node"></div>
		</div>
	</main>
</template>

<script>
import ProductDetails from '../components/ProductDetails';

export default {
	name: 'HomeView',
	components: {
		ProductDetails,
	},
};
</script>
