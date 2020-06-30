<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2"/>
<globals/>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="leo.20180902120538.1"><vh>@settings</vh>
<v t="leo.20180902120538.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="leo.20180902120538.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="leo.20180902120523.1"><vh>編輯 reveal</vh>
<v t="leo.20180902120523.2"><vh>@path ./../reveal</vh>
<v t="leo.20180902120523.3"><vh>@clean index.html</vh>
<v t="leo.20180902120523.4"><vh>html</vh>
<v t="leo.20180902120523.5"><vh>head</vh></v>
<v t="leo.20180902120523.6"><vh>body</vh>
<v t="leo.20180902120523.7"><vh>reveal div</vh>
<v t="leo.20180902120523.8"><vh>slides div</vh>
<v t="leo.20180902120523.9"><vh>封面投影片</vh>
<v t="leo.20180902120523.10"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20180902120523.11"><vh>W1-W5</vh>
<v t="leo.20180902120523.12"><vh>內容</vh></v>
</v>
<v t="leo.20200701023346.1"><vh>亂數分組</vh>
<v t="leo.20200701023346.2"><vh>內容</vh></v>
</v>
<v t="leo.20200701023352.1"><vh>W6-W10</vh>
<v t="leo.20200701023352.2"><vh>投影片快捷鍵</vh></v>
</v>
<v t="leo.20200701023349.1"><vh>webots介紹翻譯</vh>
<v t="leo.20200701023349.2"><vh>內容</vh></v>
</v>
<v t="leo.20200701023357.1"><vh>onshape繪圖</vh>
<v t="leo.20200701023357.2"><vh>內容</vh></v>
</v>
<v t="leo.20200701023355.1"><vh>文章感想</vh>
<v t="leo.20200701023355.2"><vh>內容</vh></v>
</v>
<v t="leo.20200701023520.1"><vh>W11-W15</vh>
<v t="leo.20200701023520.2"><vh>投影片快捷鍵</vh></v>
</v>
<v t="leo.20180902120523.13"><vh>遇到問題</vh>
<v t="leo.20180902120523.14"><vh>問題1</vh>
<v t="leo.20180902120523.15"><vh>內容</vh></v>
</v>
<v t="leo.20180902120523.16"><vh>問題2</vh>
<v t="leo.20180902120523.17"><vh>內容</vh></v>
</v>
<v t="leo.20180902120523.18"><vh>問題3</vh>
<v t="leo.20180902120523.19"><vh>內容</vh></v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="leo.20180902120523.1"></t>
<t tx="leo.20180902120523.10">## 協同產品設計實習

### 40723153

