<?php

namespace JrvFolio\V1\Rest\Address;

use Doctrine\ORM\Mapping as ORM;
use JrvFolio\Entity\AbstractArraySerializableEntity;

/**
 * Class AddressEntity
 *
 * PHP version 5
 *
 * @category  Jervdesign
 * @package   moduleNameHere
 * @author    James Jervis <james@jervdesign.com>
 * @copyright 2015 JervDesign
 * @license   License.txt New BSD License
 * @version   Release: <package_version>
 * @link      https://github.com/jervdesign
 * @ORM\Entity (repositoryClass="Pws\Repository\Image")
 * @ORM\Table(name="folio_address")
 */
class AddressEntity extends AbstractArraySerializableEntity
{
    /**
     * @var int Auto-Incremented Primary Key
     *
     * @ORM\Id
     * @ORM\Column(type="guid")
     * @ORM\GeneratedValue(strategy="UUID")
     */
    protected $id;

    /**
     * @var
     *
     * @ORM\Column(type="string", nullable=false)
     */
    protected $address;

    /**
     * @var
     *
     *  @ORM\Column(type="string", nullable=true)
     */
    protected $addressMore;

    /**
     * @var
     *
     *  @ORM\Column(type="string", nullable=false)
     */
    protected $city;

    /**
     * @var
     *
     *  @ORM\Column(type="string", nullable=true)
     */
    protected $state;

    /**
     * @var
     *
     *  @ORM\Column(type="string", nullable=true)
     */
    protected $zip;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * @param mixed $address
     */
    public function setAddress($address)
    {
        $this->address = $address;
    }

    /**
     * @return mixed
     */
    public function getAddressMore()
    {
        return $this->addressMore;
    }

    /**
     * @param mixed $addressMore
     */
    public function setAddressMore($addressMore)
    {
        $this->addressMore = $addressMore;
    }

    /**
     * @return mixed
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @param mixed $city
     */
    public function setCity($city)
    {
        $this->city = $city;
    }

    /**
     * @return mixed
     */
    public function getState()
    {
        return $this->state;
    }

    /**
     * @param mixed $state
     */
    public function setState($state)
    {
        $this->state = $state;
    }

    /**
     * @return mixed
     */
    public function getZip()
    {
        return $this->zip;
    }

    /**
     * @param mixed $zip
     */
    public function setZip($zip)
    {
        $this->zip = $zip;
    }
}