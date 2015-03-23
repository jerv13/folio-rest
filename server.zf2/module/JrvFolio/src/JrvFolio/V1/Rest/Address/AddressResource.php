<?php
namespace JrvFolio\V1\Rest\Address;

use JrvFolio\Hydrator\ClassMethodsBlacklist;
use JrvFolio\Rest\AbstractEntityManagerResourceListener;
use Zend\Stdlib\Hydrator\ClassMethods;
use Zend\Stdlib\Hydrator\Filter\FilterComposite;
use ZF\ApiProblem\ApiProblem;
use ZF\Rest\AbstractResourceListener;

class AddressResource extends AbstractEntityManagerResourceListener
{
    /**
     * Create a resource
     *
     * @param  mixed $data
     *
     * @return ApiProblem|mixed
     */
    public function create($data)
    {
        $data = (array)$data;
        $address = new AddressEntity();

        $hydrator = new ClassMethodsBlacklist(['id'], false);

        $hydrator->hydrate($data, $address);

        $entityManager = $this->getEntityManger();

        $entityManager->persist($address);

        $entityManager->flush($address);

        return $address->getArrayCopy();
    }

    /**
     * Delete a resource
     *
     * @param  mixed $id
     *
     * @return ApiProblem|mixed
     */
    public function delete($id)
    {
        return new ApiProblem(
            405,
            'The DELETE method has not been defined for individual resources'
        );
    }

    /**
     * Delete a collection, or members of a collection
     *
     * @param  mixed $data
     *
     * @return ApiProblem|mixed
     */
    public function deleteList($data)
    {
        return new ApiProblem(
            405,
            'The DELETE method has not been defined for collections'
        );
    }

    /**
     * Fetch a resource
     *
     * @param  mixed $id
     *
     * @return ApiProblem|mixed
     */
    public function fetch($id)
    {
        $entityManager = $this->getEntityManger();

        $address = $entityManager->find(
            'JrvFolio\V1\Rest\Address\AddressEntity',
            $id
        );

        return $address;
    }

    /**
     * Fetch all or a subset of resources
     *
     * @param  array $params
     *
     * @return ApiProblem|mixed
     */
    public function fetchAll($params = array())
    {
        return new ApiProblem(
            405,
            'The GET method has not been defined for collections'
        );
    }

    /**
     * Patch (partial in-place update) a resource
     *
     * @param  mixed $id
     * @param  mixed $data
     *
     * @return ApiProblem|mixed
     */
    public function patch($id, $data)
    {
        return new ApiProblem(
            405,
            'The PATCH method has not been defined for individual resources'
        );
    }

    /**
     * Replace a collection or members of a collection
     *
     * @param  mixed $data
     *
     * @return ApiProblem|mixed
     */
    public function replaceList($data)
    {
        return new ApiProblem(
            405,
            'The PUT method has not been defined for collections'
        );
    }

    /**
     * Update a resource
     *
     * @param  mixed $id
     * @param  mixed $data
     *
     * @return ApiProblem|mixed
     */
    public function update($id, $data)
    {
        return new ApiProblem(
            405,
            'The PUT method has not been defined for individual resources'
        );
    }
}
