<template>
 <div> 
    <form>
        <input
         type=""
         name="text" 
        v-model="username" 
        placeholder="username">
        <input
         type="password"
        name="" 
        v-model="username" 
        placeholder="username">
        <button type="submit">login</button>
    </form>

</div>
</template>

<script> 
    export default{
          data(){
          	return{
          		username:"25789",
          		password:"10"
          	}
          }
}
</script>
    
<style scoped>

</style>