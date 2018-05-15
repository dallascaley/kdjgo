<?php
include('cors.php');
include ('db_connect.php');

$term = htmlspecialchars_decode($_GET['term']);


$result = $conn->query("SELECT * FROM songbook WHERE song_name LIKE '%". $term ."%' OR artist_name LIKE '%". $term ."%' LIMIT 10;");

while ($row = $result->fetch_assoc()) {
    $return[] = [
        'id' => $row['id'],
        'name' => preg_replace('/[\x00-\x1F\x7F-\xFF]/', '', $row['artist_name']),
        'title' => preg_replace('/[\x00-\x1F\x7F-\xFF]/', '', $row['song_name']),
    ];
}

echo json_encode($return);
?>