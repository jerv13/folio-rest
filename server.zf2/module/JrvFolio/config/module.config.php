<?php
return array(
    'router' => array(
        'routes' => array(
            'jrv-folio.rest.address' => array(
                'type' => 'Segment',
                'options' => array(
                    'route' => '/address[/:address_id]',
                    'defaults' => array(
                        'controller' => 'JrvFolio\\V1\\Rest\\Address\\Controller',
                    ),
                ),
            ),
        ),
    ),
    'zf-versioning' => array(
        'uri' => array(
            0 => 'jrv-folio.rest.address',
        ),
    ),
    'service_manager' => array(
        'factories' => array(
            'JrvFolio\\V1\\Rest\\Address\\AddressResource' => 'JrvFolio\\V1\\Rest\\Address\\AddressResourceFactory',
        ),
    ),
    'zf-rest' => array(
        'JrvFolio\\V1\\Rest\\Address\\Controller' => array(
            'listener' => 'JrvFolio\\V1\\Rest\\Address\\AddressResource',
            'route_name' => 'jrv-folio.rest.address',
            'route_identifier_name' => 'address_id',
            'collection_name' => 'address',
            'entity_http_methods' => array(
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ),
            'collection_http_methods' => array(
                0 => 'GET',
                1 => 'POST',
            ),
            'collection_query_whitelist' => array(),
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => 'JrvFolio\\V1\\Rest\\Address\\AddressEntity',
            'collection_class' => 'JrvFolio\\V1\\Rest\\Address\\AddressCollection',
            'service_name' => 'Address',
        ),
    ),
    'zf-content-negotiation' => array(
        'controllers' => array(
            'JrvFolio\\V1\\Rest\\Address\\Controller' => 'HalJson',
        ),
        'accept_whitelist' => array(
            'JrvFolio\\V1\\Rest\\Address\\Controller' => array(
                0 => 'application/vnd.jrv-folio.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ),
        ),
        'content_type_whitelist' => array(
            'JrvFolio\\V1\\Rest\\Address\\Controller' => array(
                0 => 'application/vnd.jrv-folio.v1+json',
                1 => 'application/json',
            ),
        ),
    ),
    'zf-hal' => array(
        'metadata_map' => array(
            'JrvFolio\\V1\\Rest\\Address\\AddressEntity' => array(
                'entity_identifier_name' => 'id',
                'route_name' => 'jrv-folio.rest.address',
                'route_identifier_name' => 'address_id',
                'hydrator' => 'Zend\\Stdlib\\Hydrator\\ArraySerializable',
            ),
            'JrvFolio\\V1\\Rest\\Address\\AddressCollection' => array(
                'entity_identifier_name' => 'id',
                'route_name' => 'jrv-folio.rest.address',
                'route_identifier_name' => 'address_id',
                'is_collection' => true,
            ),
        ),
    ),
    'zf-content-validation' => array(
        'JrvFolio\\V1\\Rest\\Address\\Controller' => array(
            'input_filter' => 'JrvFolio\\V1\\Rest\\Address\\Validator',
        ),
    ),
    'input_filter_specs' => array(
        'JrvFolio\\V1\\Rest\\Address\\Validator' => array(
            0 => array(
                'name' => 'address',
                'required' => true,
                'filters' => array(),
                'validators' => array(
                    0 => array(
                        'name' => 'Zend\\I18n\\Validator\\Alpha',
                        'options' => array(),
                    ),
                ),
                'description' => 'Street',
            ),
        ),
    ),
    'doctrine' => [
        'driver' => [
            'JrvFolio' => [
                'class' => 'Doctrine\ORM\Mapping\Driver\AnnotationDriver',
                'cache' => 'array',
                'paths' => [
                    __DIR__ . '/../src/JrvFolio/Entity'
                ]
            ],
            'orm_default' => [
                'drivers' => [
                    'JrvFolio' => 'JrvFolio'
                ]
            ]
        ]
    ],
);
