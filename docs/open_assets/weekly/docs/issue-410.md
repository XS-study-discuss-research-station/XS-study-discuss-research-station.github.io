# 科技爱好者周刊（第 410 期）：你需要知道的 AI 三种机制

这里记录每周值得分享的科技内容，周五发布。

本杂志[开源](https://github.com/ruanyf/weekly)，欢迎[投稿](https://github.com/ruanyf/weekly/issues)。另有[《谁在招人》](https://github.com/ruanyf/weekly/issues/10950)服务，发布程序员招聘信息。合作请[邮件联系](mailto:yifeng.ruan@gmail.com)（yifeng.ruan@gmail.com）。

## 封面图

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082701.webp)

宁夏沙坡头景区的巨型蒙眼雕塑。（[via](https://www.4anet.com/p/01kzzn7qc04ts41frfk4zqjkc0)）

## 你需要知道的 AI 三种机制

这是“AI 小知识系列”的第三篇，前两篇分别是[《大模型需要多少内存》](https://www.ruanyifeng.com/blog/2026/07/weekly-issue-404.html)和[《AI 缓存是什么》](https://www.ruanyifeng.com/blog/2026/08/weekly-issue-408.html)。

我分享一些自己的学习笔记，用来理清对于 AI 技术的理解。我尽量写得通俗，希望对大家有用。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082703.webp)

今天谈一个基本问题：**AI 为什么能够回答我们的提问，它怎么会知道答案？**

你可以找到很多这方面的论文和书籍，详细解释大模型的运作，通常非常难懂。但是，对于非专业人士，只要简单知道 [AI 的三个机制](https://w4g1.dev/blog/models-are-getting-dumber-on-purpose)，就可以了。

**（1）参数机制**

在宏观层面，**所有大模型都是对人类知识的建模**。它建立了一个数学模型，用来描述所有的人类知识。

怎么描述呢？它使用的是一种参数机制，将知识分解成一个个“词元”（token），然后计算所有词元之间的数学关系。这个过程称为“训练”。

这种数学关系使用无数个参数来表示。举例来说，大模型 GLM 5.3 有7440亿个参数，这些参数用来构建所有词元之间的关系（也就是权重）。所谓“训练”，其实就是找出这个7440亿个权重，描述人类知识的构成，也就是所有词元之间的关联。

一旦训练完成，我们向大模型提问时，它就会根据这些权重，找出最可能的词元，从而生成符合概率的答案。

所以，**大模型本质上是一种“压缩-生成”机制**，将人类知识抽象在无数参数之中，后期再生成出来。

**（2）推理机制**

不难理解，参数越多，模型的效果越好。因为更多的参数意味着，可以更精确地描述各种知识，从而可以更准确地将其还原出来。

但是，一方面，参数不可能无限增加，训练和使用成本将直线上升，使用时的运算时间也会变长。

另一方面，也没有必要包含所有的知识，很多知识不需要包含在参数之中，**完全可以通过逻辑推理获得**。

举例来说，只需要知道某个城市的人口出生率和死亡率，就马上知道了人口的净增长率。这不需要记忆，可以通过推理得到。

大模型就依靠推理机制，根据参数包含的知识，从逻辑规则出发，推断出那些它没有包含的知识。

**（3）联网机制**

不管模型有再多的参数、再强的推理，它不可能包含所有的知识，总有一些问题它回答不了。

比如，你问大模型，今天股票的收盘指数是多少，它就回答不了。参数里面不包含这个知识，也无法推理得到。

这时，模型就要依靠 Agent 或应用框架提供的联网机制，自动去互联网搜索那些它不知道的知识。

**（4）总结**

正是有了以上三种机制，AI 才能正确回答我们的问题。

首先，参数机制提供了大模型的基本知识；其次，推理机制产生通过推理得到的知识；最后，联网机制用来获取前两种机制都无法得到的知识。

## 公开演讲的窍门

很多同学对于公开登台，在大庭广众进行演讲，会感到紧张。

其实，只要掌握[几个窍门](https://blog.guillheu.dev/articles/first-time-speaker/)，树立正确认知，就能进行一次成功的公开演讲。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082404.webp)

（1）成功的演讲，内容只占30%，表演技巧占70%。

你要知道，演讲是一场秀，你要充分利用语气、动作、表情、手势等等，去吸引听众的注意力，内容其实不是决定性的。

（2）提前做好充分准备。

演讲稿、幻灯片、笑话、语调、节奏，所有细节最好都反复练习过。你无法预知上台时会发生什么，反复练习能让你沿着预设的轨道，顺利进行下去。

（3）如果涉及具体技术细节，你最好多讲“为什么”（why），让听众明白为什么应该关注这些。

至于“如何做”，略微讲一讲大致思路和一般概念即可，具体操作和实现可以全部跳过，因为没人想听你背诵文档。

（4）紧张是正常的。

但是，如果你做了充分准备，把稿子背得滚瓜烂熟，上台后一旦进入状态，你很快就会把紧张忘记。

（5）不管讲得好与坏，你一定要自信。如果你自己都对所讲的内容有迟疑，就很难让听众信服。

公开演讲的成功者，都是自信的人，而不是能力强的人。很多槽糕的管理者和骗子，都发表过成功的演讲，这说明内容绝非登上讲台的必要条件。

（6）只要你渴望谈论某个话题，你就绝对有登上讲台的条件。

## 科技动态

1、[平面椅](https://www.toxel.com/tech/2026/08/07/flat-chair-by-sara-paculdo/)

一位美国设计师发明了一种玻璃纤维椅，用户拿到手的就是一块平板。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082405.webp)

花几分钟，将其拆开，组装起来就是一把椅子。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082406.webp)

这种平板设计，大大减少了运输体积、存储空间和运输成本。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082407.webp)

它依靠曲线的张力和互锁的部件，来提供足够的强度。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082408.webp)

