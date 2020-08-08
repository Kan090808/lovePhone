<?php
session_start();
require("header.php");
?>

<body data-spy="scroll" data-target=".navbar" data-offset="50">
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand">我愛看手機</a>
      </div>

      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li id="search"><a href="#">查詢</a></li>
          <li id="compare"><a href="#">對比</a></li>
          <li id="manage"><a href="#">管理</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container" id="content">
  </div>
</body>