<template>
    <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import * as echarts from 'echarts';
import resize from '../mixins/resize'
require('echarts/theme/macarons') // echarts theme

export default {
    name: "PieChart",
    mixins: [resize],
    props: {
        className: {
            type: String,
            default: 'chart'
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '300px'
        }
    },
    data() {
        return {
            chart: null,
            succesNum:0,
            failedNum:0,
        }
    },
    mounted() {
        this.failedNum = this.global.DATA.failedApplyNum + this.global.DATA.failedUpdateNum
        this.succesNum = this.global.DATA.revisionNum - this.failedNum
        this.$nextTick(() => {
            this.initChart()
        })

    },
    beforeDestroy() {
        if (!this.chart) {
            return
        }
        this.chart.dispose()
        this.chart = null
    },
    methods: {
        initChart() {
            this.chart = echarts.init(this.$el,'macarons')

            this.chart.setOption({
                title: {
                    text: this.$t("chart.pieChart.title"),
                    subtext: this.$t("chart.pieChart.subtext") + ": " + (this.succesNum + this.failedNum),
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    left: 'center',
                    bottom: '10',
                },
                series: [
                    {
                        name: this.$t("chart.pieChart.name"),
                        type: 'pie',
                        radius: "50%",
                        data: [
                            {value: this.succesNum, name: this.$t("chart.pieChart.success")},
                            {value: this.failedNum, name: this.$t("chart.pieChart.fail")},
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            })
        }
    },
}
</script>

<style scoped>

</style>