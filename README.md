# 🐱Time Catbon
一個輕量型個人時間管理規劃工具，從個人時間規劃道專案進度，從短事件到長期事件，從小事項到大型分工事項，以各種角度設計結構：
- 像 TimeTree 的**日曆化事件**
- 像 Notion 的 page 可**拆分事件**
- 像 Notion Calendar **卡片式管理**
- 像 To-Do List 可自定義項目中的**流程清單、待辦、標籤分類**
- 有 Kanban **流程追蹤**（如：待做 → 進行中 → 完成）
- 有 Eisenhower Matrix 能夠**區分重要、緊急程度**

結構內容：
 - `Card` 任務卡片。
   - `To-do List` 建立代辦事項，可以編輯事項成為新的卡片。
     - `Child Card` 由 Parent Card 的 to-do list 所創建的卡片，對於原本的卡片稱之"子卡片"。
     - `Parent Card` 以 to-do list 創建的卡片，對於創建的卡片稱之"父卡片"。
   - `Project Card` 專案任務卡片，是最高級的卡片，不可作為"子卡片"。
   - `Basic Card` 會在設定的時間到時，基於此卡片創建新的Event。
   - `Insertion Card` 使用者特別設計可以用來作為時間戳記、事件deadline的卡片。
 - `Relation Link` 連結不同的卡片關係，查詢會一起關聯顯示。
 - `Event` 基於任務卡片加入Calendar的事件

顯示介面與功能：
 - `Calendar` 支援月曆、週歷、日歷查看不同時間的Event。
 - `Event Editor` 由Calendar新增、查看、更改Event。
 - `Blue Board` 動態顯示卡片之間的連結關係（parent, relation）、是否完成、是否規劃Event等資訊，支援尋找卡片功能，點擊卡片可連棟至Card Editor和Card Stack。
 - `Card Stack` 將所有卡片條列出，選擇卡片連動至Card Editor。
 - `Card Editor` 新增、查看、更改Event。
 - `File Stack` 新增、查看、編輯、開啟檔案庫的檔案。
 - `Kanbon` 自訂Project Card任何相關的所有卡片流程程序，以區塊的方式顯示各種卡片的程序進度。
 - `Time Line` 自訂基於人員數的分支線、卡片開發佇列，以箭頭和排列顯示卡片順序、分支。