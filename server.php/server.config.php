<?php

require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'DataResponse.php');
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'Http.php');
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'DataAccess.php');

class ServerConfig {

    public static function main() {

        $returnType = Http::readGetVar('returntype', 'json');

        $dba = new DataAccess();
        $data = $dba->read('server.config');

        if($returnType == 'javascript'){

            echo self::returnScript($data);
            return;
        }

        echo self::returnData($data);
        return;
    }

    private static function returnScript($data){

        $varname = Http::readGetVar('varname', 'serverConfig');

        $headers = array(
            'Cache-Control: no-cache, must-revalidate',
            'Expires: Mon, 26 Jul 1997 05:00:00 GMT',
            'Content-type: application/javascript',
        );

        Http::buildHeaders($headers);
        $resJson = json_encode($data);

        if ($resJson) {

            return "var {$varname} = {$resJson};";
        } else {
            return "var {$varname} = {};";
        }
    }


    private static function returnData($data){

        $res = new DataResponse();

        //$res->code = 500;
        //$res->message = "Something failed";
        $res->data = $data;

        Http::buildDefaultHeaders();

        $resJson = json_encode($res);

        if ($resJson) {

            return $resJson;
        } else {

            $errRes = new BasicResponse();
            $errRes->code = 500;
            $errRes->message = "An error occured.";

            return json_encode($errRes);
        }
    }
}

ServerConfig::main();