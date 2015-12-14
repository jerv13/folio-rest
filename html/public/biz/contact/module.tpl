<div class="bizContact">
    <div class="link"><a ng-click="toggleBizContactForm()"><i class="fa fa-envelope-o" title="Contact"></i><div>Contact</div></a></div>
    <div class="body" ng-show="bizContactFormVisible" ng-mouseleave="bizContactFormVisible = false">
        <div class="loading" ng-show="contactDataService.loading">Loading</div>
        <div class="alerts" ng-show="contactDataAlerts.thrown.length > 0"><div ng-repeat="alert in contactDataAlerts.thrown"><div class="alert {{alert.type}} number_{{alert.code}}"><div class="icon"><i class="fa fa-exclamation-triangle fa-2x"></i></div><div class="code">{{alert.code}}: </div><div class="message">{{alert.message}}</div><div></div></div></div></div>
        <div class="content" ng-hide="contactDataService.loading || error">
            <div class="info">
                <div class="title">Contact</div>
                <div class="details" >
                    <div class="name">{{contactDataService.data.name}}</div>
                    <div class="email">{{contactDataService.data.email}}</div>
                    <div class="clearfix">&nbsp;</div>
                    <div class="link">{{contactDataService.data.site}}</div>
                    <div class="link">{{contactDataService.data.linkedin}}</div>
                    <div class="link">{{contactDataService.data.facebook}}</div>
                    <div class="clearfix">&nbsp;</div>
                    <div class="phone">{{contactDataService.data.phone}}</div>
                    <div class="address">
                        <span class="city">{{contactDataService.data.address.city}}</span>
                        <span class="state">,{{contactDataService.data.address.state}}</span>
                        <span class="zip">{{contactDataService.data.address.zip}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
