ToDo
----
- html.biz: Contact form
    - implement captcha
- html.biz: Create css for small displays
- html.biz: implement real time filter for skills:
    - sort
    - search

- data: fix and complete actual data
- data.experice: Add actual months to date ranges

- redis:
	data structure concept:
		user.{username}.identifier = {USERIDHASH}
		
		user.{USERIDHASH}.password = {PASSWORDHASH}
		user.{USERIDHASH}.email = {UNIQUEEMAIL}
		user.{USERIDHASH}.auth.token = {AUTHHASH}
		
		user.{USERIDHASH}.profile.{profileType} = {JSONOBJECT}
		user.{USERIDHASH}.profile.{profileType}.definition = {JSONOBJECT}
		
		acl.{roleName}.identifier = {ROLEIDHASH}
		acl.{resourceName}.identifier = {RESOURCEIDHASH}
		
		acl.role.{ROLEIDHASH} =
		acl.resource.{RESOURCEIDHASH} =
		

- html.ufo: begin layout and modeling

- server.node
    - finish core app
    - implement redis iterface
    
- server.php
    - implement phpREST custom framework.