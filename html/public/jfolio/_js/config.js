/* expects a global var: jfolioServerConfig */
angular.module('jfolio.config', [])

    .factory(
        'coreConfig', [
            function () {

            }
        ]
    )
    .factory(
        'httpConfig', [
            function () {

                var HttpConfig = function () {
                    var self = this;

                    self.url = {
                        scheme: "",
                        hostname: "",
                        port: "",
                        basepath: "api"
                    };

                    self.setUrl = function (url) {
                        if (typeof(url) === "object") {

                            self.url = url;
                        }
                    };

                    self.getFullUrl = function (filepath) {

                        var url =  (self.url.scheme.length > 0 ? self.url.scheme + "://" : "")
                            + (self.url.hostname.length > 0 ? self.url.hostname : "")
                            + (self.url.port.length > 0 ? ":"+ self.url.port : "")
                            + (self.url.basepath.length > 0 ? "/" + self.url.basepath : "")
                            + ((typeof(filepath) === "string") ? filepath : "");
                        console.log('Full Url: ' + url);
                        return url;
                    };
                };

                var httpConfig = new HttpConfig();

                if (typeof jfolioServerConfig !== 'undefined' && jfolioServerConfig.httpConfig && jfolioServerConfig.httpConfig.url) {
                    httpConfig.setUrl(jfolioServerConfig.httpConfig.url);
                } else {
                    console.log("Server config not available, using default");
                }

                return httpConfig;
            }
        ]
    );
