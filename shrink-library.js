var fs = require('fs');

var library = JSON.parse(fs.readFileSync('library.json', 'utf8')); 

function processTree(node) {
    if (Array.isArray(node)) {
        var result = []
        for (var i = 0; i < node.length; i++) {
            result[i] = processTree(node[i]);
        }
        return result;

    } else if (node.hasOwnProperty('items')) { // topic
        return { name: node.name,
                 items: processTree(node.items) };

    } else if (node.hasOwnProperty('playlist')) { // playlist
        return { name: node.playlist.title,
                 description: node.playlist.description,
                 items: processTree(node.playlist.videos) };

    } else if (node.hasOwnProperty('kind') && node.kind === "Video") { // video
        return { name: node.title,
                 video: node.readable_id };

    } else {
        throw new Error('processTree() found an unexpected kind of node: '
                        + JSON.stringify(node));
    }

    return result;
}

fs.writeFileSync('short-library.json', JSON.stringify(processTree(library)), 'utf8');
