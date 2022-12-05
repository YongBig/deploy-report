//zh-CN.js
const zh = {
    //导航
    nav: {
        overview: '概览',
    },
    language: {
        switchLanguage: "Language",
        zh: 'zh-CN',
        en: 'en',
        zhName: "中文",
        enName: "English"
    },
    descriptions:{
        title:"详情",
        appOrsvcName:"应用/服务 名称",
        last_time_deploy:"最后部署时间",
        last_time_update:"最后更新时间",
    },
    panel: {
        instanceCout:"实例",
        revisionCout:"修订版本总数",
        productCount:"生产环境实例",
        developmentCount: "测试环境实例"
    },
    chart:{
        pieChart:{
            title:"部署成功率",
            subtext:"部署总数",
            name:"部署",
            success:"成功",
            fail:"失败"
        },
        barChart:{
            title:"各实例修订版本次数",
            subtext:"TOP 5",
            name:"修订版本",
        },
    },
    tab:{
        deployments:"部署",
        revisions:"修订版本",
    },
    tables:{
        deployment:{
            search:{
                uniqid: "UID",
                data:"创建时间",
                total:"总数:"
            },
            tag:{
                production:"生产环境",
                test:"测试环境",
                development:"开发环境",
                pre_release:"预发布环境",
                Started:"成功",
                Failed:"失败",
                Pending:"部署中",
                Destroyed:"销毁",
                Paused:"终止"
            },
            ID:"序号",
            uniqid:"UID",
            appName:"名称",
            runtime:"运行时",
            lastState:"最新部署状态",
            lastVersion:"最新应用版本",
            lastAction:"最新操作",
            revisionNum:"历史操作",
            revesionDelay:"平均耗时",
            lastUpdateTime:"最新更新时间"
        },
        revisions:{
            search:{

            },
            tag:{

            },
            ID:"序号",
            uniqid:"UID",
            appName:"名称",
            image:"镜像",
            state:"部署状态",
            replicas:"副本",
            retryNum:"重试",
            delay:"耗时",
            createTime:"创建时间",
            updateTime:"更新时间",
            version:"版本",
            clusterUniqid:"集群UID",
            namespaceUniqid:"命名空间UID",
            runtime:"运行时",
            action:"操作",
            detail:"详情",
            step:"步骤"
        },
        datepicker:{
            start:"开始时间",
            end:"结束时间",
            lastday:"最近一天",
            lastweek:"最近一周",
        },
        query:"查询",
        rest:"重置"
    }
}
export default zh
