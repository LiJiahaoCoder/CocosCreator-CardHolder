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
        player:[cc.SpriteFrame],
        SceneNode:cc.Node,
    },
    // onLoad () {},

    start () {
        //获取选中场景ID
        let index=sceneandplayerID.sceneId*3;
        //设置该场景中的Player
        let playerIM1=this.node.getChildByName('view').getChildByName('content').getChildByName('page_1').getComponent(cc.Sprite);
        let playerIM2=this.node.getChildByName('view').getChildByName('content').getChildByName('page_2').getComponent(cc.Sprite);
        let playerIM3=this.node.getChildByName('view').getChildByName('content').getChildByName('page_3').getComponent(cc.Sprite);
        playerIM1.spriteFrame=this.player[index];
        playerIM2.spriteFrame=this.player[index+1];
        playerIM3.spriteFrame=this.player[index+2];
    },

    // update (dt) {},
});
