<template>
    <div class="dashboard-container">
        <description-cp></description-cp>
        <el-divider></el-divider>
        <div class="dashboard-editor-container">
            <PanelGroup></PanelGroup>
            <el-row :gutter="32">
                <el-col :xs="24" :sm="24" :lg="6">
                    <div class="chart-wrapper">
                        <pie-chart />
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :lg="18">
                    <div class="chart-wrapper">
                        <bar-chart />
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import PanelGroup from './PanelGroup'
import DescriptionCp from "@/components/DescriptionCp/DescriptionCp";
import PieChart from "@/components/chart/PieChart/PieChart";
import BarChart from "@/components/chart/BarChart/BarChart";
export default {
    name: "OverView",
    components:{
        PanelGroup,
        DescriptionCp,
        PieChart,
        BarChart
    },
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>