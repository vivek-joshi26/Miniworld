var bloomArray = [];

function readBloomFilterData(){

    var filePath = path.join(__dirname, '/bloomfilter/example.txt');
    console.log("Bloomfilter backup file path: " , filePath)
    const contents = readFileSync(filePath, 'utf-8');
    const arr = contents.split(/\r?\n/);
    for(i in arr){
        if ( (arr[i]) != "NaN" ){
            bloomArray.push(parseInt(arr[i]))
        }
    }
    console.log("Updated the bloomArray with the backup values")
    console.log(bloomArray);
}

module.exports = {readBloomFilterData,bloomArray}