2、[虚拟化身演唱会](https://www.billboard.com/music/country/dolly-parton-health-update-1236322526/)

本周，美国著名歌星多莉·帕顿去世，享年80岁。这个消息非常突然，因为不久之前，她还表示将举行演唱会。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082502.webp)

但是，她不是自己登台演唱，而是授权制作一个“虚拟化身”，让这个化身在台上演唱。

她没有透露具体细节，但在技术上，现在已经完全可行。现在的 AI 不仅唱得逼真，还能实时生成影像，与歌迷互动。

这种“虚拟化身演唱会”有很多优点，比如可以大量举办，一天几场都可以，而且票价低，而且还可以做很多真人演唱会无法做到的事情，比如去世的歌星也可以开演唱会。相信只要有第一次，后面就会大量涌现，形成一个专门的市场。

3、[自行车助力器](https://www.asus.com/accessories/bike-booster/asus-oxiis/oxiis-intelligent-bike-booster/)

华硕推出了一种“自行车助力器”，任何自行车都可以安装，让普通自行车变成电助力自行车。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082704.webp)

它的原理很简单，就是一块电池带动一个轮子。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082705.webp)

你把它装在后轮上方，它就会自己带动后轮转动，从而提供助力。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082707.webp)

它对于爬坡和携带重物，很有帮助，值得推广。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082708.webp)

## 文章

