<template>
  <div class="middle-home">
    <div class="middle-home-top">
      <div style="padding:5px 7px 4px 11px">
        <h2>shihsi直播数据</h2>
      </div>
      <div class="home-left-body home-left">
        <div class="home-left-body-div1"></div>
        <div class="home-left-body-div2"></div>
        <div class="middle-home-img">
          <div>
            <img src="../../../assets/images/middle-home.png" alt="">
          </div>
          <div class="middle-border-sole">
            <div v-for="(item, index) in count" :key="index">
              <span>{{ item.name }}</span>
              <div>
                <i>{{ item.value }}</i> <span style="color: rgba(255,255,255,0.5);
">个</span>
              </div>
            </div>
          </div>
        </div>
        <template>
          <el-table ref="tabel" :key='tableKey' :header-cell-style="{ background: 'rgb(14, 62, 131)', color: '#fff' }"
            :data="columns">
            <el-table-column type="index" label="序号" width="50">
            </el-table-column>
            <el-table-column v-for="(item, index) in data" :key="index" :prop="item.prop" :label="item.label">
            </el-table-column>
          </el-table>
        </template>
        <div class="block">
          <span>共{{ tableConfig.pagination.total }}条</span>
          <el-pagination @current-change="currentChange" background layout="prev, pager, next"
            :total="tableConfig.pagination.total">
          </el-pagination>

        </div>
      </div>
    </div>
    <div class="middle-home-bottom">
      <div class="middle-home-bottom-title" style="padding:5px 7px 4px 11px">
        <h2>平台主播粉丝量TOP排名</h2>
        <div>
          <span :class="topText === item.value ? 'middle-span-color' : ''" @click="changeTop(item.value)"
            v-for="(item) in platformArr" :key="item.value">{{ item.name }}</span>
        </div>
      </div>
      <div style="height:100%" class="home-left-body home-left">
        <div class="home-left-body-div1"></div>
        <div class="home-left-body-div2"></div>
        <div style="height:100%">
          <!-- <fansTop ref="top"></fansTop> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { realTimeAnchorNumberCount, anchorFansNumberTop, platformList } from '@/api/common'
// import fansTop from '_c/charts/fansTop.vue'
export default {
  name: 'middleIndex',
  data () {
    return {
      tableConfig: {
        loading: false,
        pagination: {
          show: false,
          currentPage: 1,
          total: 0,
          pageSize: 5
        },

        showSummary: true
      },
      data: [],
      columns: [],
      tableKey: 1,
      setTime: null,
      count: [],
      platformArr: [],
      topText: ''
    }
  },
  // components: {
  //   fansTop
  // },
  mounted () {
    document.querySelector('.btn-next').innerHTML = ' <span @click="pageTurning">下一页</span>'
    this.realTimeAnchorNumberCount()
    this.anchorFansNumberTop()
    this.platformList()
    // let time = true
    onresize = () => {
      // this.setTime = setTimeout(() => {
      //   clearTimeout(this.setTime)
      //   console.log(this.tableKey)
      //   time = true
      // }, 1000)
      // if (time) {
      // time = false
      // console.log(this.tableKey)
      // this.tableKey++
      // this.$refs.top.myChart.resize()
      // //   clearTimeout(this.setTime)
      // }
      // this.$refs.tabel.doLayout()
    }
  },
  methods: {
    // 分页
    currentChange (val) {
      this.tableConfig.pagination.currentPage = val
      this.realTimeAnchorNumberCount()
    },
    pageTurning () {
      this.tableConfig.pagination.currentPage += 1
      console.log(this.tableConfig.pagination.currentPage)
      // this.realTimeAnchorNumberCount()
    },
    // 实时直播数据
    async realTimeAnchorNumberCount () {
      const res = await realTimeAnchorNumberCount({
        page: this.tableConfig.pagination.currentPage,
        limit: this.tableConfig.pagination.pageSize

      })
      this.count = res.count
      this.tableConfig.pagination.total = res.data.total * 2
      this.data = res.column
      this.columns = res.data.list
      console.log(res)
    },
    // 主屏-平台主播粉丝量top10
    async anchorFansNumberTop () {
      const res = await anchorFansNumberTop({ areaCode: '', platform: this.topText })
      this.$refs.top.option.series[0].data = []
      this.$refs.top.option.yAxis.data = []
      res.list.forEach((ele, index) => {
        this.$refs.top.option.series[0].data.push(ele.fanNum)
        this.$refs.top.option.yAxis.data.push('TOP' + (index + 1) + ' ' + ' ' + ele.name)
      })
      console.log(this.$refs.top.option.series[0].data)
      this.$refs.top.top()
      // this.a = false
      // this.a = true
    },
    // 直播平台选项
    async platformList () {
      const res = await platformList()
      this.platformArr = res
      console.log(res)
    },
    // 根据平台查看top
    changeTop (name) {
      this.topText = name
      this.anchorFansNumberTop()
    }
  }
}
</script>
<style lang="scss" scoped>
h2 {
  margin: 0 !important;
}

