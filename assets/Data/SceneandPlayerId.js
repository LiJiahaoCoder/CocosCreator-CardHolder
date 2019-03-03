//场景ID和PlayerID
var sceneandplayerId={
    //初始化ID值
    sceneId:0,
    playerId:0,
    //改变场景ID值
    changesceneId:function(id){
        this.sceneId=id;
    },
    //改变PlayerID值
    changeplayerId:function(id){
        this.playerId=id;
    },
    getsceneSize:function(){
        return this.sceneId+1;
    },
    getplayerId:function(){
        return this.playerId+1;
    }

}
module.exports = sceneandplayerId;