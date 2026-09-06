# 科技爱好者周刊（第 411 期）：OpenClaw 2.0 是一个缩影

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/11434)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082702.webp)

宁夏西夏陵使用金属网，将残片还原成石像生。（[via](https://news.ifeng.com/c/8vTLFjHaN2k)）

## OpenClaw 2.0 是一个缩影

本周，OpenClaw 发布了[2.0版](https://openclaw.ai/blog/openclaw-2-accidentally)。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026083101.webp)

是不是很久没听到这个名字了？现在很少有人提到它，不过就是半年。

回想今年春节，它一夜走红，引发了全民热议。一时间，上门安装龙虾成了热门服务，还真有不少人付费。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026083102.webp)

仅仅过了半年，它就成了昨日黄花，已经被遗忘了。AI 时代就是这样，新事物层出不穷，再大的热门也就走红几天。

用了半年，它终于从1.0版升级到2.0版。

大家知道，OpenClaw 的代码几乎百分之百都是 AI 生成，早期每天发一个版本。后来发现不能这样，会把用户累死，于是从7月份开始，改成**每月发一个版本**。

以八月为例，月初的时候发布了测试版 [2026.8.1-beta1](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.1)，月中又发了 beta2 和 beta3，到了月底就发了[8月正式版](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1)。同时，也发了9月的测试版 [2026.9.1.beta1](https://github.com/openclaw/openclaw/releases#release-v2026.9.1-beta.1)。

这种发布节奏，对用户比较舒适，每月更新一次就 OK。

因为8月版的改动特别多，所以这个版本就是2.0版。根据[发布公告](https://openclaw.ai/blog/openclaw-2-accidentally)，它共有933位贡献者，合并了16000个 PR。

这个数字比较恐怖。根据官网，OpenClaw 的开发团队[全职](https://www.openclaw.org/people)9人，兼职26人。就算这些人全部参与，我觉得也没办法一个月合并掉16000个 PR。

每天一睁开眼，就是500多个 PR 等着合并，这些人怎么看得过来嘛？

唯一的结论只能是，**这些 PR 没有经过代码审查，都是 AI 合并的**！

我猜想，只要管理员觉得这个 PR 是合理的，AI 审核和测试都过了，就会合并进仓库。

这种做法也没什么，大规模的 Vibe Coding 只可能是这种结果。问题是 OpenClaw 这个工具，主要作用就是自主调用各种外部工具，测试用例很难涵盖各个平台的所有情况，一定有很多地方是测试不到的。

所以，16000个 PR 到底引入了多少 Bug，有多少隐藏的风险，真的很难让人有信心。

还是跟以前一样，我建议大家**千万不要在自己的工作电脑上运行 OpenClaw**，而要在独立的物理机/虚拟机/云端运行它。

OpenClaw 的开发模式，就是 AI 开发的缩影。大量软件正迅速向它靠拢，都是由 AI 编写或合并 PR。

我怀疑，将来的应用软件也许都不应该运行本机上。本机只运行系统，应用软件全部运行在虚拟机或云端。

这样说起来，鸿蒙运行安卓 App 的“卓易通”模式，反而是符合 AI 时代的方向。

## 没人为你的堆栈辩护

前端 JS 框架 SolidJS 的创始人莱恩·卡尼亚托（Ryan Carniato），最近发表一篇文章[《没人为你的堆栈辩护》](https://dev.to/playfulprogramming/nobody-argued-for-your-stack-51fj)。

他感叹（也可以说是抱怨），有了 AI 以后，大家纷纷迁移到主流技术堆栈。 

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082902.webp)

Cursor 的主站和 Anthropic 的文档站，都从 SolidJS 迁移到 React。作为 SolidJS 创始人，他心里不是滋味。

> 我的第一反应并不好，我多年的心血竟然成了人们想要抛弃的典型案例。而且，就在同一周，我们发布了项目史上规模最大的新版本。这确实让我感到痛苦，我无法否认。

他认为，技术堆栈的迁移，是成本和风险都很大的事情。以前很少有人敢做。但现在，AI 可以重写代码，让迁移变得容易。于是，管理层纷纷建议向主流技术栈迁移。

其他例子还有，Cognition 公司的营销网站，从 Astro 迁移到了 Next.js；Bun 从 Zig 迁移到 Rust。

没有反复的论证、数年的考察，也许只是公司内部的一场会议，就会导致放弃当前技术栈，改用更流行的技术栈。

根本没人会为当前使用的堆栈辩护，大家争前恐后拥抱最佳实践。

他的结论就是：”这样下去，除了少数例外，**每一层最终都会变为当下最流行的解决方案**。前端趋向 React，系统趋向 Rust，脚本趋向 Python，甚至连页面本身都趋向 Next.js，完全无视适配性。“

他认为，AI 往往采用最流行的技术，导致小众的技术无人问津。长此以往，软件生态将单一化，多样性不复存在。

那么，我们不禁要问，没有多样性的土壤，也没有充分的试验和试错，**软件生态的下一个创意从何而来？**，或者 AI 编程无所谓创新，生成的代码只要能运行就行？

## 科技动态

1、[地月双向激光通信](https://www.guancha.cn/politics/2026_08_29_829154.shtml)

中国科学院最近成功在地球和月亮之间，完成了双向高速激光通信。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026083001.webp)

太空的激光通信有三大难题：（1）发射端和接收端相隔几十万公里，光束难以精准对准；（2）信号传到地面时已经弱得几乎收不到；（3）传输速度也一直提不上去。这次据说将这三大难题都解决了。

本次实验的通信速度，达到了上行 1.25Mbps、下行 100Mbps，相当于达到地面宽带的最低门槛，还是相当快的。

将来在月球高速网络冲浪，也是有可能的。

2、[韩国向公民免费提供无限 Token](https://decrypt.co/376929/south-korea-will-give-every-citizen-free-ai-access-with-unlimited-tokens)

韩国政府为了推广 AI，计划向所有公民免费提供无限的 Token，也就是无限使用 AI。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090104.webp)

一共有三个承办单位：韩国最大的两家电信商和 Kakao（韩国的即时通讯软件）。他们将分别推出各自的 AI 应用，让国民免费使用。政府将向他们每家分配512个英伟达 B200 芯片。

韩国政府还规定，至少80%的使用量必须导向韩国自己的大模型，只在必要的情况下，才允许使用外国模型。

目前不知道，这个服务是否提供 API，让国民无限调用。估计不会，因为那样的成本太可怕。但是如果只是免费的 AI 对话，意义就不大了，因为 AI 对话目前实际上已经是无限免费使用了。

3、[认领像素](https://science.nasa.gov/mission/roman-space-telescope/adopt-a-pixel/)

美国宇航局本周发射了南希·格雷斯·罗曼太空望远镜。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090201.webp)

它的主镜直径为2.4米，这是目前视野最大的太空望远镜，有望发现前所未见的宇宙景象。

美国宇航局正在举办”认领像素“活动，只要在[这个网址](https://science.nasa.gov/mission/roman-space-telescope/adopt-a-pixel/)登记姓名和邮件地址，你就能认领这个望远镜首批照片的一个像素。

认领者将拿到一张数字版证书（下图），可以打印出来，上面有你的像素编号。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090202.webp)

4、[寿司巴士](https://www.engadget.com/2241785/tokyos-sushi-bus-combines-conveyor-belt-dining-with-open-air-sightseeing/)

日本东京的观光双层巴士，开始提供寿司服务。游客可以一边乘车观光市容，一边吃回转寿司。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026083002.webp)

这种巴士的一层是厨房，二层靠窗的一圈是传送带，将寿司不断传递到游客面前。

经过两年的测试，它才最终推出。测试遇到的最大问题是，车辆不能紧急刹车，否则寿司会从传送带上掉下。

这是真的将”移动餐厅“变成了现实。只是价格为每人16000日元（约不到700元人民币），不便宜。

## 文章

1、[为什么我的 Claude 额度十分钟就用完了](https://www.kelviq.com/blog/claude-code-usage-limits-where-tokens-go/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082904.webp)

作者的 Claude Max 账户，流量消耗突然变大。额度以前每周可以用5到6天，现在只能用2天，有一天甚至在10分钟内就耗尽了5小时的流量限制。

经过调查，他发现，某个程序正在以集群方式运行 Claude Code，电脑上竟然同时运行着1555个会话。

本文总结了他的调查过程，以及分享他做的一个工具 [tare](https://github.com/kelviq/tare)，可以对 Claude Code 本地日志进行分析，生成总结报告（下图），一眼就可以看出 Token 是怎么消耗的。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082903.webp)

2、[WebMCP 简介](https://sreenathmenon.com/blog/2026-08-04-webmcp-teaching-websites-to-talk-to-ai-agents/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082905.webp)

如果让 AI 操作网页，现在需要对网页截图或抓取网页源码，让 AI ”从几十个`<div>`元素找到按钮在哪里“。

Chrome 浏览器开始提供 WebMCP 接口，尝试解决这个问题。具体来说，就是在页面中用 JS 脚本，定义当前页面的 MCP 接口，以供 AI 调用。

3、[为什么前线最忙的是乌克兰程序员？](https://mp.weixin.qq.com/s/KyRAvnPNanwy4K1lXzWgXA?poc_token=HC2Wl2qjmcy25tD071C9Vda3QpchiZpdVnqvBGi7)（英文）

当你接收了各国的多种武器，如何将它们融合在一个系统里面，就成了麻烦事。（[@zuzuAndroid](https://github.com/ruanyf/weekly/issues/11443) 投稿）

4、[在 DigitalOcean 上运行 OpenBSD，每月只需4美元](https://nil.wallyjones.com/run-openbsd-on-digitalocean-for-4month/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082604.webp)

OpenBSD 是非常优秀的服务器系统，本文详细演示如何在廉价虚拟主机上，开通一个实例，用来学习。

5、[如何按提交日期的倒序排列代码分支？](https://ryangreenberg.com/til/git-branches-by-commit-date/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090103.webp)

`git branch`命令会显示仓库的所有分支，这些分支默认按字母顺序排列。有一个简单的设置`branch.sort`，可以让其按照提交时间排列。

6、[如何格式化剪贴板的 JSON 内容](https://chris48s.github.io/blogmarks/posts/2021/jsontidy/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090303.webp)

本文介绍一种简单的方法，可以替换剪贴板内容，比如自动将 JSON 字符串格式化。

## 工具

1、[OpenCode Mobile](https://github.com/learning233/opencode_mobile)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082908.webp)

OpenCode 的非官方安卓客户端。（[@learning233](https://github.com/ruanyf/weekly/issues/11381) 投稿）

2、[Blob Downloader](https://github.com/aeroxy/blob-downloader)

Chrome 浏览器插件，用来将网页的 blob 链接后面的视频和文件导出下载。（[@aeroxy](https://github.com/ruanyf/weekly/issues/11392) 投稿）

3、[zlib](https://github.com/heartleo/zlib)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082909.webp)

Go 语言编写的 Z-Library 图书馆命令行工具。（[@heartleo](https://github.com/ruanyf/weekly/issues/11405) 投稿）

4、[ATBClone](https://github.com/aitobox/ATBClone)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026083107.webp)

开源的 macOS 应用，允许应用程序多开，并进行分身管理。（[@aitoboxinc](https://github.com/ruanyf/weekly/issues/11432) 投稿）

5、[Orange Cloud](https://github.com/chen2he/orange-cloud)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026083105.webp)

开源的 Cloudflare 的 iOS 客户端。（[@chen2he](https://github.com/ruanyf/weekly/issues/11428) 投稿）

6、[Apolu](https://apolu.app/zh-Hans)

一款苹果设备应用，免费追踪某个 App 在各个 App Store 的排名和评论。（[@chen2he](https://github.com/ruanyf/weekly/issues/11429) 投稿） 

7、[DanKS](https://github.com/Calix-L/DanKS)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026083103.webp)

金山软件 AI Product Center 发布的一个开源的掼蛋游戏智能体，可以用来玩掼蛋。（[@Calix-L](https://github.com/ruanyf/weekly/issues/11422) 投稿）

8、[video-ai-talking](https://github.com/yizhi-chengzi/video-ai-talking)

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090212.webp)

一个开源 Web 应用，输入文案，生成真人口播视频。（[@yizhi-chengzi](https://github.com/ruanyf/weekly/issues/11449) 投稿）

9、[Git Agent](https://github.com/adoin/git-Agent)

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090301.webp)

开源的跨平台 Git 桌面客户端，将工作区、提交历史、差异审查、三方合并放在一个窗口，支持 AI 功能。（[@adoin](https://github.com/ruanyf/weekly/issues/11464) 投稿）

10、[Subtitle Scout](https://github.com/fancydirty/subtitle-scout)

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090302.webp)

一个自托管的字幕应用，根据你的视频，自动搜五个字幕源，用 AI 找出最合适的字幕。（[@fancydirty](https://github.com/ruanyf/weekly/issues/11468) 投稿）

## 资源

1、[Ad Astra](https://github.com/gunerguner/AdAstra)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082907.webp)

可交互、可离线使用的实时星空 Web 应用，还原任意观测地点和观测时刻的天空，提供星空随时间的变化。（[@gunerguner](https://github.com/ruanyf/weekly/issues/11360) 投稿）

2、[3D 钢琴](https://autopiano.cn/3d)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026083106.webp)

在一个 3D 钢琴上，可视化某个曲子或 MIDI 键盘演奏时的键位变化。（[@WarpPrism](https://github.com/ruanyf/weekly/issues/11431) 投稿）

3、[ScriptSpool](https://scriptspool.pixzens.com/zh/editor)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026083108.webp)

这个网站将一段代码的输入变成逐键输入的动画。（[@liyuouyu](https://github.com/ruanyf/weekly/issues/11433) 投稿）

4、[卫生间建模](https://restroomarchive.com/r/2024-10-16-commonwealth-bar-some-restroom)

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090206.webp)

这个网站选取美国多个真实的家庭卫生间，进行 3D 建模。你可以在网页上360度浏览这些卫生间的模型。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090207.webp)

## 图片

1、[蓝光计](https://byopiapress.wordpress.com/2024/05/19/a-cyanometer-and-a-cloud-colourimeter/)

2016年，一个艺术家在欧洲四个城市的广场上，分布树立了四个装置。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090203.webp)

它的作用就是反射天空的颜色，上部还有一个蓝光计，让人们用来确定当前的蓝色有多蓝。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090204.webp)

这个照片还会定时将天空的照片，发到网站上，同时显示四个城市当前的天空。

![](https://cdn.beekka.com/blogimg/asset/202609/bg2026090205.webp)

2、[橄榄油雕塑](https://kottke.org/26/01/olive-oil-sculptures)

一个美国摄影师专门拍摄，橄榄油飞溅的一瞬间。他觉得这是充满活力的雕塑作品。

![](https://cdn.beekka.com/blogimg/asset/202601/bg2026011707.webp)

他认为，人们没有意识到，油滴溅起很有艺术感。

## 文摘

1、[为什么自由软件的可用性往往很差](https://web.archive.org/web/20030201183139/http://mpt.phrasewise.com/discuss/msgReader$173)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082906.webp)

我们使用自由软件，往往发现它的 UI 非常不友好，很难用。

这个问题非常普遍，界面漂亮的自由软件凤毛麟角，这是有原因的。

根本原因是，绝大多数开源项目都是志愿者项目，**依靠志愿者推动开发几乎不可避免地会导致界面设计糟糕**。

（1）开源软件志愿者之中，大部分是程序员，专职的设计师似乎很少。所以，界面往往是程序员自己设计的。

（2）即使项目有专门的界面设计师，他们的建议也不会像在商业项目中那样得到程序员的重视。

（3）许多程序员想当然地认为微软或苹果的设计就是好的，所以模仿它们的界面，但事实并非总是如此。

（4）志愿者通常只开发他们感兴趣的项目，也就是他们自己用的工具。因为他们是高级用户，对他们有用的界面设计，往往对其他人过于复杂，难以使用。

（5）许多能改善界面的人性化小细节，实现起来既不令人兴奋也不好玩，所以志愿者往往不想做。

（6）开源软件一般有多个贡献者，每个人都会试图参与界面设计，无论对此了解多少。一旦设计师人数超过一人，就会出现不一致的情况。界面设计的质量与设计师人数成反比。

（7）项目管理员往往也会同意，让每个贡献者都在界面中，加入自己开发功能的设置项，作为鼓励。这导致了设置项臃肿不堪、琐碎、晦涩、测试不彻底，令普通用户感到困惑。

## 言论

1、

禁止向中国出口 GPU，这会促使他们发展自己的技术。没错，这会花费他们更长的时间，但从长远来看，中国凭借自主研发的 GPU 技术会取得更大的成功。

-- [Hacker News 网友](https://news.ycombinator.com/item?id=49487064)

2、

当你读一本好小说，沉浸其中时，作者仿佛在某种程度上劫持了你的大脑——你会想象出他们的世界，他们的文字会变成你的思绪。

-- [《不成为半机械人》](https://nolanlawson.com/2026/08/31/on-not-becoming-a-cyborg/)

3、

我最近参加了一个公开论坛，在问答环节，我和其他嘉宾坐在台上，接收听众的提问。

让我震惊的是，当我在台上回答问题时，其他所有人都用笔记本电脑上的 AI 软件在查询问题的答案。如果我们都是用 AI 准备演讲内容、幻灯片和问答，这种公开论坛就只剩下社交目的了。

-- [Lobste.rs 读者](https://lobste.rs/s/qn7jtv/i_attended_conference_recently_ai_use_by)

4、

不要把运动和进步混淆，摇摇木马一直在动，但并没有取得任何进步。

-- [阿尔弗雷德·A·蒙塔珀特](https://graybeard.ing/the-religion-of-speed/)，美国作家

## 往年回顾

[最难还原的魔方](https://www.ruanyifeng.com/blog/2025/09/weekly-issue-364.html)（#364）

[《黑神话：悟空》可以产业化吗？](https://www.ruanyifeng.com/blog/2024/08/weekly-issue-314.html)（#314）

[Elasticsearch 的启示](https://www.ruanyifeng.com/blog/2023/07/weekly-issue-264.html)（#264）

[你的地图是错的](https://www.ruanyifeng.com/blog/2022/07/weekly-issue-214.html)（#214）

（完）

