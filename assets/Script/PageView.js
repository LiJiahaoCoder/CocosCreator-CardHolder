// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var sceneandplayerID = require("SceneandPlayerId");
cc.Class({
    extends: cc.Component,

    properties: {
        pageview:cc.PageView,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // if(this.pageview.name=="ScenePageview"){
        //     sceneandplayerID.changesceneId(0);
        // }
        // if(this.pageview.name=="PlayerPageView"){
        //     sceneandplayerID.changeplayerId(0);
        // } 
    },

    start () {
        // if(this.pageview.name=="ScenePageview"){
        //     sceneandplayerID.changesceneId(0);
        // }
        // if(this.pageview.name=="PlayerPageView"){
        //     sceneandplayerID.changeplayerId(0);
        // }
        // //初始化场景ID与PlayerID
        // // sceneandplayerID.changesceneId(i);
        // // sceneandplayerID.changeplayerId(i);
    },

    update (dt) {

    },
    setSceneIdex(){
        //获取当前界面的场景索引值
        let i=this.pageview.getCurrentPageIndex();
        //设置当前场景ID
        sceneandplayerID.changesceneId(i);
        //console.log(sceneandplayerID.sceneId);  
    },
    setPlayerIdex(){
        //获取当前选中的Player索引值
        let i=this.pageview.getCurrentPageIndex();
        //设置当前PlayerID
        sceneandplayerID.changeplayerId(i);
        //console.log(sceneandplayerID.playerId);  
    },

});
