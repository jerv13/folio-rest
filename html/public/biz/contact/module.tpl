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
                    <div class="phone">{{contactDataService.data.phone}}</div>
                    <div class="email">{{contactDataService.data.email}}</div>
                    <div class="address">
                        <span class="city">{{contactDataService.data.address.city}}</span>
                        <span class="state">,{{contactDataService.data.address.state}}</span>
                        <span class="zip">{{contactDataService.data.address.zip}}</span>
                    </div>
                </div>
            </div>
            <div class="form">
                <form id="bizContactForm">
                    <div class="name">
                        <label for="bizContactFormName">Name</label>
                        <div class="input">
                            <input id="bizContactFormName" name="name" type="text" />
                        </div>
                    </div>
                    <div class="email">
                        <label for="bizContactFormEmail">Email</label>
                        <div class="input">
                            <input id="bizContactFormEmail" name="email" type="email" />
                        </div>
                    </div>
                    <div class="subject">
                        <label for="bizContactFormSubject">Subject</label>
                        <div class="input">
                            <input id="bizContactFormSubject" name="subject" type="text" />
                        </div>
                    </div>
                    <div class="message">
                        <label for="bizContactFormMessage">Message</label>
                        <div class="input">
                            <textarea id="bizContactFormMessage" name="message"></textarea>
                        </div>
                    </div>
                    <div class="submit">
                        <div class="input">
                            <input type="button" value="Send" ng-click="buildReCaptcha('contactReCaptcha')" />
                        </div>
                    </div>
                    <div id="contactReCaptcha" class="reCAPTCHA"></div>
                </form>
            </div>
        </div>
    </div>
</div>
