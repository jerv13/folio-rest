<?php

require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'DataResponse.php');
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'Http.php');
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'DataAccess.php');

class ContentResume {

    public $view = null; // object

    public static function main() {

        $key = Http::readGetVar('key');

        $dba = new DataAccess();
        // @todo - this could be a security issue
        $content = $dba->read("content.{$key}");

        if($content === null){
            $errRes = new BasicResponse();
            $errRes->code = 500;
            $errRes->message = "An error occured.";
            echo json_encode($errRes);
            return;
        }

        $res = new DataResponse();

        //$res->code = 500;
        $res->message = "OK";
        $res->data = $content;

        Http::buildDefaultHeaders();

        $resJson = json_encode($res);

        if ($resJson) {

            echo $resJson;
            return;
        } else {

            $errRes = new BasicResponse();
            $errRes->code = 500;
            $errRes->message = "An error occured.";

            echo json_encode($errRes);
            return;
        }
    }

}

ContentResume::main();