
//sort the table
function sortTable(col) {
    var table = document.getElementById("sortableTable");

    var sorted = false;
    var alreadySorted = false;
    var switches = 0;
    var cycles = 0;

    //switch the rows
    function switchRows() {

        //if rows have to be switched that means it's not sorted
        sorted = false;

        //actual switching of rows
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);

        //add's 1 to the switches counter
        switches++;
    }

    //try's to make a number from the input
    function tryparse(input){
        //if the input is a number returns it as a number by dividing by 1
        if(!isNaN(input)){
            return input/1;
        }
        //if the input is not a number return the input as it is
        return input;
    }

    while(!sorted){
        //sorted until proven to be not sorted
        sorted = true;

        //get all rows
        var rows = table.getElementsByTagName("tr");

        //skip the first row as they are the table headers
        for(var i = 1; i < rows.length - 1; i++){

            //get the data of two rows in the same column
            var a = rows[i].getElementsByTagName("td")[col].innerHTML.toLowerCase();
            var b = rows[i + 1].getElementsByTagName("td")[col].innerHTML.toLowerCase();

            //test if a & b are numbers
            a = tryparse(a);
            b = tryparse(b);

            //sort one way
            if(!alreadySorted){
               if(a > b){
                   switchRows();
               }
            }
            //sort the other way
            else{
               if(a < b){
                   switchRows();
               }
            }
        }

        //if there haven't been done any switches in the first run it is already sorted and must be reversed
        //for the case that the column only contains the same value the cycles are counted to stop an infinite loop
        if(switches == 0 && cycles < 2){
            alreadySorted = true;
            sorted = false;
            cycles++;
        }
    }
}