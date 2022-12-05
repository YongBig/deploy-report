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
                <span>{{ this.originList.length }}</span>
            </el-form-item>
            <el-form-item :label="$t('tables.deployment.search.currentTotal')">
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
                :default-sort = "{prop: 'id', order: 'ascending'}"
        >
            <!--序号-->
            <el-table-column :label="$t('tables.revisions.ID')" prop="id" sortable align="center" width="50">
                <template v-slot="{row}">
                    <span>{{ row.id }}</span>
                </template>
            </el-table-column>
            <!--唯一索引-->
            <el-table-column :label="$t('tables.revisions.uniqid')" align="center" >
                <template v-slot="{row}">
                    <span>{{ row.uniqid }}</span>
                </template>
            </el-table-column>
            <!--应用名称-->
            <el-table-column :label="$t('tables.revisions.appName')" align="center" >
                <template v-slot="{row}">
                    <span>{{ row.appName }}</span>
                </template>
            </el-table-column>
            <!--镜像-->
            <el-table-column :label="$t('tables.revisions.image')" align="center">
                <template v-slot="{row}">
                    <span>{{ row.image }}</span>
                </template>
            </el-table-column>
            <!--最新部署状态-->
            <el-table-column :label="$t('tables.revisions.state')" align="center" >
                <template v-slot="{row}">
                    <el-tag effect="dark" :type="stateShow[row.state]?stateShow[row.state].class:''">
                        {{ stateShow[row.state]?stateShow[row.state].display:row.state }}
                    </el-tag>
                </template>
            </el-table-column>
            <!--副本-->
            <el-table-column :label="$t('tables.revisions.replicas')" align="center">
                <template v-slot="{row}">
                    <span>{{row.replicas}}</span>
                </template>
            </el-table-column>
            <!--重试次数-->
            <el-table-column :label="$t('tables.revisions.retryNum')" align="center">
                <template v-slot="{row}">
                    <span>{{row.retryNum}}</span>
                </template>
            </el-table-column>
            <!--耗时-->
            <el-table-column :label="$t('tables.revisions.delay')" align="center">
                <template v-slot="{row}">
                    <span>{{ row.delay | millisecondConvertSecond()}}s</span>
                </template>
            </el-table-column>
            <!--运行时-->
            <el-table-column :label="$t('tables.revisions.runtime')" align="center">
                <template v-slot="{row}">
                    <el-tag :type="runtimeShow[row.runtime]?runtimeShow[row.runtime].class:'danger'">
                        {{ runtimeShow[row.runtime]?runtimeShow[row.runtime].display:row.runtime }}
                    </el-tag>
                </template>
            </el-table-column>
            <!--操作-->
            <el-table-column :label="$t('tables.revisions.action')" align="center" >
                <template v-slot="{row}">
                    <span>{{row.action}}</span>
                </template>
            </el-table-column>
            <!--版本-->
            <el-table-column :label="$t('tables.revisions.version')" align="center" >
                <template v-slot="{row}">
                    <span>{{row.version}}</span>
                </template>
            </el-table-column>
            <!--集群uid-->
            <el-table-column :label="$t('tables.revisions.clusterUniqid')" align="center" >
                <template v-slot="{row}">
                    <span>{{row.clusterUniqid}}</span>
                </template>
            </el-table-column>
            <!--namespace uid-->
            <el-table-column :label="$t('tables.revisions.namespaceUniqid')" align="center" s>
                <template v-slot="{row}">
                    <span>{{row.namespaceUniqid}}</span>
                </template>
            </el-table-column>
            <!--创建时间-->
            <el-table-column :label="$t('tables.revisions.createTime')" align="center" >
                <template v-slot="{row}">
                    <span>{{row.createTime | getTimestamp() | parseTime('{y}-{m}-{d} {h}:{i}:{s}')}}</span>
                </template>
            </el-table-column>
            <!--结束时间-->
            <el-table-column :label="$t('tables.revisions.updateTime')" align="center" >
                <template v-slot="{row}">
                    <span>{{row.updateTime | getTimestamp() | parseTime('{y}-{m}-{d} {h}:{i}:{s}')}}</span>
                </template>
            </el-table-column>
            <!--详情操作-->
            <el-table-column :label="$t('tables.revisions.detail')" align="center"  class-name="small-padding fixed-width" >
                <template v-slot="{row}">
                    <el-button type="primary" size="mini" @click="openDetail(row)">
                        {{$t('tables.revisions.step')}}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--抽屉-->
        <el-drawer
                title="Setp"
                :visible.sync="drawer"
                :with-header="false">
            <div class="block">
                <el-timeline>
                    <el-timeline-item
                            v-for="(activity, index) in activities"
                            :key="index"
                            :type="activity.type"
                            size="large"
                            :timestamp="activity.timestamp">
                        <h4>{{activity.title}}</h4>
                        <p>{{activity.content}}</p>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </el-drawer>
    </div>
</template>

<script>
export default {
    name: 'RevisionTable',
    data() {
        return {
            //抽屉
            drawer: false,
            //提示
            restaurants: [],
            //查询唯一索引
            uniqid: '',
            //时间
            date: [],
            timeout: null,
            list: [],
            originList: [],
            activities:[],
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
            this.onSubmit()
        },
        //查询按钮
        onSubmit() {
            this.handleFilter(this.uniqid);
        },
        //过滤
        handleFilter(uniqid) {
            var list  = []
            for (var i in this.originList) {
                if (uniqid != null) {
                    if (-1 === this.originList[i].uniqid.toLowerCase().indexOf(uniqid.toLowerCase())) {
                        continue
                    }
                }
                list.push(this.originList[i])
            }
            this.list = list
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
            var arr = []
            for(var key in v.stepInfo){
                for (var step in v.stepInfo[key]){
                    var obj = {}
                    obj.content = v.stepInfo[key][step].message
                    obj.title = v.stepInfo[key][step].action
                    obj.timestamp = v.stepInfo[key][step].last_transition_time
                    if (v.stepInfo[key][step].status === "true"){
                        obj.type = "success"
                    }else{
                        obj.type= "danger"
                    }
                    arr.push(obj)
                }
            }
            this.activities = arr
            this.drawer = true
        }
    },
    mounted() {
        this.restaurants = this.searchUIDAll();
        var data= this.global.DATA.ins
        var id = 0
        for(var i in data){
            for (var h in data[i].revisionInfo){
                data[i].revisionInfo[h].id= ++id
                this.originList.push(data[i].revisionInfo[h])
            }
        }
        this.onSubmit()
    },
    props:["selectUniqid"],
    watch:{
        selectUniqid:function (newVal){
            this.uniqid=newVal
            this.onSubmit()
        }
    }
}


</script>

<style lang="scss" scoped>
.el-select .el-input {
  width: 200px;
}
</style>