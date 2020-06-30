var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': '直播紀錄', 'text': '', 'tags': '', 'url': '直播紀錄.html'}, {'title': '第二週', 'text': '進行任務分派,並以小組方式完成assiganment 1 \n \n 課程討論直播紀錄 \n \n', 'tags': '', 'url': '第二週.html'}, {'title': '第三週', 'text': '\n', 'tags': '', 'url': '第三週.html'}, {'title': '第五週', 'text': '分配翻譯段落並將完成檔案上傳至個人網頁 \n \n 討論課程直播紀錄 \n \n', 'tags': '', 'url': '第五週.html'}, {'title': '第六週', 'text': '\n', 'tags': '', 'url': '第六週.html'}, {'title': '第七週', 'text': '\n', 'tags': '', 'url': '第七週.html'}, {'title': '第八週', 'text': '1.利用onshape繪製車子(不可過於簡易,要有懸吊系統跟一些複雜度) (1)了解零件檔案格式及如何轉檔導入coppeliasim (2)轉檔格式有幾個版本需要了解 \n 協同人員:40723104,40723107,40723122,40723140,40723149,40723151,40723153,40723154 \n 2.利用 CoppeliaSim Python Remote API 控制四輪車 (1)了解 Python Remote API程式,並且能夠實際應用,對車子進行遠端遙控 \n 協同人員:40723114,40723115,40723118,40723123,40723155 \n 3.全體人員須了解 Ubuntu 20.04 虛擬主機 (1) 了解 NAT ,讓虛擬主機可以上網,做內外IP的轉換 \n (2)了解 Brid ged Adapter ,可建立獨立service,希望藉由兩片網卡,可以對外連線 \n (3)了解 Host - only Adapte \n 繪圖內容分配 \n \n', 'tags': '', 'url': '第八週.html'}, {'title': '第九週', 'text': '\n', 'tags': '', 'url': '第九週.html'}, {'title': '第十週', 'text': '\n', 'tags': '', 'url': '第十週.html'}, {'title': '第十一週', 'text': '\n', 'tags': '', 'url': '第十一週.html'}, {'title': '第十二週', 'text': '\n', 'tags': '', 'url': '第十二週.html'}, {'title': '第十三週', 'text': '', 'tags': '', 'url': '第十三週.html'}, {'title': '第十四週', 'text': '\n', 'tags': '', 'url': '第十四週.html'}, {'title': '第十五週', 'text': '\n', 'tags': '', 'url': '第十五週.html'}, {'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': 'w1', 'text': '本週進度 \n 介紹學期目標和進度和建立倉儲cd2020和網頁 \n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '本週進度 \n 更新python至3.8.2 \n \n 透過這個網站下載\xa0 Windows x86-64 executable installe r 的版本 \n 完成下載後開啟並選擇下方的 Customize installation \n \n 並選擇安裝位置後將python安裝到隨身碟中的Y槽裡 \n 並使用start_mdecourse.bat 批次檔 \n 將 批次檔中的py373改為安裝python 3.8.2版本的資料夾 \n 並將新版本的資料夾命名為py382即可完成這次更新 \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '本週進度 \n 以小組方式進行亂數分組研究 以下是程式碼代表的內容如下 \n 1. random.random() \n \u3000\u3000random.random()方法返回一個隨機數，其在0至1的範圍之內，以下是其具體用法： \n \u3000\u3000import random \n \u3000\u3000print (“隨機數: “, random.random()) \n \u3000\u3000輸出結果：0.22867521257116 \n 2. random.uniform() \n \u3000\u3000random.uniform()是在指定範圍內生成隨機數，其有兩個引數，一個是範圍上限，一個是範圍下線，具體用法如下： \n \u3000\u3000import random \n \u3000\u3000print (random.uniform(2, 6)) \n \u3000\u3000輸出結果：3.62567571297255 \n 3. random.randint() \n \u3000\u3000random.randint()是隨機生成指定範圍內的整數，其有兩個引數，一個是範圍上限，一個是範圍下線，具體用法如下： \n \u3000\u3000import random \n \u3000\u3000print (random.randint(6,8)) \n \u3000\u3000輸出結果：8 \n 4. random.randrange() \n \u3000\u3000random.randrange()是在指定範圍內，按指定基數遞增的集合中獲得一個隨機數，有三個引數，前兩個引數代表範圍上限和下限，第三個引數是遞增增量，具體用法如下： \n \u3000\u3000import random \n \u3000\u3000print (random.randrange(6, 28, 3)) \n \u3000\u3000輸出結果：15 \n 5. random.choice() \n \u3000\u3000random.choice()是從序列中獲取一個隨機元素，具體用法如下： \n \u3000\u3000import random \n \u3000\u3000print (random.choice(“www.jb51.net”)) \n \u3000\u3000輸出結果：o \n 6. random.shuffle() \n \u3000\u3000random.shuffle()函式是將一個列表中的元素打亂，隨機排序，具體用法如下： \n \u3000\u3000import random \n \u3000\u3000num = [1, 2, 3, 4, 5] \n \u3000\u3000random.shuffle(num) \n \u3000\u3000print (num) \n \u3000\u3000輸出結果：[3, 5, 2, 4, 1] \n 7. random.sample() \n \u3000\u3000random.sample()函式是從指定序列中隨機獲取指定長度的片段，原有序列不會改變，有兩個引數，第一個引數代表指定序列，第二個引數是需獲取的片段長度，具體用法如下： \n \u3000\u3000import random \n \u3000\u3000num = [1, 2, 3, 4, 5] \n \u3000\u3000sli = random.sample(num, 3) \n \u3000\u3000print (sli) \n \u3000\u3000輸出結果：[2, 4, 5] \n 參考資料: https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/357241/ \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w6', 'text': '本週進度 \n 進行小組直播討論,分配工作內容 : 翻譯 \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '本週是assiganmant2截止時間,這週課程也是採用線上教學模式,老師進行組別隨機抽點直播 \n \n 直播紀錄影片 \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w9', 'text': '紙本筆記 \n \n', 'tags': '', 'url': 'w9.html'}, {'title': 'w12', 'text': '這週老師開始進行隨機分組協同編輯網頁 當被抽到時系統會寄信通知你 \n \n ▲通知協同信件 \n \n ▲小組倉儲 \n 我們要學習和不同的組員在短時間內進行協同,並且要避免將倉儲推爆 \n 主要任務是在網頁上放上自己的本週進度,但因為是第一週實驗所以只放上個人資訊就沒時間了 \n \n ▲小分組網頁 \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '\n ▲抽中的通知信 \n 這週是第二週 已經較為熟悉操作方式 \n 一樣是需要將自己的進度放置於網頁並盡量不造成衝突 \n \n ▲小組倉儲 \n 小分組倉儲: https://github.com/mdecourse/cdaw13-1 \n 小分組網頁: http://mde.tw/cdaw13-1/content/index.html \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '\n \n ▲抽中的通知信 \n 老師的抽取系統是不會排除已經抽中的人,所以有可能會一次被抽中兩組的情況,此時只需要選擇一組去做分組作業即可 : ) \n \n ▲小分組倉儲 \n 小分組倉儲: https://github.com/mdecourse/cdaw14-3 \n 小分組網頁: http://mde.tw/cdaw14-3/content/index.html \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': '\n 小分組倉儲: https://github.com/mdecourse/cdaw15- 1 \n 小分組網頁: http://mde.tw/cdaw15-1/content/index.html', 'tags': '', 'url': 'w15.html'}, {'title': 'w16', 'text': '\n 小分組倉儲: https://github.com/mdecourse/cdaw16- 2 \n 小分組網頁: http://mde.tw/cdaw16-2/content/index.html \n', 'tags': '', 'url': 'w16.html'}, {'title': 'w17', 'text': '期末影片 \n', 'tags': '', 'url': 'w17.html'}, {'title': 'Assiganment1', 'text': '', 'tags': '', 'url': 'Assiganment1.html'}, {'title': '更新python', 'text': '更新python至3.8.2 \n \n 網站網址 :\xa0 https://www.python.org/downloads/release/python-382/ \n 透過這個網站下載\xa0 Windows x86-64 executable installe r 的版本 \n 完成下載後開啟並選擇下方的 Customize installation \n \n 並選擇安裝位置後將python安裝到隨身碟中的Y槽裡 \n 並使用start_mdecourse.bat 批次檔 \n 將 批次檔中的py373改為安裝python 3.8.2版本的資料夾 \n 並將新版本的資料夾命名為py382即可完成這次更新 \n', 'tags': '', 'url': '更新python.html'}, {'title': '亂數分組', 'text': '亂數分組的流程大致可以分為4個步驟 \n 1 抓出學員資料 \n 利用Python的requests模組來抓取網頁上的學生名單 \n 2 將學生名單轉為文字檔 \n 將抓取到的學生名單進行轉換(文字檔才可進行轉換數列) \n 3 再將文字檔內容轉為數列 \n 將轉換後的文字檔間使用空白格或頓號進行區隔 \n 4 使用random模組將數列亂數分組 \n 將轉換好的數列進行隨機排列分組 \n (random 主要是 運用在將函數中的順序打亂) \n \n \n', 'tags': '', 'url': '亂數分組.html'}, {'title': 'Assiganment2', 'text': '', 'tags': '', 'url': 'Assiganment2.html'}, {'title': 'Top 0感想', 'text': '40723153 吳佳穎 \n 合作不只是行為更是一種未來的趨勢，從古至今合作的觀念一直是被推崇的，從【單絲不成線，獨木不成林】 、【萬人操弓，共射一招，招無不中】。等諺語就能知道。在工作上一個人或許可以迅速的決定所有事情，但一個人絕對比不上數個人加起來的能力，透過合作讓每個人發揮自己的特長讓效率以倍數增加。看完這個章節讓我更加理解到協同的重要性，而在協同前也需要做許多的準備，無論是個人心態的調整抑或是選用協同的工具都是非常重要的，我也學到了很多協同的優點，讓我印象深刻的是能讓客戶參與產品設計過程，透過讓客戶的參與能加速溝通的效率，更能讓消費端理解設計者的用意和進度過程，創造雙贏的局面。 \n', 'tags': '', 'url': 'Top 0感想.html'}, {'title': 'onshape繪圖', 'text': '作業其中一項是需要在onshape上繪圖,並協同共用零件進行組裝 \n 雖然沒有被分配到需要繪製零件但仍舊可以自己進行練習 \n 學習繪圖和共用的方法 \n \n ▲工作分配圖 \n \n ▲練習繪製各式零件 \n \n ▲繪圖練習影片 \n', 'tags': '', 'url': 'onshape繪圖.html'}, {'title': 'webots介紹翻譯', 'text': '', 'tags': '', 'url': 'webots介紹翻譯.html'}, {'title': 'Brake 制動器', 'text': '制動器 \n \n Description 描述 \n A\xa0 Brake \xa0 node can be used in a mechanical simulation in order to change the friction of a joint. The \xa0 Brake \xa0 node can be inserted in the \xa0 device \xa0 field of a \xa0 HingeJoint , a \xa0 Hinge2Joint , a \xa0 SliderJoint , or a \xa0 Track . \n 可以在機械仿真中按順序使用制動節點 改變關節的摩擦力。 制動節點可以插入鉸鏈接頭，鉸鏈雙接頭與滑塊關節或軌道。 \n 剎車功能 \n \n Descriptionaul 描述 \n set the damping constant coefficient of the joint and get the type of brake \n The \xa0 wb_brake_set_damping_constant \xa0 function sets the value of the dampingConstant coefficient (Ns/m or Nms) of the joint. If any dampingConstant is already set using\xa0 JointParameters \xa0the resulting dampingConstant coefficient is the sum of the one in the\xa0 JointParameters \xa0and the one set using the \xa0 wb_brake_set_damping_constant \xa0 function. \n The \xa0 wb_brake_get_type \xa0 function returns the type of the brake. It will return \xa0 WB_ROTATIONAL \xa0 if the sensor is associated with a\xa0 HingeJoint \xa0or a\xa0 Hinge2Joint \xa0node, and \xa0 WB_LINEAR \xa0 if it is associated with a\xa0 SliderJoint \xa0or a\xa0 Track \xa0node. \n 設置關節的阻尼常數係數並獲得制動器的類型 \n \xa0wb_brake_set_damping_constant \xa0 為函數設置關節的阻尼常數係數的值（Ns / m或Nms）。如果已經使用JointParameters設置了任何阻尼常數，則所產生的dampingConstant係數是JointParameters中的阻尼常數與使用 wb_brake_set_damping_constant 函數設置的一個阻尼係數之和。 \n \xa0wb_brake_get_type\xa0 函數返回制動器的類型。如果傳感器與HingeJoint或Hinge2Joint節點關聯，它將返回 \xa0WB_ROTATIONAL\xa0 ；如果傳感器與SliderJoint或Track節點關聯，則將返回  WB_LINEAR  。 \n \n Descriptionaul 描述 \n get associated devices \n The \xa0 wb_brake_get_motor \xa0 and \xa0 wb_brake_get_position_sensor \xa0 functions return the \xa0 Motor \xa0 and \xa0 PositionSensor \xa0 instances defined in the same \xa0 Joint \xa0 or \xa0 Track \xa0 device \xa0 field. If none is defined they return 0. \n \xa0wb_brake_get_motor  和  wb_brake_get_position_sensor  函數返回在相同的Joint或Track設備字段中定義的Motor和PositionSensor實例。 如果未定義，則返回0。 \n', 'tags': '', 'url': 'Brake 制動器.html'}, {'title': 'Connector 連接器', 'text': "連接器 \n \n Connector \xa0 nodes are used to simulate mechanical docking systems, or any other type of device, that can dynamically create a physical link (or \xa0 connection ) with another device of the same type. \n Connector \xa0 nodes can only connect to other \xa0 Connector \xa0 nodes. At any time, each connection involves exactly two \xa0 Connector \xa0 nodes (peer to peer). The physical connection between two \xa0 Connector \xa0 nodes can be created and destroyed at run time by the robot's controller. The primary idea of \xa0 Connector \xa0 nodes is to enable the dynamic reconfiguration of modular robots, but more generally, \xa0 Connector \xa0 nodes can be used in any situation where solids need to be attached to other solids. \n Connector \xa0 nodes were designed to simulate various types of docking hardware: \n \n Mechanical links held in place by a latch. \n Gripping mechanisms. \n Magnetic links between permanent magnets (or electromagnets). \n Pneumatic suction systems, etc. \n \n Connectors can be classified into two types, independent of the actual hardware system: \n Symmetric connectors , where the two connecting faces are mechanically (and electrically) equivalent. In such cases both connectors are active. \n Asymmetric connectors , where the two connecting interfaces are mechanically different. In asymmetric systems there is usually one active and one passive connector. \n The detection of the presence of a peer \xa0 Connector \xa0 is based on simple distance and angle measurements, and therefore the \xa0 Connector \xa0 nodes are a computationally inexpensive way of simulating docking mechanisms. \n 連接器節點用於模擬機械對接系統或任何其他類型的設備，這些設備可以動態創建與另一個相同類型設備的物理鏈接（或連接）。 \n 連接器節點只能連接到其他連接器節點。在任何時候，每個連接都恰好涉及兩個連接器節點（對等）。兩個連接器節點之間的物理連接可以在運行時由機器人的控制器創建和銷毀。連接器節點的主要思想是實現模塊化機械手的動態重新配置，但是更廣泛地說，連接器節點可用於需要將實體連接到其他實體的任何情況。 \n 連接器節點旨在模擬各種類型的對接硬件： \n 機械鏈接由閂鎖固定在適當的位置。 抓緊機制。 永磁體（或電磁體）之間的磁鏈。 氣動吸風系統等 連接器可以分為兩種類型，與實際的硬件系統無關： \n 對稱連接器，其中兩個連接面在機械（和電氣）方面等效。在這種情況下，兩個連接器均處於活動狀態。 \n 非對稱連接器，其中兩個連接接口在機械上是不同的。在非對稱系統中，通常有一個有源和一個無源連接器。 \n 對等連接器是否存在的檢測基於簡單的距離和角度測量，因此，連接器節點是一種模擬對接機制的計算廉價方法。 \n Field Summary 領域摘要 \n \n \n 型號(model) : 指定連接器的型號。僅當兩個連接器節點的模型字符串相同時，它們才能連接。 \n \n \n 類型(type) :指定連接器的類型，必須為以下之一：“對稱”，“主動”或“被動”。 “對稱”連接器只能鎖定到另一個“對稱”連接器（並從中解鎖）。 “主動”連接器只能鎖定到“被動”連接器（並從中解鎖）。 “被動”連接器無法鎖定或解鎖（這對於屬於靜態環境的連接器特別有用） \n \n \n 鎖定(isLocked) :表示連接器的鎖定狀態。 可以通過 wb_connector_lock 和wb_connector_unlock API函數更改鎖定狀態。 鎖定狀態表示鎖定硬件的當前狀態，它不表示兩個連接器之間是否存在實際的物理鏈接。 例如，根據硬件類型，isLocked可以表示關閉了機械閂鎖或機械手，已激活電磁體，已將永磁體移至吸引狀態或已激活了吸水泵等。 僅當存在兼容的對等方時（或連接器被自動鎖定時）調用wb_connector_lock函數時，實際的物理鏈接才存在。 \n \n \n 自動鎖定(autoLock) : 指定是啟用還是禁用自動鎖定。自動鎖定允許連接器在出現兼容對等方時自動鎖定。為了成功地自動鎖定，當對等方出現時，autoLock和isLocked字段都必須為TRUE，這意味著wb_connector_lock函數必須已被更早調用。 autoLock的一般想法是允許被動鎖定。許多彈簧安裝的閂鎖機構或磁性系統被動地鎖定其同級件。 \n \n \n 單邊鎖定(unilateralLock) : 表示僅鎖定一個對等方即可創建物理鏈接。對於要求雙方都處於鎖定狀態才能創建物理鏈接的系統，必須將該字段設置為FALSE。例如，使用旋轉磁鐵的對稱連接器屬於此類，因為兩個連接器必須同時處於磁性“吸引”狀態才能創建鏈接。請注意，對於“活動”連接器，此字段應始終為TRUE，否則對其將無法鎖定。 \n \n \n 單邊解鎖(unilateralUnlock) : 表示僅解鎖一個對等體就足以破壞物理鏈路。對於要求雙方都處於解鎖狀態才能斷開物理鏈接的系統，必須將該字段設置為FALSE。例如，連接器經常使用雙向閂鎖機制，並且每一側都必須釋放自己的閂鎖，以使鏈接斷開。請注意，對於“活動”連接器，此字段應始終為TRUE，否則它們將無法解鎖。 \n \n \n 距離公差(distanceTolerance) : 兩個連接器之間的最大距離[以米為單位]，仍然允許它們成功鎖定。在連接器坐標系的原點之間測量距離。 \n \n \n 軸公差(axisTolerance) :兩個連接器的Z軸之間可以成功鎖定的最大角度[弧度]。 當兩個連接器節點的Z軸平行（在公差範圍內）但指向相反時，它們可以鎖定。 \n \n \n 旋轉公差(rotationTolerance) : 相對於每個允許的對接旋轉的公差角度差（請參見下圖）。 \n \n \n 旋轉數值(numberOfRotations) : 指定在圍繞連接器的z軸完整360度旋轉中允許多少個不同的對接旋轉。 例如，根據機械和電氣接口的不同，模塊化機器人的連接器通常可進行1、2或4路對接。 如該圖所示，如果numberOfRotations為4，則將有4個不同的對接位置（每90度一個）。 如果您不想檢查旋轉對齊標準，則該字段應設置為零。 \n 筆記:\xa0   對於autoLock，distanceTolerance，axisTolerance，rotationTolerance和numberOfRotations等字段，在其他連接器中的這些字段的值並不重要，因每個連接器將獨立檢查其是否滿足條件。 \n \n \n 拉伸(snap) : 當為TRUE時：兩個連接器對接時會自動對齊（對齊，調整等）。對齊方式有三點：1）旋轉兩個物體，使其z軸平行（但指向相反的方向），2）旋轉兩個物體，以使其y軸與可能的旋轉對接位置之一匹配， 3）兩個物體相互靠近，以使其坐標系的原點匹配。請注意，當numberOfRotations字段為0時，將省略步驟2，因此旋轉對齊保持自由。作為步驟1和3的結果，連接器表面始終會重疊。建議為兩個連接器設置相同的捕捉值。 \n \n \n 抗拉強度(tensileStrength) : 對接機構在斷裂之前可以承受的最大牛頓[N]拉伸力。這可以用來模擬對接機構的破裂。拉力對應於將兩個連接器拉開的力（沿負Z軸方向）。當拉伸力超過拉伸強度時，連桿斷裂。請注意，如果兩個連接器均被鎖定，則有效抗拉強度將對應於兩個連接器的抗張強度字段的總和。默認值-1表示無限強大的對接機制，無論施加多大的力都不會斷開（如果兩個連接器均被鎖定，則將其中一個連接器的抗張強度字段設置為-1就足夠了）。 \n \n \n 抗剪強度shearStrength : 表示對接機構在破裂前可以承受的最大牛頓[N]剪切力。 這可以用來模擬對接機構的破裂。 shearStrength字段指定兩個連接器承受力的能力，該力會使它們在相反的方向（在xy平面中）彼此相對滑動。 請注意，如果兩個連接器均被鎖定，則有效抗剪強度對應於兩個連接器的shearStrength字段的總和。 默認值-1表示無限強的對接機制，無論施加多大的力都不會斷開（如果兩個連接器均被鎖定，則將其中一個連接器的shearStrength字段設置為-1就足夠了）。 \n \n \n", 'tags': '', 'url': 'Connector 連接器.html'}, {'title': 'Display 顯示', 'text': '顯示 \n \n Description介紹 \n Display節點允許使用簡單的API函數處理2D像素陣列，並將其渲染為3D視圖上的2D疊加層，任何Shape節點的2D紋理或兩者。 它可以對嵌入式屏幕建模，也可以顯示任何圖形信息，例如圖形，文本，機器人軌跡，已過濾的攝像機圖像等。 \n 如果“顯示”節點的第一個子節點是或包含（如果第一個節點是“組”，則為遞歸搜索）具有ImageTexture的Shape節點，則將這些ImageTexture節點的內部紋理替換為 顯示。 在這種情況下，Shape.appearance字段應包含一個Appearance節點（而不是PBRAppearance節點）。 有必要將一個或多個ImageTexture節點的過濾字段設置為0，以防止在與顯示器保持距離時出現問題。 \n Field Summary 領域摘要 \n \n \n 寬度 width : 以像素為單位的顯示寬度 \n \n \n 高度 height : 顯示器的高度（以像素為單位) \n \n \n Coordinates System 座標系 \n Internally, the\xa0 Display \xa0 image is stored in a 2D pixel array. The RGBA value (4x8 bits) of a pixel is dislayed in the status bar (the bar at the bottom of the console window) when the mouse hovers over the pixel in the \xa0 Display . The 2D array has a fixed size defined by the \xa0 width \xa0 and \xa0 height \xa0 fields. The (0,0) coordinate corresponds to the top left pixel, while the ( width -1, height -1) coordinate corresponds to the bottom right pixel. \n 在內部，顯示圖像存儲在2D像素陣列中。 當鼠標懸停在顯示器中的像素上時，像素的RGBA值（4x8位）會顯示在狀態欄（控制台窗口底部的欄）中。 2D數組具有由width和height字段定義的固定大小。 （0,0）坐標對應於左上方像素，而（width-1，height-1）坐標對應於右下方像素。 \n Command Stack 命令碼 \n 顯示設備API的每個函數調用（wb_display_get_width和wb_display_get_height函數除外）都將特定命令存儲到內部堆棧中。 在下一次調用wb_robot_step函數時，使用FIFO方案（先進先出）將此命令堆棧發送到Webots，以便以與相應函數調用相同的順序執行命令。 \n context 語境 \n 顯示設備除其他外具有兩種功能： 可以設置顯示當前狀態的上下文上下文，以及可以繪製特定圖元的繪圖對象。 繪圖功能的行為取決於顯示上下文。 例如，為了繪製兩條紅線，必須在調用兩次wb_display_draw_line繪製函數以繪製兩條線之前，調用wb_display_set_color上下文函數將顯示器的內部顏色設置為紅色。 \n Overlay Image 重疊圖像 \n \n 默認情況下，顯示圖像顯示在帶有青色邊框的3D窗口頂部，請參見此圖。 用戶可以通過單擊鼠標右下角的圖標來拖放該顯示圖像並將其調整大小。 此外，右上角提供了一個關閉按鈕以隱藏圖像。 一旦選擇了機械手，也可以在“機械手”菜單中的“顯示設備”項中顯示或隱藏覆蓋圖像。 \n 也可以通過雙擊在外部窗口中顯示顯示圖像。 完成後，覆蓋層消失，並彈出一個新窗口。 然後，關閉窗口後，疊加層將自動恢復。 \n Display Functions 顯示功能 \n \n 獲得顯示器的尺寸 \n 這些函數分別返回width和height字段的值。 \n \n 設置顯示器的繪圖屬性 \n 這四個功能定義了將在其中應用後續繪製命令（請參見繪製基本功能）的上下文。 \n wb_display_set_color函數定義後續繪製命令的顏色。它以3字節RGB整數表示，最高有效字節（十六進製表示形式中的最左字節）代表紅色分量，第二最高有效字節代表綠色分量，第三個字節代表藍色分量。例如，0xFF00FF（紅色和藍色分量的混合）表示洋紅色。在第一次調用wb_display_set_color函數之前，默認顏色為白色（0xFFFFFF）。 \n wb_display_set_alpha函數定義後續繪製命令的Alpha通道。此功能僅應用於透明或半透明的特殊顯示器（可以通過顯示器看到）。 Alpha通道定義了顯示器像素的不透明度。它表示為介於0.0和1.0之間的浮點值，分別表示完全透明和完全不透明。中間值對應於半透明級別。在第一次調用wb_display_set_alpha函數之前，alpha的默認值為1（不透明）。 \n wb_display_set_opacity函數定義新像素將以哪種不透明度替換舊像素，以用於以下繪製指令。它表示為0.0到1.0之間的浮點值；而0表示新像素對舊像素沒有影響，而1表示新像素將完全替換舊像素。根據混合公式，僅顏色通道受不透明度影響。 \n \n wb_display_set_font函數定義使用wb_display_draw_text函數繪製的字符的字體及其大小（即以像素為單位的字符高度），anti_aliasing參數定義是否應使用抗鋸齒過濾來呈現字符。 可以使用以下標準字體： \n \n Arial \n Arial Black \n Comic Sans MS \n Courier New \n Georgia \n Impact \n Lucida Console \n Lucida Sans Unicode \n Palatino Linotype \n Tahoma \n Times New Roman \n Trebuchet MS \n Verdana \n \n 除了這些字體之外，還可以在PROJECT_HOME / fonts目錄中添加其他TrueType字體文件。 默認字體是Lucida Console，8像素，帶有抗鋸齒功能。 \n \n', 'tags': '', 'url': 'Display 顯示.html'}, {'title': 'Emitter 發射極', 'text': '發射極 \n \n Description 描述 \n “發射器”節點用於建模無線電，串行或紅外發射器。 必須將“發射器”節點添加到機器人或主管的子代中。 請注意，發射器可以發送數據，但不能接收數據。 為了模擬兩個機器人之間的單向通信，一個機器人必須具有發射器，而另一個機器人必須具有接收器。 為了模擬兩個機器人之間的雙向通信，每個機器人都需要同時具有發射器和接收器。 請注意，消息永遠不會從一個機器人傳輸到自身。 \n Field Summary 領域摘要 \n \n \n 類型(type) : 信號類型：“無線電”，“串行”或“紅外”。傳輸類型為“無線電”（默認）和“串行”的信號時不會考慮障礙。但是，“紅外”類型的信號確實考慮了發射器和接收器之間的潛在障礙。具有定義的邊界對象的任何固體對象（固體，機器人等）都可能成為“紅外”通信的潛在障礙。發射或接收機器人的結構本身不會阻止“紅外”傳輸。當前，“無線電”和“串行”類型之間沒有實現上的區別。 \n \n \n 範圍(range) : 發射球的半徑（以米為單位）。如果接收方位於發射範圍內，則它只能接收一條消息。範圍的值-1（默認值）被視為無限範圍。 \n \n \n 最大範圍(maxRange) : 定義範圍允許的最大值。該字段定義可以使用wb_emitter_set_range函數設置的最大值。 maxRange的值-1（默認值）被認為是無限的。 \n \n \n 孔徑(aperture):發射錐的張開角（弧度）；僅用於“紅外”。圓錐體的頂點位於發射器坐標系的原點（[0 0 0]），並且圓錐體的軸與發射器坐標系的z軸重合。 “紅外”發射器只能將數據發送到當前位於其發射錐內的接收器。 -1的孔徑（默認）被認為是無限大的，這意味著發射的信號是全向的。對於“無線電”和“串行”發射器，將忽略此字段。有關範圍和光圈的圖示，請參見此圖。 \n \n \n 頻道(channel) : 傳輸通道。這是“紅外線”發射器的標識號或“無線電”發射器的頻率。通常，接收器必須使用與發射器相同的通道來接收發射的數據。但是，特殊頻道-1允許在所有頻道上廣播消息。通道0（默認）保留用於與物理插件通信。對於機器人之間的通信，請使用正數通道號。 \n \n \n 波特率(baudRate) : 波特率是以每秒位數表示的通信速度。 -1的baudRate（默認值）被視為無窮大，並導致數據立即（在一個基本時間步內）從發射器傳輸到接收器。 \n \n \n 字節大小byteSize : 字節大小是傳輸一個字節信息所需的位數。 通常為8（默認值），但如果使用控制位，則可以更多。 \n \n \n 緩衝區大小(bufferSize) : 指定傳輸緩衝區的大小（以字節為單位）。 發射器中排隊的數據包中的字節總數不能超過此數目。 -1的bufferSize（默認值）被視為無限的緩衝區大小。 \n \n \n', 'tags': '', 'url': 'Emitter 發射極.html'}, {'title': 'Assiganment3', 'text': '', 'tags': '', 'url': 'Assiganment3.html'}, {'title': '虛擬主機設定', 'text': '下載virtualbox和Ubuntu \n \n 打開後進入喜好設定Network裡面做設定 \n \n 將框選處全部打勾 \n \n 並設定好網路 所對應的port號 \n 之後進入虛擬主機將裡面的的wsgi.py裡的port號,設定成跟IPV4環境下一樣 \n 就完成網路設定了', 'tags': '', 'url': '虛擬主機設定.html'}, {'title': '遇到問題', 'text': '', 'tags': '', 'url': '遇到問題.html'}, {'title': '網頁錯誤', 'text': '在某次推送完畢之後動態網頁就無法打開編輯 \n \n ▲網頁錯誤訊息 \n \n \n ▲嘗試找尋問題修正但失敗 \n 發現無法解決問題詢問老師後從server端檢查 \n \n 發現是推送和python版本錯誤,還原成前一個版本後更改設定 \n \n 重新執行就修復完成 \n', 'tags': '', 'url': '網頁錯誤.html'}, {'title': '協同網頁推送', 'text': '在12~16週老師每週都會隨機抽取同學進行分組協同編輯網頁 \n 但每次推送常會有不小心將倉儲或是網頁爆炸的情況 \n 所以在推送之前需要的步驟有以下幾點 \n \n 1. git clone 倉儲 \xa0 → 下載想要編輯的倉儲到近端 \n 2.  在進端進入該倉儲並git submodule init / git submodule update\xa0 → 將老師遠端的cmsimde下載入倉儲內的cmsimde資料夾 \n 3.  在編輯完git pull\xa0 → 確認近端沒有衝突或是無法推送的檔案 \n 4.  輸入git status\xa0 → 確認遠端和近端即將要推送的資料有無錯誤 \n 若是遠端和近端有差異會產生以下訊息 \n \n 解決方法: \n 再次使用python 進入動態網頁將錯誤修正並轉為靜態網頁後即可成功推送無衝突版本 \n', 'tags': '', 'url': '協同網頁推送.html'}, {'title': 'leo打不開', 'text': '在準備編輯reval簡報時發現leo檔打不開 \n \n 使用 pip list 檢查發現是未下載最新的leo檔 \n \n ▲使用 pip install leo==6.2.1\xa0 指定安裝 leo 6.2.1 版本 \n \n ▲即可成功開啟leo', 'tags': '', 'url': 'leo打不開.html'}]};