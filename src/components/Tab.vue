<template>
    <div>
        <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
            <el-tab-pane :label="$t('tab.deployments')" key="deployments" name="deployments">
                <deployment-table @getResionUniqid="getUniqid" ></deployment-table>
            </el-tab-pane>
            <el-tab-pane :label="$t('tab.revisions')" key="revisions" name="revisions">
                <RevisionTable :selectUniqid="uniqid"></RevisionTable>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import DeploymentTable from "@/components/table/DeploymentTable";
import RevisionTable from "@/components/table/RevisionTable";
export default {
    name: 'Tab',
    components: {DeploymentTable,RevisionTable},
    data() {
        return {
            activeName: 'deployments',
            uniqid:''
        }
    },
    methods:{
        getUniqid(e){
            this.uniqid = e
            this.activeName= "revisions"
        }
    }
}
</script>

<style scoped>

</style>