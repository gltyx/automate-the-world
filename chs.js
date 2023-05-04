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
    "DRILLS": "钻井",
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
    "Select a fuel type before powering on drill": "通电前选择燃料类型",
    "Select a fuel type before powering on furnace": "通电前选择燃料类型",
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
    "Drills:": "钻井：",
    "Fuel:": "燃料：",
    "Power:": "能源：",
    "PROGRESS:": "进度：",
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
    [/^You find a small patch of (.+) coal$/, '你找到了含有 $1 煤 的一小堆矿石'],
    [/^You find a small patch of (.+) copper$/, '你找到了含有 $1 铜 的一小堆矿石'],
    [/^You find a small patch of (.+) iron$/, '你找到了含有 $1 铁 的一小堆矿石'],
    [/^You find a small patch of (.+) stone$/, '你找到了含有 $1 石头 的一小堆矿石'],
    [/^You find a small patch of (.+) coal$/, '你找到了含有 $1 煤 的一小堆矿石'],
    [/^You find a small vein of (.+) coal$/, '你找到了含有 $1 煤 的小型矿脉'],
    [/^You find a small vein of (.+) stone$/, '你找到了含有 $1 石头 的小型矿脉'],
    [/^You find a small vein of (.+) copper$/, '你找到了含有 $1 铜 的小型矿脉'],
    [/^You find a small vein of (.+) iron$/, '你找到了含有 $1 铁 的小型矿脉'],
    [/^You find a medium patch of (.+) copper$/, '你找到了含有 $1 铜 的中型矿脉'],
    [/^You find a medium patch of (.+) stone$/, '你找到了含有 $1 石头 的中型矿脉'],
    [/^You find a medium patch of (.+) coal$/, '你找到了含有 $1 煤 的中型矿脉'],
    [/^You find a medium patch of (.+) iron$/, '你找到了含有 $1 铁 的中型矿脉'],
    [/^You find a large vein of (.+) copper$/, '你找到了含有 $1 铜 的大型矿脉'],
    [/^You find a large vein of (.+) coal$/, '你找到了含有 $1 煤 的大型矿脉'],
    [/^You find a large vein of (.+) stone$/, '你找到了含有 $1 石头 的大型矿脉'],
    [/^You find a large vein of (.+) iron$/, '你找到了含有 $1 铁 的大型矿脉'],
    [/^You find a large patch of (.+) iron$/, '你找到了含有 $1 铁 的一大堆矿脉'],
    [/^You find a large patch of (.+) stone$/, '你找到了含有 $1 石头 的一大堆矿脉'],
    [/^You find a large patch of (.+) coal$/, '你找到了含有 $1 煤的一大堆矿脉'],
    [/^You find a large patch of (.+) copper$/, '你找到了含有 $1 铜 的一大堆矿脉'],
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
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) coal$/, '$1 煤'],
    [/^([\d\.,]+) iron$/, '$1 铁'],
    [/^([\d\.,]+) iron plate$/, '$1 铁板'],
    [/^([\d\.,]+) copper$/, '$1 铜'],
    [/^([\d\.,]+) wood$/, '$1 木头'],
    [/^([\d\.,]+) stone$/, '$1 石头'],
    [/^([\d\.,]+) copper plate$/, '$1 铜板'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);