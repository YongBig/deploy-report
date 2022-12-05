<template>
    <el-row>
        <el-col :span="12">
            <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#409EFF"
                    text-color="#fff"
                    active-text-color="#F7F7F7">
                <el-menu-item index="icon"><img data-v-1b63f1a9="" height="20"
                                                src="data:image/png;base64,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"
                                                alt="logo"></el-menu-item>
                <el-menu-item index="overview">{{$t("nav.overview")}}</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="12">
            <el-menu
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#409EFF"
                    text-color="#000"
                    active-text-color="#F7F7F7">
                <el-menu-item class="right">
                    <el-dropdown class="international" @command="handleSetLanguage">
                           <span class="el-dropdown-link">
                               <i class="el-icon-s-tools "></i>{{ $t('language.switchLanguage') }}
                           </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item :disabled="$store.language===$t('language.zh')" command="zh-CN">
                                <span>{{ $t('language.zhName') }}</span></el-dropdown-item>
                            <el-dropdown-item :disabled="$store.language===$t('language.en')" command="en">
                                <span>{{ $t('language.enName') }}</span></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>

</template>

<script>
export default {
    name: "NavReport",
    data() {
        return {
            activeIndex: 'overview',
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            if (key === "icon") {
                return;
            }
        },
        handleSetLanguage(lang) {
            this.$i18n.locale = lang;
            this.$store.commit("setLanguage", lang);
        }
    }
}
</script>

<style scoped>

</style>