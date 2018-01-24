-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 24, 2018 at 06:09 PM
-- Server version: 5.7.21-0ubuntu0.16.04.1
-- PHP Version: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `expostor`
--

CREATE TABLE `expostor` (
  `id` int(11) NOT NULL COMMENT '--排序',
  `e_name` varchar(32) NOT NULL COMMENT '--姓名',
  `e_sex` varchar(32) NOT NULL COMMENT '--性别',
  `e_tel` varchar(32) NOT NULL COMMENT '--联系方式',
  `e_language` varchar(32) NOT NULL COMMENT '--语种',
  `en_range` varchar(32) NOT NULL COMMENT '--内部级别',
  `ew_range` varchar(32) NOT NULL COMMENT '--外部反馈',
  `e_servers` varchar(32) NOT NULL COMMENT '--服务数量',
  `e_time` varchar(32) NOT NULL COMMENT '--工作时段',
  `e_photo` varchar(32) NOT NULL COMMENT '--证件照'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `expostor`
--

INSERT INTO `expostor` (`id`, `e_name`, `e_sex`, `e_tel`, `e_language`, `en_range`, `ew_range`, `e_servers`, `e_time`, `e_photo`) VALUES
(1, 'gys', '男', '18626696269', '汉语', '一级', '一级', '10', '8:00-10:00', 'expostor0.7125226380303502.jpg'),
(2, 'node', '男', '147258369', '汉语', '二级', '三级', '10', '10:00-12:00', 'expostor0.4405805878341198.jpg'),
(3, 'angular', '男', '123456789', '英语', '三级', '五级', '12', '14:00-16:00', 'expostor0.26311710476875305.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `gl_user`
--

CREATE TABLE `gl_user` (
  `id` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL COMMENT '--用户邮箱',
  `headImage` varchar(32) NOT NULL COMMENT '--用户头像',
  `time` varchar(32) NOT NULL COMMENT '--录入时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `gl_user`
--

INSERT INTO `gl_user` (`id`, `username`, `password`, `email`, `headImage`, `time`) VALUES
(12, 'gys', 'd931c84bdd1d92cb60a64310ea548b8e', '3231935126@qq.com', 'expostor0.3697972984518856.jpg', '1/24/2018, 3:51:03 PM'),
(13, 'node', 'd931c84bdd1d92cb60a64310ea548b8e', '123456@sina.com', 'expostor0.6484064420219511.jpg', '1/24/2018, 4:37:49 PM');

-- --------------------------------------------------------

--
-- Table structure for table `xi_config`
--

CREATE TABLE `xi_config` (
  `xt_id` int(11) NOT NULL COMMENT '--排序',
  `xt_name` varchar(32) NOT NULL COMMENT '--系统名称',
  `xt_range` varchar(32) NOT NULL COMMENT '--系统级别',
  `xt_color` varchar(32) NOT NULL COMMENT '--系统颜色',
  `xt_time` varchar(32) NOT NULL COMMENT '--录入时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `xi_config`
--

INSERT INTO `xi_config` (`xt_id`, `xt_name`, `xt_range`, `xt_color`, `xt_time`) VALUES
(1, '系统006', '01', '黑色', '1/19/2018, 4:36:39 PM');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `expostor`
--
ALTER TABLE `expostor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gl_user`
--
ALTER TABLE `gl_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `xi_config`
--
ALTER TABLE `xi_config`
  ADD PRIMARY KEY (`xt_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `expostor`
--
ALTER TABLE `expostor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '--排序', AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `gl_user`
--
ALTER TABLE `gl_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `xi_config`
--
ALTER TABLE `xi_config`
  MODIFY `xt_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '--排序', AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
