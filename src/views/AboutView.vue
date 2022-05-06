<template>
	<main class="contenedor">
		<h1>Sobre Nosotros</h1>
		<div class="nosotros">
			<div class="nosotros__contenido">
				<p>Cras viverra quam tortor, ut egestas purus pellentesque ut. Sed aliquam aliquam urna, vel vehicula tellus dignissim sit amet. Sed at leo tortor. Proin ac dolor mattis, blandit mauris non, dictum neque.</p>
				<p>Nam placerat ornare enim, ac volutpat nisl aliquam at. Sed ac ex at ligula blandit imperdiet. Duis vitae egestas mi. Etiam in urna posuere, imperdiet lorem et, suscipit diam. Mauris purus tortor, viverra sit amet vulputate rhoncus, tincidunt eget erat. </p>
			</div>
			<img class="nosotros__imagen" src="../../public/assets/img/nosotros.jpg" alt="Imagen Nosotros" />
		</div>
	</main>

	<section class="contenedor comprar">
		<h2 class="comprar__titulo">Por que comprar con nosotros</h2>

		<div class="bloques">
			<BloqueAbout title="El mejor precio" image="icono_1.png" content="Sed ac ex at ligula blandit imperdiet. Duis vitae egestas mi. Etiam in urna posuere, imperdiet lorem et, suscipit diam. Mauris purus tortor" />
			<BloqueAbout title="Para Devs" image="icono_2.png" content="Sed ac ex at ligula blandit imperdiet. Duis vitae egestas mi. Etiam in urna posuere, imperdiet lorem et, suscipit diam. Mauris purus tortor" />
			<BloqueAbout title="Envio gratis" image="icono_3.png" content="Sed ac ex at ligula blandit imperdiet. Duis vitae egestas mi. Etiam in urna posuere, imperdiet lorem et, suscipit diam. Mauris purus tortor" />
			<BloqueAbout title="La mejor calidad" image="icono_4.png" content="Sed ac ex at ligula blandit imperdiet. Duis vitae egestas mi. Etiam in urna posuere, imperdiet lorem et, suscipit diam. Mauris purus tortor" />
		</div>

	</section>
</template>

<script>
import BloqueAbout from '@/components/BloqueAbout.vue'

export default {
	components: {
		BloqueAbout
	}
}
</script>
