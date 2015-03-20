<?php
/**
 * This file is required for the doctrine CLI and other CLI tests
 */
use Doctrine\ORM\Tools\Console\ConsoleRunner;

// change working dir
chdir(dirname(__DIR__));

// Setup autoload
include 'vendor/autoload.php';

$config = include 'config/application.config.php';


$application = Zend\Mvc\Application::init($config);
$serviceMgr = $application->getServiceManager();

/**
 * @var Doctrine\ORM\EntityManager
 */
$entityManager = $serviceMgr->get('Doctrine\ORM\EntityManager');

//Doctrine CLI stuff
return ConsoleRunner::createHelperSet($entityManager);
