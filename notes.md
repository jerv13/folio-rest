Features
--------

- 2 Style
    - Biz
        Concept: Crisp, professional, fresh.  Simple clean design with a visual identity that is memorable
        Colors: 
            Blue #0042ff, #0084ff #023bce, 0232af
            Orange highlight
            White text #EEEEEE
        Identity: Jerv logo (subtle).  Clear logo set (font-awesome?)
        Site Map:
            Nav - Main nav (fly-out) (next link nav)
            Overview (home) - Name, Positions, Summary
            Resume (page) - Main resume - detail icons and roll-overs (more) - might chunk out or have sub-nav
            Skills (page) - Sortable skill list - links to related resources
            About (page) - Wish list - Things I enjoy - links to related
            Contact (pop-up)- Details plus submit message (email)
            Resources (page)
        Inspiration:
            http://joanfernandez.es/

    - UFO
        Concept: Fun, 3D style UFO/Alien/Space station.
            The user is an Alien moving his why thru a small virtual world.
            Each area on the work open a piece of text content.
        Colors: Gray, Bright Green (glowing), Multi-color accents
        Identity: Each piece of content will have a visual interface that will create the identity of that content.
        Site Map:
            Overview (home/nav): Space station, name, positions, summary
            Resume - Each section is a screen on a control panel, click to navigate between
            Skills - Skills listed on a circuit board back ground

        ? UFO Game - Unity/blender
        Inspiration:


- Multi display friendly Media queries
    - mobile device
    - standard

- Content:
    - resume
    - skills
    - about
    - contact
    - Resources - Links - content related
    -? Small game

- Pages
    - home (single page for now)
- Modules
    - Header
    - Contact
    - footer
    - nav
    - content
        - res
        - about
        - skills
    - Game

Nice to haves:
--------------

- oAuth to google or facebook
- i16n

ToDo
----
- Page Design
- Create basic get services (PHP)

Dependencies
------------

- Ruby

- SASS
    - Install:
        gem install sass
    - Usage
        sass --watch ./html/_sass/styles.scss:./html/css/styles.css

- SASS - bourbon
    - Install:
        gem install bourbon
        cd html/_sass/lib/bourbon
        bourbon install


NOTES
-----

- Dynamic content via rest service

- View data

- Content loaded by view data type

- Media query styles

- Dynamic styles
    -? animate between style changes

- Good schemas
    - CSS
        theme.mediatype.xxx

        reset.css

        default/
            global.css

            screen/
                master.css

            screen_max45em/
                master.css

    - HTML
    - API

- Layout save
    - Cookie or local storage
    -? Layout save to server (later with admin role.. requires auth and roles)

- Good core directive for including templates?

- Skill Levels
    1 = Beginner 
    2 = Intermediate
    3 = Advanced
    4 = Expert




