FROM openjdk:17

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y maven

RUN mvn clean package -DskipTests

CMD ["sh", "-c", "java -jar target/*.jar"]