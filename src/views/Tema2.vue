<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Técnicas de clasificación de proveedores

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Para llevar a cabo una correcta selección de proveedores, se deben tener en cuenta los parámetros previamente identificados y estructurados, los cuales fueron establecidos de acuerdo con las necesidades y la actividad comercial.

        P Basados en esos criterios, se procede a realizar la ejecución de los mismos mediante técnicas conforme a las estrategias que se quieran implementar, las cuales garantizarán una evaluación rigurosa y completa con el fin de elegir los mejores proveedores para la empresa, buscando tener procesos correctamente elaborados, dando como resultado un óptimo producto final y un buen servicio a los clientes.


    separador
    #t_2_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.1 Tipos

    .row.justify-content-around.align-items-center(data-aos="flip-down")

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img2.svg', alt='Texto que describa la imagen')  

      .col-lg-5.banner1-tema-2
        p(data-aos="fade-down") Dentro de los tipos de técnicas se encuentran:

        ul.lista-ul--color
              li 
                i.fas.fa-angle-right
                | El categórico.

              li 
                i.fas.fa-angle-right
                p.mb-0 AHP (#[i Analytic Hierarchy Process]).
              
              li 
                i.fas.fa-angle-right
                | Puntos ponderados.

              li 
                i.fas.fa-angle-right
                p.mb-0 ANP (#[i Analytic Network Process]).

              li 
                i.fas.fa-angle-right
                | Relación de costos.

              li 
                i.fas.fa-angle-right
                p.mb-0 TOPSIS (#[i Techniques for Order Preference by Similarity to Ideal Solution]).

              li 
                i.fas.fa-angle-right
                | Análisis dimensional.

              li 
                i.fas.fa-angle-right
                p.mb-0 DEA (#[i Data Envelopment Analysis]).

              li 
                i.fas.fa-angle-right
                p.mb-0 #[i Carter] 10 C’s.

              li 
                i.fas.fa-angle-right
                p.mb-0 CBR (#[i Case-Based Reasoning]).

              li 
                i.fas.fa-angle-right
                p-mb-0 #[i Decision Matrix Analysis.]


        


    separador
    #t_2_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.2 Características

    .row.justify-content-center.align-items-center.mb-5.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
                   
    
    .row.justify-content-around.align-items-center(data-aos="flip-down")

      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen')  
 
      .col-lg-10
        p(data-aos="fade-down") #[b Aprendiz], ha culminado el estudio de este componente formativo. Lo invitamos a desarrollar la actividad didáctica de afianzamiento y observar los materiales complementarios de estudio, para que enriquezca su conocimiento.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
