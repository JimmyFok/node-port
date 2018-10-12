const redis = require("redis");

const client = redis.createClient("6379","192.168.1.200");

client.on('error',function(error){
    console.log(error);    
});

// client.auth("123456") // redis验证，公司的服务暂时没有

client.select("15",function(error){
    if(error){
        console.log(error);
    }else{
        client.get("node_redis_key",JSON.stringify({
            name: "wolfy",
            age: 28
        }),
        function(error,res){
            if(error){
                console.log(error);
            }else{
                console.log(res);
            }
            // 操作完成，关闭redis连接
            client.end(true)
        }
        )
    }
})
