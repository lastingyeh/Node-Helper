var fs = require('fs')

fs.unlink('TestFile.txt',function(){
  console.log('Delete file...')
})