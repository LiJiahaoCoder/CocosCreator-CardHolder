// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.node.getComponent(cc.ProgressBar).progress=1;

    },
    //减去CD时间
    // KillCD(){
    //     if(this.CD>0.5){
    //         this.node.getComponent(cc.ProgressBar).progress -= 0.5;
    //     }
        
    // },
    update(dt) {
        this.node.getComponent(cc.ProgressBar).progress -= window.speedCoefficient * dt;
        if (this.node.getComponent(cc.ProgressBar).progress <= 0) {          
            this.node.getComponent(cc.ProgressBar).progress = 0;
            this.node.destroy();
        }
    },
});
