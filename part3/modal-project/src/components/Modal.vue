<template>
  <div class="backdrop">
    <div class="modal">
      <p>Modal content</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: wheat;
    border-radius: 10px;
}

.backdrop {
    top:0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
</style>