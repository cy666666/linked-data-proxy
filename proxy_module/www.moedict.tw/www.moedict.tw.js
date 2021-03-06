/**
 * 查詢 www.moedict.tw
 * 成功查詢的頁面：https://www.moedict.tw/%E5%8B%BE%E8%90%8C
 * http://localhost:3000/moedict/勾萌
 * 
 * 成功查詢的頁面：https://www.moedict.tw/%E5%AE%8B
 * http://localhost:3000/moedict/宋
 * 
 * 失敗查詢的頁面：https://www.moedict.tw/%E4%B8%8D%E8%90%8C
 * http://localhost:3000/moedict/不萌
 *
 */
launch_proxy["www.moedict.tw"] = function (_output, _query) {
    
var _options = {
    module: "www.moedict.tw",
    query: _query,
    
    // 正式查詢
    url: "https://www.moedict.tw/" + encodeURI(_query),
    
    encoding: "utf8",
    
    // --------------------------------------------------
    /**
     * 沒找到資料的選擇器
     */
    //content_not_found_selector: "body",
    content_not_found_string: '<body itemscope="itemscope" itemtype="http://schema.org/ItemList">',
    
    /**
     * 取出指定元素的HTML程式碼
     */
    //html_selector: "#mw-content-text > p:first",
    
    /**
     * 取出指定元素的純文字
     */
    text_selector: "#result p.definition",
    
    // ------------------------
    
    /**
     * 指定use_agnet (可省略)
     */
    //user_agent: "Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.102011-10-16 20:23:10",
    
    /**
     * 指定來源網頁 referer (可省略)
     */
    //referer: "https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5",
    
    // ------------------------
};

web_crawler(_output, _options);

//_res.send(_query);
// ----------------------------------------    
    
};  // launch_proxy = function (_output, _query) {