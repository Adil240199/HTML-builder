const fs = require('fs');
const path = require('path');

const sourceFolder = path.join(__dirname, 'files');
const destinationFolder = path.join(__dirname, 'files-copy');

fs.mkdir(destinationFolder, { recursive: true }, (err) => {
    if (err) {
        return console.error(err);
    }

    fs.readdir(sourceFolder, (readErr, files) => {
        if (readErr) {
            return console.error(readErr);
        }

        files.forEach((file) => {
            const sourceFilePath = path.join(sourceFolder, file);
            const destinationFilePath = path.join(destinationFolder, file);

            fs.copyFile(sourceFilePath, destinationFilePath, (copyErr) => {
                if (copyErr) {
                    console.error(`Error copying ${file}: ${copyErr}`);
                } else {
                    console.log(`${file} was copied to ${destinationFolder}`);
                }
            });
        });
    });
});
