<div class="module">
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

        </div>
        <div class="contentExperience">

        </div>
        <div class="contentEducation">

        </div>

    </div>

</div>