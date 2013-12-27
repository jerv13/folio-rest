<section class="module_header">
    <div class="edit" ng-click="toggleEdit()"><span ng-show="true">done</div>
    <div class="header" contentEditable="true" ng-model="data.data.title">{{data.data.title}}</div>
    <div class="content" contentEditable="true" ng-model="data.data.content"></div>
    <div class="footer" contentEditable="true" ng-model="data.data.tagline"></div>
</section>