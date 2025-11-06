# SQLYYC内勤工具箱 🛠️

高效办公工具集合，专为内勤工作场景设计，整合两大核心工具，纯前端实现无需后端依赖，支持离线使用，数据本地处理保护隐私安全。

## 📦 工具清单

### 1. Excel批量超链接工具
- 🖥️ 支持Windows/macOS双系统路径自动适配（反斜杠\ / 正斜杠/）
- 🔗 批量生成Excel超链接公式，支持含空格的路径和文件名
- ⚡ 多行文件名批量处理，实时预览生成结果
- 📋 一键复制到剪贴板，直接粘贴到Excel使用
- ⌨️ 快捷键支持（Ctrl+Enter生成、Ctrl+Shift+C复制等）
- 📝 自动识别系统类型，提供智能提示

### 2. 品规数量分类汇总工具
- 📊 支持空格、制表符、多空格等多种分隔符自动识别
- 🔢 相同品规自动合并，数量累加汇总（支持小数精度）
- 🎯 可配置功能：生成序号列、去除零数量行、按品规排序
- 📋 双复制模式：原始汇总结果 / 分两列结果（适配Excel排版）
- 📥 导出Excel文件（含日期命名优化）
- 🔍 无效数据检测与友好提示

## 🌐 在线使用
直接访问GitHub Pages部署地址，无需下载安装：  
👉 [https://niuxiangchen.github.io/sqlYYC-office-tools](https://niuxiangchen.github.io/sqlYYC-office-tools)

## 📱 适配场景
- 电脑端（Chrome/Edge/Firefox等现代浏览器）
- 平板设备（响应式布局自适应）
- 离线使用（下载所有文件到本地，直接打开index.html）

## 🚀 本地部署/使用
1. 克隆本仓库到本地：
   ```bash
   git clone https://github.com/niuxiangchen/sqlYYC-office-tools.git
