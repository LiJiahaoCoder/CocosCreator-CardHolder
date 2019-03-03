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
        //背景
        bg:[cc.SpriteFrame],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
         let bgIM=this.node.getComponent(cc.Sprite); 
         let index=sceneandplayerID.sceneId;
         bgIM.spriteFrame=this.bg[index];
         //console.log(index);
    },

    start () {
        //  for(var i=0;i<3;i++){
        //     if(sceneandplayerID.sceneId===i){
        //         let bgIM=this.node.getComponent(cc.Sprite);
        //         //let EnemyIM=this.node. 
        //         let index=sceneandplayerID.sceneId;
        //         bgIM.spriteFrame=this.bg[index];
        //         console.log(index);
        //     }
        // }

    },
    // update (dt) {},
});
