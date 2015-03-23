<?php

namespace JrvFolio\Hydrator;

use Zend\Stdlib\Exception\BadMethodCallException;
use Zend\Stdlib\Hydrator\ClassMethods;

/**
 * Class ClassMethodsBlacklist
 *
 * Hydrate properties that are not in the blacklist
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
class ClassMethodsBlacklist extends ClassMethods
{

    /**
     * @var array will not set any properties listed in the black list
     */
    protected $blacklist = [];

    /**
     * @param array $blacklist
     * @param bool  $underscoreSeparatedKeys
     */
    public function __construct($blacklist = [], $underscoreSeparatedKeys = false)
    {
        parent::__construct($underscoreSeparatedKeys);

        $this->setBlacklist($blacklist);
    }

    /**
     * setBlacklist
     *
     * @param array $blacklist
     *
     * @return void
     */
    public function setBlacklist(array $blacklist)
    {
        $this->blacklist = $blacklist;
    }

    /**
     * @param  array|Traversable $options
     *
     * @return ClassMethods
     * @throws InvalidArgumentException
     */
    public function setOptions($options)
    {
        parent::setOptions($options);

        if (isset($options['blacklist'])) {
            $this->setBlacklist($options['blacklist']);
        }

        return $this;
    }

    /**
     * Hydrate an object by populating getter/setter methods
     *
     * Hydrates an object by getter/setter methods of the object.
     *
     * @param  array $data
     * @param  object $object
     *
     * @return object
     * @throws BadMethodCallException for a non-object $object
     */
    public function hydrate(array $data, $object)
    {
        if (!is_object($object)) {
            throw new BadMethodCallException(
                sprintf(
                    '%s expects the provided $object to be a PHP object)',
                    __METHOD__
                )
            );
        }

        foreach ($data as $property => $value) {
            $propertyName = $this->hydrateName($property, $data);
            $method = 'set' . ucfirst($propertyName);
            if (is_callable(array($object,$method)) && !in_array($propertyName, $this->blacklist)) {
                $value = $this->hydrateValue($property, $value, $data);
                $object->$method($value);
            }
        }

        return $object;
    }
}