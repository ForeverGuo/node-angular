-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 31, 2018 at 05:42 PM
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
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(10) NOT NULL COMMENT '--代号',
  `desc` varchar(32) NOT NULL COMMENT '--描述',
  `show_flag` varchar(32) NOT NULL COMMENT '--控制显示'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `desc`, `show_flag`) VALUES
(1, '管理员', 'true'),
(2, '讲解员', 'false');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL COMMENT '--排序',
  `name` varchar(32) NOT NULL COMMENT '--姓名',
  `sex` varchar(32) NOT NULL COMMENT '--性别',
  `tel` varchar(32) NOT NULL COMMENT '--联系方式',
  `password` varchar(32) NOT NULL COMMENT '--密码',
  `email` varchar(32) NOT NULL COMMENT '--邮箱',
  `language` varchar(32) NOT NULL COMMENT '--语种',
  `nrange` varchar(32) NOT NULL COMMENT '--内部评价',
  `wrange` varchar(32) NOT NULL COMMENT '--外部评价',
  `server` varchar(32) NOT NULL COMMENT '--服务数量',
  `photo` varchar(64) NOT NULL COMMENT '--照片',
  `role` varchar(32) NOT NULL COMMENT '--角色',
  `time` varchar(32) NOT NULL COMMENT '--时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `sex`, `tel`, `password`, `email`, `language`, `nrange`, `wrange`, `server`, `photo`, `role`, `time`) VALUES
(1, 'gys', '', '', 'd931c84bdd1d92cb60a64310ea548b8e', '', '', '', '', '', '../upload/expostor0.5844441761728376.jpg', '1', ''),
(2, 'root', '', '', 'cecd14064502f3ab34cd5b0dee3545c2', '', '', '', '', '', '../upload/expostor0.7939665033482015.jpg', '1', ''),
(3, '讲解员01', '男', '15682696269', 'd931c84bdd1d92cb60a64310ea548b8e', '123456@qq.com', '汉语', '一级', '一级', '7', '../upload/expostor0.5489711686968803.jpg', '2', '8:00-10:00'),
(4, '讲解员02', '女', '147258369', 'd931c84bdd1d92cb60a64310ea548b8e', '123478@qq.com', '英语', '三级', '四级', '5', '../upload/expostor0.4210491362027824.jpg', '2', '10:00-12:00');

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
-- Indexes for table `user`
--
ALTER TABLE `user`
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
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '--排序', AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `xi_config`
--
ALTER TABLE `xi_config`
  MODIFY `xt_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '--排序', AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
