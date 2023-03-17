Aplikace simulující webový portál pro pojišťovnu.

Aplikace se spoušti pomocí dockeru, není třeba si nic instalovat vyjma samotný Docker a Maven kterým sestavujeme Backend.

Postup pro spuštění:

1.	Naklonujte si nebo stahněte projekt z webu https://github.com/MiMatyas/pojistovna-ukazkovy-projekt.
2.	Otevřete složku pojistovna-ukazkovy-projekt-main a spusťte v ní terminál.
3.	Zadej postupně následující příkazy do terminálu:

          a.	mvn -f ./javaSpring-final/pom.xml install
          #Příkazem vytvoříte ve složce javaSpring-final jar soubor

          b.	docker build -t spring-pojistovna ./javaSpring-final/
          #Příkazem vytvoříte Docker image z Dockerfile ve složce javaSpring-final

          c.	docker build -t react ./react-final/
          #Příkazem vytvoříte Docker image z Dockerfile ve složce react-final

          d.	docker-compose up
          # příkaz přečte soubor docker-compose a sestaví podle něj více kontejnerovou aplikaci
          
![image](https://user-images.githubusercontent.com/122620567/225875782-25316ecc-b9d7-4b29-9d14-4ed0adbf9e8e.png)

Nyní máte aplikaci funkční. Homepage: http://localhost:3000/#/

Použité technologie: Java, Spring Boot, Javascript, React, SQL, Maven, Docker.

V aplikaci je možné přidávat, odebírat, upravovat a listovat pojištěnce a jejich pojištění.

Po vytvoření pojištěnce se pomocí SMTP protokolu odešle email na zvolenou emailovou adresu.


