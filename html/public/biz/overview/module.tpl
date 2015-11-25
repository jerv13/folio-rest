<div class="bizOverview">
    <div class="loading" ng-show="overviewDataService.loading">Loading</div>
    <div class="alerts" ng-show="overviewDataAlerts.thrown.length > 0"><div ng-repeat="alert in overviewDataAlerts.thrown"><div class="alert {{alert.type}} number_{{alert.code}}"><div class="icon"><i class="fa fa-exclamation-triangle fa-2x"></i></div><div class="code">{{alert.code}}: </div><div class="message">{{alert.message}}</div><div></div></div></div></div>
    <div ng-hide="overviewDataService.loading || error">
        <div class="part1">
            <div class="title">{{overviewDataService.data.name}}</div>
            <div class="subtitle">{{overviewDataService.data.title}}</div>
        </div>
        <div class="part2">
            <div class="summary">{{overviewDataService.data.summary}}</div>
        </div>
    </div>
</div>