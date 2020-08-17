const express = require('express')
const app = express()
const port = 3000
app.use(express.static('../meizu'))
let indexData = [
    [{
        id:0,
            image: 'https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png@240x240.jpg',
            tit: "【热卖】 魅族 17】",
            prices: '￥3699'
        }, {
            id:1,
            image: 'https://openfile.meizu.com/group1/M00/07/C5/Cgbj0F6zwUqAdPsoAAtCAjTT7ek670.png@240x240.jpg',
            tit: "【热卖】魅族17 pro",
            prices: '￥4299'
        }, {
            id:2,
            image: 'https://openfile.meizu.com/group1/M00/07/E5/Cgbj0V61DmKAarkmAAUGRp7cOD4317.png@240x240.jpg',
            tit: "魅族17航母限定版",
            prices: '￥4299'
        }, {
            id:3,
            image: 'https://openfile.meizu.com/group1/M00/07/CF/Cgbj0F61BXaARxdvAAqWtjjyY08964.png',
            tit: "魅族 17 Pro 晓芳窑艺术典藏版",
            prices: '￥9999'
        }, {
            id:4,
            image: 'https://openfile.meizu.com/group1/M00/07/62/Cgbj0F2upwyAKqQSAAlGpvLiEdc809.png@240x240.jpg',
            tit: "魅族 16T",
            prices: '￥2299'
        }, {
            id:5,
            image: 'https://openfile.meizu.com/group1/M00/07/2C/Cgbj0FzvRI6AWu1jAAxIbnS8M5Q295.png@240x240.jpg',
            tit: "魅族 16Xs",
            prices: '￥1499'
        },
        {id:6,
            image: 'https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png@240x240.jpg',
            tit: "魅族 16TH",
            prices: '￥1898'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png@240x240.jpg',
            tit: "魅族 X8",
            prices: '￥1298'
        },
    ],
    [{
            image: 'https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png@240x240.jpg',
            tit: "魅族 HD60 降噪耳机",
            prices: '￥1099'
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/86/Cgbj0V3UocyAR_tJAApbDmCAyEo620.png@240x240.jpg',
            tit: "魅族 HD60 头戴式蓝牙耳机",
            prices: '￥499'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png@240x240.jpg',
            tit: "魅族 HIFI 解码耳放",
            prices: '￥169'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JYOACw2DAAMWf3vEhbA886.png@240x240.jpg',
            tit: "魅族 EP63NC 无线降噪",
            prices: '￥399'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png',
            tit: "魅族 EP3C 耳机",
            prices: '￥129'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png@240x240.jpg',
            tit: "魅族 POP2 真无线蓝牙",
            prices: '￥399'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-SAO6IgAARPVTFhby0701.png@240x240.jpg',
            tit: "魅族 EP52 Lite 蓝牙耳机",
            prices: '￥129'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/4D/Cgbj0F1l7zeAFyLsAAZJk_cF8Tk126.png@240x240.jpg',
            tit: "MEIZU UR 高端定制耳机",
            prices: '￥200'
        },

    ],
    [{
            image: 'https://openfile.meizu.com/group1/M00/07/D7/Cgbj0F67s3yAYmI6AAIrMK1gFWU758.png@240x240.jpg',
            tit: "魅族超充 GaN 三口充电器",
            prices: '￥199'
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/CA/Cgbj0F6z76aADIfNAAS8Gxwx2NE353.png@240x240.jpg',
            tit: "魅族无线超充板",
            prices: '￥169'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/08/0D/Cgbj0F8alxiAIkvsAAn9MNJn1zA506.png@240x240.jpg',
            tit: "Pander [17] 夏日系列",
            prices: '￥69'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7g-AMmMHAAkLeDbS6O4698.png@240x240.jpg',
            tit: "Pander [17] 夏日系列",
            prices: '￥49'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/C8/Cgbj0F6z7ouAdDUlAAgE_65zxx0628.png@240x240.jpg',
            tit: "魅族 17 系列 液态硅胶壳",
            prices: '￥89'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/D4/Cgbj0F64-fCANzfvAAMAQSi_H7U780.png@240x240.jpg',
            tit: "魅族超充 USB-C 移动电源",
            prices: '￥169'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png@240x240.jpg',
            tit: "魅族 Type-C 数据线",
            prices: '￥49'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png@240x240.jpg',
            tit: "魅族双 USB-C 快充线",
            prices: '￥49'
        },

    ],
    [{
            image: 'https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png@240x240.jpg',
            tit: "Lifeme 双肩包",
            prices: '￥299'
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/DE/Cgbj0V6z7lmAL-vFAAm1Zf5GeYY782.png@240x240.jpg',
            tit: "Pander [17] 系列 T恤",
            prices: '￥269'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/E7/Cgbj0V61KNCAUduZAAqsAnm8x-0400.png@240x240.jpg',
            tit: "Pandaer 「17」系列 果冻包",
            prices: '￥99'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z74aAO--aAAYHfnMzL1U910.png@240x240.jpg',
            tit: "【新品】 Lifeme 相机包",
            prices: '￥129'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/78/Cgbj0V2unKeALop5AAGkXjbP1nY517.png@240x240.jpg',
            tit: "魅族防飞溅声波电动牙刷",
            prices: '￥299'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9J36ARuB2AAVQph9X9vs749.png@240x240.jpg',
            tit: "魅族极简都市双肩包",
            prices: '￥179'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/66/Cgbj0V1mIcGAfsr1AAyHfC16kLQ799.png@240x240.jpg',
            tit: "Pander readnap T恤",
            prices: '￥199'
        }, {
            image: 'https://openfile.meizu.com/group1/M00/07/66/Cgbj0F2vvquAVavcAA456-P1T2s829.png@240x240.jpg',
            tit: "Flyme 8 暗夜流光卫衣",
            prices: '￥269'
        },

    ],

]
let indexPart = {
    part2: [{
            image: 'https://fms.res.meizu.com/dms/2020/08/03/99e2e6dd-dee2-478f-a115-df050ce5d5d4.png',
            name: '魅族 17',
            tit: '限时领券立省100+赠全新壳膜套装',
            price: '￥3699',
            label: '新色'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/07/15/222c8360-9dd6-43de-b963-1ff0ada52281.png',
            tit: '限时领券至高立省200+赠全新壳膜套装',
            price: '￥4299',
            label: '免息',
            name: '魅族 17 Pro'
        }
    ],
    part3: [{
            image: 'https://openfile.meizu.com/group1/M00/07/E5/Cgbj0V61DmKAarkmAAUGRp7cOD4317.png',
            tit: '以梦为舰 热爱起航',
            price: '￥4299',

            name: '魅族 17 航母限定版'
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/7A/Cgbj0V2upxqANyVFAAjApUYA58w668.png',
            tit: '6.5英寸极边全面屏 | 骁龙855旗舰处理器',
            price: '￥1999',

            name: '魅族 16T'
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/48/Cgbj0F1jhu-AaV4AAAlk4z4lkt0463.png',
            tit: '高通骁龙 855 Plus  | 索尼 4800W AI 三摄',
            price: '￥2699',

            name: '魅族 16s Pro'
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/44/Cgbj0VzvRJ-AWr44AAiGUPbS22w583.png',
            tit: '极边全面屏 | 4800W AI三摄 | 疾速屏下指纹',
            price: '￥4299',

            name: '魅族 16Xs'
        },
    ],
    part5: [{
            image: 'https://fms.res.meizu.com/dms/2019/08/29/04811a8d-07fb-4188-a852-1971f442d08f.jpg',
            tit: 'Hi-Res 认证高解析音质 | Type-C数字接口',
            price: '￥129',
            name: '魅族 EP3C 耳机',
            _class: 'left'
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png',
            tit: '高性能DAC芯片|纯净HiFi音质|600Ω高阻抗推力',
            price: '￥169',
            name: '魅族 HIFI 解码耳放',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JYOACw2DAAMWf3vEhbA886.png',
            tit: 'AMS 芯片智能降噪  Qualcomm apt-X™ 高清音质',
            price: '￥499',
            name: '魅族 EP63NC 无线降噪耳机',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/86/Cgbj0V3UocyAR_tJAApbDmCAyEo620.png',
            tit: '40mm生物振膜  | 触控操作 | 蓝牙5.0',
            price: '￥499',
            name: '魅族 HD60 头戴式蓝牙耳机',
            _class: ''
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/08/04/be6fed05-168e-4633-bc1d-6e75705fce07.jpg',
            tit: '40mm生物振膜  | 触控操作 | 蓝牙5.0',
            price: '￥499',
            name: '魅族 HD60 头戴式蓝牙耳机',
            _class: 'left'

        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png',
            tit: '蓝牙5.0 | 单次8H续航 | 石墨烯振膜 | 双耳通话',
            price: '￥399',
            name: '魅族 POP2 真无线蓝牙耳机',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png',
            tit: '生物纤维振膜|8小时续航|IPX5级防水|轻巧亲肤',
            price: '￥129',
            name: '魅族 EP52 Lite 蓝牙耳机',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/00/A2/Cix_s1gcTHCANftiAAErzSizI8c299.png',
            tit: '一体式线控 | 3.5mm接口 |流线设计',
            price: '￥69',
            name: '魅族 EP2X 耳机',
            _class: ''
        },
        {
            image: 'https://fms.res.meizu.com/dms/2019/10/23/370ad36f-425c-453a-b406-ccb2a0dffeec.jpg',
            tit: '【预约专用】私人定制，为你而声',
            price: '￥200',
            name: 'MEIZU UR 高端定制耳机  预约',
            _class: 'left'
        },
        {
            image: 'https://storeimg.meizu.com/product/1449643421-24522.png',
            tit: '三键一体式线控 | 3.5mm接口',
            price: '￥89',
            name: '魅族 EP21耳机',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/02/EF/Cgbj0FpeqaKAYLSmAATXqR4BPH8829.png',
            tit: 'Knowles四动铁 双通道导音系统 现场级音乐表现',
            price: '￥1099',
            name: '魅族 LIVE 四单元动铁耳机',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png',
            tit: '炫酷夜跑神器 随性张扬',
            price: '￥4999',
            name: '魅族 HALO 激光蓝牙耳机',
            _class: ''
        },

    ],
    part6: [{
            image: 'https://fms.res.meizu.com/dms/2020/08/04/85fb37fe-35ae-42bf-a34d-0e102334a2d5.jpg',
            tit: '魅族 17 Pro 适用 | 27W 无线快充 | 主动散热',
            price: '￥169',
            name: '魅族无线超充板',
            _class: 'left'
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/08/0D/Cgbj0F8alxiAIkvsAAn9MNJn1zA506.png',
            tit: '魅族 17 / 魅族 17 Pro 适用 | 手机壳 + PET高透膜',
            price: '￥169',
            name: 'Pandaer 「17」夏日系列 壳膜套装',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7g-AMmMHAAkLeDbS6O4698.png',
            tit: '魅族 17 / 魅族 17 Pro 适用 | 潮趣个性 | 官方适配',
            price: '￥49',
            name: 'Pandaer 「17」系列 手机壳',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/C8/Cgbj0F6z7ouAdDUlAAgE_65zxx0628.png',
            tit: '魅族 17 / 17 Pro 适用 | 魅族手感 | 柔韧保护',
            price: '￥89',
            name: '魅族 17 系列 液态硅胶壳',
            _class: ''
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/08/04/49b2bac5-905c-45f0-a4cc-4e3f6d30e7f4.jpg',
            tit: '65W MAX功率输出 | GaN 芯片 | 三口输出',
            price: '￥199',
            name: '魅族超充 GaN 三口充电器',
            _class: 'left'

        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/D4/Cgbj0F64-fCANzfvAAMAQSi_H7U780.png',
            tit: 'USB-C 双向超充 | 22.5W 大功率 | 数字电量显示',
            price: '￥169',
            name: '魅族超充 USB-C 移动电源',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/95/Cgbj0V37HNOAIdPFAAcMN3qrsLw357.png',
            tit: 'Type-C 接口 | 3A大电流 | 耐磨编织材料',
            price: '￥39',
            name: '魅族中国红 Type-C 金属编织线',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png',
            tit: '双 USB-C 接口 | 5A 大电流 | 耐磨编织材料 | E-Marker 芯片',
            price: '￥49',
            name: '魅族双 USB-C 快充线',
            _class: ''
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/05/13/6ae5ad1c-de3d-437d-a6d2-a2b2a6c942c9.jpg',
            tit: 'andaer 家族 | 潮趣个性 | 官方适配',
            price: '￥49',
            name: 'Pandaer 「17」系列 手机壳',
            _class: 'left'
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/AB/Cgbj0F5u8euASZyLAAcq4oEH89w043.png',
            tit: 'Type-C 接口 | 5A大电流 | 弯头专为游戏设计 | 耐磨编织材料',
            price: '￥49',
            name: '>魅族 Type-C 游戏专用线',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png',
            tit: '5A 大电流 | Type-C 接口 | 更快更方便',
            price: '￥49',
            name: '魅族 Type-C 数据线',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/F8/Cgbj0V7Qy2mAVnM6AARv0cdv8JI919.png',
            tit: 'USB-C 转 Lightning | MFi 认证 | 3A 大电流 | PD 快充 | 兼容大部分苹果设备',
            price: '￥69',
            name: 'Lifeme PD 快充线',
            _class: ''
        },

    ],
    part7: [{
            image: 'https://fms.res.meizu.com/dms/2020/06/10/cbc2e361-1ca4-4c88-b8d3-45dbef49594f.jpg',
            tit: '潮酷印花 | 丝绸手感 | 100％长绒棉',
            price: '￥269',
            name: 'Pandaer 「17」系列 T恤',
            _class: 'left'
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/78/Cgbj0V2unKeALop5AAGkXjbP1nY517.png',
            tit: '智能压感防飞溅 | 超强震动清洁 | FDA 杜邦软毛',
            price: '￥299',
            name: '魅族防飞溅声波电动牙刷',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/E7/Cgbj0V61KNCAUduZAAqsAnm8x-0400.png',
            tit: '潮酷印花 | 超大容量 | 透亮设计',
            price: '￥99',
            name: 'Pandaer 「17」系列 果冻包',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9J36ARuB2AAVQph9X9vs749.png',
            tit: '650D高耐磨牛津布 大容量多功能收纳',
            price: '￥179',
            name: '魅族极简都市双肩包',
            _class: ''
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/08/04/60f19adb-5b3c-4fb1-9af4-33ce0a90708f.jpg',
            tit: '创新外观设计 | 扩容超大容量 | 人体工学背负',
            price: '￥299',
            name: 'Lifeme 双肩包',
            _class: 'left'

        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z74aAO--aAAYHfnMzL1U910.png',
            tit: '相机包新搭配|一机两镜超大容量|加厚防冲击材料',
            price: '￥129',
            name: 'Lifeme 相机包',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/E1/Cgbj0V6z95-AG3qZAA1CJRs2wBU572.png',
            tit: '潮酷印花 | 丝绸手感 | 100％长绒棉',
            price: '￥269',
            name: 'Pandaer 「17」系列 T恤',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/66/Cgbj0V1mIcGAfsr1AAyHfC16kLQ799.png',
            tit: '潮趣设计 | 100％精织纯棉 | 多重潮流工艺',
            price: '￥199',
            name: 'Pandaer readnap T恤',
            _class: ''
        },

        {
            image: 'https://fms.res.meizu.com/dms/2020/03/21/c9ab3718-b903-45b7-a51f-d916e17d4edb.jpg',
            tit: '隔绝99% UV | 进口环保拒水涂层 | 千足纯银徽章',
            price: '￥499',
            name: '>Lifeme 梨木伞',
            _class: 'left'
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/7C/Cgbj0V2vva6AOk-vAAuUyJ3QsAo839.png',
            tit: 'Magic Pandaer前卫设计 | 潮流款式 挺括有型',
            price: '￥399',
            name: 'Pandaer 魔术师帽衫',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/6A/Cgbj0F2yXrSAaUXKAA7Db1JnKHs624.png',
            tit: 'Flyme原创 | 镭射材料 | 随光而动 | 暗夜微光',
            price: '￥269',
            name: 'Flyme 8 暗夜流光卫衣',
            _class: ''
        },
        {
            image: 'https://openfile.meizu.com/group1/M00/07/CC/Cgbj0V6QOw6AHzmiAAKiIJSP6zc896.png',
            tit: '【两支装】进口杜邦刷毛|立体裁切贴合牙齿牙龈',
            price: '￥59',
            name: '魅族声波电动牙刷刷头',

        },

    ],
    part8: [{
            image: 'https://fms.res.meizu.com/dms/2020/05/28/fda8c8cb-6dd5-4fca-8c64-fdc6a07123a8.png',
            userAvatar: 'https://img-res.mzres.com/img/download/uc/12/46/00/30/00/1246003/w100h100?t=1597368306',
            userName: 'frankm8fans',
            con: '魅族 17Pro 定白率先上手体验，第一感觉就是，这很魅族！',
            name: '魅族 17Pro'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/05/28/42b2c0bf-f5b0-4f0f-9023-3df3d10a0662.png',
            userAvatar: 'https://img-res.mzres.com/img/download/uc/13/28/97/03/00/13289703/w100h100?t=1597368306',
            userName: '小宇先森08',
            con: '不只是颜值出众，可谓是秀外慧中。',
            name: '魅族 17'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/05/28/40f14166-72e1-40c3-a816-1b44a05ca270.png',
            userAvatar: 'https://img-res.mzres.com/img/download/uc/58/35/18/00/00/583518/w100h100?t=1597368306',
            userName: 'grayfox77',
            con: '现在大家对手机拍照质量的需求越来越高，最受关注的就是焦段与画质。',
            name: '魅族 17Pro 摄影作品'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/05/28/97540b0b-9fb2-45e1-bbec-2a250c64a696.png',
            userAvatar: 'https://img-res.mzres.com/img/download/uc/14/52/97/69/00/14529769/w100h100?t=1597368306',
            userName: '明日之新',
            con: '魅族 17 Pro 6400W 全场景 AR 专业影像系统体验。',
            name: '魅族 17 Pro 摄影作品'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/05/28/444b1da7-072a-4a3a-9fc5-8bafb630ccfd.png',
            userAvatar: 'https://img-res.mzres.com/img/download/uc/96/59/85/50/00/9659855/w100h100?t=1597368306',
            userName: '一叶一会',
            con: '魅族 17 微距摄影，灵动绚烂。',
            name: '魅族 17 摄影作品'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/05/28/d5ad3a0d-ead8-4c65-a517-84de313c1b4e.png',
            userAvatar: 'https://img-res.mzres.com/img/download/uc/14/52/97/69/00/14529769/w100h100?t=1597368306',
            userName: '明日之新',
            con: '多一点耐心，多一点发现，多一点想象，去留意身边风景。',
            name: '魅族 17 Pro 摄影作品'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/05/28/ab66ca73-8431-4ba4-9189-e4708f88eda3.png',
            userAvatar: 'https://img-res.mzres.com/img/download/uc/11/90/25/05/60/119025056/w100h100?t=1597368306',
            userName: '我是魅之神',
            con: '魅族 17 Pro手持超级夜景实拍，镜头里的夜色如此美妙。',
            name: '魅族 17Pro 摄影作品'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/05/28/17ce9018-4516-494c-a112-cd0529249396.png',
            userAvatar: 'https://img-res.mzres.com/img/download/uc/12/46/00/30/00/1246003/w100h100?t=1597368306',
            userName: 'frankm8fans',
            con: '陪你一路风光 陪你一起风光！',
            name: '魅族情怀'
        },
    ],
    part9: [{
            image: 'https://fms.res.meizu.com/dms/2019/10/25/548670c7-a4c2-4510-b4d5-daf36799905c.png',
            con: '魅族成为三大运营商 5G 战略合作伙伴'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/05/27/9195db7f-9958-4ae0-90ea-740e8d024989.png',
            con: '全面提升续航能力'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/05/27/9195db7f-9958-4ae0-90ea-740e8d024989.png',
            con: '全面提升续航能力'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/07/27/9e3ff75a-cc9c-441b-951f-4f01c0ca0237.png',
            con: '全新导入滤镜'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/07/29/c78851c5-96e9-44c2-b617-f9b15f916178.jpg',
            con: '快速挽救手机数据'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/05/29/9b7b5115-0377-4847-a5d3-af72ffed96e3.jpg',
            con: '产品建议解答'
        },


    ],
    part10: [{
            image: 'https://fms.res.meizu.com/dms/2020/05/08/cfbb2d92-8c02-43ca-b91e-fb90d8c2b57d.jpg',
            con: '以梦为舰，热爱起航：魅族 17 航母限定版重构热血旗舰'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/05/08/726e64a2-e5ea-4102-92c7-2f11b0d0176a.jpg',
            con: '这艺术，科技极了：魅族 17 Pro 晓芳窑艺术典藏版'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2020/05/08/21f8c68f-63b4-4b6a-99cc-218ab3462fbb.jpg',
            con: '去噪，去躁：魅族 HD60降噪耳机'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2019/10/23/e598a95b-42e4-48ed-a48a-2e57c1127812.jpg',
            con: '玩出我的热爱：魅族 16T 大屏娱乐旗舰'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2019/10/22/cfe6f26c-f28e-4aa3-93bf-18f06977ad44.jpg',
            con: 'Flyme 8 概念视频'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2019/10/22/c25ae0b3-95ab-4ed1-99b7-9e269f4876af.jpg',
            con: 'Flyme 8 功能视频'
        },
        {
            image: 'https://fms.res.meizu.com/dms/2019/10/22/51368a34-9aed-4b7b-b5e8-0ac7a665de35.jpg',
            con: 'Aicy'
        }, {
            image: 'https://fms.res.meizu.com/dms/2018/11/27/3b75dc9f-7af7-4104-94fa-a384252ef78c.jpg',
            con: '安全家庭'
        },

    ]
}
let list = [{
        image: ['https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png@480x480.jpg'],
        color: ['http://openfile.meizu.com/group1/M00/07/67/Cgbj0F2wCvOAWIoaAAAQumAb0IQ155.png'],
        name: '魅族 HD60 降噪耳机',
        tit: '【夏日限时特惠999元】索尼主动降噪芯片 | 40mm镀铍振膜 | 触控操作 | USB - C 快充 | 轻奢品质',
        price: 1099,
        time: 7,
        id: 0
    },
    {
        image: ['https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png@480x480.jpg'],
        color: ['http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAZoWmAAAJazF5kdU895.png'],
        name: '魅族 POP2 真无线蓝牙耳机',
        tit: '【夏日限时特惠329元】蓝牙5.0 | 单次8H续航 | 石墨烯振膜 | 双耳通话 | 轻触操作 | 轻盈舒适',
        price: 399,
        time: 4,
        id: 1,
    },
    {
        image: ['https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png@480x480.jpg'],
        color: ['http://storeimg.meizu.com/product/1451459052-28689.png'],
        name: '魅族 HIFI 解码耳放',
        tit: '【夏日限时特惠119元】高性能DAC芯片 | 纯净HiFi音质 | 600Ω高阻抗推力 | Type-C 转接线 | 音乐发烧友必备',
        price: 169,
        time: 9,
        id: 2,
    },
    {
        image: ['https://storeimg.meizu.com/product/1449643421-24522.png@480x480.jpg'],
        color: ['http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAZoWmAAAJazF5kdU895.png'],
        name: '魅族 EP21 耳机',
        tit: '三键一体式线控 | 3.5mm接口',
        price: 89,
        time: 1,
        id: 3,
    },
    {
        image: ['https://openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png@480x480.jpg', '//openfile.meizu.com/group1/M00/04/08/Cgbj0FrcX6iAfZfmAARPvQUH0FM087.png@480x480.jpg'],
        color: ['http://openfile.meizu.com/group1/M00/07/00/Cgbj0Vw8RZKAPw0DAAAJ69zqZ5g670.png', 'http://openfile.meizu.com/group1/M00/07/00/Cgbj0Vw8RZKAZdw0AAAJi311VBs869.png'],
        name: '魅族 HALO 激光蓝牙耳机',
        tit: '炫酷夜跑神器 随性张扬',
        price: 499,
        time: 6,
        id: 4,
    },
    {
        image: ['https://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png@480x480.jpg', 'https://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-SAO6IgAARPVTFhby0701.png@480x480.jpg', 'https://openfile.meizu.com/group1/M00/06/A6/Cgbj0Vui_-SASKMsAAQO9wrBG1Q074.png@480x480.jpg'],
        color: ['http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAZoWmAAAJazF5kdU895.png', 'http://openfile.meizu.com/group1/M00/07/00/Cgbj0Vw8RZKAWNQ_AAAKCZNpzA4524.png', 'http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAXrLjAAAKGDAXl9Q548.png'],
        name: '魅族 EP52 Lite 蓝牙耳机',
        tit: '【夏日限时特惠109元】轻巧亲肤 | 生物纤维振膜 | 8小时续航 | IPX5级防水',
        price: 123,
        time: 2,
        id: 5,
    },
    {
        image: ['https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png@480x480.jpg'],
        color: ['http://openfile.meizu.com/group1/M00/07/67/Cgbj0F2wCvOAWIoaAAAQumAb0IQ155.png'],
        name: '魅族 HD60 降噪耳机',
        tit: '【夏日限时特惠999元】索尼主动降噪芯片 | 40mm镀铍振膜 | 触控操作 | USB - C 快充 | 轻奢品质',
        price: 1099,
        time: 6,
        id: 6,
    },
    {
        image: ['https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png@480x480.jpg'],
        color: ['http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAZoWmAAAJazF5kdU895.png'],
        name: '魅族 POP2 真无线蓝牙耳机',
        tit: '【夏日限时特惠329元】蓝牙5.0 | 单次8H续航 | 石墨烯振膜 | 双耳通话 | 轻触操作 | 轻盈舒适',
        price: 399,
        time: 3,
        id: 7,
    },
    {
        image: ['https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png@480x480.jpg'],
        color: ['http://storeimg.meizu.com/product/1451459052-28689.png'],
        name: '魅族 HIFI 解码耳放',
        tit: '【夏日限时特惠119元】高性能DAC芯片 | 纯净HiFi音质 | 600Ω高阻抗推力 | Type-C 转接线 | 音乐发烧友必备',
        price: 169,
        time: 8,
        id: 8,
    },
    {
        image: ['https://storeimg.meizu.com/product/1449643421-24522.png@480x480.jpg'],
        color: ['http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAZoWmAAAJazF5kdU895.png'],
        name: '魅族 EP21 耳机',
        tit: '三键一体式线控 | 3.5mm接口',
        price: 89,
        time: 11,
        id: 9,
    },
    {
        image: ['https://openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png@480x480.jpg', '//openfile.meizu.com/group1/M00/04/08/Cgbj0FrcX6iAfZfmAARPvQUH0FM087.png@480x480.jpg'],
        color: ['http://openfile.meizu.com/group1/M00/07/00/Cgbj0Vw8RZKAPw0DAAAJ69zqZ5g670.png', 'http://openfile.meizu.com/group1/M00/07/00/Cgbj0Vw8RZKAZdw0AAAJi311VBs869.png'],
        name: '魅族 HALO 激光蓝牙耳机',
        tit: '炫酷夜跑神器 随性张扬',
        price: 499,
        time: 4,
        id: 10,
    },
    {
        image: ['https://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png@480x480.jpg', 'https://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-SAO6IgAARPVTFhby0701.png@480x480.jpg', 'https://openfile.meizu.com/group1/M00/06/A6/Cgbj0Vui_-SASKMsAAQO9wrBG1Q074.png@480x480.jpg'],
        color: ['http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAZoWmAAAJazF5kdU895.png', 'http://openfile.meizu.com/group1/M00/07/00/Cgbj0Vw8RZKAWNQ_AAAKCZNpzA4524.png', 'http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAXrLjAAAKGDAXl9Q548.png'],
        name: '魅族 EP52 Lite 蓝牙耳机',
        tit: '【夏日限时特惠109元】轻巧亲肤 | 生物纤维振膜 | 8小时续航 | IPX5级防水',
        price: 123,
        time: 12,
        id: 11,
    },
]

