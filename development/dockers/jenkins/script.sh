// runs latest LTS version of jenkins
docker run --name jenkins -p 8080:8080 -p 50000:50000 -d jenkins/jenkins:lts
