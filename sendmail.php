<?php
if($_POST){
    $email=$_POST["email"];
    $message=$_POST["message"];
    $name=$_POST["name"];
    $send_message="name:{$name}\n message:{$message}\n email:{$email}";
    if(mail("raevski22@yahoo.com","Message from UNIVERSE69",$send_message)){
        echo  "success";
    }else{
        echo  "error";
    }
}else{
    echo "404 not found";
}
