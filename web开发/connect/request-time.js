module.exports = function(opts){
    const time = opts.time || 100;

    return function(req, res, next){
        const timer = setTimeout(function(){
            console.log('\033[90m%s %s\033[39m \033[91mis taking too long!\033[39m', req.method, req.url);
        }, time)

        const end = res.end;
        res.end = function(chunk, encoding){
            res.end = end;
            res.end(chunk, encoding);
            clearTimeout(timer);
        }
        next();
    }
}