<template>
    <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import * as echarts from 'echarts';

require('echarts/theme/macarons') // echarts theme
import resize from '../mixins/resize'

export default {
    name: "BarChart",
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
            uniqids: [],
            resviosns: []
        }
    },
    mounted() {
        var list = []
        var data = this.global.DATA.ins

        var all = data.sort(this.compare('revisionNum'))
        if (all.length > 4){
            list = all.slice(0,5)
        }else {
            list = all
        }
        for (var i in list){
            this.uniqids.push(list[i].uniqid)
            this.resviosns.push(list[i].revisionNum)
        }
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

        compare(property) {
            return function (a, b) {
                var value1 = a[property];
                var value2 = b[property];
                return value2-value1
            }
        },
        initChart() {
            this.chart = echarts.init(this.$el, 'macarons')

            this.chart.setOption({
                title: {
                    text: this.$t("chart.barChart.title"),
                    subtext: this.$t("chart.barChart.subtext")
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                // 展示8个字符，之后省略
                yAxis: {
                    type: 'category',
                    inverse: true,
                    data: this.uniqids,
                    axisLabel: {
                        interval: 0,
                        formatter: function (value) {
                            if (value.length > 12) {
                                return value.substring(0, 12) + "...";
                            } else {
                                return value;
                            }
                        }
                    },
                },
                series: [
                    {
                        name: this.$t("chart.barChart.name"),
                        type: 'bar',
                        data: this.resviosns,
                    }
                ]
            })
        },
    }
}


</script>

<style scoped>

</style>