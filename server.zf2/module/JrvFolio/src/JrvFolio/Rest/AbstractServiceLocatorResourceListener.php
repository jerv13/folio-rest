<?php

namespace JrvFolio\Rest;

use Zend\ServiceManager\ServiceLocatorAwareInterface;
use Zend\ServiceManager\ServiceLocatorInterface;
use ZF\Rest\AbstractResourceListener;

/**
 * Class AbstractServiceLocatorResourceListener
 *
 * LongDescHere
 *
 * PHP version 5
 *
 * @category  JervDesign
 * @package   moduleNameHere
 * @author    James Jervis <james@jervdesign.com>
 * @copyright 2015 JervDesign
 * @license   License.txt New BSD License
 * @version   Release: <package_version>
 * @link      https://github.com/JervDesign
 */
abstract class AbstractServiceLocatorResourceListener extends AbstractResourceListener implements ServiceLocatorAwareInterface
{
    /**
     * @var \Zend\ServiceManager\ServiceLocatorInterface $serviceManager
     */
    protected $serviceManager;

    /**
     * setServiceLocator
     *
     * @param ServiceLocatorInterface $serviceLocator
     *
     * @return void
     */
    public function setServiceLocator(ServiceLocatorInterface $serviceLocator)
    {
        $this->serviceManager = $serviceLocator;
    }

    /**
     * getServiceLocator
     *
     * @return \Zend\ServiceManager\ServiceLocatorInterface
     */
    public function getServiceLocator()
    {
        return $this->serviceManager;
    }
}