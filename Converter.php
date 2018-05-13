<?php
/**
 * Created by PhpStorm.
 * User: mark
 * Date: 04/05/2018
 * Time: 17:56
 */

class Converter
{
    private $cellSeparator;
    private $rowSeparator;
    private $amountOfColumns;
    private $table = array();
    private $text;

    /**
     * Converter constructor.
     * @param $cellSeparator
     * @param $rowSeparator
     * @param $amountOfColumns
     * @param $text
     */
    public function __construct($cellSeparator, $rowSeparator, $amountOfColumns, $text)
    {
        $this->cellSeparator = $cellSeparator;
        $this->rowSeparator = $rowSeparator;
        $this->amountOfColumns = $amountOfColumns;
        $this->text = $text;
    }

    //converts the text to a 2 dimensional array
    private function convert(){
        $pos = 0;
        $columnCounter = 0;
        $rowCounter = 0;
        $row = array();

        for ($i = 0; $i < strlen($this->text); $i++){
            //until the for-last column
            if($columnCounter < $this->amountOfColumns-1){
                //look for the cell separator
                if($this->text[$i] == $this->cellSeparator){
                    //add that cell to the row
                    $row[$columnCounter] = substr($this->text, $pos, $i-$pos);

                    //make vars ready for next round
                    $pos = $i+1;
                    $columnCounter++;
                }
            }
            //in the last column
            else{
                //look for row separator
                if($this->text[$i] == $this->rowSeparator){
                    //add that cell to the row
                    $row[$columnCounter] = substr($this->text, $pos, $i-$pos);
                    //add the row to the table
                    $this->table[$rowCounter] = $row;

                    //reset the row
                    $row = null;
                    $row = array();

                    //make vars ready for next round
                    $pos = $i +1;
                    $columnCounter = 0;
                    $rowCounter++;
                }
            }
        }
    }

    /**
     * @return array
     */
    //converts the data to a 2-dim array and returns it
    public function getTable()
    {
        $this->convert();
        return $this->table;
    }
}