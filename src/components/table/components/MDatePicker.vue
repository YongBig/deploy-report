<template>
<span>
    <el-date-picker
            v-model="time"
            type="datetimerange"
            align="right"
            unlink-panels
            range-separator="-"
            :start-placeholder="$t('tables.datepicker.start')"
            :end-placeholder="$t('tables.datepicker.end')"
            time-arrow-control
            value-format="timestamp"
            :picker-options="pickerOptions">
    </el-date-picker>
</span>
</template>

<script>
export default {
    name: "MDatePicker",
    props:[
        "pDate"
    ],
    data(){
        return{
            time:"",
            pickerOptions:{
                shortcuts: [{
                    text: this.$t('tables.datepicker.lastday'),
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: this.$t('tables.datepicker.lastweek'),
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },

        }

    },
    created() {
        this.time=this.pDate
    },
    watch:{
        time:function (newVal){
            this.$emit('getTimeEvent',newVal)
        },
        pDate:function (newVal){
            this.time=newVal
        },
    }
}
</script>

<style scoped>

</style>