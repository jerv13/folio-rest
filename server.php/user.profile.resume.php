<?php

require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'DataResponse.php');
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'Http.php');
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'DataAccess.php');

class UserProfileResume {

    public $view = null; // object

    public static function main() {

        sleep(1); // just to mimic load time

        $dba = new DataAccess();
        $pro = $dba->read('user.profile.professional');

        if (empty($pro)) {

            $errRes = new BasicResponse();
            $errRes->code = 404;
            $errRes->message = "Profile data was not found.";

            echo json_encode($errRes);
            return;
        }

        $edu = $dba->read('user.profile.education');

        if (empty($edu)) {

            $errRes = new BasicResponse();
            $errRes->code = 404;
            $errRes->message = "Profile data was not found.";

            echo json_encode($errRes);
            return;
        }

        $pro->education = $edu->schools;

        $res = new DataResponse();

        //$res->code = 500;
        $res->message = "OK";
        $res->data = $pro;

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

UserProfileResume::main();