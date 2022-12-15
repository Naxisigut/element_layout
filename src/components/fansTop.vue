
<template>
  <div style="height:100%;position: relative;">
    <div id="container" ref="top" class="top" style="height: 100%;width: 100%"></div>
    <div v-if="option.series[0].data.length === 0"
      style="height: 100%;width: 100%;display: flex;justify-content: center;align-items: center;color: #fff;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);">
      暂无数据</div>
  </div>
</template>
<script>

const echarts = require('echarts')
export default {
  data() {
    return {
      option: {
        color: 'red',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: 0,
          left: '3%',
          right: '4%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          splitLine: {
            show: false
          },
          show: false
        },
        yAxis: {
          type: 'category',
          data: [],
          inverse: true,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          // axisLabel: {
          //   textStyle: {
          //     color: '#fff'
          //   }
          // },
          axisLabel: {
            // interval: 0,
            //   rotate: 45,
            formatter: function (value) {
              let res = ''
              if (value.includes('、')) {
                value = value.split('、')
                value.forEach(ele => {
                  if (ele.length > 4) {
                    const is = ele.split('')
                    for (let i = 4; i < is.length; i += 4) {
                      is.splice(i, 0, '\n')
                    }
                    res += is.join('')
                    // return res
                  } else {
                    res += ele + '、\n'
                  }
                })
                return res
              } else if (value.length > 4) {
                const is = value.split('')
                for (let i = 4; i < is.length; i += 4) {
                  is.splice(i, 0, '\n')
                }
                res = is.join('')
                return res
              } else {
                return value
              }
            },
            color: '#fff',
            textStyle: {
              fontSize: 12
            }
          }
        },
        series: [
          {
            color: 'red',
            name: '2011',
            type: 'bar',
            data: [],
            barCategoryGap: '65%',
            itemStyle: {
              barBorderRadius: [2, 2, 0, 0],
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: '#04FFE0'
                },
                {
                  offset: 1,
                  color: '#1E83FF'
                }
              ]),
              show: true
            }
          }
        ]
      },
      myChart: null
    }
  },
  mounted() {
    setTimeout(() => {
      this.top()
    }, 500)
  },
  methods: {
    top() {
      console.log(this.option.series[0].data.length)
      this.myChart = echarts.init(this.$refs.top)
      this.myChart.setOption(this.option)
    }
  }
}
</script>
<style lang="">

</style>
