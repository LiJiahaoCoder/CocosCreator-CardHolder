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
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {},

    start () {

    },
    changemusic(){
        //设置音乐状态为播放模式
        if(this.node.name=="toggle1"){
        window.Statevalue=1;
        //console.log(window.Statevalue);
        }
        //设置音乐状态为暂停模式
        if(this.node.name=="toggle2"){
        window.Statevalue=0;
        //console.log(window.Statevalue);
        }
        
    },

    // update (dt) {},
});
