/**
 * 使用方法：http://docs.sequelizejs.com/en/v3/docs/models-usage/
 * 欄位類型定義：http://docs.sequelizejs.com/en/v3/docs/models-definition/
 */
var Sequelize = require('sequelize');

// ----------------

var sequelize = new Sequelize('database', 'username', 'password', {
  // sqlite! now!
  dialect: 'sqlite',
 
  // the storage engine for sqlite
  // - default ':memory:'
  storage: 'database.sqlite',
  logging: CONFIG.database.logging
});

// --------------------------------

tableModuleCache = sequelize.define('module_cache', {
  date: {
    type: Sequelize.DATE
  },
  url: {
    type: Sequelize.TEXT
  },
  parameters: {
    type: Sequelize.TEXT
  },
  response: {
    type: Sequelize.TEXT
  },
  error: {
      type: Sequelize.TEXT
  }
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false
});

tableModuleCache.sync();
// --------------------------------

tableQueryCache = sequelize.define('query_cache', {
  date: {
    type: Sequelize.DATE
  },
  type: {
    type: Sequelize.TEXT
  },
  modules: {
    type: Sequelize.TEXT
  },
  query: {
    type: Sequelize.TEXT
  },
  response: {
    type: Sequelize.TEXT
  },
  error: {
      type: Sequelize.TEXT
  }
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false
});

tableQueryCache.sync();

// -----------------------------------

tableVote = sequelize.define('vote', {
  date: {
    type: Sequelize.DATE
  },
  referer_host: {
    type: Sequelize.TEXT
  },
  module: {
    type: Sequelize.TEXT
  },
  query: {
    type: Sequelize.TEXT
  },
  uuid: {
    type: Sequelize.TEXT  
  },
  score: {
    type: Sequelize.INTEGER
  }
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false
});

tableVote.sync();