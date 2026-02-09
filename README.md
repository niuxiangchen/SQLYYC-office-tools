# SQLYYC内勤工具箱

高效办公工具集合，专为内勤工作场景设计，整合三大核心工具，纯前端实现无需后端依赖，支持离线使用，数据本地处理保护隐私安全。

## 📦 工具清单

### 1. Excel批量超链接工具
- 🖥️ 支持Windows/macOS双系统路径自动适配（反斜杠\ / 正斜杠/）
- 🔗 批量生成Excel超链接公式，支持含空格的路径和文件名
- ⚡ 多行文件名批量处理，实时预览生成结果
- 📋 一键复制到剪贴板，直接粘贴到Excel使用

### 2. 品规数量分类汇总工具
- 📊 支持空格、制表符、多空格等多种分隔符自动识别
- 🔢 相同品规自动合并，数量累加汇总（支持小数精度）
- 🎯 可配置功能：生成序号列、去除零数量行、按品规排序
- 📋 双复制模式：原始汇总结果 / 分两列结果

### 3. AI回答转公文格式工具
- 📄 适配党政机关标准公文格式（字体、行距、段落、标题层级）
- 🤖 智能解析AI生成文本，自动拆分段落/调整缩进/规范标点
- ✨ 一键格式化：标题居中、正文首行缩进2字符、落款对齐等
- 📥 导出为docx格式（保留公文格式样式）

## 🌐 在线使用

直接访问 GitHub Pages：
👉 [https://niuxiangchen.github.io/SQLYYC-office-tools](https://niuxiangchen.github.io/SQLYYC-office-tools)

## 📱 适配场景

- 电脑端（Chrome/Edge/Firefox等现代浏览器）
- 平板设备（响应式布局自适应）
- 离线使用（下载所有文件到本地，直接打开index.html）

## 🚀 本地部署/使用

1. 克隆本仓库到本地：
   ```bash
   git clone https://github.com/niuxiangchen/SQLYYC-office-tools.git
   ```
2. 进入仓库目录，直接打开 `index.html` 文件即可使用所有工具
3. 如需离线使用，确保将所有工具页面（`hyperlink-tool.html`/`summary-tool.html`/`AI-Response-to-Official-Document-Format-Conversion-Tool.html`）及依赖资源下载完整

## 📊 访问量统计

本项目使用[不蒜子](http://busuanzi.ibruce.info/)提供访问量统计功能。

不蒜子是免费的纯静态页面访问量统计工具，无需注册、无需后端，引入一段JS即可实现统计。

