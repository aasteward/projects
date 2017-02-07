<?php
$currentPage = $_SERVER['REQUEST_URI'];
?>

<!DOCTYPE html>

<html lang="en-us">

<head>
<meta charset="utf-8">
<title>Navigation</title>
<link rel="stylesheet" type="text/css" href="styles.css">

</head>

<body>

<h3>Navigation</h3>
    <ul>
        <li><a <?php if($currentPage == "/career.php") {echo 'class="current"';}?> href="career.php">Fernando behind the wheel</a></li>
        <li><a <?php if($currentPage == "/alonso.php") {echo 'class="current"';}?> href="alonso.php">Off the track</a></li>
        <li><a <?php if($currentPage == "/external_links.php") {echo 'class="current"';}?> href="external-links.php">More reading</a></li>
        <li><a <?php if($currentPage == "/index.php") {echo 'class="current"';}?> href="index.php">Home</a></li>

    </ul>

</body>

</html>