
//sort the table
function sortTable(col) {
    var table = document.getElementById("sortableTable");

    var sorted = false;
    var alreadySorted = false;
    var switches = 0;
    var cycles = 0;

    //switch the rows
    function switchRows() {
        sorted = false;
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switches++;
    }

    while(!sorted){
        sorted = true;

        var rows = table.getElementsByTagName("tr");

        for(var i = 1; i < rows.length - 1; i++){
           var a = rows[i].getElementsByTagName("td")[col];
           var b = rows[i + 1].getElementsByTagName("td")[col];

           //parse number

           if(!alreadySorted){
               if(a.innerHTML.toLowerCase() > b.innerHTML.toLowerCase()){
                   switchRows();
               }
           }
           else{
               if(a.innerHTML.toLowerCase() < b.innerHTML.toLowerCase()){
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