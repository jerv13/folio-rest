<?php
require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'DataResponse.php');

class SiteHeader {

    public $view = null; // object

    public static function main(){
        $res = new DataResponse();

        $res->data = new stdClass();
        $res->data->title = 'somthing';
        $res->data->parts = array('zero','one','two');

        $res->view = new stdClass();
        $res->view->type = 'view1';

        header('Cache-Control: no-cache, must-revalidate');
        header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
        header('Content-type: application/json');

        $resJson = json_encode($res);

        if($resJson){

            echo $resJson;
        } else {

            $errRes = new BasicResponse();

            echo json_encode($errRes);
        }
    }
}

SiteHeader::main();