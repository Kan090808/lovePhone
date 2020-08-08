$(document).ready(function () {
    $(".navbar-nav li").removeClass("active");
    if (localStorage.getItem("page") === null) {
      localStorage.setItem("page", "search");
    }
    var page = "#" + localStorage.getItem("page");
    $(page).addClass("active");
  
    var page = localStorage.getItem("page") + ".php";
    $("#content").load(page);
  
    $(".navbar-brand").click(function () {
      $("#myNavbar").removeClass("in");
      $(".navbar-nav li").removeClass("active");
      $("#homepage").addClass("active");
      localStorage.setItem("page", "search");
      $("#content").load("search.php");
    });
  
    $(".navbar-nav li").click(function () {
      $("#myNavbar").removeClass("in");
      $(".navbar-nav li").removeClass("active");
      $(this).addClass("active");
      console.log($(this).attr("id"));
      localStorage.setItem("page", $(this).attr("id"));
      var page = $(this).attr("id") + ".php";
      console.log(page);
      $("#content").load(page);
    });
  
  });