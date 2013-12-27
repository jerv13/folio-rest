<?php

class DataAccess {

    public static $dataLocation = 'data';

    protected function getData($key){

        $dataPath = dirname(__FILE__) . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . self::$dataLocation  . DIRECTORY_SEPARATOR .  $key . '.json';
        $raw = file_get_contents($dataPath);

        if(!$raw){

            return null;
        }

        return json_decode($raw, false);
    }

    public function create() {

    }

    public function read($key) {

        return $this->getData($key);
    }

    public function update() {

    }

    public function delete() {

    }

}