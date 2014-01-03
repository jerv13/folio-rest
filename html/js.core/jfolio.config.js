/* expects a global var: jfolioServerConfig */
angular.module('jfolio.config', [])

    .factory('coreConfig', [function() {

    }
])

    .factory('httpConfig', [function() {

        var HttpConfig = function() {

            var self = this;

            self.url = {
                scheme: "",
                hostname: "/",
                port: "",
                basepath: "@folioREST/folioREST/server.php"
            };

            self.setUrl = function(url) {
                if(typeof(url) === "object"){

                    self.url = url;
                }
            };

            self.getFullUrl = function(filepath) {

                return self.url.scheme + (self.url.scheme.length > 0 ? "://" : "/") + self.url.hostname + (self.url.port.length > 0 ? ":" : "") + self.url.port + "/" + self.url.basepath + "/" + ((typeof(filepath) === "string") ? filepath : "");
            };
        };

        var httpConfig = new HttpConfig();
        if(jfolioServerConfig && jfolioServerConfig.httpConfig && jfolioServerConfig.httpConfig.url){

            httpConfig.setUrl(jfolioServerConfig.httpConfig.url);
        } else {
            console.log("Server config not available, using default");
        }

        return httpConfig;
    }
]);