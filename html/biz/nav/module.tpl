<nav class="jfoilioModuleBizNav">
    <div>
        <ul>
            <li ng-repeat="navitem in navitems"><a ng-class="{active: activenavsection == $index}" ng-click="nav($index)"><i></i><div>{{navitem}}</div></a></li>
        </ul>
    </div>
    <div ng-hide="1" class="prevnext">
        <div class="prev"><a>prev</a></div>
        <div class="next"><a>next</a></div>
    </div>
</nav>

