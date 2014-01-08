<?php

require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'DataResponse.php');
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'Http.php');
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'DataAccess.php');

class UserProfileProfessional {

    public $view = null; // object

    public static function main() {

        sleep(1); // just to mimic load time

        $key = Http::readGetVar('key');

        $dba = new DataAccess();
        $content = $dba->read('user.profile.professional');

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

UserProfileProfessional::main();