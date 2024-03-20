<?php
error_reporting(0);
$con=mysqli_connect('localhost','root','login page');
if($con){
    echo "db connected";
}
else{
    echo "db not connected";
}
?>