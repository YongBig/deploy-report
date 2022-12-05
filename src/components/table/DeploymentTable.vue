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
            <el-form-item :label="$t('tables.deployment.search.data')">
                <m-date-picker :pDate="this.date" @getTimeEvent="getTime"></m-date-picker>
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
            <el-table-column :label="$t('tables.deployment.ID')" prop="id" sortable align="center" width="80">
                <template v-slot="{row}">
                    <span>{{ row.id }}</span>
                </template>
            </el-table-column>
            <!--唯一索引-->
            <el-table-column :label="$t('tables.deployment.uniqid')">
                <template v-slot="{row}">
                    <span>{{ row.uniqid }}</span>
                </template>
            </el-table-column>
            <!--应用名称-->
            <el-table-column :label="$t('tables.deployment.appName')">
                <template v-slot="{row}">
                    <span>{{ row.appName }}</span>
                </template>
            </el-table-column>
            <!--运行环境-->
            <el-table-column :label="$t('tables.deployment.runtime')">
                <template v-slot="{row}">
                    <el-tag :type="runtimeShow[row.runtime]?runtimeShow[row.runtime].class:'danger'">
                        {{ runtimeShow[row.runtime] ? runtimeShow[row.runtime].display : row.runtime }}
                    </el-tag>
                </template>
            </el-table-column>
            <!--最新部署状态-->
            <el-table-column :label="$t('tables.deployment.lastState')">
                <template v-slot="{row}">
                    <el-tag effect="dark" :type="stateShow[row.lastState]?stateShow[row.lastState].class:''">
                        {{ stateShow[row.lastState] ? stateShow[row.lastState].display : row.lastState }}
                    </el-tag>
                </template>
            </el-table-column>
            <!--最新应用版本-->
            <el-table-column :label="$t('tables.deployment.lastVersion')">
                <template v-slot="{row}">
                    <span>{{ row.lastVersion }}</span>
                </template>
            </el-table-column>
            <!--最新操作-->
            <el-table-column :label="$t('tables.deployment.lastAction')">
                <template v-slot="{row}">
                    <span>{{ row.lastAction }}</span>
                </template>
            </el-table-column>
            <!--历史操作数量-->
            <el-table-column :label="$t('tables.deployment.revisionNum')">
                <template v-slot="{row}">
                    <span class="link-type" @click="handleRevision(row)">{{ row.revisionNum }}</span>
                </template>
            </el-table-column>
            <!--耗时-->
            <el-table-column :label="$t('tables.deployment.revesionDelay')">
                <template v-slot="{row}">
                    <span>{{ row.revesionDelay | millisecondConvertSecond() }}s</span>
                </template>
            </el-table-column>
            <!--最后更新时间-->
            <el-table-column :label="$t('tables.deployment.lastUpdateTime')">
                <template v-slot="{row}">
                    <span>{{ row.lastUpdateTime | getTimestamp() | parseTime('{y}-{m}-{d} {h}:{i}:{s}') }}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import MDatePicker from "@/components/table/components/MDatePicker";
import {getTimestamp} from "@/utils"

export default {
    name: 'DeploymentTable',
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
            originList: [],
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
    components: {MDatePicker},
    methods: {
        //重置按钮
        onRest() {
            this.uniqid = ""
            this.date = []
            this.onSubmit()
        },
        //查询按钮
        onSubmit() {
            this.handleFilter(this.uniqid,this.date)
        },
        //uid初始化数据
        searchUIDAll() {
            var arr = []
            var data = this.global.DATA.ins
            for (var i in data) {
                arr.push({"value": data[i].uniqid})
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
        handleRevision(row) {
            //如果是 0 ，无法跳转rversion
            if (!row.revisionNum) {
                return
            }
            //todo
            this.$emit('getResionUniqid',row.uniqid)
        },
        handleFilter(uniqid, date) {
            var list  = []
            for (var i in this.originList) {
                if (uniqid != null) {
                    if (-1 === this.originList[i].uniqid.toLowerCase().indexOf(uniqid.toLowerCase())) {
                        continue
                    }
                }
                if (date.length > 0) {
                    if (date[0] > getTimestamp(this.originList[i].lastUpdateTime) || getTimestamp(this.originList[i].lastUpdateTime) > date[1]) {
                        continue
                    }
                }
                list.push(this.originList[i])
            }
            this.list = list
        }
    },
    mounted() {
        var ini = 0
        this.restaurants = this.searchUIDAll();
        var data = this.global.DATA.ins;
        for (var i in data) {
            ini = parseInt(i) + 1
            data[i].id = ini;
        }
        this.originList = data;
        this.onSubmit()
    }
}


</script>

<style lang="scss" scoped>
.link-type,
.link-type:focus {
  color: #337ab7;
  cursor: pointer;

  &:hover {
    color: rgb(32, 160, 255);
  }
}
</style>