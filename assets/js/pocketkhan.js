var videoTree = [];
var itemsBeingBrowsed = [];

$(document).bind('mobileinit', function() {
    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
    $.mobile.allowCrossDomainPages = true;

    $.getJSON('assets/library/short-library.json', function(library) {
        videoTree = library;
    });
});

$(document).bind('pagebeforechange', function(e, data) {
    if (typeof data.toPage === 'string') {
	var u = $.mobile.path.parseUrl(data.toPage);
	var re = /^#browse/;

	if (u.hash.search(re) !== -1) {
	    browseItem(u, data.options);
	    e.preventDefault();
	}
    }
});

// naive depth-first search.
function findItem(name, where) {
    var len = where.length;
    for (var i = 0; i < len; i++) {
        if (where[i].name === name) {
            return where[i];
        } else if (where[i].hasOwnProperty('items')) {
            var res = findItem(name, where[i].items);
            if (res) {
                return res;
            }
        }
    }
    return false;
}

function hasDescription(item) {
    return item.hasOwnProperty('description') && item.description != null;
}

function isPlaylist(item) {
    return item.items[0].hasOwnProperty('video'); // ew.
}

function hasChildren(item) {
    return item.hasOwnProperty('items');
}

function itemMarkup(item) {
    var children = item.items,
        childrenCount = children.length,
        listType = isPlaylist(item) ? "ol" : "ul",
        markup = "";

    if (hasDescription(item)) {
        markup += "<p>" + item.description + "</p>";
    }

    markup += "<" + listType + " data-role='listview' data-inset='true'>";
    for (var i = 0; i < childrenCount; i++) {
        var name = children[i].name;
        markup += hasChildren(children[i])
            ? '<li><a href="#browse?i=' + name + '">' + name + '</a></li>'
            : '<li>' + name + '</li>';
    }
    markup += '</' + listType + '>';

    return markup;
}

function browseItem(urlObj, options) {
    var selectedItem = urlObj.hash.replace(/.*i=/, ""),
        item = findItem(selectedItem, videoTree),
        pageSelector = urlObj.hash.replace(/\?.*$/, ""),
        $page = $(pageSelector),
        $header = $page.children(":jqmData(role=header)"),
        $content = $page.children(":jqmData(role=content)");

    $header.find("h1").html(item.name);
    $content.html(itemMarkup(item));
    $page.page();
    $content.find(":jqmData(role=listview)").listview();
    options.dataUrl = urlObj.href;
    $.mobile.changePage($page, options);
}
