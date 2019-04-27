<template>
  <div class="nav-breadcrumb-wrap">
    <div class="container">
      <nav class="nav-breadcrumb">
        <a href="/">Home</a>
        <slot></slot>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBread'
}
</script>

<style lang="stylus" scoped>
  /*.nav-breadcrumb-wrap*/
    /*.container*/
      /*.nav-breadcrumb*/
        /*padding: 20px 0*/
        /*font-size: 30px*/
</style>
