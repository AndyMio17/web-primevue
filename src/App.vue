<script setup>

</script>

<template class="firsttemplate">
  <!-- <div class="menu">

    <pv-Toolbar :model="items" class="tool">

      <template #start>
        <div class="smenu">
          <pv-Image src="img/logo.jpg" alt="Image" width="250"/>
        </div>   
      </template>


      <template #center>
        <div class="cmenu">
          <li>INICIO</li>
          <li>DOCUMENTOS</li>
          <li>FAQ</li>
          <li>MI CUENTA</li>
        </div>
      </template>


      <template #end>
        <div class="emenu">

          <pv-IconField>
            <pv-InputIcon>
              <i class="pi pi-search" />
            </pv-InputIcon>
            <pv-InputText placeholder="Search" />
          </pv-IconField>
          <pv-Avatar image="/images/avatar/amyelsner.png" shape="circle" />

        </div>
      </template>

    </pv-Toolbar>

  </div> -->
  
  <header class="navbar">
    <!-- Logo -->
    <div class="logo">
      <a href="#"><pv-Image src="img/logo.jpg" alt="Image" width="250"/></a>
    </div>

    <!-- Menú desktop -->
    <nav class="menu desktop" v-if="!isMobile">
      <ul>
        <li><a href="#">Modelos</a></li>
        <li><a href="#">Precios</a></li>
        <li><a href="#">Recursos</a></li>
      </ul>
    </nav>

    <!-- Botones a la derecha en desktop -->
    <div class="actions desktop" v-if="!isMobile">
      <a href="#" class="btn-create">Crear documento</a>
      <a href="#" class="link">Iniciar sesión</a>
    </div>

    <!-- Botón hamburguesa en móvil -->
    <button class="hamburger mobile" v-if="isMobile" @click="toggleMobileMenu">
      ☰
    </button>

    <!-- Menú móvil desplegable -->
    <div class="mobile-menu mobile" v-if="isMobile && mobileMenuOpen">
      <a href="#">Modelos</a>
      <a href="#">Precios</a>
      <a href="#">Recursos</a>
      <a href="#">Crear documento</a>
      <a href="#">Iniciar sesión</a>
    </div>
  </header>



  <div class="page-container">
    <!-- Encabezado -->
    <section class="header-section">
      <h1>Contrato de Arrendamiento de Vivienda Habitual</h1>
      <p>
        Modelo de contrato para formalizar el alquiler de una vivienda como residencia habitual.
        Personalízalo fácilmente y descárgalo en Word o PDF.
      </p>
      <button class="btn-primary">Crear documento</button>
    </section>

    <!-- Contenido -->
    <section class="content-section">
      <!-- Columna izquierda -->
      <div class="main-content">
        <h2>¿Qué es este contrato?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit varius, quisque sociis aliquam a integer consequat fames odio, nisl nunc justo sapien mauris nullam nisi. Velit proin nulla interdum nam rhoncus, semper sagittis sollicitudin sem eleifend litora, dui magnis justo eu. Dui faucibus nec facilisi purus aptent aenean class tempor placerat, fames arcu nostra luctus vulputate sapien dignissim.

Purus congue commodo diam ut condimentum, aptent nisi curae quis sapien malesuada, platea non posuere sodales. Ultricies est vitae diam cras posuere dapibus volutpat etiam netus nunc vestibulum, augue duis proin consequat arcu tellus condimentum per aptent porta urna, potenti dis faucibus vivamus sollicitudin nascetur mattis sem quis penatibus. Rutrum risus nisl lobortis nostra bibendum dictum, suspendisse etiam donec nec mus, accumsan convallis tortor enim ridiculus.
        </p>

        <h2>¿Cuándo usarlo?</h2>
        <ul>
          <li>Cuando alquilas una vivienda para vivir.</li>
          <li>Si quieres establecer las condiciones por escrito.</li>
          <li>Para cumplir con la Ley de Arrendamientos Urbanos.</li>
        </ul>

        <h2>Información legal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit varius, quisque sociis aliquam a integer consequat fames odio, nisl nunc justo sapien mauris nullam nisi. Velit proin nulla interdum nam rhoncus, semper sagittis sollicitudin sem eleifend litora, dui magnis justo eu. Dui faucibus nec facilisi purus aptent aenean class tempor placerat, fames arcu nostra luctus vulputate sapien dignissim.

