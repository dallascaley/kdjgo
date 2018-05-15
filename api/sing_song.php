<?php
include('cors.php');
include ('db_connect.php');


$return = [
    'testing' => 123
];

echo json_encode($return);

?>