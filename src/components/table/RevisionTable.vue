<template>
    <div class="app-container">
        <!--查询表单-->
        <el-form :inline="true" class="el-form demo-form-inline">
            <el-form-item :label="$t('tables.deployment.search.uniqid')">
                <el-autocomplete
                        v-model="uniqid"
                        :fetch-suggestions="querySearchAsync"
                        :placeholder="$t('tables.deployment.search.uniqid')"
                ></el-autocomplete>
            </el-form-item>
            <el-form-item :label="$t('tables.deployment.search.total')">
                <span>{{ this.list.length }}</span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">{{ $t('tables.query') }}</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onRest">{{ $t('tables.rest') }}</el-button>
            </el-form-item>
        </el-form>
        <!--表格-->
        <el-table
                :data="list"
                border
                fit
                highlight-current-row
                style="width: 100%;"
        >
            <!--序号-->
            <el-table-column :label="$t('tables.revisions.ID')" prop="id" sortable="custom" align="center" width="80">
                <template v-slot="{row}">
                    <span>{{ row.id }}</span>
                </template>
            </el-table-column>
            <!--唯一索引-->
            <el-table-column :label="$t('tables.revisions.uniqid')" >
                <template v-slot="{row}">
                    <span>{{ row.uniqid }}</span>
                </template>
            </el-table-column>
            <!--应用名称-->
            <el-table-column :label="$t('tables.revisions.appName')">
                <template v-slot="{row}">
                    <span>{{ row.appName }}</span>
                </template>
            </el-table-column>
            <!--镜像-->
            <el-table-column :label="$t('tables.revisions.image')">
                <template v-slot="{row}">
                    <span>{{ row.image }}</span>
                </template>
            </el-table-column>
            <!--最新部署状态-->
            <el-table-column :label="$t('tables.revisions.state')">
                <template v-slot="{row}">
                    <el-tag effect="dark" :type="stateShow[row.state]?stateShow[row.state].class:''">
                        {{ stateShow[row.state]?stateShow[row.state].display:row.state }}
                    </el-tag>
                </template>
            </el-table-column>
            <!--副本-->
            <el-table-column :label="$t('tables.revisions.replicas')">
                <template v-slot="{row}">
                    <span>{{row.replicas}}</span>
                </template>
            </el-table-column>
            <!--重试次数-->
            <el-table-column :label="$t('tables.revisions.retryNum')">
                <template v-slot="{row}">
                    <span>{{row.retryNum}}</span>
                </template>
            </el-table-column>
            <!--耗时-->
            <el-table-column :label="$t('tables.revisions.delay')">
                <template v-slot="{row}">
                    <span>{{ row.delay | millisecondConvertSecond()}}s</span>
                </template>
            </el-table-column>
            <!--运行时-->
            <el-table-column :label="$t('tables.revisions.runtime')">
                <template v-slot="{row}">
                    <el-tag :type="runtimeShow[row.runtime]?runtimeShow[row.runtime].class:'danger'">
                        {{ runtimeShow[row.runtime]?runtimeShow[row.runtime].display:row.runtime }}
                    </el-tag>
                </template>
            </el-table-column>
            <!--操作-->
            <el-table-column :label="$t('tables.revisions.action')">
                <template v-slot="{row}">
                    <span>{{row.action}}</span>
                </template>
            </el-table-column>
            <!--版本-->
            <el-table-column :label="$t('tables.revisions.version')">
                <template v-slot="{row}">
                    <span>{{row.version}}</span>
                </template>
            </el-table-column>
            <!--集群uid-->
            <el-table-column :label="$t('tables.revisions.clusterUniqid')">
                <template v-slot="{row}">
                    <span>{{row.clusterUniqid}}</span>
                </template>
            </el-table-column>
            <!--namespace uid-->
            <el-table-column :label="$t('tables.revisions.namespaceUniqid')">
                <template v-slot="{row}">
                    <span>{{row.namespaceUniqid}}</span>
                </template>
            </el-table-column>
            <!--创建时间-->
            <el-table-column :label="$t('tables.revisions.createTime')">
                <template v-slot="{row}">
                    <span>{{row.createTime | getTimestamp() | parseTime('{y}-{m}-{d} {h}:{i}:{s}')}}</span>
                </template>
            </el-table-column>
            <!--结束时间-->
            <el-table-column :label="$t('tables.revisions.updateTime')">
                <template v-slot="{row}">
                    <span>{{row.updateTime | getTimestamp() | parseTime('{y}-{m}-{d} {h}:{i}:{s}')}}</span>
                </template>
            </el-table-column>
            <!--详情操作-->
            <el-table-column :label="$t('tables.revisions.detail')" align="center"  class-name="small-padding fixed-width">
                <template v-slot="{row}">
                    <el-button type="primary" size="mini" @click="openDeatil(row)">
                        {{$t('tables.revisions.step')}}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'RevisionTable',
    data() {
        return {
            //提示
            restaurants: [],
            //查询唯一索引
            uniqid: '',
            //时间
            date: [],
            timeout: null,
            list: [],
            runtimeShow: {
                production: {display: this.$t("tables.deployment.tag.production"), class: "success"},
                test: {display: this.$t("tables.deployment.tag.test"), class: "info"},
                development: {display: this.$t("tables.deployment.tag.development"), class: ""},
                pre_release: {display: this.$t("tables.deployment.tag.pre_release"), class: "warning"},
            },
            stateShow: {
                Started: {display: this.$t("tables.deployment.tag.Started"), class: "success"},
                Failed: {display: this.$t("tables.deployment.tag.Failed"), class: "danger"},
                Pending: {display: this.$t("tables.deployment.tag.Pending"), class: ""},
                Paused: {display: this.$t("tables.deployment.tag.Pending"), class: "warning"},
                Destroyed: {display: this.$t("tables.deployment.tag.Destroyed"), class: "info"},
            }
        }
    },
    methods: {
        //重置按钮
        onRest() {
            this.uniqid = ""
        },
        //查询按钮
        onSubmit() {
            console.log(this.uniqid);
        },
        //uid初始化数据
        searchUIDAll() {
            var arr =[]
            var data = this.global.DATA.ins
            for (var i in data){
                arr.push({"value":data[i].uniqid})
            }
            return arr;
        },
        //动态查询
        querySearchAsync(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                cb(results);
            }, 1000 * Math.random());
        },
        //过滤是否满足条件
        createStateFilter(queryString) {
            return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        //时间回调方法获取时间
        getTime(e) {
            this.date = e
        },
        openDetail(v){
            console.log(v)
        }
    },
    mounted() {
        this.restaurants = this.searchUIDAll();
        var data= this.global.DATA.ins
        var id = 0
        for(var i in data){
            for (var h in data[i].revisionInfo){
                data[i].revisionInfo[h].id= ++id
                this.list.push(data[i].revisionInfo[h])
            }
        }
    }
}


</script>

<style lang="scss" scoped>

</style>