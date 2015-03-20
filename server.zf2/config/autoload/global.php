<?php
return array(
    'doctrine' => include(__DIR__ . 'config.doctrine.php'),
    'db' => include(__DIR__ . 'config.db.php'),
    'zf-mvc-auth' => array(
        'authentication' => array(
            'http' => array(
                'accept_schemes' => array(
                    0 => 'basic',
                ),
                'realm' => 'api',
            ),
        ),
    ),
);
