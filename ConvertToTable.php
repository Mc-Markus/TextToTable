<?php
/**
 * Created by PhpStorm.
 * User: mark
 * Date: 05/05/2018
 * Time: 09:53
 */

require_once "Converter.php";
require_once "head.php";
require_once "footer.php";

if(isset($_POST['cellSeparator']) && isset($_POST['rowSeparator']) && isset($_POST['amountOfColumns']) && isset($_POST['inputText'])){

    $converter = new Converter($_POST['cellSeparator'], $_POST['rowSeparator'], $_POST['amountOfColumns'], $_POST['inputText']);

    head("Text To Table", "","");

    printTable($converter->getTable());

    footer("Mark van den Berg", 2018);

}
else{
    header("Location: /TextToTable/index.html", true, 303);
}

function printTable($table){
    echo
    "<script src='SCRIPTS/sorting.js'></script>
<table id='sortableTable'>
	    <tr>";
    for ($col = 0; $col < count($table[0]); $col++){
        echo"<th onclick='sortTable($col)'>{$table[0][$col]}</th>";
    }
    echo"</tr>";

    for($row = 1; $row < count($table); $row++){

        echo"<tr>";

        for ($col = 0; $col < count($table[0]); $col++){
            echo"<td>{$table[$row][$col]}</td>";
        }

        echo"</tr>";
    }

    echo"</table>";
}