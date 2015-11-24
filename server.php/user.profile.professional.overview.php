<?php

require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'DataResponse.php');
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'Http.php');
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'DataAccess.php');

class UserProfileProfessionalOverview {

    public $view = null; // object

    public static function main() {

        sleep(1); // just to mimic load time

        $dba = new DataAccess();
        $profile = $dba->read('user.profile.professional');

        if (empty($profile)) {

            $errRes = new BasicResponse();
            $errRes->code = 404;
            $errRes->message = "Data was not found.";

            echo json_encode($errRes);
            return;
        }

        $content = new stdClass();
        $content->title = $profile->title;
        $content->summary = $profile->summary;
        $content->outline = $profile->outline;
        $content->name = $profile->contact->name;

        $res = new DataResponse();

        //$res->code = 500;
        $res->message = "OK";
        $res->data = $content;

        Http::buildDefaultHeaders();

        $resJson = json_encode($res);

        if ($resJson) {

            echo $resJson;
        } else {

            $errRes = new BasicResponse();
            $errRes->code = 500;
            $errRes->message = "An error occured.";

            echo json_encode($errRes);
        }
    }
}

UserProfileProfessionalOverview::main();