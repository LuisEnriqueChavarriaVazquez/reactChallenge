const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        proxy("/banks", {
            target: "https://dev.obtenmas.com",
            secure: false,
            changeOrigin: true
        })
    )
}