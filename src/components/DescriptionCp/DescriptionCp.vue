<template>
    <el-descriptions :column="5" border>
        <el-descriptions-item label-class-name="my-label" :label="$t('descriptions.appOrsvcName')"
                              content-class-name="my-content">
            {{name}}
        </el-descriptions-item>
        <el-descriptions-item label="AppId">
            <el-tag size="medium">
                {{appId}}
            </el-tag>
        </el-descriptions-item>
    </el-descriptions>
</template>

<script>
import {} from '@/utils'
export default {
    name: "DescriptionCp",
    data(){
        return {
            name:"",
            appId:"",
        }
    },
    mounted() {
        this.name=this.global.DATA.appName;
        this.appId=this.global.DATA.appId;
    }
}
</script>

<style>

</style>