let good = [{
        id: 0,
        name: '魅族 HD60 降噪耳机',
        tit: '【夏日限时特惠999元】索尼主动降噪芯片 | 40mm镀铍振膜 | 触控操作 | USB - C 快充 | 轻奢品质',
        price: '1099',
        day: '7',
        product: ['魅族 HD60 降噪耳机', '夏日特惠', '老用户专享', 'HD60头戴式蓝牙耳机'],
        color: [{
            img: 'http://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png80x80.png',
            con: '雾银黑',
            imgBig: ['http://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg', 'http://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg', 'http://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg'],
            imgSmall: ['http://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png120x120.jpg', 'http://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png120x120.jpg', 'http://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png120x120.jpg']
        }],
        details:[
            'http://openfile.meizu.com/group1/M00/08/0D/Cgbj0F8aRi2AZOf_AAdfp1ywiGM455.jpg',
            "http://openfile.meizu.com/group1/M00/08/22/Cgbj0V8aRjqAYaerAAxhYL-NrIU304.jpg",
            "http://openfile.meizu.com/group1/M00/08/0D/Cgbj0F8aRkmAH3cXAApgtRU4J60169.jpg",
            "http://openfile.meizu.com/group1/M00/08/22/Cgbj0V8aRlOAXx7oAAl3RwTwZPk409.jpg",
            "http://openfile.meizu.com/group1/M00/08/0D/Cgbj0F8aRlqAPRjPAAlkRIJ1TdQ411.jpg",
            "http://openfile.meizu.com/group1/M00/08/22/Cgbj0V8aRmmAR4ViAAzd-RiEUPw306.jpg",
            "http://openfile.meizu.com/group1/M00/08/0D/Cgbj0F8aRnOAARdmAAeGkhMR8vo453.jpg"
        ]
    },
    {
        id: 1,
        name: '魅族 POP2 真无线蓝牙耳机',
        tit: '【夏日限时特惠329元】蓝牙5.0 | 单次8H续航 | 石墨烯振膜 | 双耳通话 | 轻触操作 | 轻盈舒适',
        price: '399.00',
        day: '7',
        product: ['POP2', '夏日特惠', 'EP52 Lite', 'HALO', 'HD60', 'EP63NC'],
        color: [{
            img: 'http://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png80x80.png',
            con: '皓月白',
            imgBig: ['http://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png680x680.jpg', 'http://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq2APvH6AAdH__FYS70825.png680x680.jpg', 'http://openfile.meizu.com/group1/M00/07/11/Cgbj0Fy9JrWAQoMcAAWBvkANrpk395.png680x680.jpg'],
            imgSmall: ['http://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png120x120.jpg', 'http://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq2APvH6AAdH__FYS70825.png120x120.jpg', 'http://openfile.meizu.com/group1/M00/07/11/Cgbj0Fy9JrWAQoMcAAWBvkANrpk395.png120x120.jpg']
        }],
        details:[
            'http://openfile.meizu.com/group1/M00/07/CC/Cgbj0V6P6fiAbY2BAA7ZArCuduc064.jpg',
            "http://openfile.meizu.com/group1/M00/07/2D/Cgbj0Vy-qzWAUzafAAx3yTOaAEE128.jpg",
            "http://openfile.meizu.com/group1/M00/07/16/Cgbj0Fy-q0CANGAyAAK0RgaNNck530.jpg",
            "http://openfile.meizu.com/group1/M00/07/2D/Cgbj0Vy-q0SAcHf-AAX34kBiqRw637.jpg",
            "http://openfile.meizu.com/group1/M00/07/16/Cgbj0Fy-q0eAEcx9AAbehWcjbxs571.jpg",
            "http://openfile.meizu.com/group1/M00/07/2D/Cgbj0Vy-q0qAaD-RAAJSm4xuLaM832.jpg",
            "http://openfile.meizu.com/group1/M00/07/16/Cgbj0Fy-q0-AG-CbAAj54_6tJTM431.jpg",
            "http://openfile.meizu.com/group1/M00/07/2E/Cgbj0Vy-q1OAObNsAAQRWVDTsX0638.jpg",
            "http://openfile.meizu.com/group1/M00/07/16/Cgbj0Fy-q1eAFxTYAAg0n7Q-Bzk029.jpg",
            "http://openfile.meizu.com/group1/M00/07/2E/Cgbj0Vy-q1uAb_QjAAIGCPgyErA218.jpg",
            "http://openfile.meizu.com/group1/M00/07/16/Cgbj0Fy-q2GAIxXAAAHkvqczx-s001.jpg",
            "http://openfile.meizu.com/group1/M00/07/2E/Cgbj0Vy-q2SAZgCtAANv0xe0Vd0043.jpg",
            "http://openfile.meizu.com/group1/M00/07/16/Cgbj0Fy-q2iABdjmAAXSg5HyL0Q775.jpg",
            "http://openfile.meizu.com/group1/M00/07/2E/Cgbj0Vy-q2yAYgd0AAF6QpxV74U063.jpg"
        ]
    },
    {
        id: 2,
        name: '魅族 HIFI 解码耳放',
        tit: '【夏日限时特惠119元】高性能DAC芯片 | 纯净HiFi音质 | 600Ω高阻抗推力 | Type-C 转接线 | 音乐发烧友必备',
        price: '169.00',
        day: '7',
        product: ['HIFI 解码耳放', '夏日特惠', ' LIVE 四单元动铁耳机'],
        color: [{
            img: 'http://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png80x80.png',
            con: '黑色',
            imgBig: ['http://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png680x680.jpg', 'http://openfile.meizu.com/group1/M00/07/18/Cgbj0Fy_C3WAD8y0AACiEridFPM095.png680x680.jpg'],
            imgSmall: ['http://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png120x120.jpg', 'http://openfile.meizu.com/group1/M00/07/18/Cgbj0Fy_C3WAD8y0AACiEridFPM095.png120x120.jpg']
        }],
        details:[
            'http://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_CqqANGjLAAp_0XHuByU557.jpg',
            "http://openfile.meizu.com/group1/M00/07/17/Cgbj0Fy_CrOAZvNEAAEDKd8sBVY220.jpg",
            "http://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_CrmALMTjAAFcX3KnJl4690.jpg",
            "http://openfile.meizu.com/group1/M00/07/18/Cgbj0Fy_CsmAUsBHAAC_hpL5Q58672.jpg",
            "http://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_Cs-AJ_ljAAIjm8exJiU877.jpg",
            "http://openfile.meizu.com/group1/M00/07/18/Cgbj0Fy_CtSATAhbAAmFQ8JBjx0905.jpg",
        ]

    },
    {
        id: 3,
        name: '魅族 EP21耳机',
        tit: '三键一体式线控 | 3.5mm接口',
        price: '89.00',
        day: '7',
        product: ['EP21', 'EP21-HD', ' EP2X', 'EP2C', 'EP3C', 'LIVE'],
        color: [{
            img: 'http://storeimg.meizu.com/product/1449643421-24522.png@80x80.png',
            con: '白色',
            imgBig: ['http://storeimg.meizu.com/product/1449643421-24522.png@680x680.jpg', 'http://storeimg.meizu.com/product/1449643546-44345.png@680x680.jpg', 'http://storeimg.meizu.com/product/1449643635-44506.png@680x680.jpg'],
            imgSmall: ['http://storeimg.meizu.com/product/1449643421-24522.png@120x120.jpg', 'http://storeimg.meizu.com/product/1449643546-44345.png@120x120.jpg', 'http://storeimg.meizu.com/product/1449643635-44506.png@120x120.jpg']
        }],
        details:[
            'http://storeimg.meizu.com/product/1451040016-14079.jpg',
            "http://storeimg.meizu.com/product/1466744666-59073.png",
        ]
    },
    {
        id: 4,
        name: '魅族 HALO 激光蓝牙耳机',
        tit: '炫酷夜跑神器 随性张扬',
        price: '499.00',
        day: '17',
        product: ['HALO ', 'EP63NC', ' POP2', 'HD60', 'EP52 Lite'],
        color: [{
            img: 'http://openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png80x80.png',
            con: '蓝色',
            imgBig:['http://openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png680x680.jpg','http://openfile.meizu.com/group1/M00/04/16/Cgbj0VrcX6OAAW6lAAPIqwaY3Yk458.png680x680.jpg','http://openfile.meizu.com/group1/M00/06/E1/Cgbj0VwA5jCAVNq3AARxYwtsFeI008.png680x680.jpg','http://openfile.meizu.com/group1/M00/06/D1/Cgbj0FwA5K6AdeU_AAorDn3t-Vs866.jpg680x680.jpg'],
            imgSmall: ['"http://openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png680x680.jpg"', 'http://openfile.meizu.com/group1/M00/04/16/Cgbj0VrcX6OAAW6lAAPIqwaY3Yk458.png120x120.jpg', 'http://openfile.meizu.com/group1/M00/06/E1/Cgbj0VwA5jCAVNq3AARxYwtsFeI008.png120x120.jpg', 'http://openfile.meizu.com/group1/M00/06/D1/Cgbj0FwA5K6AdeU_AAorDn3t-Vs866.jpg120x120.jpg']
        }, {
            img: 'http://openfile.meizu.com/group1/M00/04/08/Cgbj0FrcX6iAfZfmAARPvQUH0FM087.png80x80.png',
            con: '红色',
            imgBig: ['http://openfile.meizu.com/group1/M00/04/08/Cgbj0FrcX6iAfZfmAARPvQUH0FM087.png680x680.jpg', 'http://openfile.meizu.com/group1/M00/04/16/Cgbj0VrcX6OAAW6lAAPIqwaY3Yk458.png680x680.jpg', 'http://openfile.meizu.com/group1/M00/06/E1/Cgbj0VwA5AuAIu01AA7Zqhqlg9I506.jpg680x680.jpg', 'http://openfile.meizu.com/group1/M00/06/D1/Cgbj0FwA5K6AdeU_AAorDn3t-Vs866.jpg680x680.jpg'],
            imgSmall: ['http://openfile.meizu.com/group1/M00/04/08/Cgbj0FrcX6iAfZfmAARPvQUH0FM087.png120x120.jpg', 'http://openfile.meizu.com/group1/M00/04/16/Cgbj0VrcX6OAAW6lAAPIqwaY3Yk458.png120x120.jpg', 'http://openfile.meizu.com/group1/M00/06/E1/Cgbj0VwA5AuAIu01AA7Zqhqlg9I506.jpg120x120.jpg', 'http://openfile.meizu.com/group1/M00/06/D1/Cgbj0FwA5K6AdeU_AAorDn3t-Vs866.jpg120x120.jpg']
        }],
        details:[
            'http://openfile.meizu.com/group1/M00/04/6F/Cgbj0Vr-fIaAEwvKAA2Hox1ukAk217.jpg',
            "http://openfile.meizu.com/group1/M00/04/6F/Cgbj0Vr-fIaAPnBBAAHCsWOb6Po652.jpg",
            "http://openfile.meizu.com/group1/M00/04/60/Cgbj0Fr-fIaAb_tnAAVicXtTsn0383.jpg",
            "http://openfile.meizu.com/group1/M00/04/60/Cgbj0Fr-fIiAMx_xAAMSfswt15c710.jpg",
            "http://openfile.meizu.com/group1/M00/04/6F/Cgbj0Vr-fIqAfqLpAAGgT0Z4OAM517.jpg",
            "http://openfile.meizu.com/group1/M00/04/60/Cgbj0Fr-fIuAB54lAAO2FY6gduA682.jpg",
            "http://openfile.meizu.com/group1/M00/04/6F/Cgbj0Vr-fIuAU_X7AAiWC7n4rq0987.jpg",
            "http://openfile.meizu.com/group1/M00/04/60/Cgbj0Fr-fIuAb69bAALYLQgxD_Y151.jpg",
            "http://openfile.meizu.com/group1/M00/04/60/Cgbj0Fr-fIuAb69bAALYLQgxD_Y151.jpg",
            "http://openfile.meizu.com/group1/M00/04/6F/Cgbj0Vr-fI2ASX6wAAaa3_wskMc580.jpg",
            "http://openfile.meizu.com/group1/M00/04/60/Cgbj0Fr-fI6AfcCPAAu69y9JnYU498.jpg",
            "http://openfile.meizu.com/group1/M00/04/68/Cgbj0FsCK9qAJtVTAAOcJEkwd3M896.jpg"
        ]
    },
    {
        id: 5,
        name: '魅族 EP52 Lite 蓝牙耳机',
        tit: '【夏日限时特惠109元】轻巧亲肤 | 生物纤维振膜 | 8小时续航 | IPX5级防水',
        price: '129.00',
        day: '17',
        product: ['EP52 Lite ', '夏日特惠', ' EP63NC', 'POP2', 'HD60', 'HALO'],
        color: [{
            img: 'http://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-SAO6IgAARPVTFhby0701.png80x80.png',
            con: '深蓝',
            imgBig: ['http://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-SAO6IgAARPVTFhby0701.png680x680.jpg', 'http://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-qAa4isAAPCiphjtvk287.png680x680.jpg', 'http:///openfile.meizu.com/group1/M00/06/A7/Cgbj0Vui__GAY72EAAhHxkugXuY418.png680x680.jpg'],
            imgSmall: ['http://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-SAO6IgAARPVTFhby0701.png120x120.jpg', 'http://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-qAa4isAAPCiphjtvk287.png120x120.jpg', 'http://openfile.meizu.com/group1/M00/06/A7/Cgbj0Vui__GAY72EAAhHxkugXuY418.png120x120.jpg']
        }, {
            img: 'http://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png80x80.png',
            con: '月白',
            imgBig: ['http://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png680x680.jpg', 'http:///openfile.meizu.com/group1/M00/06/A6/Cgbj0Vui_-mAIuFfAAProuzl8DA939.png680x680.jpg', 'http://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui__CAd4q9AAeppUwGCig680.png680x680.jpg'],
            imgSmall: ['http://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png120x120.jpg', 'http://openfile.meizu.com/group1/M00/06/A6/Cgbj0Vui_-mAIuFfAAProuzl8DA939.png120x120.jpg', 'http://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui__CAd4q9AAeppUwGCig680.png120x120.jpg']
        }, {
            img: 'http://openfile.meizu.com/group1/M00/06/A6/Cgbj0Vui_-SASKMsAAQO9wrBG1Q074.png80x80.png',
            con: '云灰',
            imgBig: ['http://openfile.meizu.com/group1/M00/06/A6/Cgbj0Vui_-SASKMsAAQO9wrBG1Q074.png680x680.jpg', 'http://openfile.meizu.com/group1/M00/06/A6/Cgbj0Vui_-qAXoLJAAQoqyu4Clk928.png680x680.jpg', 'http://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui__KAOhpVAAjbM7rGch8467.png680x680.jpg'],
            imgSmall: ['http://openfile.meizu.com/group1/M00/06/A6/Cgbj0Vui_-SASKMsAAQO9wrBG1Q074.png120x120.jpg', 'http://openfile.meizu.com/group1/M00/06/A6/Cgbj0Vui_-qAXoLJAAQoqyu4Clk928.png120x120.jpg', 'http://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui__KAOhpVAAjbM7rGch8467.png120x120.jpg']
        }],
        details:[
            'http://openfile.meizu.com/group1/M00/06/AB/Cgbj0FutzoOAR5mtAAn7190g7HI118.jpg',
            "http://openfile.meizu.com/group1/M00/06/9E/Cgbj0Vuh6HGAG5q4AAKfo6QdOro603.jpg",
            "http://openfile.meizu.com/group1/M00/06/8F/Cgbj0Fuh6HGASitoAAGT52DgV60295.jpg",
            "http://openfile.meizu.com/group1/M00/06/9E/Cgbj0Vuh6HKAewq7AAj2wdwJA1I978.jpg",
            "http://openfile.meizu.com/group1/M00/06/9E/Cgbj0Vuh6HSAaSQEAAPVTcwl7jM211.jpg",
            "http://openfile.meizu.com/group1/M00/06/8F/Cgbj0Fuh6HaAernEAA3mi3lR4sc029.jpg",
            "http://openfile.meizu.com/group1/M00/06/9E/Cgbj0Vuh6HaAJJGQAASN0OPAzKw067.jpg",
            "http://openfile.meizu.com/group1/M00/06/8F/Cgbj0Fuh6HeAUrAyAAhCEsqeZgM126.jpg",
            "http://openfile.meizu.com/group1/M00/06/9E/Cgbj0Vuh6HeAB6IAAAD_tGS2bfw463.jpg",
        ]

    }
]
app.get('/nav', (req, res) => {
    res.json(indexData)
})
app.get('/part', (req, res) => {
    res.json(indexPart)
})
app.get('/list', (req, res) => {
    res.json(list)
})
app.get('/good', (req, res) => {
    res.json(good)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))