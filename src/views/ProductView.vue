<template>
	<main class="contenedor">
		<h1>React Js</h1>
		<div class="camisa">
			<img src="../../public/assets/img/3.jpg" alt="Imagen del producto" class="camisa__imagen">
			<div class="camisa__contenido">
				<p>Sed auctor sollicitudin ipsum, in malesuada mi semper ac. Morbi facilisis nulla at justo finibus venenatis. Praesent nec euismod risus. Nunc molestie ullamcorper augue, non ultricies lacus sagittis quis. Praesent luctus gravida interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<form class="formulario">
					<select class="formulario__campo">
						<option value="" disabled selected>Seleccionar Talla</option>
						<option value="">Chica</option>
						<option value="">Mediana</option>
						<option value="">Grande</option>
					</select>
					<input class="formulario__campo" type="number" min="1" placeholder="Cantidad">
					<input class="formulario__submit" type="submit" value="Agregar al carrito">
				</form>
			</div>
		</div>
	</main>
</template>
