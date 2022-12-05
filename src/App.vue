<template>
    <div id="app" :key="$store.state.language">
        <el-container>
            <el-header>
                <nav-report></nav-report>
            </el-header>

            <over-view></over-view>

            <el-main>
                <tab></tab>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import NavReport from './components/NavReport.vue';
import OverView from "@/components/OverView";
import Tab from "@/components/Tab";

export default {
    name: 'app',
    components: {
        NavReport,
        OverView,
        Tab,
    }
}
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.el-header, .el-main {
    padding: 0;
}
</style>
