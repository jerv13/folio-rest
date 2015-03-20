<?php
$mysqlConfig = include(__DIR__ . 'config.mysql.php');
// 'doctrine' =>
return [
    'connection' => [
        'orm_default' => [
            'driverClass' => 'Doctrine\DBAL\Driver\PDOMySql\Driver',
            'params' => [
                'host' => $mysqlConfig['hostname'],
                'port' => $mysqlConfig['port'],
                'user' => $mysqlConfig['username'],
                'password' => $mysqlConfig['password'],
                'dbname' => $mysqlConfig['database'],
                'charset' => $mysqlConfig['charset'],
            ],
        ]
    ],
];