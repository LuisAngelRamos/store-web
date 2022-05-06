<template>
	<div class="bloque">
		<img class="bloque__imagen" :src="resolve_img_url(image)" alt="{{image}}">
		<h2 class="bloque__titulo">{{title}}</h2>
		<p>{{content}}</p>
	</div>
</template>

<script>
export default {
	name: 'BloqueAbout',
	props: {
		title: String,
		image: String,
		content: String
	},
	methods: {
		resolve_img_url: function (path) {
			const images = require.context('../../public/assets/img/', false, /\.png$|\.jpg$/)
			return images(`./${path}`)
		}
	}
}
</script>
