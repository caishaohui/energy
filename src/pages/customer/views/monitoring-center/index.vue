<template>
  <div id="maps">
  </div>
</template>

<script>
  import echarts from 'echarts';
  export default {
    data() {
      return {
        myChart: {},
        option: {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    },
    methods: {
    },
    mounted() {
      this.myChart = echarts.init(document.getElementById('maps'), 'SUYUN');
      this.myChart.setOption(this.option);
    },
  }
</script>


<style scoped lang="scss">
  #maps,
  {
    width: 500px;
    height: 500px;
  }
</style>


