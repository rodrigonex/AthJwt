# Project created to practice authorization using jwt 

### In this project, three routes were created to carry out the study.

## Start the project
* download the repository using the git clone command https://github.com/rodrigonex/AuthJwt.git in your terminal into the folder where you want to save.
* It is necessary to have node installed on the machine.
* Having a tool for Api like Insomnia.
* Create an .env file and create and pass a variable named SECRET_HASH_TOKEN="key" that will be used to encrypt and decrypt the password saved in the database.
* Run the following commands in the terminal.
  * npm i ou yarn
  * If you use npm, use the command npm run dev or yarn dev
* The server will be raised on port 3333.
* To use routes just inform the url: http://localhost:333/{route}
  * It is important to follow the route explanations so that there are no problems, because some routes need to pass auth and body.

  
### Routes
* /create
  * Since a login is required, a user creation route was created which in the body receives the fields name, e-mail and password in json format.
  * A check is performed to see if the email is already registered.
  * As the project is for study only, no standard passwords have been created.
  * The response will return a json with the fields: id, name, email and password (goes through an encryption process).
* /auth
  * The route created to validate the email and password is to return a json with id, user email and a token to be used as authorize.
  * If you enter the wrong email address or password, you will get the error 401 do not authorize.
  
  


