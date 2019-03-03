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
        Enemy: [cc.SpriteFrame],

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //let index=sceneandplayerID.sceneId;
        // let EnemyIM=this.node.getComponent(cc.Sprite);
        // let index=sceneandplayerID.sceneId;
        // EnemyIM.SpriteFrame=this.Enemy[index];


        //  let bgIM=this.node.getComponent(cc.Sprite); 
        //  let index=sceneandplayerID.sceneId;
        //  bgIM.spriteFrame=this.Enemy[index];
        // console.log(EnemyIM.SpriteFrame.name);
        // console.log('场景号'+index);
    },

    start() {
        let bgIM = this.node.getComponent(cc.Sprite);
        let index = sceneandplayerID.sceneId;
        bgIM.spriteFrame = this.Enemy[index];
    },

    // update (dt) {},
});
