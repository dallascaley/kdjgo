<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

}

$servername = "localhost";
$username = "pearboy_kdjgo";
$password = "bacon";

// Create connection
$conn = new mysqli($servername, $username, $password, "pearboy_kdjgodb");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

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