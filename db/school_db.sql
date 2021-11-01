-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 01, 2021 at 03:53 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school_db`
--
CREATE DATABASE IF NOT EXISTS `school_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `school_db`;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE IF NOT EXISTS `students` (
  `id` char(50) NOT NULL,
  `first_name` varchar(36) NOT NULL,
  `last_name` varchar(36) NOT NULL,
  `email` varchar(36) NOT NULL,
  `subject_id` char(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `first_name`, `last_name`, `email`, `subject_id`) VALUES
('4987cd27-8c06-4bc2-8494-a7102bd98250', 'Athen', 'Daniel', 'daniel@gmail.com', '055bcff4-3191-4d91-b7fc-9ffd924f6ca1'),
('a658b380-41e2-44b2-9202-4d1f973b2d7e', 'Rico', 'Athena', 'ricothena@gmail.com', '14d4e093-cb22-4248-a112-205a184dafcb'),
('c42d92bc-4fb2-4833-b059-9ecda3b28705', 'Dryen', 'Moskov', 'dryen@gmail.com', '10578732-f247-430b-8b26-9089e66a81ea'),
('f9353d4c-8a31-458f-b7c6-0b976bce5d9b', 'Mario', 'Leonardo', 'mario@gmail.com', '14d4e093-cb22-4248-a112-205a184dafcb');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE IF NOT EXISTS `subjects` (
  `id` char(55) NOT NULL,
  `subject_name` varchar(36) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `subject_name`) VALUES
('055bcff4-3191-4d91-b7fc-9ffd924f6ca1', 'English'),
('10578732-f247-430b-8b26-9089e66a81ea', 'Chemistry'),
('14d4e093-cb22-4248-a112-205a184dafcb', 'Economy');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE IF NOT EXISTS `teachers` (
  `id` char(50) NOT NULL,
  `first_name` varchar(36) NOT NULL,
  `last_name` varchar(36) NOT NULL,
  `email` varchar(36) NOT NULL,
  `password` varchar(255) NOT NULL,
  `subject_id` char(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `first_name`, `last_name`, `email`, `password`, `subject_id`) VALUES
('2fd7605e-9e3e-4dfd-90da-d39f3081e319', 'Wenky', 'Rajendran', 'wenky@gmail.com', '$2b$04$mt5jZuMNpwGCAxzlktjEhudXXVd1hbuQWYDuUAHV/5.kQUvoiVq4O', '10578732-f247-430b-8b26-9089e66a81ea'),
('6416e531-0a79-41b6-8df7-b5caaa126de3', 'Gigi', 'Fatmawati', 'gigi@gmail.com', '$2b$04$1jzDCDxxuZBxlSFSDzrNs.1i2SNf38SAEhlwEDfY7lIjjFi4AvWRm', '10578732-f247-430b-8b26-9089e66a81ea'),
('9a6f08dd-c726-4d47-bb4a-27321fd9b5b4', 'Butet', 'Naiborhu', 'naiborhu@gmail.com', '', '14d4e093-cb22-4248-a112-205a184dafcb'),
('fdd5c37f-7afa-4ebd-9c53-ffc9d6ac0771', 'Nunung', 'Oktaviani', 'Oktaviani@gmail.com', '', '055bcff4-3191-4d91-b7fc-9ffd924f6ca1');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
