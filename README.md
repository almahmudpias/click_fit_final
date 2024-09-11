# click_fit
# Click fit By Md Abdullah Al Mahmud Pias 


 
how to run the project

1. open the terminal and run the command
```
cd server
```
2. for install the dependencies run
```
npm install
```
3. then add a dotenv file to the server folder and write as like 

```
DB_USER = 'your user name'
DB_PASSWORD = 'your user pass'
DB_DATABASE = 'your database name'
DB_HOST = 'your host name'

```
write as your own for log in as admin
```
ADMIN_NAME = 'your admin name'
ADMIN_EMAIL= 'your admin email '
ADMIN_PASSWORD = 'your admin pass'

```
4. after that run the command for connect the server to your local sql server
```
npm run dev
```

5. after succesfully connect the server you go to frontend folder and open index.html and start the live server to see frontend UI


Note that if you face any error after run npm run dev
please run a command 
```
npm run migrate:undo
```

output of the project
https://drive.google.com/file/d/1Zr7Hcv7ZanlGXOTykkx2NVIluX-AXOdx/view?usp=sharing
