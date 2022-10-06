# 形随意动官网2022

## 说明
都2022年了，是时候进行现代化改造了！

基于以下原因，首先选择了Hugo作为底层框架：
- 要部署在Github Pages上，且方便SEO优化
- 方便进行文章编辑生成，最好是基于markdown，不用再加入后台管理
- 完善的多语言支持
- 生态丰富，社区活跃

在此基础上，我们还想加入更多的现代特性，比如tailwind, react, vue，这就需要联动其他的打包工具。
这里我们选择了Vite，Webpack不符合我们的现代化目标。

随着Github Action的普及，也是时候开始CI/CD了。这里实现的是，无需手动上传build后产出，就能自动打包并部署到Github Pages上。


## 环境
- hugo-extended，该版本支持scss
- vite

hugo在生成静态网页时，会处理html中的scss：
- 对模板中的scss进行默认处理
- 对自定义localscss进行自定义处理（见配置文件）

vite用于对tailwind（调用postcss），和其他现代框架进行处理

## 快速参与
### 说明
master分支放的是项目代码，gh-pages分支是自动打包后产物

如果你使用windows，请手动去github上master分支下载最新的vite-hugo-plugin(或确保版本>3.0.5)并替换node_modules里的

### 打包产物快速启动
npx http-server -p 8888


## 一些细节
1. vite支持scss(sass)，但是本项目还是采用hugo将scss转化css后引入的方式（即不使用vite进行转换）。
原因是vite自带postcss-import，当在html中引入scss文件时，
    ```
    <style lang="scss" scoped>
        @import "/assets/localscss/members.scss";
    </style>
    ```
    会自动内联样式。一旦样式增加会导致体积不可控。
    另一个写法：
    ```
    <link rel="stylesheet" href="/css/members.css" />
    ```
    这个写法也能用，但是并没有充分利用hugo或者vite的特性，还得额外在`package.json`配置`sass`的监听才能转换成css，过于复杂。
    ```
    "dev:sass": "sass --watch localscss:static/css"
    ```

    最终选择了用hugo的特性，实例可见`layouts\shortcodes\display_members.html`

    参考文档：https://gohugo.io/hugo-pipes/introduction/
2. 本项目基础主题用的是loveit，位于themes文件夹，如果想修改，请将需要修改的文件按原相对路径放置到项目根目录中，就像本项目这样，不应直接改动原主题

## 参考链接
推荐在参与开发前浏览以下链接

主要参考

https://cloud.tencent.com/developer/article/1932812  
https://functional.style/hugo/general/tailwind/  
https://github.com/cromozooom/playground-hugo/tree/q69810554  
https://medium.com/gumgum-tech/faster-development-experience-with-vite-hugo-and-preact-c08cbcfce5fb  
https://zhuanlan.zhihu.com/p/568764664  
https://stackoverflow.com/questions/47749732/hugo-include-node-module-in-static-js  

次要参考  
https://juejin.cn/post/6854573220306255880  
https://stackoverflow.com/questions/37261016/npm-plugin-onchange-does-not-recognize-scss-files-changes





## 更新记录:
2022.10.1 Wey
- [x] 迁移到Hugo上，并进行现代化改造，加入CI/CD

2018.7.9 流星
- [x] \(index.html\)Header，Banner，Section-One完工
- [x] \(index.html\)同时将布局策略改为Flex和padding和margin，放弃传统position

---

2018.7.10 流星
- [x] \(index.html\)完善Navbar，Section-One对手机的兼容
- [x] \(index.html\)Section-Two整体设计完工，但未实现对手机的兼容

---

2018.7.11 流星
- [x] \(index.html\)完善Section-Two对手机的兼容

---

2018.7.12 秋风
- [x] \(index.html\) Code-Review \(确保代码缩进无误\)
- [x] \(index.html\) 页面加载速度优化\(CSS/JS Preload\)
- [x] \(index.html\) 修复 Section1 背景图片在部分手机上显示超出页面范围的Bug
- [x] \(index.html\) 设置导航栏固定在页面上方


---


2018.7.12 流星
- [x] \(index.html\)  Footer完工和完成对手机的兼容
- [x] \(members.html\)  成员页面正式开始设计，初步设计完成

---

2018.7.13 秋风
- [x] \(index.html\) 修复Section 1手机显示靠右, 难看的问题
- [x] \(ALL\) 动态加载Footbar完毕
- [x] \(members.html\) 动态加载成员内容完毕
- [x] \(index.html\) 动态加载首页Slides完毕
- [x] \(newsdisplay.html\) 动态新闻页面加载\(Implemented 2018-7-14\)


---


2018.7.12 流星
- [x] \(index.html\)  完成新闻版块


--- 
2018.7.14 秋风
- [x] \(newsdisplay.html\) 动态新闻加载完毕
- [x] \(index.html\) 动态新闻列表加载
- [x] \(members.html\) 部分成员信息更改

---
2018.7.15 秋风
- [x] \(common_footer.html\) 完成底部Footer内容
- [x] \(cooperation.html\) 完成合作页面
- [x] \(js\homePageNewsListDisplay.js\) 设置新闻列表加载顺序为从最新到最旧

---
2018.7.20 秋风
- [x] \(index.html\) 增加首页语言检测跳转