/* @todo this is to be loaded from server as a js file */
var jfolioServerConfig = {
    coreConfig: {
    },
    httpConfig: {
        url: {
            scheme: "http",
            hostname: "localhost",
            port: "80",
            basepath: "@folioREST/folioREST/server.php"
        }
    }
};
/* ------ */
angular.module('jfolio.config', [])

    .factory('coreConfig', [function() {

    }
])

    .factory('httpConfig', [function() {

        var HttpConfig = function() {

            var self = this;

            self.url = {
                scheme: "http",
                hostname: "localhost",
                port: "",
                basepath: "@folioREST/folioREST/server.php"
            };

            self.setUrl = function(url) {
                if(typeof(url) === "object"){

                    self.url = url;
                }
            };

            self.getFullUrl = function(filepath) {

                return self.url.scheme + "://" + self.url.hostname + (self.url.port.length > 0 ? ":" : "") + self.url.port + "/" + self.url.basepath + "/" + ((typeof(filepath) === "string") ? filepath : "");
            };
        };

        var httpConfig = new HttpConfig();
        if(jfolioServerConfig.httpConfig){

            httpConfig.setUrl(jfolioServerConfig.httpConfig.url);
        }

        return httpConfig;
    }
]);