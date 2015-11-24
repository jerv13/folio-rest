<div class="bizAbout">
    <div class="loading" ng-show="aboutDataService.loading">Loading</div>
    <div class="alerts" ng-show="aboutDataAlerts.thrown.length > 0"><div ng-repeat="alert in aboutDataAlerts.thrown"><div class="alert {{alert.type}} number_{{alert.code}}"><div class="icon"><i class="fa fa-exclamation-triangle fa-2x"></i></div><div class="code">{{alert.code}}: </div><div class="message">{{alert.message}}</div><div></div></div></div></div>
    <div ng-hide="aboutDataService.loading || error">
        <div class="part1">
            <div class="title">About Me</div>
            <div class="subtitle">{{aboutDataService.data.title}}</div>
        </div>
        <div class="part2">
            <div class="summary">{{aboutDataService.data.summary}}</div>
            <div class="points"></div>
        </div>
    </div>
</div>