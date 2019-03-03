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
        setnode: cc.Node,
        audio: cc.AudioClip,
    },
    // onLoad () {},

    start() {

    },
    OnBtnClick() {
        cc.audioEngine.play(this.audio, false, 1);
        //判断当前按钮的name,根据不同按钮进行不同场景切换
        if (this.node.name == "BT_EnterGame") {
            cc.director.loadScene('ScenePageview');
        }
        // if(this.node.name=="Return_Menu"){
        //     cc.director.loadScene('Start');
        // }
        // if(this.node.name=="Return_GameScene"){
        //     cc.director.loadScene('GameScene');
        // }
        //返回Player选择页面
        if (this.node.name == "Return_PlayerScene") {
            cc.director.loadScene('PalyerPageView');
            //修改Player默认ID为0
            sceneandplayerID.changeplayerId(0);
        }
        //判断当前按钮的name,根据不同按钮进行不同场景切换（使用Pageview）
        if (this.node.name == "Return_Start") {
            cc.director.loadScene('Start');
        }
        if (this.node.name == "Next_PlayerScene") {
            cc.director.loadScene('PalyerPageView');
        }
        //返回场景选择页面
        if (this.node.name == "Return_Scene") {
            cc.director.loadScene('ScenePageview');
            ////设置场景默认ID为0
            sceneandplayerID.changesceneId(0);
        }
        if (this.node.name == "Next_Game") {
            cc.director.loadScene('Game');
        }
        //游戏场景返回至场景选择
        if (this.node.name == "Return") {
            //cc.director. loadScene('ScenePageview');
            let open = cc.find('Canvas/Pop_up/setmusic/toggle1');
            let close = cc.find('Canvas/Pop_up/setmusic/toggle2');
            //初始化音效设置选中状态
            if (window.Statevalue === 0) {
                open.getComponent(cc.Toggle).isChecked = false;
                close.getComponent(cc.Toggle).isChecked = true;
            }
            if (window.Statevalue === 1) {
                open.getComponent(cc.Toggle).isChecked = true;
                close.getComponent(cc.Toggle).isChecked = false;
            }
            this.setnode.active = true;
        }
        //退出游戏
        if (this.node.name == "return-Scene") {
            cc.director.loadScene('ScenePageview');
        }
        //返回游戏
        if (this.node.name == "return_game") {
            this.setnode.active = false;
        }

    },

    // update (dt) {},
});
