<div class="module">
    DEBUG: <pre>{{resume | json}}</pre>
    <div class="loader" ng-show="loading">**LOADING***</div>
    <div class="resume">
        <header class="">
            <div class="content">
                <div class="title">{{resume.content.title}}</div>
            </div>
            <div class="contentAddress">
                <div class="city">{{resume.contentAddress.address.city}}</div>
                <div class="state">{{resume.contentAddress.address.state}}</div>
                <div class="zip">{{resume.contentAddress.address.zip}}</div>
            </div>
            <div class="content">
                <div class="detail subtitle">{{resume.content.detail.subtitle}}</div>
            </div>
            <div class="contentContact">
                <div class="contact">
                    <div class="name">{{resume.contentContact.contact.name}}</div>
                    <div class="phone">{{resume.contentContact.contact.phone}}</div>
                    <div class="email">{{resume.contentContact.contact.email}}</div>
                    <div class="site">{{resume.contentContact.contact.site}}</div>
                </div>
            </div>
        </header>

        <div class="contentSummary">
            <div class="content">
                <div class="title">{{resume.contentSummary.content.title}}</div>
                <div class="detail subtitle">{{resume.contentSummary.content.detail.subtitle}}</div>
                <div class="body">{{resume.contentSummary.content.body}}</div>
                <div class="detail points">
                    <ul>
                        <li ng-repeat="point in resume.contentSummary.content.detail.points">{{point}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="contentInterests">
            <div class="content">
                <div class="title">{{resume.contentInterests.content.title}}</div>
                <div class="interests">
                    <div class="content" ng-repeat="interest in resume.contentInterests.interests">
                        <div class="title">{{interest.content.title}}</div>
                        <div class="detail points">
                            <ul>
                                <li ng-repeat="point in interest.content.detail.points">{{point}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contentExperience">
            <div class="content">
                <div class="title">{{resume.contentExperience.content.title}}</div>
                <div class="positions">
                    <div class="content" ng-repeat="position in resume.contentExperience.positions">
                        <div class="title">{{position.content.title}}</div>
                        <div class="dateRange">
                            <div class="start">{{position.dateRange.start | date:MM/yyyy}}</div>
                            <div class="end" ng-show="position.dateRange.end">{{position.dateRange.end | date:MM/yyyy}}</div>
                            <div class="now" ng-hide="position.dateRange.end">present</div>
                        </div>
                        <div class="company">
                            <div class="name">{{position.company.name}}</div>
                            <div class="address">{{position.company.address}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contentEducation">
            <div class="content">
                <div class="title">{{resume.contentEducation.content.title}}</div>
                <div class="schools">
                    <div class="content" ng-repeat="school in resume.contentEducation.schools">
                        <div class="title">{{school.content.title}}</div>
                        <div class="degree">
                            <div class="type">{{school.degree.type}}</div>
                            <div class="date" ng-show="school.degree.date">{{school.degree.date | date:MM/yyyy}}</div>
                        </div>
                        <div class="company">
                            <div class="name">{{school.company.name}}</div>
                            <div class="address">{{school.company.address}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>