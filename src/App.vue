<script setup>

</script>

<template>
  <pv-Menubar :model="items">
    <template #start>
        <h2>Dashboard</h2>
        
    </template>



    <template #end>

        <div class="flex">
          <pv-IconField>
            <pv-InputIcon>
                <i class="pi pi-search" />
            </pv-InputIcon>
            <pv-InputText placeholder="Search" />
          </pv-IconField>

          <pv-Avatar image="/images/avatar/amyelsner.png" shape="circle" />
        </div>

    </template>
  </pv-Menubar>





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
</style>
