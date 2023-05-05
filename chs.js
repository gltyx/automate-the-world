/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    " - As you can tell, these are lame. Submit your own to /u/name_is_Syn.": "- 如您所知，这些都是蹩脚的。 将你自己的提交到 /u/name_is_Syn。",
    " - Automate my automations": "- 自动化我的自动化",
    " - Chop my morning wood. Or evening wood... that's fine too.": "- 砍我早上的木头。 或者晚上的木头……那也很好。",
    " - If I was a robot and you were one too, if I lost a nut... would you give me a screw?": "- 如果我是机器人而你也是，如果我丢了一个螺母……你会给我一个螺丝吗？",
    " - Just keep digging, just keep digging, just digging digging digging.": "- 继续挖，继续挖，挖挖挖。",
    " - More wood, more wood!": "- 更多木头，更多木头！",
    " - Why was the robot mad? People kept pushing its buttons.": "- 为什么机器人生气了？ 人们不停地按下它的按钮。",
    "| Check out": "| 查看",
    "ACTION": "动作",
    "Add some drills": "添加一些钻机",
    "Allows for automation": "允许自动化",
    "AUTOMATE THE WORLD": "自动化世界",
    "Automate the World™ ©": "自动化世界™ ©",
    "BUILD": "建造",
    "BUILD FURNACE": "建造熔炉",
    "BUILD LAB": "建造实验室",
    "BUILD MINING DRILL": "建造采矿钻机",
    "BUILD QUEUE": "建造队列",
    "BUILDING: FURNACE": "建筑：熔炉",
    "BUILDING: LAB": "建造：实验室",
    "BUILDING: MINING DRILL": "建造：采矿钻机",
    "BURN WOOD": "烧木头",
    "CHOP TREE": "砍树",
    "Coal": "煤炭",
    "COAL": "煤炭",
    "COPPER": "铜",
    "COPPER PLATE": "铜板",
    "Cost: 5 wood, 25 stone": "成本：5 木头，25 石头",
    "Cost: 50 stone, 5 iron plate, 3 copper plate": "成本：50 石头，5 铁板，3 铜板",
    "Cost: 70 stone, 20 coal, 10 iron": "成本：70 石头，20 煤，10 铁",
    "Drills": "演习",
    "DRILLS": "钻机",
    "Enables technology": "启用技术",
    "EXPLORE": "探索",
    "Fuel": "燃料",
    "Furnaces": "熔炉",
    "FURNACES": "熔炉",
    "Gain 1 coal": "获得 1 煤",
    "Gain 1 coal for 2 wood": "获得 2 木头 通过消耗 1 煤",
    "Gain 1 copper": "获得 1 铜",
    "Gain 1 copper plate for 2 copper": "获得 1 铜板 通过消耗 2 铜",
    "Gain 1 iron": "获得 1 铁",
    "Gain 1 iron plate for 2 iron": "获得 1 铁板 通过消耗 2 铁",
    "Gain some stone": "获得一些石头",
    "Gain some wood": "获得一些木材",
    "INVENTORY": "库存",
    "IRON": "铁",
    "IRON PLATE": "铁板",
    "LAB": "实验室",
    "LOGS": "日志",
    "Look around your surroundings": "环顾四周",
    "MINE COAL": "开采煤",
    "MINE COPPER": "开采铜",
    "MINE IRON": "开采铁",
    "MINE ROCK": "开采石头",
    "MINING DRILL": "矿用钻机",
    "More Ore": "无尽的矿石",
    "No items in queue": "队列中没有项目",
    "Not enough resources": "没有足够的资源",
    "OFF": "关闭",
    "ON": "打开",
    "PROGRESS": "进步",
    "Select a fuel type before powering on drill": "给 钻机 供能前请先选择一个燃料类型",
    "Select a fuel type before powering on furnace": "给 熔炉 供能前请先选择一个燃料类型",
    "Select Fuel Type": "选择燃料类型",
    "SMELT COPPER": "冶炼铜",
    "SMELT IRON": "冶炼铁",
    "Smelts raw materials": "冶炼原料",
    "STONE": "石头",
    "Syn Studios": "Syn 工作室",
    "TECHNOLOGY": "科技",
    "Wood": "木头",
    "WOOD": "木头",
    "WORLD RESOURCES": "世界资源",
    "You are missing some resources": "你缺少一些资源",
    "You crafted a furnace": "你制作了一个熔炉",
    "You crafted a lab": "你打造了一个实验室",
    "You crafted a mining drill": "你制作了一个采矿钻机",
    "You explore your surroundings but found nothing notable.": "您探索周围环境，但没有发现任何值得注意的地方。",
    "Doing things takes time and energy...": "做事需要时间和精力...",
    "Why not build things to do the things for you.": "为什么不建造一些东西来为你做这些事情。",
    "Explore your surroundings to find more": "探索您的周围以发现更多",
    "Your world has limited resources...": "你的世界资源有限...",
    "You have discovered IRON!": "你发现了 铁!",
    "You have discovered COPPER!": "你发现了 铜!",
    "You have discovered COAL!": "你发现了 煤!",
    "Drills:": "钻机：",
    "Fuel:": "燃料：",
    "Power:": "能源：",
    "PROGRESS:": "进度：",
    "Furnaces:": "熔炉：",
    "Add some furnaces": "添加一些熔炉",
    "BUILD RED SCIENCE": "制作红色科学",
    "Cost: 1 copper plate, 1 iron plate": "成本：1 铜板，1 铁板",
    "Used for basic science": "用于基础科学",
    "100% chance of finding something while exploring": "探索时有 100% 的几率找到东西",
    "Allows the creation of blue science": "允许创造蓝色科技",
    "AVAILABLE TECHNOLOGY": "可用技术",
    "CIRCUITRY I": "电路 I",
    "Cost: 1 copper plate, 1 iron plate": "成本：1个铜板，1个铁板",
    "Enables the building of basic metal items": "可以建造基本的金属物品",
    "ENHANCED SENSES I": "强化感官 I",
    "ENHANCED SENSES II": "增强感官 II",
    "Fuel Efficiency I": "燃油效率 I",
    "FUEL EFFICIENCY I": "燃油效率 I",
    "FUEL EFFICIENCY II": "燃油效率 II",
    "Fuel is now 1.5x more efficient": "燃油效率现在提高 1.5 倍",
    "Increases the amount of resources get when manually mining/chopping": "增加手动挖掘/砍伐时获得的资源量",
    "LOCKED TECHNOLOGY": "未解锁科技",
    "NO CURRENT TECH IN PROGRESS": "目前没有正在进行的技术",
    "Autonomy I": "自治权 I",
    "AUTONOMY I": "自治权 I",
    "AUTONOMY II": "自治权 II",
    "Enhanced Senses I": "增强感官 I",
    "Locomotion": "运动",
    "LOCOMOTION": "运动",
    "METALSMITHING I": "金属加工 I",
    "METALSMITHING II": "金属加工 II",
    "Metalsmithing I": "金属加工 I",
    "Metalsmithing I & Fuel Efficiency I": "金属加工 I & 燃油效率 I",
    "Train Speed I": "列车速度 I",
    "Train Speed II": "火车速度II",
    "Train Tank Capacity I": "火车油箱容量 I",
    "Train Tank Capacity II": "火车油箱容量 II",
    "Science I": "科学 I",
    "SCIENCE I": "科学 I",
    "SCIENCE II": "科学 II",
    "Tech is locked": "科技未解锁",
    "TRAIN FUEL EFFICIENCY I": "火车燃油效率 I",
    "TRAIN SPEED I": "火车速度 I",
    "TRAIN SPEED II": "火车速度 II",
    "TRAIN SPEED III": "火车速度 III",
    "TRAIN TANK CAPACITY I": "火车油箱容量 I",
    "TRAIN TANK CAPACITY II": "火车油箱容量 II",
    "TRAIN TANK CAPACITY III": "火车油箱容量 III",
    "Weightlifting I": "举重 I",
    "WEIGHTLIFTING I": "举重 I",
    "WEIGHTLIFTING II": "举重 II",
    "BUILDING: RED SCIENCE": "建造：红色科学",
    "FURNACE": "熔炉",
    "RED SCIENCE": "红色科学",
    "You crafted a red science": "你创造了一个红色科学",
    "You do not have enough red science": "你没有足够的红色科学",
    "BUILD COPPER COIL": "构建铜线圈",
    "BUILD IRON GEAR": "构建铁齿轮",
    "COMPLETED TECHNOLOGY": "科技已完成",
    "Cost: 2 copper plates": "成本：2 铜板",
    "Cost: 2 iron plates": "成本：铁 铜板",
    "Enables the building of basic circuit boards": "能够制造基本的电路板",
    "Enables the building of constructors": "允许制造构造器",
    "Enables the building of intermediate metal items": "可以制造中间金属物品",
    "Used for crafting": "用于制作",
    "You made an iron gear": "你制作了一个 铁齿轮",
    "You crafted a copper coil": "你制作了一个铜线圈",
    "click to cancel": "点击取消",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "!": "!",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Requires: ": "要求：",
    "You find a small patch of ": "你从 一个小型矿石堆 里面找到了 ",
    "You find a medium patch of ": "你从 一个中型矿石堆 里面找到了 ",
    "You find a large patch of ": "你从 一个大型矿石堆 里面找到了 ",
    "You find a gigantic patch of ": "你从 一个巨型矿石堆 里面找到了 ",
    "You find a small vein of ": "你从 一个小型矿脉 里面找到了 ",
    "You find a medium vein of ": "你从 一个中型矿脉 里面找到了 ",
    "You find a large vein of ": "你从 一个大型矿脉 里面找到了 ",
    "You find a gigantic vein of ": "你从 一个巨型矿脉 里面找到了 ",
    "You have completed researching: ": "您已完成研究：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    " stone/s": " 石头/秒",
    " iron/s": " 铁/秒",
    " copper/s": " 铜/秒",
    " copper plate/s": " 铜板/秒",
    " iron plate/s": " 铁板/秒",
    " coal/s": " 煤/秒",
    " wood/s": " 木头/秒",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^You chopped (.+) wood$/, '你砍了 $1 木头'],
    [/^You find (.+) wood$/, '你找到了 $1 木头'],
    [/^You mined (.+) copper$/, '你开采了 $1 铜'],
    [/^You mined (.+) iron$/, '你开采了 $1 铁'],
    [/^You mined (.+) coal$/, '你开采了 $1 煤'],
    [/^You mined (.+) stone$/, '你开采了 $1 石头'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^owned: ([\d\.,]+) \| active: ([\d\.,]+) \| inactive: ([\d\.,]+)$/, '拥有: $1 \| 忙碌: $2 \| 可用: $3'],
    [/^([\d\.,]+) seconds$/, '$1 秒'],
    [/^([\d\.,]+) minute$/, '$1 分钟'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) coal$/, '$1 煤'],
    [/^([\d\.,]+) iron$/, '$1 铁'],
    [/^([\d\.,]+) iron plate$/, '$1 铁板'],
    [/^([\d\.,]+) copper$/, '$1 铜'],
    [/^([\d\.,]+) wood$/, '$1 木头'],
    [/^([\d\.,]+) stone$/, '$1 石头'],
    [/^([\d\.,]+) copper plate$/, '$1 铜板'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) red science$/, '成本：$1 红色科学'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);