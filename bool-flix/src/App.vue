<template>
    <header>
        <Nav/>
    </header>

    <main>
        <slot/>
    </main>

    <footer>
        <Foot/>
    </footer>
</template>

<script>
import Home from './pages/Home.vue';
import Nav from './components/Nav.vue';
import Foot from './components/Foot.vue';
export default {
    components:{
        Home,
        Nav,
        Foot,
    },

}
</script>

<style scoped>

</style>