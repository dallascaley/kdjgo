<?php

include ('db_connect.php');

$result = $conn->query("SELECT * FROM locations");

while ($row = $result->fetch_assoc()) {
    $return[] = [
        'id' => $row['id'],
        'name' => preg_replace('/[\x00-\x1F\x7F-\xFF]/', '', $row['name']),
        'description' => preg_replace('/[\x00-\x1F\x7F-\xFF]/', '', $row['description']),
    ];
}

echo json_encode($return);
?>