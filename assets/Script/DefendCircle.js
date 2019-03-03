// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
window.invincible = false;//无敌

cc.Class({
    extends: cc.Component,

    properties: {

        // wt1:50,
        // wt2:100,
        // cast:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

        this.node.getComponent(cc.ProgressBar).progress = 1;
        window.invincible = true;
        // this.Pro=0;
    },

    onCollisionEnter(other, self) {

        if (3 === other.tag) {

            other.node.destroy();
        }
    },
    update(dt) {
        this.node.getComponent(cc.ProgressBar).progress -= window.speedCoefficient * dt;
        if (this.node.getComponent(cc.ProgressBar).progress < 0) {
            window.invincible = false;
            this.node.getComponent(cc.ProgressBar).progress = 0;
            this.node.destroy();
        }
    },
});
