const fs = require('fs');
const path = require('path');

const folderPath = './03-files-in-folder/secret-folder';

function readDirectory(directory) {
  fs.readdir(directory, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file.name);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }

        if (stats.isDirectory()) {
          readDirectory(filePath);
        } else {
          const fileSizeInBytes = stats.size;
          const fileSizeInKilobytes = fileSizeInBytes / 1024;

          console.log(`${file.name}-${path.extname(file.name)}-${fileSizeInKilobytes.toFixed(2)} KB`);
        }
      });
    });
  });
}

readDirectory(folderPath);


