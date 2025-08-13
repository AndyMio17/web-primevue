<script setup>

</script>

<template class="firsttemplate">
  <div class="menu">

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

  </div>
  





  <div>
    <h1>holaaa</h1>
    <pv-Button label="Click Me" icon="pi pi-search" class="p-button"/>
  </div>
</template>

<style scoped>
  .p-button {
    background-color: #ff9800 ;
    border-color: #ff9800;
  }
  
  .text{
    background-color: #ff9800 ;
    border-color: #ff9800;
  }

  .flex{
    display: flex; /* Usar para alinear los elementos*/
    gap: 10px; /* Espacio entre los elementos */
  }

  .firsttemplate{
    /*margin: 20px;*/
    background-color: red;
  }

  .emenu{
    display: flex;
    gap: 10px;
  }

  .buttonmenu{
    background-color: #ff9800 !important;

  }

  li{
    list-style-type: none;
    display: inline;
    margin-inline: 10px;

  }
  
</style>
