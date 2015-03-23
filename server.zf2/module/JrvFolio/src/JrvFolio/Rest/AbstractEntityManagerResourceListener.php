<?php


namespace JrvFolio\Rest;


/**
 * Class AbstractEntityManagerResourceListener
 *
 * LongDescHere
 *
 * PHP version 5
 *
 * @category  JervDesign
 * @package   JrvFolio\Rest
 * @author    James Jervis <james@jervdesign.com>
 * @copyright 2015 JervDesign
 * @license   License.txt New BSD License
 * @version   Release: <package_version>
 * @link      https://github.com/JervDesign
 */

abstract class AbstractEntityManagerResourceListener extends AbstractServiceLocatorResourceListener
{

    /**
     * getEntityManger
     *
     * @return \Doctrine\ORM\EntityManager
     */
    protected function getEntityManger()
    {

        return $this->getServiceLocator()->get('\Doctrine\ORM\EntityManager');
    }
}