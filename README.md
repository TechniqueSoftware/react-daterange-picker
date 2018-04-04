ClubOS React Daterange Picker
======================

A React based date range picker forked from [http://onefinestay.github.io/react-daterange-picker/](http://onefinestay.github.io/react-daterange-picker/)

This project was forked and has made several updates to accommodate our needs for the Package Agreement Freeze Page 
stylings/format. We've also migrated the project to support React 16. 

## Features

* Select a date range in an intuitive way.
* Define date ranges that are not available for selection.
* Show any number of months at the same time.
* Visually represent half day states.

### Building example page

Once you have the repository cloned run the following commands to get started:

```shell
npm install react react-dom prop-types
npm install
npm run develop
```

This will start a local server at `http://localhost:9989` where you can see the
example page. It will also watch for any files changes and rebuild.
To update the compiled files in dist run `npm run build-dist-js`, and you can
lint the code with `npm run lint`. 
