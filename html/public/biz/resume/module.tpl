<div class="bizResume">
    <div class="loading" ng-show="resumeDataService.loading">Loading</div>
    <div class="alerts" ng-show="bizResumeAlerts.thrown.length > 0"><div ng-repeat="alert in bizResumeAlerts.thrown"><div class="alert {{alert.type}} number_{{alert.code}}"><div class="icon"><i class="fa fa-exclamation-triangle fa-2x"></i></div><div class="code">{{alert.code}}: </div><div class="message">{{alert.message}}</div><div></div></div></div></div>
    <div ng-hide="resumeDataService.loading || error">
        <header class="resumeheader">
            <div class="part1">
                <div class="title">{{resumeDataService.data.contact.name}}</div>
                <div class="subtitle">{{resumeDataService.data.title}}</div>
            </div>
            <div class="part2">
                <div class="address">
                    <div class="city">{{resumeDataService.data.contact.address.city}}</div>
                    <div class="state">,{{resumeDataService.data.contact.address.state}}</div>
                    <div class="zip">{{resumeDataService.data.contact.address.zip}}</div>
                </div>
                <div class="contact">
                    <div class="phone">{{resumeDataService.data.contact.phone}}</div>
                    <div class="email">{{resumeDataService.data.contact.email}}</div>
                    <div class="website"><a href="{{resumeDataService.data.contentContact.contact.site}}" target="_blank"><span class="protocol"></span>{{resumeDataService.data.contentContact.contact.site}}</a></div>
                </div>
            </div>
        </header>

        <section class="resumebody">
            <section class="summary">
                <div class="part1">
                    <div class="title">Summary</div>
                </div>
                <div class="part2">
                    <div class="subtitle">{{resumeDataService.data.title}}</div>
                    <div class="points">
                        <ul>
                            <li ng-repeat="point in resumeDataService.data.outline">{{point}}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="interests">
                <div class="part1">
                    <div class="title">Interests</div>
                </div>
                <div class="part2">
                    <div ng-repeat="interest in resumeDataService.data.interests" class="interest">
                        <div class="title">{{interest.title}}</div>
                        <div class="points" ng-show="interest.outline.length > 0">
                            <ul>
                                <li ng-repeat="point in interest.outline">{{point}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="experience">
                <div class="part1">
                    <div class="title">Experience</div>
                </div>
                <div class="part2">
                    <div class="position" ng-repeat="experience in resumeDataService.data.experience">
                        <div class="overview">
                            <div class="title">{{experience.title}}</div>
                            <div class="datarange">
                                <div class="start">{{experience.position.dateRange.start | date:'MM/yyyy'}}</div>
                                <div class="end" ng-show="experience.position.dateRange.end">{{experience.position.dateRange.end | date:'MM/yyyy'}}</div>
                                <div class="now" ng-hide="experience.position.dateRange.end">present</div>
                            </div>
                        </div>
                        <div class="company">
                            <div class="name">{{experience.position.company.name}}</div>
                            <div class="address">
                                <div class="city">{{experience.position.company.address.city}}</div>
                                <div class="state">,{{experience.position.company.address.state}}</div>
                                <div class="zip">{{experience.position.company.address.zip}}</div>
                            </div>
                        </div>
                        <div class="body"><p ng-repeat="ebody in experience.body" ng-bind-html="ebody"></p></div>
                    </div>
                </div>
            </section>

            <section class="education">
                <div class="part1">
                    <div class="title">Education</div>
                </div>
                <div class="part2">
                    <div class="school" ng-repeat="school in resumeDataService.data.education">
                        <div class="degree">
                            <div class="title">{{school.degrees[0].areaofstudy}}</div>
                            <div class="type">{{school.degrees[0].type}}</div>
                            <div class="date">{{school.degrees[0].date | date:'yyyy'}}</div>
                        </div>
                        <div class="company">
                            <div class="name">{{school.company.name}}</div>
                            <div class="address">
                                <div class="city">{{school.company.address.city}}</div>
                                <div class="state">,{{school.company.address.state}}</div>
                                <div class="zip">{{school.company.address.zip}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        <footer class="resumefooter">
            <div class="link"><a><i class="fa fa-file-text-o" title="Download PDF"></i><div>Print</div></a></div>
        </footer>
    </div>
</div>
