#there we define we used this programming application or software using "FROM <software_name>:<software_version>" (version you can found in docker hub)
FROM node:24.22



#there we define in which directory the program run in the docker container
WORKDIR /myWorkDirectory


#here we copy all files in the container there      ./* means all files of your current directory       /myWorkDirectory means my working directory inside docker container
COPY ./* /myWorkDirectory


#there when we create a docker image the commands will run 
RUN npm install



#the service run on 5000 port in our docker container (the port run inside isolated docker container can't access throw main system port to use we need to port binding)
EXPOSE 5000


#there we define when container start then those command run
CMD ["node", "app.js"]