.middle-home {
  margin-left: 22px;
  display: flex;
  flex-direction: column;

  &>div {
    flex: 1;
  }

  .middle-home-top {
    .home-left {
      padding: 8px 17px 0;
    }

    &>div:first-child {
      background: #0A3160;
      opacity: 0.61;

      h2 {
        font-size: 21px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #C9EDFF;
        line-height: 27px;
        text-shadow: 0px 2px 7px #69ACFF;
      }
    }

    .middle-home-img {
      display: flex;
      position: relative;
      padding-left: 90px;
      align-items: center;
      padding-bottom: 11px;

      .middle-border-sole {
        position: relative;

        &::after {
          content: '';
          width: 6px;
          height: 6px;
          // background-color: #349DFF;
          border-top: 1px solid #349DFF;
          border-right: 1px solid #349DFF;
          position: absolute;
          right: -1px;
          top: -1px;
        }

        &::before {
          content: '';
          width: 6px;
          height: 6px;
          // background-color: #349DFF;
          position: absolute;
          border-bottom: 1px solid #349DFF;
          border-right: 1px solid #349DFF;
          right: -1px;
          bottom: -1px;
          border-radius: 1px;
        }
      }

      &>div:nth-child(1) {
        height: 114px;
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 114px;
        z-index: 10;
      }

      &>div:nth-child(2) {
        flex: 1;
        display: flex;
        justify-content: space-evenly;
        background-color: #0A3160;
        height: 82px;

        span {
          font-size: 12px;
          font-family: AppleSystemUIFont;
          color: #FFFFFF;
          line-height: 17px;
        }

        &>div {
          display: flex;
          align-items: center;
          flex-direction: column;

          div {
            i {
              font-style: normal;
              font-size: 45px;
              font-family: DINAlternate-Bold, DINAlternate;
              font-weight: bold;
              color: #FFFFFF;
              // line-height: 52px;
              background: linear-gradient(180deg, #FFFFFF 0%, #ECF5FB 72%, #66AEDF 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

          }
        }

        &>div:last-child {
          i {
            background: linear-gradient(180deg, #FFFFFF 0%, #FBF4EC 71%, #DFA666 100%);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }
        }
      }
    }

  }

  ::v-deep .el-table {
    .is-leaf {
      border: 0 !important;
    }

    th {
      padding: 8px 0;

      div {
        font-weight: 400;
      }
    }

    &::before {
      height: 0;
    }

    th div {
      text-align: center;
    }

    td {
      padding: 2px 0 !important;
      border: 0 !important;
      text-align: center;
    }

    tr {
      background: rgb(7, 31, 69);
      color: #fff;
    }

    tr:hover {
      color: #000;
    }

    tr:nth-child(2n) {
      background: rgb(11, 47, 100);
    }
  }

  .block {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 12px;

    ::v-deep .btn-prev {
      display: none;
    }

    ::v-deep li {
      background-color: transparent !important;
      color: #ccc;
      min-width: 20px;
      font-size: 12px;
      margin: 0;
    }

    ::v-deep .active {
      background-color: #fff;

    }

    ::v-deep .btn-next {
      min-width: 0;
      height: 0;
      font-size: 12px;
    }

    ::v-deep .el-pagination {
      padding: 2px 0;
    }
  }

}

.middle-home-bottom {
  display: flex;
  flex-direction: column;

  .middle-home-bottom-title {
    background: #0A3160;
    opacity: 0.61;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #2FD6FF;
      margin-left: 22px;

      &:nth-child(1) {
        margin-left: 0;
      }
    }

    .middle-span-color {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #C9EDFF;
      line-height: 27px;
      text-shadow: 0px 2px 7px #1E83FF;
    }

    h2 {
      font-size: 21px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #C9EDFF;
      text-shadow: 0px 2px 7px #69ACFF;
    }
  }

  &>div:nth-child(2) {
    flex: 1;
  }
}
</style>
