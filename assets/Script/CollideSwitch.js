//打开碰撞开关Fb，脚本挂在background上
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //打开一堆碰撞开关
        var manager = cc.director.getCollisionManager();        
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
    },

    start () {

    },

    // update (dt) {},
});
