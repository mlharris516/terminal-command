const fs = require('fs');

module.exports.ls = () => {
   fs.readdir('./', (err, files) => {
     const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');
 
    console.log(filesToString);
   });
};

module.exports.touch = () => {
    fs.writeFile('newfile.txt', 'Test content.', 
    err => { if(err) throw err; 
    console.log('File was written');
    });
};

module.exports.mkdir = () => {
    fs.mkdir('/tmp/test',
    err => { if(err) throw err;
    console.log('Directory created');
    });
};