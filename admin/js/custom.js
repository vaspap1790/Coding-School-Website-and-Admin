
function hide(text, count) {
    for (var i = 0; i < $(text).length; i++) {
        $(text).eq(i).text($(text).eq(i).text().slice(0, count) + ($(text).eq(i).text().length > count ? "..." : ""));
    }
}

hide(".mayBeLong", 15);