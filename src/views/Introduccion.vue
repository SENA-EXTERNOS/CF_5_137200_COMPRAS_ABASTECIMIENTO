<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center(data-aos="flip-down")
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='Texto que describa la imagen')  
      .col-lg-7
        p(data-aos="fade-down") Estimado aprendiz, en este componente formativo el objetivo es apropiar conocimientos relacionados con el proceso de clasificación de proveedores, evidenciar cada una de sus características, enseñar metodologías para llevar a cabo la ejecución de esta fase, entender la capacidad financiera tanto de la empresa como de su proveedor, siendo este un factor esencial para llevar a cabo los proyectos propuestos. También es necesario que comprenda la importancia del tiempo de respuesta, el cual evitará inconvenientes entre las partes en un futuro, y la trascendencia de manejar siempre unas buenas prácticas de manufactura al interior de la empresa.

        p Todos estos conocimientos anteriormente mencionados permitirán que, al momento de iniciar su vida laboral, pueda demostrar los saberes obtenidos y ponerlos en función de la organización para la cual está trabajando. Allí podrá desempeñarse en el área logística y de almacenamiento, donde logrará que las negociaciones con proveedores y los productos adquiridos se puedan llevar de una forma estratégica y estructurada, permitiendo que el proceso tenga mejores resultados, lo cual se evidenciará con el producto final.

        p #[b Para iniciar, se recomienda ver el siguiente video introductorio para conocer de manera general todas las temáticas que estudiará en este componente.]
    .row.justify-content-center.align-items-center.mb-5.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
                   
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
