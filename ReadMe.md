
## 目录结构

```
src/
├── container/          # 容器组件（每屏一个，定义布局骨架）
│   ├── OnlineContainer.vue      # 网金业务概览
│   ├── MerchantContainer.vue    # 特约商户
│   ├── BaiheContainer.vue       # 百合生活网
│   ├── QuickpayContainer.vue    # 快捷支付
│   ├── FinanceContainer.vue     # 个人金融经营分析
│   └── ChannelContainer.vue     # 渠道运营
│
├── components/         # 业务组件、共享组件、公共组件
│   ├── common/         # 通用图表组件（BarChart/LineChart/RingChart）
│   ├── baihe/          # 百合生活网业务组件
│   ├── channel/        # 渠道运营业务组件
│   ├── finance/        # 个人金融业务组件
│   ├── merchant/       # 特约商户业务组件
│   ├── quickpay/       # 快捷支付业务组件
│   ├── center/         # 网金页面中间区域组件
│   ├── left/           # 网金页面左侧指标卡
│   ├── right/          # 网金页面右侧统计图
│   ├── HeaderTitle.vue          # 顶部标题栏（含实时时钟）
│   └── ParticleBackground.vue   # Canvas 粒子背景动画
│
├── mockData/           # Mock 数据层（ES Module，按页面分文件）
│   ├── wangjinData.js
│   ├── merchantData.js
│   ├── baiheData.js
│   ├── quickpayData.js
│   ├── financeData.js
│   └── channelData.js
│
├── router/index.js     # 路由配置（7条路由，含路由守卫）
├── styles/global.scss  # 全局样式（深蓝科技风主题变量、通用类）
├── pages/IndexPage.vue # 首页索引（大屏列表导航）
├── App.vue             # 根组件
└── main.js             # 入口文件
```

---

# 代码说明
  文件：vite.config.js
  代码片段：
    server: {
        host: "0.0.0.0",
        port: 3010,
    }
  文件夹：public/dataModal
     记录各统计图实现统计图的提示词编写方案；

# 工具安装
1、nodejs v21.11.0
   下载地址：https://nodejs.org/en/download
   安装说明：https://blog.csdn.net/Natsuago/article/details/145567734
2、npm v9.5.1
    一般与nodejs一起安装，无需单独安装
3、vscode 免费版本
    下周地址：https://code.visualstudio.com/
    安装说明：https://blog.csdn.net/leah126/article/details/131661331
4、vuejs 及其他项目依赖安装
    打开vscode 终端，进入项目根目录  
    或者打开 命令行工具，进入项目根目录
    执行： npm install     等待安装结束即可
5、文心快码
    安装方式: vscode Extension 市场搜索：文心快码
    运行时的代码开发工具，本次统计图生成均依赖于此工具；
6、项目运行
    vscode 终端执行：npm run dev
    根据提示，访问对应端口即可，浏览器访问：http://localhost:3010/
