class HTTP {
    request({
        url,
        type = "GET",
        dataType
    }) {
        return $.ajax({
            url,
            type,
            dataType: "jsonp",
        })
    }
}
class MovieModel extends HTTP {
    getTop250() {
        return this.request({
            url: `https://douban.uieee.com/v2/movie/top250`,
            dataType: "jsonp",
        })
    }
}