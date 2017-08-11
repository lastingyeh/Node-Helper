#### 區域安裝

你可以在你的應用程式資料夾裡，安裝你想要的套件。
可以下達指令：

npm install  <package name>  

#### 如果我們要在區域安裝過程中，加入npm 安裝modules的附加資訊(dependencies)，在local 資料夾裡的package.json檔案。

可以執行指令：

C:\MyNodeProj> npm install express –save 

#### 全域安裝

由npm全域安裝的套件，通常儲存在　/AppData/Roaming/npm/node_modules (windows環境)

例如，我們要 全域安裝(globally) express套件，可以下達 install 指令，帶 -g 參數。

C:\MyNodeProj> npm install -g express 

#### 更新套件

如果我們要更新套件，可以下達指令：

npm update  <package name>   
例如，更新我們先前安裝的 express套件：

C:\MyNodeProj> npm update express

#### 解除安裝套件

如果我們要解除安裝套件，可以下達指令

npm uninstall   <package name>   
例如，解除express套件的安裝：

C:\MyNodeProj> npm uninstall express  

#### Method	Description

fs.readFile(fileName [,options], callback)	讀取現有文件。
fs.writeFile(filename, data[, options], callback)	寫入文件。如果存在則覆蓋，否則建立一個新的文件。
fs.open(path, flags[, mode], callback)	打開文件進行閱讀或寫入。
fs.rename(oldPath, newPath, callback)	重命名現有文件。
fs.stat(path, callback)	返回包含重要文件統計信息的fs.stat 物件。
fs.rmdir(path, callback)	重命名現有目錄。
fs.mkdir(path[, mode], callback)	創建新目錄。
fs.readdir(path, callback)	讀取指定目錄的內容。
fs.utimes(path, atime, mtime, callback)	更改文件的時間標記。
fs.exists(path, callback)	確定指定的文件是否存在。
fs.access(path[, mode], callback)	測試指定文件的用戶權限。
fs.appendFile(file, data[, options], callback)	將新內容附加到現有文件。

#### debugger;

進入 command prompt 執行 debugger：
node debug orfile.js

在 debug> 輸入next (或n)，debugging 下一個程式區段。

如果我們想要執行到下一個 debugger; ，則在 debug>輸入 cont (或c)

#### 常用的內建debug指令

next, n 執行至下一行。
cont, c 繼續執行並停在下一個debuggers;
step, s 進入函式逐一除錯。
out Step, o 跳出函式的逐一除錯。
watch 加入表示式及變數至watch
watcher 查看所有被加入的watch的值。
Pause 暫停執行程式

#### Node Inspector

用npm ，我們在 command prompt 輸入
npm install -g node-inspector

安裝後，我們開始始用node inspector 工具 ，我們在 command prompt 輸入
node-inspector

開啟browser，輸入上圖網址，你會看到這樣的畫面，代表node inspector 工具啟用！
http://127.0.0.1:8080/?port=5858

再開啟另一個 command prompt 輸入，我們要debugging的檔案：
node --debug-brk orfile.js

F5 重新整理剛才在 http://127.0.0.1:8080/?port=5858 的視窗