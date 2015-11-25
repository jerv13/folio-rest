Requirements
============

### HTML Application ###

- Must be display in standard modern browsers
- Must be display well in hand-held devices
- Should be modular design
- May be single page design
- Should use client side MVC (AngularJS)
- Should access server REST API for data
- Content
    - Should have 2 distinct visual identities
        - Business/professional (biz) layout
        - Fun/Game oriented (ufo) layout
    - Should contain pages:
- Should have good documentation
- May utilize i16n multi-language support

### Server ###

- Server
    - Must have Node.js based server
    - May have PHP server too
    - Servers (PHP and NODE) should expose the same APIs
    - Should be modular design
    - Should be configurable and easy to maintain
    - Must use REST with JSON payload
    - Must be restful
    - Must use standard return objects
        - Success: "{object}"
        - Error {"error": {"status": "{number}", "message": "{string}"}}
    - May include OAuth style authentication (google, facebook, linkedin)
    - May include users and user role management
    - May allow user registration
    - May allow for comments system
        - Utilize pagination
    - Must expose cofiguration required by client as API and and JS file
    - Must expose available end-point to client as key value object ({ "key": "api_path", ...})
    - Should have good documentation
    - May include i18n
    - Should include API docs

- Database:
    - Must utilize data from DB
    - Should use Mongo and MySQL DB
    - Must have good security for write
    - Must not expose DB directly to web
    - Should have good documentation

Features
========

HTML:
-----

### Biz ###

##### ToDo #####

- Convert biz site to Angular Routes
- Use LoopBack angular SDK
- Use Bootstrap CSS
- Create editable content for admin

##### Concept: #####

Crisp, professional, fresh.  Simple clean design with a visual identity that is memorable

##### Include pages: #####

- resume
- skills
- about
- contact
- Resources, Links, content related

##### Colors: #####

Blue #0042ff, #0084ff #023bce, 0232af
Orange highlight
White text #EEEEEE

##### Identity: #####

Jerv logo (subtle).  Clear logo set (font-awesome?)

##### Site Map: #####

Nav - Main nav (fly-out) (next link nav)
Overview (home) - Name, Positions, Summary
Resume (page) - Main resume - detail icons and roll-overs (more) - might chunk out or have sub-nav
Skills (page) - Sortable skill list - links to related resources
About (page) - Wish list - Things I enjoy - links to related
Contact (pop-up)- Details plus submit message (email)
Resources (page)

##### Inspiration: #####

    http://joanfernandez.es/

### UFO ###

##### Concept: #####

Fun, 3D style UFO/Alien/Space station.

The user is an Alien moving his why thru a small virtual world.
Each area on the work open a piece of text content.
    
##### Include pages: #####

- General info
- Small game?

##### Colors: #####

Gray, Bright Green (glowing), Multi-color accents

##### Identity: #####

Each piece of content will have a visual interface that will create the identity of that content.

##### Site Map: #####

Overview (home/nav): Space station, name, positions, summary
Resume - Each section is a screen on a control panel, click to navigate between
Skills - Skills listed on a circuit board back ground

##### UFO Game? #####

Unity/blender

Dependencies
------------

### LESS (DEV) ###

Resources:

    http://lesscss.org/

### AngularJS (DEV, QA, PROD) ###

Use CDN

### Node.js (DEV, QA, PROD) ###

Install: requires npm

    `
    sudo apt-get update
    sudo apt-get install -y python-software-properties python g++ make
    sudo add-apt-repository -y ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs
    `

Resources:

    https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#ubuntu-mint

### MongoDB (DEV, QA, PROD) ###

Resources:

    https://docs.mongodb.org/manual/installation/
