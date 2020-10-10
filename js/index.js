$(function () {
  // 监控区域模块制作
  (function () {
    $('.monitor .tabs').on('click', 'a', function () {
      $(this).addClass('active').siblings().removeClass('active');
      // 选取对应索引号的content
      $('.monitor .content').eq($(this).index()).show().siblings('.content').hide();
    })

    // 1. 先克隆marquee里面所有的row
    $('.marquee-view .marquee').each(function (i, ele) {
      var rows = $(this).children().clone();
      $(this).append(rows);
    })
  })(),

  // 点位分布模块
  (function () {
    // 1. 实例化的对象
    var myChart = echarts.init(document.querySelector('.pie'));
    // 2. 指定配置项和数据
    var option = {
      tooltip: {
        // trigger 触发方式。  非轴图形，使用item的意思是放到数据对应图形上触发提示
        trigger: 'item',
        // 格式化提示内容：
        // a 代表series系列图表名称  
        // b 代表series数据名称 data 里面的name    
        // c 代表series数据值 data 里面的value   
        // d代表  当前数据/总数据的比例
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [{
        name: '点位统计',
        type: 'pie',
        // radius[内圆半径, 外圆半径]
        radius: ['10%', '70%'],
        //center圆心坐标
        center: ['50%', '50%'],
        // area 所有扇区圆心角相同，仅通过半径展现数据大小。
        roseType: 'area',
        label: {
          fontSize: 10,
        },
        labelLine: {
          length: 6,
          length: 8,
        },
        data: [{
            value: 10,
            name: '北京'
          },
          {
            value: 15,
            name: '上海'
          },
          {
            value: 21,
            name: '广州'
          },
          {
            value: 25,
            name: '深圳'
          },
          {
            value: 20,
            name: '重庆'
          },
          {
            value: 35,
            name: '天津'
          },
          {
            value: 30,
            name: '苏州'
          },
          {
            value: 40,
            name: '杭州'
          }
        ]
      }]
    };
    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  })(),

  (function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar"));
    var item = {
      name: '',
      value: 1200,
      // 柱子颜色
      itemStyle: {
        color: '#254065'
      },
      // 鼠标经过柱子颜色
      emphasis: {
        itemStyle: {
          color: '#254065'
        }
      },
      // 工具提示隐藏
      tooltip: {
        extraCssText: 'opacity:0'
      },
    }
    // 2. 指定配置和数据
    var option = {
      // 工具提示
      color: new echarts.graphic.LinearGradient(
        // (x1,y1) 点到点 (x2,y2) 之间进行渐变
        0, 0, 0, 1,
        [{
            offset: 0,
            color: '#00fffb'
          }, // 0 起始颜色
          {
            offset: 1,
            color: '#0061ce'
          } // 1 结束颜色
        ]
      ),
      tooltip: {
        // 触发类型  经过轴触发axis  经过轴触发item
        trigger: 'item',
      },
      // 图表边界控制
      grid: {
        // 距离 上右下左 的距离
        top: '3%',
        right: '3%',
        bottom: '3%',
        left: '0%',
        // 是否包含文本
        //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
        containLabel: true,
        // 是否显示直角坐标系网格
        show: true,
        //grid 四条边框的颜色
        borderColor: 'rgba(0, 240, 255, 0.3)'
      },
      // 控制x轴
      xAxis: [{
        // 使用类目，必须有data属性
        type: 'category',
        // 使用 data 中的数据设为刻度文字
        data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
        // 刻度设置
        axisTick: {
          // true意思：图形在刻度中间
          // false意思：图形在刻度之间
          alignWithLabel: true,
          // 不显示刻度
          show: false,
        },
        // x坐标轴文字标签样式设置
        axisLabel: {
          color: '#4c9bfd'
        },
        // x坐标轴颜色设置
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)',
            // width:8,  x轴线的粗细
            // opcity: 0,   如果不想显示x轴线 则改为 0
          }
        }
      }],
      // 控制y轴
      yAxis: [{
        // 使用数据的值设为刻度文字
        type: 'value',
        // 使用 data 中的数据设为刻度文字
        data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
        // 刻度设置
        axisTick: {
          // 不显示刻度
          show: false
        },
        // y坐标轴文字标签样式设置
        axisLabel: {
          color: '#4c9bfd'
        },
        // y坐标轴颜色设置
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)',
            // width:8,  x轴线的粗细
            // opcity: 0,   如果不想显示x轴线 则改为 0
          }
        },
        // y轴 分割线的样式 
        splitLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)'
          }
        }
      }],
      // 控制x轴
      series: [{
        // 图表数据名称
        name: '用户统计',
        // 图表类型
        type: 'bar',
        // 柱子宽度
        barWidth: '60%',
        // 数据
        data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
      }]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  })(),

  // 订单模块
  (function () {
    var data = {
      day365: {
        orders: '20,301,987',
        amount: '99834'
      },
      day90: {
        orders: '301,987',
        amount: '9834'
      },
      day30: {
        orders: '1,987',
        amount: '3834'
      },
      day1: {
        orders: '987',
        amount: '834'
      },
    }
    var h4orders = $('.order h4').eq(0)
    var h4amount = $('.order h4').eq(1)
    $('.order').on('click', '.filter a', function () {
      index = $(this).index();
      $(this).addClass('active').siblings('a').removeClass('active');
      var currentData = data[this.dataset.type];
      h4orders.html(currentData.orders);
      h4amount.html(currentData.amount);
    })
    // 开启定时器每隔3s，自动让a触发点击事件即可
    var as = $('.order .filter a');
    var index = 0;
    var timer = setInterval(function () {
      index++;
      if (index >= 4) {
        index = 0;
      }
      as.eq(index).click();
    }, 2000)
    //鼠标经过sales，关闭定时器，离开开启定时器
    $('.order').hover(function () {
      clearInterval(timer);
    }, function () {
      clearInterval(timer);
      timer = setInterval(function () {
        index++;
        if (index >= 4) {
          index = 0;
        }
        as.eq(index).click();
      }, 2000);
    })
  })(),

  // 销售统计模块
  (function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector('.line'))
    // (1) 准备数据
    var data = {
        year: [
          [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
          [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
          [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
          [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
          [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
          [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
          [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
      },
      // 2. 指定配置和数据
      option = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          right: '10%',
          textStyle: {
            color: '4c9bfd'
          },
          data: ['预期销售额', '实际销售额']
        },
        grid: {
          top: '20%',
          right: '3%',
          bottom: '4%',
          left: '3%',
          containLabel: true,
          show: true,
          borderColor: 'rgba(0, 240, 255, 0.3)',
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            // true意思：图形在刻度中间
            // false意思：图形在刻度之间
            alignWithLabel: true,
            // 不显示刻度
            show: false,
          },
          // x坐标轴文字标签样式设置
          axisLabel: {
            color: '#4c9bfd'
          },
          // x坐标轴颜色设置
          axisLine: {
            // 去除轴线
            show: false,
          },
          // 去除轴内间距
          boundaryGap: false,
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false, // 去除刻度
          },
          axisLabel: {
            color: '#4c9bfd',
          },
          splitLine: {
            lineStyle: {
              color: '#012f4a',
            }
          }
        },
        color: ['#00f2f1', '#ed3f35'],
        series: [{
          name: '预期销售额',
          data: data.year[0],
          type: 'line',
          // 折线修饰为圆滑
          smooth: true,
        }, {
          name: '实际销售额',
          data: data.year[1],
          type: 'line',
          smooth: true,
        }]
      };

    // 3. 把配置和数据给实例化对象
    myChart.setOption(option);
    // tab栏切换效果
    // (2) 点击切换效果
    $('.sales').on('click', '.caption a', function () {
      index = $(this).index() - 1;
      $(this).addClass('active').siblings().removeClass('active');
      var currentData = data[this.dataset.type];
      option.series[0].data = currentData[0];
      option.series[1].data = currentData[1];
      myChart.setOption(option);
    })
    // 开启定时器每隔3s，自动让a触发点击事件即可
    var as = $('.sales .caption a')
    var index = 0;
    var timer = setInterval(function () {
      index++;
      if (index >= 4) {
        index = 0;
      }
      as.eq(index).click();
    }, 2000)
    //鼠标经过sales，关闭定时器，离开开启定时器
    $('.sales').hover(function () {
        clearInterval(timer);
      }, function () {
        clearInterval(timer);
        timer = setInterval(function () {
          index++;
          if (index >= 4) {
            index = 0;
          }
          as.eq(index).click();
        }, 2000);
      }),
      // 4. 监听浏览器缩放，图表对象调用缩放resize函数
      window.addEventListener("resize", function () {
        myChart.resize();
      });
  })(),

  // 5. 渠道分布模块
  (function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector('.radar'))
    // 2. 指定配置和数据
    var data = [
      [90, 19, 56, 11, 34],
    ];
    // var lineStyle = {
    //   normal: {
    //     width: 1,
    //     opacity: 0.5
    //   }
    // };

    var option = {
      tooltip: {
        show: true,
        // 控制提示框组件的显示位置
        position: ['60%', '10%'],
      },
      radar: {
        indicator: [{
            name: '机场',
            max: 100
          },
          {
            name: '商场',
            max: 100
          },
          {
            name: '火车站',
            max: 100
          },
          {
            name: '汽车站',
            max: 100
          },
          {
            name: '地铁',
            max: 100
          }
        ],
        // 修改雷达图的大小
        radius: '50%',
        shape: 'circle',
        // 修改分割的小圆圈数
        splitNumber: 4,
        name: {
          textStyle: {
            color: '#4c9bfd'
          }
        },
        // 分割圆圈线条的样式
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255, 0.5)'
          }
        },
        splitArea: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.5)'
          }
        }
      },
      series: [{
        name: '北京',
        type: 'radar',
        lineStyle: {
          normal: {
            color: '#fff',
          }
        },
        data: data,
        symbol: 'circle',
        symbolSize: 5,
        itemStyle: {
          color: '#fff'
        },
        label: {
          show: true,
          olor: '#fff',
          fontSize: 10
        },
        areaStyle: {
          color: 'rgba(238, 197, 102, 0.6)',
        }
      }, ]
    };
    // 3. 把配置和数据给实例化对象
    myChart.setOption(option);
    // 4. 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  })(),

  // 一季度销售进度模块
  (function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector('.gauge'))
    // 2. 指定配置和数据
    var option = {
      series: [{
        name: '访问来源',
        type: 'pie',
        // 放大图形
        radius: ['130%', '150%'],
        // 移动下位置  套住50%文字
        center: ['48%', '80%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
          }
        },
        // 起始角度，支持范围[0, 360]
        startAngle: 180,
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        hoverOffset: 0,
        data: [{
            value: 150,
            itemStyle: {
              // 颜色渐变#00c9e0->#005fc1
              color: new echarts.graphic.LinearGradient(
                // (x1,y1) 点到点 (x2,y2) 之间进行渐变
                0,
                0,
                0,
                1,
                [{
                    offset: 0,
                    color: "#00c9e0"
                  }, // 0 起始颜色
                  {
                    offset: 1,
                    color: "#005fc1"
                  } // 1 结束颜色
                ]
              )
            }
          },
          {
            value: 50,
            itemStyle: {
              color: '#12274d'
            }
          }, // 颜色#12274d
          {
            value: 200,
            itemStyle: {
              color: 'transparent'
            }
          },
        ]
      }]
    };
    // 3. 把配置和数据给实例化对象
    myChart.setOption(option);
    // 4. 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  })(),
  // 全国热销模块
  (function(){
    // 1. 得到后台数据（实际开发中，这个数据通过ajax请求获得）
    var hotData = [
      {
        city: '北京',  // 城市
        sales: '25, 179',  // 销售额
        flag: true, //  上升还是下降
        brands: [   //  品牌种类数据
          { name: '可爱多', num: '9,086', flag: true },
          { name: '娃哈哈', num: '8,341', flag: true },
          { name: '喜之郎', num: '7,407', flag: false },
          { name: '八喜', num: '6,080', flag: false },
          { name: '小洋人', num: '6,724', flag: false },
          { name: '好多鱼', num: '2,170', flag: true },
        ]
      },
      {
        city: '河北',
        sales: '23,252',
        flag: false,
        brands: [
          { name: '可爱多', num: '3,457', flag: false },
          { name: '娃哈哈', num: '2,124', flag: true },
          { name: '喜之郎', num: '8,907', flag: false },
          { name: '八喜', num: '6,080', flag: true },
          { name: '小洋人', num: '1,724', flag: false },
          { name: '好多鱼', num: '1,170', flag: false },
        ]
      },
      {
        city: '上海',
        sales: '20,760',
        flag: true,
        brands: [
          { name: '可爱多', num: '2,345', flag: true },
          { name: '娃哈哈', num: '7,109', flag: true },
          { name: '喜之郎', num: '3,701', flag: false },
          { name: '八喜', num: '6,080', flag: false },
          { name: '小洋人', num: '2,724', flag: false },
          { name: '好多鱼', num: '2,998', flag: true },
        ]
      },
      {
        city: '江苏',
        sales: '23,252',
        flag: false,
        brands: [
          { name: '可爱多', num: '2,156', flag: false },
          { name: '娃哈哈', num: '2,456', flag: true },
          { name: '喜之郎', num: '9,737', flag: true },
          { name: '八喜', num: '2,080', flag: true },
          { name: '小洋人', num: '8,724', flag: true },
          { name: '好多鱼', num: '1,770', flag: false },
        ]
      },
       {
        city: '山东',
        sales: '20,760',
        flag: true,
        brands: [
          { name: '可爱多', num: '9,567', flag: true },
          { name: '娃哈哈', num: '2,345', flag: false },
          { name: '喜之郎', num: '9,037', flag: false },
          { name: '八喜', num: '1,080', flag: true },
          { name: '小洋人', num: '4,724', flag: false },
          { name: '好多鱼', num: '9,999', flag: true },
        ]
      }
    ]
    // 2. 根据数据渲染各省热销 sup 模块内容
    // (1) 遍历 hotData 对象
    var supHTML = '';
    $.each(hotData, function(index, item){
      supHTML += `
        <li>
          <span>${item.city}</span>
          <span> ${item.sales} <s class=${item.flag ? "icon-up" : "icon-down"}></s></span>
        </li>
      `;
    });
    $(".sup").html(supHTML);
    // 3. 当数据进入 tab 的时候  高亮显示
    $('.province .sup').on('mouseenter', 'li', function(){
      index = $(this).index();
      render($(this));
    });
    function render(that){
      that.addClass('active').siblings().removeClass('active');
      // 获取鼠标移动到的小li的索引
      var index = that.index();
      // 通过索引获取对应城市的的brands数据
      var subHTML = '';
      var currentData = hotData[index].brands
      // 遍历品牌数组
      $.each(currentData, function(index, item){
        var flag = item.flag ? "icon-up" : "icon-down";
        subHTML += `<li>
          <span>${item.name}</span>
          <span>${item.num}<s class=${flag}></s></span>
          </li>
        `;
      })
      $(".sub").html(subHTML);
    }
    // 4. 默认把第一个小li处于鼠标经过状态
    var lis = $('.province .sup li');
    lis.eq(0).mouseenter();
    // 5. 开启定时器
    var index = 0;
    var timer = setInterval(function(){
      index++;
      if(index >= 5){
        index = 0;
      }
      render(lis.eq(index));
    },2000);

    $('.province .sup').hover(function(){
      clearInterval(timer)
    },function(){
      clearInterval(timer);
      timer = setInterval(function(){
        index++;
        if(index >= 5){
          index = 0;
        }
        // lis.eq(index).mouseenter();
        render(lis.eq(index));
      },2000);
    })
  })()
})