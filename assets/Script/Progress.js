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
        
        wt1:50,
        wt2:100,
        cast:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        
        this.node.getComponent(cc.ProgressBar).progress=0;
        // this.Pro=0;
    },
    
    // WaitTime(time){
        
    //         this.scheduleOnce(function() {
    //             this.node.getComponent(cc.Sprite).fillRange = time/100;
    //             this.nowTime=time;
    //             this.WaitTime(++this.nowTime);

    //         }, 0.1);
        
        
    // },
    KillTime(time){
        // var nowTime=this.node.getComponent(cc.Sprite).fillRange*100;
        if(this.node.getComponent(cc.ProgressBar).progress >= time){
            
            this.node.getComponent(cc.ProgressBar).progress -= time;
            
        }
    },
    update (dt) {
        
        this.node.getComponent(cc.ProgressBar).progress+=0.1*dt;
        if(this.node.getComponent(cc.ProgressBar).progress>=1){
            this.node.getComponent(cc.ProgressBar).progress=1;
        }
    },
});
