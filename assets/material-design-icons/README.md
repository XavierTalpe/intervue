# README

These assets are a direct copy of what is available via
 
    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />

Since we run our software on-premise, we cannot rely on such URLs. Instead we have to manually download the font files to include them in our application. While it is true that we could also copy these files from the official [Google Material Design Icons](https://github.com/google/material-design-icons) repository (in particular in the `iconfont` directory), these files are horrible outdated compared to what is hosted via `fonts.googleapis.com`.

To download the files from `fonts.googleapis.com` some tricks are required because Google changes the file names and responses based on the browser for which you make the request. The easiest way to download the files is by executing the below `curl` scripts and then checking the return value for the `@font-face { src: XXX }` attribute. Then you need to manually access this URL and save the response into the proper file (`.svg`, `.ttf`, `.woff`, `.woff2`). The `.eot` files are only required for IE6 to 8 (which we don't support).

    # For Woff2, navigate your browser to https://fonts.googleapis.com/icon?family=Material+Icons

    # For TTF
    curl "https://fonts.googleapis.com/icon?family=Material+Icons"

    # For Woff, navigate your browser to https://fonts.googleapis.com/icon?family=Material+Icons
    curl "https://fonts.googleapis.com/icon?family=Material+Icons" -A 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko'
    
    # For SVG
    curl "https://fonts.googleapis.com/icon?family=Material+Icons" -A 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3'
