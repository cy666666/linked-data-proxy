// ---------------------------
// 引用固定的函式庫

fs = require('fs');
https = require('https');
require("./lib/jquery.js");
//util = require("util");

var express = require('express');
var app = express();

// -----------------------------
// 引用自訂的函式庫
require("./config/config.js");
require("./lib/show_error_page.js");
require("./lib/web_crawler.js");
require("./lib/cache.js");
require("./lib/jquery.js");
require("./lib/universal-analytics.js");
// -----------------------------

app.get('/:modules/:query', function (_req, _res) {
        
    var _modules = _req.params.modules.split(",");
    var _query = _req.params.query;
    
    var _output = {
        data: [],
        index: 0,
        limit: _modules.length,
        display_error: function (_module, _query, _error) {
            var _data = {
                module: _module,
                query: _query,
                error: _error
            };
            this.display(_data);
        },
        display: function (_data) {
            this.data.push(_data);
            this.index++;
            if (this.index === this.limit) {
                _res.send(JSON.stringify(this.data));
            }
        }
    };

    for (var _i = 0; _i < _modules.length; _i++) {
        var _module = _modules[_i];
        
        var _path = "./proxy_module/" + _module + "/launch_proxy.js";
        if (fs.existsSync(_path)) {
            require(_path);
            launch_proxy(_output, _query);
        }
        else {
            //show_error_page(_res, "No proxy found.");
            _output.display_error(_module, _query, "No module found.");
        }
    }
});




// -------------------------------------------------------------

app.listen(CONFIG.port, function () {
  console.log('app listening on port ' + CONFIG.port);
});