Purus congue commodo diam ut condimentum, aptent nisi curae quis sapien malesuada, platea non posuere sodales. Ultricies est vitae diam cras posuere dapibus volutpat etiam netus nunc vestibulum, augue duis proin consequat arcu tellus condimentum per aptent porta urna, potenti dis faucibus vivamus sollicitudin nascetur mattis sem quis penatibus. Rutrum risus nisl lobortis nostra bibendum dictum, suspendisse etiam donec nec mus, accumsan convallis tortor enim ridiculus.
        </p>

        <!-- Preguntas frecuentes -->
        <h2>Preguntas frecuentes</h2>
        <details>
          <summary>¿Es obligatorio registrar este contrato?</summary>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit varius, quisque sociis aliquam a integer consequat fames odio, nisl nunc justo sapien mauris nullam nisi. Velit proin nulla interdum nam rhoncus, semper sagittis sollicitudin sem eleifend litora, dui magnis justo eu. Dui faucibus nec facilisi purus aptent aenean class tempor placerat, fames arcu nostra luctus vulputate sapien dignissim.

Purus congue commodo diam ut condimentum, aptent nisi curae quis sapien malesuada, platea non posuere sodales. Ultricies est vitae diam cras posuere dapibus volutpat etiam netus nunc vestibulum, augue duis proin consequat arcu tellus condimentum per aptent porta urna, potenti dis faucibus vivamus sollicitudin nascetur mattis sem quis penatibus. Rutrum risus nisl lobortis nostra bibendum dictum, suspendisse etiam donec nec mus, accumsan convallis tortor enim ridiculus.</p>
        </details>
        <details>
          <summary>¿Cuál es la duración mínima?</summary>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit varius, quisque sociis aliquam a integer consequat fames odio, nisl nunc justo sapien mauris nullam nisi. Velit proin nulla interdum nam rhoncus, semper sagittis sollicitudin sem eleifend litora, dui magnis justo eu. Dui faucibus nec facilisi purus aptent aenean class tempor placerat, fames arcu nostra luctus vulputate sapien dignissim.

Purus congue commodo diam ut condimentum, aptent nisi curae quis sapien malesuada, platea non posuere sodales. Ultricies est vitae diam cras posuere dapibus volutpat etiam netus nunc vestibulum, augue duis proin consequat arcu tellus condimentum per aptent porta urna, potenti dis faucibus vivamus sollicitudin nascetur mattis sem quis penatibus. Rutrum risus nisl lobortis nostra bibendum dictum, suspendisse etiam donec nec mus, accumsan convallis tortor enim ridiculus.</p>
        </details>
      </div>

      <!-- Columna derecha -->
      <aside class="sidebar">
        <div class="info-box">
          <h3>Formato</h3>
          <p>Word y PDF</p>
        </div>
        <div class="info-box">
          <h3>Tamaño</h3>
          <p>4 páginas</p>
        </div>
        <div class="info-box">
          <h3>Última actualización</h3>
          <p>Agosto 2025</p>
        </div>
      </aside>
    </section>

    <!-- Cómo funciona -->
    <section class="steps-section">
      <h2>Cómo funciona</h2>
      <div class="steps">
        <div class="step">
          <span class="step-number">1</span>
          <p>Responde a unas preguntas simples para personalizar el documento.</p>
        </div>
        <div class="step">
          <span class="step-number">2</span>
          <p>Descarga el documento en Word o PDF.</p>
        </div>
        <div class="step">
          <span class="step-number">3</span>
          <p>Fírmenlo ambas partes y guarden una copia.</p>
        </div>
      </div>
    </section>
  </div>


  <div>
    <h1>holaaa</h1>
    <pv-Button label="Click Me" icon="pi pi-search" class="p-button"/>
  </div>
</template>

<style scoped>


</style>
