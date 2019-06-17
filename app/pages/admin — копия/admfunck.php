<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bikeShop";

function connect(){   //функция подключения к БД
    $conn = mysqli_connect("localhost", "root", "root", "bikeShop");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    mysqli_set_charset($conn, "utf8");
    return $conn;
}

function init(){
    //вывожу список товаров из таблицы goods
    $conn = connect();
    $sql = "SELECT id, name FROM newgoods";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}

function selectOneGoods(){ //функция выбора карточки товара по айди в базеданных
    $conn = connect();
    $id = $_POST['gid'];
    $sql = "SELECT * FROM newgoods WHERE id = '$id'";
    $result = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        echo json_encode($row);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}

function updateGoods(){ //функция обновления карточки товара
    $conn = connect();
    $id = $_POST['gid'];
    $name = $_POST['gname'];
    $cost = $_POST['gcost'];
    $descr = $_POST['gdescr'];
    $ord = $_POST['gorder'];
    $img = $_POST['gimg'];
    $catalog = $_POST['gcatalog'];
    
    $sql = "UPDATE newgoods SET name = '$name', cost = '$cost', description = '$descr', ord = '$ord', image = '$img', catalog = '$catalog' WHERE id='$id' ";
    
    if (mysqli_query($conn, $sql)) {
         echo "1";
    }else{
        echo "Errrror " .mysqli_error($conn);
    }
    
    mysqli_close($conn);
    writeJson();
}

function newGoods(){ //функция создания новой карточки товара
    $conn = connect();
    $name = $_POST['gname'];
    $cost = $_POST['gcost'];
    $descr = $_POST['gdescr'];
    $ord = $_POST['gorder'];
    $img = $_POST['gimg'];
    $catalog = $_POST['gcatalog'];
    
    $sql = "INSERT INTO newgoods(name, cost, description, ord, image, catalog) 
            VALUES ('$name', '$cost', '$descr', '$ord', '$img', '$catalog')";
        
    if (mysqli_query($conn, $sql)) {
         echo "1";
    }else{
        echo "Errrror" .mysqli_error($conn);
    }
    
    mysqli_close($conn);
    writeJson();
}

function writeJson(){
    $conn = connect();
    $sql = "SELECT * FROM newgoods";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        file_put_contents('../catalog/newgoods.json', json_encode($out));
    } else {
        echo "0";
    }
    mysqli_close($conn);
}