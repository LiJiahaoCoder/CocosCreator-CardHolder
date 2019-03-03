/*
 * @Author: FanBrother 
 * @Date: 2018-06-29  
 * @Last Modified by: zhaoyucong
 * @Last Modified time: 2018-07-05 01:06:25
 */
cc.Class({
    extends: cc.Component,

    properties: {
        FocusPoint: cc.Node,
        CDCircle: cc.Prefab,//CD环
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.FocusPoint.active = false;//先将Point关闭
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.animCom = this.FocusPoint.getComponent(cc.Animation);
        this.bulletManager = cc.find('Canvas/BulletManager');
    },

    start() {

    },

    // update (dt) {},

    onTouchStart(event) {
        //生成聚焦动画，炮射线。。。
        console.log("你点击了！");
        this.FocusPoint.active = true;
        this.FocusPoint.x = this.relPosition(event.getLocation()).x;
        this.FocusPoint.y = this.relPosition(event.getLocation()).y;
        this.animCom.play('SpecialFocusPoint');
    },
    onTouchMove(event) {
        this.FocusPoint.x = this.relPosition(event.getLocation()).x;
        this.FocusPoint.y = this.relPosition(event.getLocation()).y;
    },
    onTouchEnd() {
        this.FocusPoint.active = false;
    },
    onTouchCancel() {
        if (cc.find('Canvas/Player/CDBar') === null) {
            this.CdPre = cc.instantiate(this.CDCircle);
            this.CdPre.x = 0;
            this.CdPre.y = 0;
            this.CdPre.parent = cc.find('Canvas/Player');
            var children = this.bulletManager.children;
            for (var i = 0; i < children.length; ++i) {
                if (children[i].getComponent('BulletMove').isInSFP === true) {
                    children[i].getComponent(cc.Animation).play('Destroy');
                }
            }
        }
        this.FocusPoint.active = false;
    },
    relPosition: function (absPos) {
        let relX = absPos.x - 375 - this.node.getPosition().x;
        let relY = absPos.y - 667 - (-650) - this.node.getPosition().y;
        // let relX = absPos.x - 375 - 188;
        // let relY = absPos.y - 667 - -385;
        return { x: relX, y: relY }
    }
});
