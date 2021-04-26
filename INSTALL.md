### Installation

These instructions will get you a copy of the Luna project up and running on your local machine for development and testing purposes.
 1. Begin by cloning this repository with git.
        'git clone https://github.com/ericabertolozzi/LunaApp.git'
 2. Open up the Command Prompt and navigate to the "luna" folder in the cloned repository. An example of how to navigate to the right folder:
        cd itws4500/LunaApp/luna
 3. Then type the following commands:
        'npm start'
        'npm install --save-dev @angular-devkit/build-angular' (To Install Angular)
        'npm install mongodb --save' (For Installing MongoDB)
        'ng build --watch'
 4. Then Open up another Command Prompt window and navigate to folder with the server.js file (LunaApp). Once you navigated to the inside of the folder, type:
        'npm start'
        'npm install express --save' (To Install Express)
        'node server'
 5. In a browser go to http://localhost:3000
