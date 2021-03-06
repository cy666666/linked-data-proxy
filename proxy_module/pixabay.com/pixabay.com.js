/**
 * 查詢  pixabay.com
 * 
 * 圖片庫
 * 
 * 成功查詢 https://pixabay.com/zh/photos/?image_type=&cat=&min_width=&min_height=&q=%E8%87%BA%E7%81%A3&order=popular
 * http://localhost:3000/pixabay/臺灣
 * 
 * 失敗查詢 https://pixabay.com/zh/photos/?image_type=&cat=&min_width=&min_height=&q=%E5%8A%89%E5%82%99&order=popular
 * http://localhost:3000/pixabay/劉備
 */
launch_proxy["pixabay.com"] = function (_output, _query) {
    
var _options = {
    module: "pixabay.com",
    query: _query,
    // ----------------------------------------
    
    // 正式查詢 " + encodeURI(_query) + "
    url: "https://pixabay.com/zh/photos/?image_type=&cat=&min_width=&min_height=&q=" + encodeURI(_query) + "&order=popular",
    
    // --------------------------------------------------
    /**
     * 沒找到資料的選擇器
     */
    //content_not_found_selector: "body",
    content_not_found_string: '抱歉，我们没找到相关信息。',
    
    html_selector: "#photo_grid",
    
    base_url: "https://pixabay.com",
    
    referer: "https://pixabay.com/",
    
    post_process: function (_content) {
        var _ele = $(_content);
        _ele.find("div.item > div").remove();
        _content = get_outer_html(_ele);
        return _content;
    },
    
    // ------------------------
};

web_crawler(_output, _options);

//_res.send(_query);
// ----------------------------------------    
    
};  // launch_proxy = function (_output, _query) {

