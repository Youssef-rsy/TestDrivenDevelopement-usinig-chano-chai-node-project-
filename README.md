# TestDrivenDevelopement-usinig-mocha-chai-node-project-

1- create a new folder :	
				mkdir myTddTest

2- initializ your project : 
				npm init -y

3- install mocha :  		
				npm install --global mocha

	                  	npm install --save-dev mocha
			  
	                 	npm install mocha
                          
4- Intall chai :    		
				npm install chai 

5- Configure package json on test with mocha :

       				"scripts": { "test": "mocha" },
        
6- create a test file example and add this code  :

    				describe('hello world!', function() { });
    
7- run your test : npm test

