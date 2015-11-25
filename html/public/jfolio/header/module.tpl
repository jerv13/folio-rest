<section class="module_header">
    <div class="edit" ng-show="editable" ng-click="toggleEdit()"><span ng-hide="editing">edit</span><span ng-show="editing">done</span></div>
    <div ng-hide="editing">
        <div class="header" ng-bind-html="data.data.title | unsafe"></div>
        <div class="content" ng-bind-html="data.data.content | unsafe"></div>
        <div class="footer" ng-bind-html="data.data.tagline | unsafe"></div>
    </div>
    <div class="editing" ng-show="editing">
        <div class="header editing" contentEditable="true" ng-model="data.data.title">{{data.data.title}}</div>
        <div class="content editing" contentEditable="true" ng-model="data.data.content"></div>
        <div class="footer editing" contentEditable="true" ng-model="data.data.tagline"></div>
    </div>
</section>