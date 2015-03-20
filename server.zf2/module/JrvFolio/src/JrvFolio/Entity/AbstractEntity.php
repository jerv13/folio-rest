<?php

namespace JrvFolio\Entity;

use Zend\Stdlib\ArraySerializableInterface;


/**
 * Class AbstractEntity
 *
 * LongDescHere
 *
 * PHP version 5
 *
 * @category  Jervdesign
 * @package   JrvFolio\Entity\Address
 * @author    James Jervis <james@jervdesign.com>
 * @copyright 2015 JervDesign
 * @license   License.txt New BSD License
 * @version   Release: <package_version>
 * @link      https://github.com/jervdesign
 */
abstract class AbstractEntity implements ArraySerializableInterface
{
    /**
     * Exchange internal values from provided array
     *
     * @param  array $array
     * @param  array $ignore List of fields to ignore
     *
     * @return void
     */
    public function exchangeArray(array $array, $ignore=[])
    {
        $setterPrefix = 'set';

        foreach ($array as $property => $value) {

            // Check for ignore keys
            if(in_array($property, $ignore)){
                continue;
            }

            $setter = $setterPrefix . ucfirst($property);

            if (method_exists($this, $setter)) {
                $this->$setter($value);
            }
        }
    }

    /**
     * Return an array representation of the object
     *
     * @return array
     */
    public function getArrayCopy(){

        return get_object_vars($this);
    }
}