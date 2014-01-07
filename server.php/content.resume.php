<?php

require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'DataResponse.php');
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'Http.php');
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'DataAccess.php');

class ContentResume {

    public $view = null; // object

    public static function main() {

        sleep(1); // just to mimic load time

        $key = Http::readGetVar('key');

        $dba = new DataAccess();
        $contentResume = $dba->read('content.resume');
        $contentResume->contentAddress = $dba->read('content.address');
        $contentResume->contentContact = $dba->read('content.contact');
        $contentResume->contentSummary = $dba->read('content.summary');
        $contentResume->contentInterests = $dba->read('content.interests');
        $contentResume->contentExperience = $dba->read('content.experience');
        $contentResume->contentEducation = $dba->read('content.education');

        $res = new DataResponse();

        //$res->code = 500;
        $res->message = "OK";
        $res->data = $contentResume;

        Http::buildDefaultHeaders();

        $resJson = json_encode($res);

        //if ($resJson) {

        //    echo $resJson;
        //} else {

            $errRes = new BasicResponse();
            $errRes->code = 500;
            $errRes->message = "An error occured.";

            echo json_encode($errRes);
        //}
    }

}

ContentResume::main();