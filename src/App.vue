<template>
  <div id="app">
    <!-- 引入awesome图标 -->
    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
    <TableHeader/>
    <TableAside/>
    <CourseProvision/>
    
  </div>
</template>

<script>
import TableHeader from './components/TableHeader'
import TableAside from './components/TableAside'
import CourseProvision from './components/CourseProvision'

export default {
  name: 'App',
  components: {
    TableHeader,
    TableAside,
    CourseProvision,
  }
}
</script>

<style>
</style>
