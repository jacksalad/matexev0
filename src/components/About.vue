<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card title="About" v-katex>
          <v-card-text>
            <div v-html="renderedMarkdown" class="markdown"></div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MarkdownIt from "markdown-it";

const mdval = `
> 你希望人生是一道数学题吗？——MaTeXe 创始人

# 关于

**迈泰数学库**（MaTeXe Mathematics Library，简称 MaTeXe）是一个**数学教学平台**，旗下产品有 MaTeXe 宏包、迈泰题库、MaTeXe 标准、MaTeXe 语言、MaTeXe 协议、答疑园地等，助力数学教育数字化，实现“人人都能获得良好的数学教育，不同的人在数学上得到不同的发展”。迈泰数学库供 **MaTeXee**（学生）“**既见树木，又见森林**”，供**MaTeXer**（一线数学教师与数学教育研究人员）**积累教学纹理，装修数学大厦**。

MaTeXe 读音为[Mæteks]（用 Gimson 音标标注）。其中“Ma”部分与“美”读音“相近”，代表 MaTeXe 为数学教育人提供“鉴赏美·发现美·创造美”交流的平台。

MaTeXe题库起源于**华东师范大学**数学学院双创项目，由**孟宪承书院**的师范生组成的团队建设并长期维护。

![ECNU](https://saladcloud.s3.bitiful.net/FILE/MaTeXe/img/ECNUlogo.svg)

## 解决方案

### MaTeXe 宏包

**MaTeXe 宏包**（曾用名 ZLYmath）助力数学符号的$\\LaTeX$编译，完成数学教、学材料及数学教育研究材料的 PDF 排版，便于打印。

### MaTeXe 题库

**迈泰题库**（MaTeXe Question Bank）是一个基于$\\LaTeX$的数学题库，目前主要收录**初等数学**、**中等数学**的题目，也收录**现代数学**（高等数学）的题目。题目以纯文本格式（MaTeXe 语言）存储与传播，经渲染后在网页端、桌面端呈现，经编译后生成题集/试卷打印版。

### MaTeXe 标准

**MaTeXe 标准**（MaTeXe Standard）是数学内容排印的补充规则，主要用于中文环境。

### MaTeXe 语言

**MaTeXe 语言**（MaTeXe Language）是 MaTeXe 通用的数学教学设计标记语言，支持数学内容的 Web 前端渲染和基于大模型的纹理搜索（包括但不限于知识元检索）。

### MaTeXe 协议

**MaTeXe 协议**的补充内容包括 MaTeXe 资源库、MaTeXe 社区、MaTeXe 认证和MaTeXe 奖励计划，旨在促进数学教育和研究的发展，提供优质的数学教学资源，鼓励交流和分享，评估资源质量，并奖励在数学教育领域做出杰出贡献的个人和团队。

### 答疑园地

另外，MaTeXe 协议还提供了一个答疑园地，旨在为学生和教师提供一个互动交流的平台。在答疑园地中，学生可以提出数学问题，而经验丰富的教师和其他社区成员可以提供解答和指导。这个答疑园地不仅可以帮助学生解决疑惑，还可以促进学习者之间的互助和合作，共同提高数学学习的效果和理解能力。通过这个答疑园地，MaTeXe 协议致力于建立一个积极互动的学习社区，为数学学习者提供更多的支持和帮助。

## 理念

我们追求**自由软件理念**（Free Software Philosophy），自由软件理念强调用户对软件的自由使用、研究、修改和分发的权利。我们希望更多人投入到智能题库的开发中，让学习者提高学习效率。

### 内容

助力研发、创作与表达**数学内容**（mathematics content），支持：

- **用户产出内容**（user-generated content，UGC）；

- **专业产出内容**（professionally-generated content，PGC）；

- **专业用户产出内容**（professional-user-generated content）；

- **职业产出内容**（occupationally-generated content，OGC）；

- **品牌生产内容**（brand-generated content，BGC）；

- **人工智能生成内容**（artificial-intelligence-generated content，AIGC）。

也欢迎下列主体入驻：

- **多频道网络**（multi-channel network，MCN）；

- **关键意见领袖**（key opinion leader，KOL）。

### 复用

- 数学内容以**纯文本**（plain text）格式存储与传播，坚持**内容与格式分离**（Separation of content and presentation，或 separation of content and style)；

- 杜绝“重复发明轮子”。

### 标准

数学内容排版遵照国家标准与相关规范。对于尚未有规范规定的情况，遵照 **MaTeXe 标准**。

### 知识产权

借助 **MaTeXe 协议**与区块链技术，为行业内数学题目的知识产权问题提供统一解决方案。

### 纹理

**纹理**（texture，又译 pattern）概念源于**分层表示学习**（layered representations learning）（又称**层级表示学习**（hierarchical representations learning）），即**心理表征**（mental representation）。

**内容是宏观结构，纹理是微观结构**。

**数学纹理**（mathematical texture）是数学学科核心素养的升级提法，包括但不限于**四基**（基础知识、基本技能、基本思想和**基本活动经验**）。

**教学纹理**（teaching texture）指一线教师与教育研究人员对教学的心理表征。

## 寓意

### “迈泰”

1. “迈”取自毛泽东《忆秦娥·娄山关》“雄关漫道真如铁，而今迈步从头越”；

1. “泰”取自韦庄《与东吴生相遇》“且对一尊开口笑，未衰应见泰阶平”。

### MaTeXe

1. “Ma”代表平台的主题色——洋红（magenta），又取自前缀 macro-，代表**宏观**；

1. “MaT”取自 mathematics 前3个字母；

1. “MaTe”即 mate——MaTeXe 是您的好伴侣；

1. “aTe”即 ate，是 eat 的过去式，代表吃水不忘挖井人；

1. “TeX”表明数学库基于排版系统$\\TeX$与$\\LaTeX$，也代表纹理（texture），即**微观**结构；

1. “eXe”取自 exercise，代表习题，又取自 executable，代表（计算机的）可执行文件。

> 民亦劳止，汔可小康。惠此中国，以绥四方。——《诗经·大雅·生民之什·民劳》

> 我们仅能前瞻不远，却有很多事情要做。——阿兰·图灵

如果您对迈泰数学库有任何批评/建议，请联系 [jackonessalad@qq.com](mailto:jackonessalad@qq.com)。
`;

const md = new MarkdownIt();
const mdrd = md.render(mdval);

export default {
  data() {
    return {
      markdown: mdval,
      renderedMarkdown: mdrd,
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: red;
}

h2 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}

h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

h4 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

h5 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

h6 {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  margin-bottom: 10px;
}

ul,
ol {
  margin-bottom: 10px;
  padding-left: 20px;
}

blockquote {
  margin-bottom: 10px;
  padding: 10px;
  border-left: 3px solid #ccc;
  background-color: #f8f8f8;
}

pre {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f8f8f8;
  overflow: auto;
}

code {
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  background-color: #f8f8f8;
  padding: 2px 4px;
}

a {
  color: #007bff;
  text-decoration: none;
}

em {
  font-style: italic;
}

strong {
  font-weight: bold;
}
</style>
