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
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Join the Discord!": "加入 Discord!",
    "Action LevelUp bonuses": "行动升级加成",
    "Action Statistics": "行动统计",
    "Action Effects": "行动效果",
    "Actions": "行动",
    "Attributes": "属性",
    "Coins": "金币",
    "Energy": "能量",
    "Hide": "隐藏",
    "Learning Rate": "学习速率",
    "Level": "等级",
    "Level:": "等级:",
    "Next unlock at level": "下一个解锁于等级",
    "Jobs": "工作",
    "Push Up": "俯卧撑",
    "Resources": "资源",
    "Show hidden": "显示隐藏项",
    "Training": "训练",
    "Walking": "散步",
    "XP:": "经验值:",
    "Automation": "自动化",
    "Base": "基础",
    "Export as text": "导出存档字符串",
    "Export as file": "导出为文件",
    "Export:": "导出:",
    "Import:": "导入:",
    "Import text": "导入文本",
    "Import file": "导入文件",
    "Learn ETA's": "学习ETA",
    "Stamina": "体力",
    "Skills": "技能",
    "Skill points available:": "可用技能点:",
    "Strength": "力量",
    "Time spent:": "耗时:",
    "Vitality": "活力",
    "XP earned:": "获取的经验值:",
    "Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key": "按空格键开始拖动。当拖动时，您可以使用方向键来移动项目，并使用escape来取消。\n某些屏幕阅读器可能需要您处于对焦模式或使用直通键",
    "Perform some walking exercises to improve your stamina": "进行一些散步运动，以提高你的体力",
    "Perform some simple physical exercises to become stronger and unlock better physical jobs options": "做一些简单的体育锻炼，变得更强壮，并解锁更好的体力工作选项",
    "Press to buy.": "点击购买。",
    "Health cap.": "生命值上限。",
    "Energy cap.": "能量上限。",
    "Coins cap.": "金币上限。",
    "Stop": "停止",
    "Treasurer": "宝藏",
    "Cost:": "成本:",
    "Effects:": "效果:",
    "Energizer": "增能器",
    "Health": "生命值",
    "Oak Heart": "橡树之心",
    "Scholar": "学者",
    "Skill Points": "技能点",
    "Increase your stamina": "提高你的体力",
    "Increase your learning ability": "提高你的学习能力",
    "Increase your HP regen": "提高你的生命值回复",
    "Increase your coins cap": "提高你的金币上限",
    "Recovery": "回复",
    "Do some exercises in local gym to improve your body": "在当地的健身房做一些运动来改善你的身体",
    "to your learning speed": "到你的学习速度",
    "Focus providing x": "专注提供 x",
    "Train Endurance": "训练耐力",
    "Your focus is capped at": "你的专注上限是",
    "), providing": "), 提供",
    "% intensity": "% 强度",
    "Allows you for planning your actions. Unlocks actions list": "允许你计划你的行动。解锁行动列表",
    "Beggar": "乞丐",
    "Bag": "袋子",
    "Begging Efficiency": "乞讨效率",
    "Charisma": "魅力",
    "Clean Stable": "清理马厩",
    "Clean Stables to earn some gold": "清理马厩赚取一些金币",
    "Cost: (x": "成本: (x",
    "Hat": "帽子",
    "Items": "物品",
    "Max": "最大",
    "Notebook": "笔记本",
    "Purchase": "购买",
    "Primary attribute speeds up action, increasing both production and consumption": "主属性可以加速行动，提高生产和消耗",
    "Primary Attribute:": "主属性:",
    "Purchase a bag to store more coins": "购买袋子可以储存更多的金币",
    "Purchase a hat to collect more coins from begging and have a bit more place to store them": "购买一顶帽子可以从乞讨中收集更多的金币，并且有更多的地方可以储存它们",
    "Purchase X:": "购买 X:",
    "Repair Slippers": "修理拖鞋",
    "Rest in Tavern": "在酒馆休息",
    "Shop": "商店",
    "Upgrades": "升级",
    "Walking Learning Rate": "散步学习速率",
    "Wander the city streets, hoping for someone's help": "漫步在城市的街道上，希望有人能帮助你",
    "Your slippers are old, but better than nothing. If you repair it, it could make you feel more comfortable and warm": "你的拖鞋旧了，但总比没有好。如果你修复它，它会让你感觉更舒适和温暖",
    "Pay some gold to rest in tavern": "花点钱在酒馆里休息",
    "Focus": "专注",
    "Multiplier": "乘数",
    "Never": "不满足",
    "You are running this action for": "你当前的行动持续了",
    "Total time played:": "总计游戏时长:",
    "Actions XP Earned:": "获得的行动经验:",
    "Actions Time Spent:": "花费的行动时间:",
    "Actions Unlocked:": "解锁的行动:",
    "Mage Level:": "法师等级:",
    "Attributes unlocks": "属性解锁",
    "Actions unlocks": "行动解锁",
    "Patience": "耐心",
    "Upcoming Unlocks Requirements": "即将解锁条件",
    "View statistics": "查看统计",
    "View unlocks": "查看解锁",
    "You were offline": "你离线了",
    "Diary": "日记",
    "Use your diary to write up what you have learned everyday. Improves learning rate": "用你的日记本记下你每天学到的东西。提高学习速率",
    "Create New": "新建",
    "Current list:": "当前列表:",
    "Gossip": "闲聊",
    "Lists automation enabled": "启用自动化列表",
    "Pick list": "选择列表",
    "Switch lists interval:": "列表切换时间间隔:",
    "Rules Condition:": "规则条件:",
    "Priority:": "优先级:",
    "Name": "名称",
    "Create": "创建",
    "Create & Close": "创建 & 关闭",
    "Click on actions or drag & drop them to add": "单击行动或拖放它们来添加",
    "Cancel": "取消",
    "Average Resources per second": "每秒平均资源数",
    "Average Effects per second": "每秒平均效果",
    "Autotrigger rules:": "自动触发规则：",
    "Add rule (AND)": "添加规则（且）",
    "Street Musician": "街头音乐家",
    "Perform melodies for passersby and earn some coins through the power of music": "为路人演奏旋律，通过音乐的力量赚取一些金币",
    "Save & Close": "保存 & 关闭",
    "seconds": "秒",
    "Spend some time communicating with people about news and other things. Improves your charisma": "花点时间和别人交流新闻和其他事情。提高你的魅力",
    "You are over an area that cannot be dropped on": "你所处的区域不能被放到",
    "You can set more complex matching conditions, like (1 AND 2) OR 3, where numbers are numbers of your rules": "您可以设置更复杂的匹配条件，如（1 和 2） 或 3，其中数字是您的规则的数字",
    "Edit List": "编辑列表",
    "Delete List": "删除列表",
    "Run List": "运行列表",
    "Bargaining": "讨价还价",
    "Charisma improves your communication skills and interaction with other people and decrease shop prices. Higher level unlocks more social activities": "魅力可以提高你的沟通技巧和与他人的互动，降低商店价格。等级越高可以开启更多社交活动",
    "Bargaining attribute slightly increase your coins income from all sources": "讨价还价属性稍微增加你所有来源的金币收入",
    "Consumption": "消耗",
    "Improves your health regeneration": "提高你的生命回复",
    "Income": "收入",
    "Mage": "法师",
    "Patience impacts on your ability on focusing on routine tasks and increasing learning speed. Higher level unlocks more gathering and routine activities": "耐心会影响你专注于日常任务和提高学习速度的能力。等级越高可以解锁更多的聚会和日常活动",
    "Stamina impacts on how fast you can restore your energy": "体力会影响恢复能量的速度",
    "Strength impacts on physical activities efficiency and increase energy cap. Higher level unlocks more physical activities": "力量影响体力活动效率，增加能量上限。等级越高，解锁的体力活动越多",
    "Vitality improves your health maximum": "活力可以提升生命值上限",
    "Book of Math": "数学之书",
    "Book of Motivation": "励志之书",
    "Purchase a book that you can read when you have time. Maybe you will find something useful there": "买一本你有时间可以看的书。也许你会在那里找到有用的东西",
    "Allows you doing some primitive math exercises to train your brain in calculating coins": "让你做一些原始的数学练习来训练你的大脑通过计算金币",
    "Read book of Motivation": "阅读励志之书",
    "Read book of motivation, containing some useful advices regarding self-development": "阅读《励志之书》，其中包含了一些关于自我发展的有用建议",
    "Backpack": "背包",
    "Panpipe": "牧羊神之笛",
    "Shovel": "铲子",
    "Primitive tool to increase your working at stable efficiency": "原始的工具，以稳定的效率提高您的工作",
    "Unlocks inventory and items": "锁库存和物品",
    "Perform some primitive show to improve begging efficiency": "进行一些原始的表演来提高乞讨效率",
    "Better Urns": "更好的瓮",
    "Clean Stable Efficiency": "清理马厩效率",
    "Inventory": "库存",
    "Entrance To Library": "进入图书馆",
    "Living Space": "生活空间",
    "Invest some coins you have earned into your own development": "把赚来的钱投入到自己的发展中",
    "Property": "地产",
    "Tent": "帐篷",
    "Tools": "工具",
    "Urns storage bonus": "瓮储存加成",
    "Purchase your very first living property. Not really comfortable, but better than nothing": "购买你的第一处房产。不是很舒服，但聊胜于无",
    "Purchase better urns to increase their capacity": "购买更好的瓮来增加它们的容量",
    "Purchase better tools, improve your performance at any job. Increase coins income": "购买更好的工具，提高你在任何工作中的表现。增加金币收入",
    "Balance:": "平衡:",
    "Effects on usage:": "使用效果:",
    "Consumption Cooldown:": "消耗冷却时间:",
    "Consumed amount:": "消耗数量:",
    "Autosell rules:": "自动出售规则:",
    "Autoconsumption rules:": "自动消耗规则:",
    "Berry": "浆果",
    "Cart": "推车",
    "Coins Earning Bonus": "赚取金币加成",
    "Consumable": "消耗品",
    "Easy and convenient cart for better transportation of gathered things. Improves gathering efficiency": "简单方便的推车，更好地运输收集的东西。提高采集效率",
    "Elementary place where you can sleep. Improves rest efficiency": "可以睡觉的初级场所。提高休息效率",
    "Furniture": "家具",
    "furniture": "家具",
    "Gather Berries": "采集浆果",
    "gathering": "采集",
    "Gathering": "采集",
    "Gathering Efficiency": "采集效率",
    "Left click to select": "左键点击以选择",
    "Place some table where you can sit and put down notes or read books.": "放一些桌子，你可以坐下来写笔记或看书。",
    "Remove": "移除",
    "Rest Efficiency": "休息效率",
    "Right click to consume": "右键点击以消耗",
    "Sell": "出售",
    "Sell max (x": "出售最大 (x",
    "Sell price:": "出售价格:",
    "Sleeping Bag": "睡袋",
    "Small urn to store more gold": "小瓮储存更多的金币",
    "Space:": "空间:",
    "Spend some time walking in nearby forest and collecting berries": "花点时间在附近的森林里散步，收集浆果",
    "Table": "桌子",
    "Train Math": "训练数学",
    "Urn": "瓮",
    "Train you brain to calculate coins better. Increase coins income": "训练你的大脑更好地计算金币。增加金币收入",
    ". Hold Shift to by max": "．按住Shift键以购买最大",
    "Bread": "面包",
    "Press to buy x": "按下购买 x",
    "Wood": "木头",
    "Consumable Cooldown Reduction": "减少消耗品的冷却时间",
    "Decrease cooldown of consumable items usage": "减少消耗性物品的冷却时间",
    "Increase amount of items you can sell": "增加你可以出售的物品数量",
    "Merchant": "商人",
    "Metabolism": "新陈代谢",
    "Shop Max Stock": "商店最大存货",
    "Stock Renew Rate": "存货更新率",
    "Rest at home": "在家休息",
    "Stay at your sweet home to heal and recover": "呆在你温馨的家里，好好疗伤",
    "Anatomy Book": "解剖学之书",
    "Glasses": "眼镜",
    "Knowledge": "知识",
    "Yoga Manual": "瑜伽手册",
    "Vocabulary": "词汇表",
    "Read Books Efficiency": "读书效率",
    "Purchase yoga manual to train your patience and improve gathering and routine tasks performance": "购买瑜伽手册来训练你的耐心，提高采集和日常任务的表现",
    "Purchase glasses to read better and gather knowledge faster": "购买眼镜，以便更好地阅读和更快地收集知识",
    "Purchase book that can improve your understanding of your body": "购买可以提高你对自己身体结构了解的书籍",
    "Most of books are written in old and obscure languages. Purchase vocabulary and start learning languages to make your book reading more efficient": "大多数书都是用古老而晦涩的语言写的。购买词汇表，开始学习语言，让你的读书更有效率",
    "book": "书籍",
    "activity": "活动",
    "Activities": "活动",
    "Brighten your living space for more convenient reading, writing and learning": "照亮你的生活空间，更方便阅读、写作和学习",
    "Oil Lamp": "油灯",
    "Knowledge cap.": "知识上限.",
    "Place some small wooden furniture to place books and notes.": "放一些小的木制家具来放书和笔记。",
    "Small Book Case": "小书柜",
    "Read Books": "读书",
    "Read books to find new information and increase your knowledge": "读书可以发现新的信息，增加你的知识",
    "Action Efficiency": "行动效率",
    "Highbrow": "知识分子",
    "Increase your knowledge capacity and regeneration": "提高你的知识能力和再生能力",
    "Cot": "床",
    "Old and smelly, but much better than your sleep bag": "又旧又臭，但比你的睡袋好多了",
    "Physical Training Learning": "体能训练及学习",
    "Provide some elementary inventory to improve physical training efficiency, like Training Endurance": "提供一些基本的库存，以提高体能训练效率，如训练耐力",
    "Workout Bench": "健身椅",
    "Use it for your daily yoga practices, increasing yoga XP rate": "将它用于你的日常瑜伽练习，增加瑜伽经验值",
    "Yoga Carpet": "瑜伽毯",
    "Yoga Learning Rate": "瑜伽学习速率",
    "Yoga Practice": "瑜伽练习",
    "Practice yoga to train your patience and stamina. Unlocks new activities requiring more patience.": "练习瑜伽可以锻炼你的耐心和耐力。解锁需要更多耐心的新活动。",
    "Clean your house, organize things to free more space for coins storage": "打扫你的房子，整理东西，腾出更多的空间来存放硬币",
    "Coins cap multiplier": "金币上限乘数",
    "Home Errands": "家庭杂务",
    "Learn Anatomy": "学习解剖学",
    "Memory": "记忆",
    "Lear anatomy to better understand your body and improve your health regeneration": "学习解剖学，以更好地了解你的身体和提高你的生命值再生",
    "Walking in Forest": "林中漫步",
    "Fly Mushroom": "飞蝇蘑菇",
    "More dangerous activity, but searching for plants in less accessible places can pay off": "更危险的活动，但在不易接近的地方寻找植物是值得的",
    "Herbs Handbook": "草药手册",
    "Its barely a good weapon, but it can be used to cut things you found more efficiently": "它算不上是一件好武器，但它可以用来更有效地切割你发现的东西",
    "Knife": "刀",
    "Learn new herbs and their effects": "学习新的草药和它们的作用",
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
    "material": "材料",
    "routine": "常规",
    "inventory": "库存",
    "consumable": "可消耗",
    "social": "社会",
    "politician": "政治家",
    "mental": "精神",
    "rest": "休息",
    "upgrade": "升级",
    "shop": "商店",
    "purchaseable": "可购买",
    "job": "工作",
    "physical": "体力",
    "action": "行动",
    "training": "训练",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "v0.0.3b": "v0.0.3b",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
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
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",

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
    'i': 'i',
    'I': 'I',
    'II': 'II',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    'Jan': '1月',
    'Feb': '2月',
    'Mar': '3月',
    'Apr': '4月',
    'May': '5月',
    'Jun': '6月',
    'Jul': '7月',
    'Aug': '8月',
    'Sep': '9月',
    'Oct': '10月',
    'Nov': '11月',
    'Dec': '12月',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
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
    "Gather Berries: ": "采集浆果: ",
    "Train Math: ": "训练数学: ",
    "Street Musician: ": "街头音乐家: ",
    "Read book of Math: ": "阅读数学之书: ",
    "Read book of Motivation: ": "阅读励志之书: ",
    "Gossip: ": "闲聊: ",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Locked ": "未解锁 ",
    "Primary Attribute: ": "主属性: ",
    "Walking: ": "散步: ",
    "Beggar: ": "乞讨: ",
    "Train Endurance: ": "训练耐力: ",
    "Rest in Tavern: ": "在酒馆休息: ",
    "Visit City: ": "访问城市: ",
    "Push Up: ": "俯卧撑: ",
    "Clean Stable: ": "清理马厩: ",
    "You can use this time to speed up your game by factor of ": "你可以利用这段时间来加快游戏速度 ",
    "You have lifted an item in position ": "你把一件东西举起来了在位置 ",
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

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
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
    "/sec)": "/秒)",
    ' I': ' I',
    ' II': ' II',
    ' III': ' III',
    ' IV': ' IV',
    ' V': ' V',
    ' VI': ' VI',
    ' VII': ' VII',
    ' VIII': ' VIII',
    ' X': ' X',
    ' XI': ' XI',
    ' XII': ' XII',
    ' XIII': ' XIII',
    ' XIV': ' XIV',
    ' XV': ' XV',
    ' XVI': ' XVI',
    " to full": " 填满",
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
    /^([\d\.]+)d ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)h$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
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
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^X([\d\.]+)$/,
    /^\/([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Jan ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 1 月 $1, $3:$4'],
    [/^Feb ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 2 月 $1, $3:$4'],
    [/^Mar ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 3 月 $1, $3:$4'],
    [/^Apr ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 4 月 $1, $3:$4'],
    [/^May ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 5 月 $1, $3:$4'],
    [/^Jun ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 6 月 $1, $3:$4'],
    [/^Jul ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 7 月 $1, $3:$4'],
    [/^Aug ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 8 月 $1, $3:$4'],
    [/^Sep ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 9 月 $1, $3:$4'],
    [/^Oct ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 10 月 $1, $3:$4'],
    [/^Nov ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 11 月 $1, $3:$4'],
    [/^Dec ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 12 月 $1, $3:$4'],
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
    [/^([\d\.,]+) seconds$/, '$1 秒'],
    [/^([\d\.,]+) minutes$/, '$1 分钟'],
    [/^([\d\.,]+) minute$/, '$1 分钟'],
    [/^([\d\.,]+) hour$/, '$1 小时'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^You have dropped the item.\n      \n      You have moved the item from position ([\d\.,]+)\n      to position ([\d\.,]+)\n    $/, '你拖到并放置了行动项.\n      \n      你移动了行动项从位置 $1\n      到位置 $2\n    '],
    [/^The item has been dropped while not over a drop area.\n    \n  The item has returned to its starting position\n  of ([\d\.,]+)\n$/, '行动项没有被拖到指定放置区域。\n \n该行动项目已返回到其起始位置\n $1\n）'],
    [/^You have moved the item from position ([\d\.,]+)\n      to position ([\d\.,]+)$/, '您已将行动项从位置 $1 \n移动到位置 $2'],
    [/^\(Reach ([\d\.,]+) coins\)$/, '(达到 $1 金币)'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^level ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^level: ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);