<?php

class DataAccess {

    public static $dataLocation = 'data';
    public static $keyCharsBlacklist = array('/','\\','.');

    protected function getData($key){


        $key = $this->cleanKey($key);

        $dataPath = dirname(__FILE__) . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . self::$dataLocation  . DIRECTORY_SEPARATOR .  $key . '.json';

        if(!file_exists($dataPath)){

            return null;
        }

        $raw = file_get_contents($dataPath);

        if(!$raw){

            return null;
        }

        return json_decode($raw, false);
    }

    public function cleanKey($key){

        $key = (string) $key;

        foreach(self::$keyCharsBlacklist as $chars){

            $key = str_replace($chars,"",$key);
        }

        return $key;
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