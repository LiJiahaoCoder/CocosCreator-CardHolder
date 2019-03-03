
var sceneandplayerID = require("SceneandPlayerId");
cc.Class({
    extends: cc.Component,

    properties: {
        sprite: [cc.SpriteFrame],
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let bgIM = this.node.getComponent(cc.Sprite);
        let index = sceneandplayerID.sceneId;
        bgIM.spriteFrame = this.sprite[index];
    },

    start() {

    },

    // update (dt) {},
});
