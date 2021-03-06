(function (Plugin) {
    'use strict';

    var routes = require('./app/routes');

    //NodeBB list of Hooks: https://github.com/NodeBB/NodeBB/wiki/Hooks
    Plugin.hooks = {
        filters: {
            apiRoutes: function (payload, callback) {
                routes(payload, callback);
            }
        }
    };

})(module.exports);