&lt;small&gt;
Created by [40723153](https://40723153.github.io/cd2020/content/index.html)
&lt;/small&gt;
</t>
<t tx="leo.20180902120523.11">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20180902120523.12">## 每週進度

 * W1第一週是說明學期任務和建立倉儲
 * W2 更新python至3.8.2版本
 * W3研究亂數分組規則
 * W4整理亂數分組的報告
 * W5分配webots翻譯內容
</t>
<t tx="leo.20180902120523.13">&lt;section&gt;
@others
&lt;/section&gt;

</t>
<t tx="leo.20180902120523.14">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
&lt;!-- 請注意, @others 不可以內縮 --&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;



						
</t>
<t tx="leo.20180902120523.15">## 網頁錯誤
&lt;small&gt;
[網頁錯誤](https://40723153.github.io/cd2020/content/%E7%B6%B2%E9%A0%81%E9%8C%AF%E8%AA%A4.html)
&lt;/small&gt;
&lt;small&gt;
在某次推送完畢之後動態網頁就無法打開編輯
發現無法解決問題詢問老師後從server端檢查
發現是推送和python版本錯誤,還原成前一個版本後更改設定
重新執行就修復完成
&lt;/small&gt;

</t>
<t tx="leo.20180902120523.16">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
&lt;!-- 請注意, @others 不可以內縮 --&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;



						
</t>
<t tx="leo.20180902120523.17">## 協同網頁推送失敗
&lt;small&gt;
[協同網頁推送失敗](https://40723153.github.io/cd2020/content/%E5%8D%94%E5%90%8C%E7%B6%B2%E9%A0%81%E6%8E%A8%E9%80%81.html)
&lt;/small&gt;
&lt;small&gt;
在12~16週老師每週都會隨機抽取同學進行分組協同編輯網頁

但每次推送常會有不小心將倉儲或是網頁爆炸的情況

所以在推送之前需要的步驟有以下幾點
* git clone 倉儲 → 下載想要編輯的倉儲到近端
* 在進端進入該倉儲並git submodule init / git submodule update → 將老師遠端的cmsimde下載入倉儲內的cmsimde資料夾
* 在編輯完git pull → 確認近端沒有衝突或是無法推送的檔案
* 輸入git status → 確認遠端和近端即將要推送的資料有無錯誤
&lt;/small&gt;
</t>
<t tx="leo.20180902120523.18">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20180902120523.19">## 無法開啟leo檔
&lt;small&gt;
[無法開啟leo](https://40723153.github.io/cd2020/content/leo%E6%89%93%E4%B8%8D%E9%96%8B.html)
&lt;/small&gt;
&lt;small&gt;
在準備編輯reval簡報時發現leo檔打不開

使用 pip list 檢查發現是未下載最新的leo檔

所以使用 pip install leo==6.2.1 指定安裝 leo 6.2.1 版本

即可成功開啟leo
&lt;/small&gt;</t>
<t tx="leo.20180902120523.2"></t>
<t tx="leo.20180902120523.3">@language xml
@tabwidth -4
@others

</t>
<t tx="leo.20180902120523.4">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
@others
&lt;/html&gt;
</t>
<t tx="leo.20180902120523.5">&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
&lt;title&gt;
CMSimfly 網際內容管理
&lt;/title&gt;
    &lt;meta name="description" content="A framework for easily creating beautiful presentations using HTML"&gt;
    &lt;meta name="author" content="Hakim El Hattab"&gt;
    
    &lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
    &lt;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"&gt;
    
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;
    
    &lt;link rel="stylesheet" href="css/reveal.css"&gt;
    &lt;link rel="stylesheet" href="css/theme/black.css" id="theme"&gt;
    
    &lt;!-- Theme used for syntax highlighting of code --&gt;
    &lt;link rel="stylesheet" href="lib/css/zenburn.css"&gt;

    &lt;!-- Printing and PDF exports --&gt;
    &lt;script&gt;
        var link = document.createElement( 'link' );
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css';
        document.getElementsByTagName( 'head' )[0].appendChild( link );
    &lt;/script&gt;

    &lt;!--[if lt IE 9]&gt;
    &lt;script src="lib/js/html5shiv.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;
&lt;/head&gt;

</t>
<t tx="leo.20180902120523.6">&lt;body&gt;
@others
&lt;script src="lib/js/head.min.js"&gt;&lt;/script&gt;
&lt;script src="js/reveal.js"&gt;&lt;/script&gt;
&lt;script&gt;
        // More info https://github.com/hakimel/reveal.js#configuration
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,

            transition: 'slide', // none/fade/slide/convex/concave/zoom

            // More info https://github.com/hakimel/reveal.js#dependencies
            dependencies: [
                { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
                { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                { src: 'plugin/zoom-js/zoom.js', async: true },
                { src: 'plugin/notes/notes.js', async: true },
                { src: 'plugin/math/math.js', async: true }
            ]
        });
&lt;/script&gt;
&lt;/body&gt;

</t>
<t tx="leo.20180902120523.7">&lt;div class="reveal"&gt;
@others
&lt;/div&gt;

</t>
<t tx="leo.20180902120523.8">&lt;!-- Any section element inside of this container is displayed as a slide --&gt;
&lt;div class="slides"&gt;
@others
&lt;/div&gt;

</t>
<t tx="leo.20180902120523.9">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20180902120538.1"></t>
<t tx="leo.20180902120538.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="leo.20180902120538.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="leo.20200701023346.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200701023346.2">## 亂數分組
 ### 亂數分組可以大致上分為4個步驟
 &lt;small&gt;
 * 1.抓出學員資料
 利用Python的requests模組來抓取網頁上的學生名單
 * 2.將學生名單轉為文字檔
 將抓取到的學生名單進行轉換(文字檔才可進行轉換數列)
 * 3.再將文字檔內容轉為數列
 將轉換後的文字檔間使用空白格或頓號進行區隔
 * 4.使用random模組將數列亂數分組
 將轉換好的數列進行隨機排列分組
(random主要是運用在將函數中的順序打亂)
&lt;/small&gt;

</t>
<t tx="leo.20200701023349.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200701023349.2">## webots介紹翻譯

我分配到的章節有
* Brake [制動器](https://40723153.github.io/cd2020/content/Brake%20%E5%88%B6%E5%8B%95%E5%99%A8.html)
* Connector [連接器](https://40723153.github.io/cd2020/content/Connector%20%E9%80%A3%E6%8E%A5%E5%99%A8.html)
* Display [顯示](https://40723153.github.io/cd2020/content/Display%20%E9%A1%AF%E7%A4%BA.html)
* Emitter [發射極](https://40723153.github.io/cd2020/content/Emitter%20%E7%99%BC%E5%B0%84%E6%A5%B5.html)



</t>
<t tx="leo.20200701023352.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200701023352.2">## 每週進度

 * W6 繳交翻譯內容
 * W7 期中影片繳交
 * W8研究亂數分組規則
 * W9了解虛擬主機並安裝
 * W10 IPV4與IPV6設定

</t>
<t tx="leo.20200701023355.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200701023355.2">## Top 0感想

&lt;small&gt;
合作不只是行為更是一種未來的趨勢，從古至今合作的觀念一直是被推崇的，從【單絲不成線，獨木不成林】 、【萬人操弓，共射一招，招無不中】。等諺語就能知道。在工作上一個人或許可以迅速的決定所有事情，但一個人絕對比不上數個人加起來的能力，透過合作讓每個人發揮自己的特長讓效率以倍數增加。看完這個章節讓我更加理解到協同的重要性，而在協同前也需要做許多的準備，無論是個人心態的調整抑或是選用協同的工具都是非常重要的，我也學到了很多協同的優點，讓我印象深刻的是能讓客戶參與產品設計過程，透過讓客戶的參與能加速溝通的效率，更能讓消費端理解設計者的用意和進度過程，創造雙贏的局面。
&lt;/small&gt;</t>
<t tx="leo.20200701023357.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200701023357.2">## Onshape繪圖
繪圖影片
&lt;iframe src="https://youtu.be/Qg9Jmt8famM" width="640" height="492" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen&gt;&lt;/iframe&gt;

</t>
<t tx="leo.20200701023520.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200701023520.2">## 每週進度

 * W11 了解onshape線上組配方式
 * W12 了解虛擬主機ubuntu模擬方式
 * W13 虛擬主機ubuntu網路設定
 * W14 學習IPV6下以及IPV4下如何使用wsgi
 * W15 進行模擬車子


</t>
</tnodes>
</leo_file>
