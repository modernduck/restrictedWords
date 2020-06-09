var fs = require('fs');
console.log(__dirname + '/rawText')
fs.readFile(__dirname + '/rawText', {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        //console.log('received data: ' + data);
        const splitData = data.split('\n');
        const restrictedWords = splitData.map(d => d.split(" ")).reduce((prev, now)=> prev.concat(now) , []);
        const rawJSON = JSON.stringify(restrictedWords);
        console.log(rawJSON)
        fs.writeFile(__dirname + '/restrictedWords.json', rawJSON, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
    } else {
        console.log(err);
    }
})