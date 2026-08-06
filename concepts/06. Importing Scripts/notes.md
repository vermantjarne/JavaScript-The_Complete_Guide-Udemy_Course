When the scripts are placed at the bottom of the HTML file, it takes longer for the scripts to be imported. The scripts only get executed after they are imported and the HTML file is parsed up until that point. The loading of the script causes the HTML file to stop parsing midway through.

The `defer` keyword with scripts causes the HTML file to finish parsing first, after which the scripts are downloaded and executed.

The `async` keyword with scripts causes the scripts to be downloaded and executed as soon as possible, even before the HTML file would not be fully parsed. Generally, this keyword is less useful when the script interacts with the HTML file.