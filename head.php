<?php
/**
 * Created by PhpStorm.
 * User: mark
 * Date: 05/05/2018
 * Time: 11:08
 */

function head($title, $keywords, $description){
    print '
<head>
    <meta charset="utf-8">
    <title>'.$title.'</title>
	<link rel="shortcut icon" href="IMG/favicon.ico"/>
	<meta name="keywords" content="'.$keywords.'"/>
    <meta name="description" content="'.$description.'"/>
	<link href="CSS/main.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<section class="content">
<header>
        <img src="IMG/TextToTable_40_40.png">
        <h1>Text to Table</h1>
    </header>
<section class="table">
';
}