<template>
	<header class="header">
		<router-link to="/">
			<img class="header__logo" src="../public/assets/img/logo.png" alt="Logotipo">
		</router-link>
	</header>

	<nav class="navegacion">
		<router-link @click="changePage('/')" v-bind:class="[this.page === '/' ? 'navegacion__enlace navegacion__enlace--activo' : 'navegacion__enlace']" to="/">Tienda</router-link>
		<router-link @click="changePage('/about')" v-bind:class="[this.page === '/about' ? 'navegacion__enlace navegacion__enlace--activo' : 'navegacion__enlace']" to="/about">Nosotros</router-link>
	</nav>

	<router-view/>

	<footer class="footer">
		<p class="footer__texto">Front End Store - Todos los derechos Reservados 2022.</p>
	</footer>

</template>

<script>
export default {
	// state
	data () {
		return {
			page: '/'
		}
	},
	// actions
	methods: {
		changePage (page) {
			console.log(page)
			this.page = page
		}
	}
}
</script>