1、[动荡的人工智能时代已经到来](https://www.gatesnotes.com/home/home-page-topic/reader/a-turbulent-ai-era-and-critical-choices-to-make)（英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082709.webp)

比尔盖茨本周发表了一篇文章，提出 AI 有风险，应该减缓发展速度。

但是，他在2023年发表过一篇完全相反的文章[《AI 的风险是可控的》](https://www.gatesnotes.com/work/make-ai-work-for-everyone/reader/the-risks-of-ai-are-real-but-manageable)。

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082710.webp)

到底为什么，三年的时间，改变了他的观点。不过，不管他怎么想，AI 的发展只可能加速，不可能慢下来。

2、[Ox Alpha 是 GLM](https://dejan.ai/blog/ox-alpha/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082504.webp)

前些天，网上出现了一个匿名模型 Ox Alpha，性能优秀，各方纷纷猜测它出自哪家公司。最后，智谱承认它是 GLM 5.3 Flash。

但是，在此之前，就有人用证据推测，它背后的公司是智谱。本文告诉你，怎么找到模型的作者。

顺便说一句，这个模型的 Artificial Analysis 得分是57，高于 DeepSeek V4 Pro（得分53）。这真的很厉害，因为它的激活参数只有 18B，小于后者的 49B。而且，它的参数数量小，是可以在本地计算机跑的。

3、[Git worktree 使用详解](https://barrd.dev/article/parallel-development-without-the-headaches-using-git-worktree/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082402.webp)

Git 仓库一般只有一个工作目录，如果同时开发两三个功能，切换起来很不方便。

git worktree 命令可以新建多个工作目录，本文是使用详解。

4、[AliExpress 网页使用了 WebAudio 指纹识别](https://blog.laserphile.com/2026/08/aliexpress-webpage-keeping-multipoint.html)（英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082003.webp)

国外网友意外发现，AliExpress 首页有一段代码使用了 WebAudio API，导致每当打开这个页面，他的蓝牙耳机就会断掉。他仔细查了代码，发现这是为了识别用户。

5、[Google Workspace 的域名 Bug](https://blog.elis.cc/articles/google-workspace-thinks-my-domain-is-an-email-provider/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082403.webp)

谷歌的企业办公服务 Google Workspace，需要绑定用户域名，但是作者的域名就是无法通过。

作者去找客服，对方说了一堆废话，就是解决不了。最后，他实在受不了，自己查了前端源码，发现就是一个前端函数在检查域名，禁掉这个函数，域名就能绑定。谷歌的现状让人无语。

6、[Xorshift 生成随机数（](https://www.alanzucconi.com/2026/08/15/xorshift-generators/)英文）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082409.webp)

大家可能不知道，平时运算中的随机数，大部分是由 Xorshift 算法生成的：通过对种子值进行 Xor 运算和位移，得到随机数。本文介绍具体的实现细节。

## 工具

1、[Vanilla OS 3](https://vanillaos.org)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082601.webp)

一个基于 Debian 的 Linux 发行版，实现不可变（immutable）系统，所有操作都是原子化（atomic）操作。（[@NN708](https://github.com/ruanyf/weekly/issues/11356) 投稿）

2、[stock-tui](https://github.com/Folgerjun/stock-tui)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082602.webp)

终端查看 A 股 K 线图、市盈率、成交量的小工具。（[@Folgerjun](https://github.com/ruanyf/weekly/issues/11354) 投稿）

3、[Dark mode PDFs](https://veil.simoneamico.com/)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032702.webp)

一个很有意思的小工具网站，将上传的 PDF 文件反转颜色，即白底黑字变成黑底白字。

4、[Termio](https://github.com/termio-sh/termio)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082410.webp)

mac 版的 AI 编程开发环境（ADE），有配套的 iPhone 版本。（[@jiweiyuan](https://github.com/ruanyf/weekly/issues/11273) 投稿）

5、[PicLite](https://github.com/amiaoapp/PicLite)（图轻）

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082411.webp)

跨平台的图片压缩工具，支持本地文件夹监控、图片格式转换、批量压缩、添加水印、上传图床等功能。（[@amiaoapp](https://github.com/ruanyf/weekly/issues/11290) 投稿）

6、[Multi-Row Tabs](https://github.com/hezhizheng/multi-row-tabs)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082412.webp)

这个 Chrome 插件以多行平铺的形式，显示当前窗口的所有标签页。（[@hezhizheng](https://github.com/ruanyf/weekly/issues/11310) 投稿）

7、[InvoiceFlowAI](https://github.com/EthanYoQ/Invoice-Downloader)

开源的电子发票整理与报销的桌面工具，连接用户自己的 QQ 或 163 邮箱，批量收集邮件中的发票，完成 OCR 识别、分类归档，并生成 Excel 汇总。（[@EthanYoQ](https://github.com/ruanyf/weekly/issues/11327) 投稿）

8、[CozyClay](https://github.com/NomaDamas/CozyClay)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082501.webp)

在浏览器中搭建场景框架、摆放角色姿势、编写镜头运动和剪辑，然后交给 AI 视频模型更准确生成视频。（[@HaD0Yun](https://github.com/ruanyf/weekly/issues/11329) 投稿）

9、[Email.md](https://www.emailmd.dev/templates)

![](https://cdn.beekka.com/blogimg/asset/202603/bg2026032801.webp)

这个网站提供电子邮件模板，用户只需填入 MarkDown 格式，就会生成一封格式化的电子邮件。

10、[Minimalytics](https://github.com/nafey/minimalytics)

![](https://cdn.beekka.com/blogimg/asset/202503/bg2025032101.webp)

一个统计服务器，记录和监控各种事件，基于 Go 语言和 SQLite 数据库，内置 Web 界面。

## 资源

1、[星舰基地](https://www.spacex.com/sites/starbase-la)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082603.webp)

SpaceX 公司要在路易斯安那州新建一个“星舰基地”，这是它的官网，看上去就像科幻电影一样。

2、[漫游旧金山](https://sf.thijs.gg/)

![](https://cdn.beekka.com/blogimg/asset/202608/bg2026082503.webp)

一款网页游戏，让用户在实景的旧金山街景地图上漫游，可以指定地点，非常酷。

3、[城市道路](https://anvaka.github.io/city-roads/)（city road）

![](https://cdn.beekka.com/blogimg/asset/202412/bg2024122612.webp)

这个网站可以将某个城市的所有道路，变成一张线条图，支持缩放。

## 图片

1、[伦敦最小的雕塑](https://lookup.london/londons-smallest-public-sculptures/)

伦敦有好几处小型的公共雕塑，让人意想不到。

一条商业街的一楼街面最高处，有两只老鼠偷奶酪的雕塑。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051704.webp)

据说，这是为了纪念一个悲剧事件。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051705.webp)

19世纪时，两个工人在此处为了一块丢失的奶酪大打出手，闹出了命案，事后发现奶酪是被老鼠偷掉了。

伦敦还有一处老鼠之家的雕塑。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051706.webp)

这是因为这家店的店主发现，街道的门牌号少了一个，他就做了这个雕塑，把少掉的门牌号给了这个老鼠之家。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051707.webp)

下面是其他一些微型雕塑。

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051708.webp)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051709.webp)

![](https://cdn.beekka.com/blogimg/asset/202605/bg2026051710.webp)

## 文摘

1、[同质化网络](https://www.science.org/doi/10.1126/science.aei2409)

社交媒体的一个根本属性是它们会催生“同质性”网络。

同质性指的是用户会遇到相似的人。比如，观鸟爱好者会加入线上观鸟小组，保龄球爱好者会与其他保龄球爱好者聚会。

这样的后果就是，网络会把边缘人聚在一起。认为地球是平的的人，可以轻松地在网上建立联系，这在现实生活中根本不可能，因为相信地球是平的人寥寥无几，彼此遇不到。

同质性网络会扭曲人们对观点分布的认知。观点明明是少数的人，长期在同质性网络中，可能会误以为他们的观点代表了大多数人的共识，这称为虚假共识效应。

虚假共识效应会带来几个问题。（1）这可能会加剧参与者对少数派观点的坚信不疑。（2）当一个人误认为少数派观点被广泛接受时，就会对按照多数人意愿行事的制度感到不满意，可能会产生自己被社会排斥的感觉。

## 言论

1、

一个人有教养的表现，就是他可以享受最好的，也可以承受最差的。

-- [唐师曾](https://news.pku.edu.cn/xwzh/129-116805.htm)，本周去世的著名记者

2、

我们的世界并不是一个常常设身处地为他人着想的世界。但是，如果你能够做到，向一个10岁的孩子解释世界，或者设计一个80岁的老人可以打开的罐子，有时会让你更好地完成最初想要做的事情。

-- [《请用10岁小孩都能听懂的方式向我解释》](https://timharford.com/2026/08/explain-it-to-me-like-im-ten/)

3、

有人写了一篇《值班已成往事》，提出应该让 AI 来值班。只有当 AI 无法解决问题时，才应该让人类接手，而且应该由 AI 来呼叫人类。

-- [《与 AI 相关的可靠性事故即将发生》](https://surfingcomplexity.blog/2026/08/22/wild-ai-related-reliability-incidents-are-coming/)

4、

人们逐渐意识到，如果使用 AI 学习新知识，学习速度比传统方法快得多，因为 AI 非常擅长概括大量不同的信息。

但是，通过 AI 学习，大脑没有积极参与学习过程，对知识的理解和记忆不如传统方法。人脑的运作方式决定了，螺旋式学习是记忆知识的最佳方法之一。AI 直接给出了结果，让我们省略了中间的反复思考的步骤。

-- [《AI 和司机式知识》](https://www.aaron-gray.com/ai-and-chauffeur-knowledge/)

5、

如果房价暴跌，我会遭受损失，但也又有好处：我的孩子能住上更便宜的房子。没错，他们继承的遗产会减少，但他们将终生享受更便宜的住房。

-- [《CD 与邻避效应》](https://www.betonit.ai/p/cds-vs-nimby)

## 往年回顾

[最好懂的神经网络解释](https://www.ruanyifeng.com/blog/2025/08/weekly-issue-363.html)（#363）

[如果新加坡没有空调](https://www.ruanyifeng.com/blog/2024/08/weekly-issue-313.html)（#313）

[开源软件如何赚钱？](https://www.ruanyifeng.com/blog/2023/07/weekly-issue-263.html)（#263）

[知识孤岛，知识软件](https://www.ruanyifeng.com/blog/2022/07/weekly-issue-213.html)（#213）

（完）