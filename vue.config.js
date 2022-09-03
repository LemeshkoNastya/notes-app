const path = require('path');

module.exports = {
    // publicPath: process.env.NODE_ENV === "production" ? "/notes-app/" : "/",
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/variables.scss";`
            }
        }
    }
}