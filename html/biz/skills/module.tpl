<div class="bizSkills">
    <div class="loading" ng-show="skillsDataService.loading">Loading</div>
    <div class="alerts" ng-show="skillsDataAlerts.thrown.length > 0"><div ng-repeat="alert in skillsDataAlerts.thrown"><div class="alert {{alert.type}} number_{{alert.code}}"><div class="icon"><i class="fa fa-exclamation-triangle fa-2x"></i></div><div class="code">{{alert.code}}: </div><div class="message">{{alert.message}}</div><div></div></div></div></div>
    <div ng-hide="skillsDataService.loading || error">
        <div class="skillsheader">
            <div class="part1">
                <div class="title">Technical Skills</div>
                <div class="subtitle">Skills Developed</div>
            </div>
            <div class="part2">
            </div>
        </div>

        <div class="skills">
            <div class="overview">
                <div class="info">Skill</div>
                <div class="level">Level</div>
                <div class="yearsexperience">Experience</div>
                <div class="lastused">Last Used</div>
            </div>
            <div class="skill" ng-repeat="skill in skillsDataService.data">
                <div class="info">
                    <div class="name">{{skill.name}}</div>
                    <div class="details">{{skill.details}}</div>
                </div>
                <div class="level">{{skill.level  | skillLevel}}</div>
                <div class="yearsexperience">TBD</div>
                <div class="lastused" ng-show="skill.dateLastUsed">{{skill.dateLastUsed | date:'yyyy'}}</div>
                <div class="lastused" ng-hide="skill.dateLastUsed">present</div>
            </div>
        </div>
    </div>
</div>