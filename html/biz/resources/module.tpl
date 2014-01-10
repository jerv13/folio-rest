<div class="bizResources">
    <div class="loading" ng-show="resourcesDataService.loading">Loading</div>
    <div class="alerts" ng-show="aboutDataAlerts.thrown.length > 0"><div ng-repeat="alert in aboutDataAlerts.thrown"><div class="alert {{alert.type}} number_{{alert.code}}"><div class="icon"><i class="fa fa-exclamation-triangle fa-2x"></i></div><div class="code">{{alert.code}}: </div><div class="message">{{alert.message}}</div><div></div></div></div></div>
    <div ng-hide="resourcesDataService.loading || error">
        <div class="part1">
            <div class="title">Resources</div>
            <div class="subtitle">Links to Good Information</div>
        </div>
        <div class="part2">
            <div class="summary">Da Da Da</div>

            <div class="link" ng-repeat="link in resourcesDataService.data.links">
                <a href="{{link.url}}" target="_blank"><i class="fa fa-external-link-square" title="{{link.title}}"></i><div class="label">{{link.title}}</div></a>
                <div class="description">{{link.description}}</div>
            </div>
        </div>
    </div>
</div>