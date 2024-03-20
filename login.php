<?php 
  $FullName=$_post['FullName'];
  $phn = $_post['mobile'];
  $password=$_post['password'];
  $confirm password=$_post['confirm password'];
  //Database connection here
  $con=new mysqli("localhost","root","","login page");
  if($con->connect_error){
    die("failed to connect:".$con->connect_error);
  }
  else{
    $sql="INSERT INTO loginformdata (Full)"

  }
  /*else{
    $stmt=$con->prepare("SELECT * FROM registration WHERE mobile=?");
    $stmt->bind_param("i",$phn);
    $stmt->execute();
    $stmt_result=$stmt->get_result();
    if($stmt_result->num_rows > 0){


    }else{
        echo "<h2>Invalid Email or password</h2>";
    }
     
  }
  */
?>