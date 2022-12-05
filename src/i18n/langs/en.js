//en.js
const en = {
    //导航
    nav: {
        overview: 'overview',
    },
    language: {
        switchLanguage: "Language",
        zh: 'zh-CN',
        en: 'en',
        zhName: "中文",
        enName: "English"
    },
    descriptions:{
        title:"Describe",
        appOrsvcName:"App/Service Name",
        last_time_deploy:"Last Deploy Time",
        last_time_update:"Last Update Time",
    },
    panel: {
        instanceCout:"Instance Count",
        revisionCout:"Revision Count",
        productCount:"Product Count",
        developmentCount: "Test Count"
    },
    chart:{
        pieChart:{
            title:"Deployments Success Rate",
            subtext:"Total Of Deployments",
            name:"deployment",
            success:"Success",
            fail:"Fail"
        },
        barChart:{
            title:"Total Of Revisions ",
            subtext:"TOP 5",
            name:"Revisions",
        },
    },
    tab:{
        deployments:"Deployments",
        revisions:"Revisions"
    },
    tables:{
        deployment:{
            search:{
                uniqid: "UID",
                data:"Created Time Range",
                total:"total:",
                currentTotal:"Current Total:"

            },
            tag:{
                production:"Production",
                test:"Test",
                development:"Development",
                pre_release:"Pre_release",
                Started:"Started",
                Failed:"Failed",
                Pending:"Pending",
                Destroyed:"Destroyed",
                Paused:"Paused",
                lastUpdateTime:"最新更新时间"
            },
            ID:"ID",
            uniqid:"UID",
            appName:"AppName",
            runtime:"Runtime",
            lastState:"Last State",
            lastVersion:"Last Version",
            lastAction:"Last Action",
            revisionNum:"Revision Num",
            revesionDelay:"Average Revesion Delay",
        },
        revisions:{
            search:{

            },
            tag:{

            },
            ID:"ID",
            uniqid:"UID",
            appName:"App Name",
            image:"Image",
            state:"State",
            replicas:"Replicas",
            retryNum:"Retry Num",
            delay:"Delay",
            runtime:"Runtime",
            action:"Action",
            version:"Version",
            clusterUniqid:"Cluster UID",
            namespaceUniqid:"Namespace UID",
            createTime:"Create Time",
            updateTime:"Update Time",
            detail:"Detail",
            step:"Step"
        },
        datepicker:{
            start:"Started Time",
            end:"End Time",
            lastday:"Last Day",
            lastweek:"Last week",
        },
        query:"Query",
        rest:"Rest"
    }
}
export default en
