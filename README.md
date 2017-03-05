# nodejs


This is simple node js operations project

#Projects:
Watcher :  monitors a directory if any changes found in the mentioned directory it runs mvn clean install
run this command  to install dependent module :
npm install chokidar --save

Create a shorcut on desktop to monitor:
1. Create a text file
2. Add the following content in it 
	D:
	cd JavaTechy\nodejs\DirectoryWatcher
	node MultiDirWatch.js
3. Save the file as .bat extension
4. Run the bat file  to monitor

Run a node js File
node MvnChangeWatch.js


Commit with author name:
git commit -m  "removed node modules" --author "javatechy"

Remove a directory from remote

git rm --cached -r node_modules

Push to remove
git push https://javatechy@github.com/javatechy/nodejs --all