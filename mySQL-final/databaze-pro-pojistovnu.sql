-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: databaze_pro_pojistovnu
-- ------------------------------------------------------
-- Server version	8.0.31
CREATE DATABASE IF NOT EXISTS databaze_pro_pojistovnu;
USE databaze_pro_pojistovnu;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `insurance`
--

DROP TABLE IF EXISTS `insurance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `insurance` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `type_of_insurance` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL,
  `insured_item` varchar(45) NOT NULL,
  `sum` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pojistenec_idx` (`user_id`),
  CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insurance`
--

LOCK TABLES `insurance` WRITE;
/*!40000 ALTER TABLE `insurance` DISABLE KEYS */;
INSERT INTO `insurance` VALUES (25,29,'Pojištění před tornádem','2023-01-30 14:00:00','Dům',250000),(26,30,'Byt','2023-01-27 01:15:05','Vrtulník',300000),(27,31,'Povinné ručení','2023-01-30 16:00:00','Auto',350000),(28,32,'Pojištění majetku','2023-01-30 17:00:00','Byt',400000),(29,33,'Pojištění před tornádem','2023-01-30 18:00:00','Dům',450000),(30,34,'Pojištění před povodní','2023-01-30 19:00:00','Vrtulník',500000),(31,35,'Povinné ručení','2023-01-30 20:00:00','Auto',550000),(32,36,'Pojištění majetku','2023-01-30 21:00:00','Byt',600000),(33,27,'Pojištění před tornádem','2023-01-30 22:00:00','Dům',650000),(34,28,'Pojištění před povodní','2023-01-30 23:00:00','Vrtulník',700000),(35,29,'Povinné ručení','2023-01-30 00:00:00','Auto',750000),(36,30,'Pojištění majetku','2023-01-30 01:00:00','Byt',800000),(37,31,'Pojištění před tornádem','2023-01-30 02:00:00','Dům',850000),(38,32,'Pojištění před povodní','2023-01-30 03:00:00','Vrtulník',900000),(39,33,'Povinné ručení','2023-01-30 04:00:00','Auto',950000),(40,34,'Pojištění majetku','2023-01-30 05:00:00','Byt',1000000);
/*!40000 ALTER TABLE `insurance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `surname` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `email` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `phone` int NOT NULL,
  `city` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `street` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `house_number` int NOT NULL,
  `zipcode` int NOT NULL,
  `age` int NOT NULL,
  `password` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (26,'Lucie','Nováková','lucie.novakova@email.cz',777777777,'Praha','V Celnici',10,11000,25,'heslo1'),(27,'Petra','Svobodová','petra.svobodova@email.cz',888888888,'Brno','Náměstí Svobody',15,61500,30,'heslo2'),(28,'Michaela','Dvořáková','michaela.dvorakova@email.cz',999999999,'Olomouc','Sokolská',20,77200,35,'heslo3'),(29,'Veronika','Kohlová','veronika.kohlova@email.cz',1,'Plzeň','U Nádraží',25,30100,40,'heslo4'),(30,'Jana','Veselá','jana.vesela@email.cz',111111111,'Ústí nad Labem','U Zámku',30,40502,45,'heslo5'),(31,'David','Nový','david.novy@email.cz',222222222,'Praha','Na Příkopě',35,11000,50,'heslo6'),(32,'Tomáš','Svoboda','tomas.svoboda@email.cz',333333333,'Brno','V Kopcích',40,61500,55,'heslo7'),(33,'Pavel','Dvořák','pavel.dvorak@email.cz',444444444,'Olomouc','U Parku',45,77200,60,'heslo8'),(34,'Jiří','Kohl','jiri.kohl@email.cz',555555555,'Plzeň','V Centru',50,30100,65,'heslo9'),(35,'Jan','Veselý','jan.vesely@email.cz',666666666,'Ústí nad Labem','Na Nábřeží',55,40502,70,'heslo10'),(36,'Petr','Novák','petr.novak@email.cz',777777777,'Praha','Na Náměstí',60,11000,75,'heslo11'),(37,'Martin','Svoboda','martin.svoboda@email.cz',888888888,'Brno','U Hradu',65,61500,80,'heslo12'),(38,'test','test','m.matyas.m@gmail.com',42452,'24524','2542',2452,4252,2542,'254254'),(39,'Petr','Pavel','m.matyas.m@gmail.com',777777777,'Brno','Pražská',713,66539,55,'Orwell1984'),(40,'Petr','Pavel','m.matyas.m@gmail.com',777777777,'Brno','Pražská',713,66539,55,'Orwell1984'),(41,'Petr','Pavel','m.matyas.m@gmail.com',777777777,'Brno','Pražská',713,66539,55,'Orwell1984');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-17  6:37:59
