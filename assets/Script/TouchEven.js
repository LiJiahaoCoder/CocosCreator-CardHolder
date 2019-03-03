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
        pageview: cc.PageView,
        audio: cc.AudioClip,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        //判断当前场景界面如果是GameScene界面就为其场景设置点击事件
        // if(this.node.name=="GameScene")
        // {
        //     this.node.getChildByName('Scene1').on(cc.Node.EventType.TOUCH_START,this.OnScene1Click,this);
        //     this.node.getChildByName('Scene2').on(cc.Node.EventType.TOUCH_START,this.OnScene2Click,this);
        //     this.node.getChildByName('Scene3').on(cc.Node.EventType.TOUCH_START,this.OnScene3Click,this);
        // }
        // //判断当前场景界面如果是Player界面就为其场景设置点击事件
        // if(this.node.name=="Player"){
        //     this.node.getChildByName('Player1').on(cc.Node.EventType.TOUCH_START,this.OnPlayer1Click,this);
        //     this.node.getChildByName('Player2').on(cc.Node.EventType.TOUCH_START,this.OnPlayer2Click,this);
        //     this.node.getChildByName('Player3').on(cc.Node.EventType.TOUCH_START,this.OnPlayer3Click,this);
        // }

        //选择场景按钮
        if (this.node.name == "Scene_PageUp") {
            this.node.on(cc.Node.EventType.TOUCH_START, this.OnSelectSceneUp, this);
        }
        if (this.node.name == "Scene_PageNext") {
            this.node.on(cc.Node.EventType.TOUCH_START, this.OnSelectSceneNext, this);
        }
        //选择英雄按钮
        if (this.node.name == "PlayerPage_Up") {
            this.node.on(cc.Node.EventType.TOUCH_START, this.OnSelectPlayerUp, this);
        }
        if (this.node.name == "PlayerPage_Next") {
            this.node.on(cc.Node.EventType.TOUCH_START, this.OnSelectPlayerNext, this);
        }

        //进入英雄选择
        if (this.node.name == "ScenePageview") {
            this.node.getChildByName('view').getChildByName('content').getChildByName('page_1').on(cc.Node.EventType.TOUCH_START, this.EnterPlayer1, this);
            this.node.getChildByName('view').getChildByName('content').getChildByName('page_2').on(cc.Node.EventType.TOUCH_START, this.EnterPlayer2, this);
            this.node.getChildByName('view').getChildByName('content').getChildByName('page_3').on(cc.Node.EventType.TOUCH_START, this.EnterPlayer3, this);
        }
        //进入游戏
        if (this.node.name == "PlayerPageView") {
            this.node.getChildByName('view').getChildByName('content').getChildByName('page_1').on(cc.Node.EventType.TOUCH_START, this.EnterGame1, this);
            this.node.getChildByName('view').getChildByName('content').getChildByName('page_2').on(cc.Node.EventType.TOUCH_START, this.EnterGame2, this);
            this.node.getChildByName('view').getChildByName('content').getChildByName('page_3').on(cc.Node.EventType.TOUCH_START, this.EnterGame3, this);
        }


    },
    //进入player选择场景
    EnterPlayer1() {
        let i = this.pageview.getCurrentPageIndex();
        cc.audioEngine.play(this.audio, false, 1);
        cc.director.loadScene('PalyerPageView');
        sceneandplayerID.changesceneId(i);
    },
    EnterPlayer2() {
        let i = this.pageview.getCurrentPageIndex();
        cc.audioEngine.play(this.audio, false, 1);
        cc.director.loadScene('PalyerPageView');
        sceneandplayerID.changesceneId(i);
    },
    EnterPlayer3() {
        let i = this.pageview.getCurrentPageIndex();
        cc.audioEngine.play(this.audio, false, 1);
        cc.director.loadScene('PalyerPageView');
        sceneandplayerID.changesceneId(i);
    },
    //进入游戏场景
    EnterGame1() {
        let i = this.pageview.getCurrentPageIndex();
        cc.audioEngine.play(this.audio, false, 1);
        cc.director.loadScene('GameScene');
        sceneandplayerID.changeplayerId(i);
    },
    EnterGame2() {
        let i = this.pageview.getCurrentPageIndex();
        cc.audioEngine.play(this.audio, false, 1);
        cc.director.loadScene('GameScene');
        sceneandplayerID.changeplayerId(i);
    },
    EnterGame3() {
        let i = this.pageview.getCurrentPageIndex();
        cc.audioEngine.play(this.audio, false, 1);
        cc.director.loadScene('GameScene');
        sceneandplayerID.changeplayerId(i);
    },

    // OnScene2Click(){
    //     cc.director.loadScene('PlayerScene');
    //     //改变场景的ID值
    //     sceneandplayerID.changesceneId(2);
    // },
    // OnScene3Click(){
    //     cc.director.loadScene('PlayerScene');
    //     //改变场景的ID值
    //     sceneandplayerID.changesceneId(3);
    // },
    // //人物选择
    // OnPlayer1Click(){
    //     cc.director.loadScene('Game');
    //     //改变Player的ID值
    //     sceneandplayerID.changeplayerId(1);

    // },
    // OnPlayer2Click(){
    //     cc.director.loadScene('Game');
    //      //改变Player的ID值
    //     sceneandplayerID.changeplayerId(2);
    // },
    // OnPlayer3Click(){
    //     cc.director.loadScene('Game');
    //      //改变Player的ID值
    //     sceneandplayerID.changeplayerId(3);
    // },

    //场景选择Pageview向前滚动一页
    OnSelectSceneUp() {
        let i = this.pageview.getCurrentPageIndex();
        let index = i - 1;
        if (i === 0) {
            //滚动到指定界面
            this.pageview.scrollToPage(2);
        }
        else {
            this.pageview.scrollToPage(index);
        }
    },
    //场景选择Pageview向后滚动一页
    OnSelectSceneNext() {
        let i = this.pageview.getCurrentPageIndex();
        let index = i + 1;
        if (i === 2) {
            this.pageview.scrollToPage(0);
        }
        else {
            this.pageview.scrollToPage(index);
        }
    },
    //人物选择pageview向前滚动一页
    OnSelectPlayerUp() {
        let i = this.pageview.getCurrentPageIndex();
        let index = i - 1;
        if (i === 0) {
            //滚动到指定界面
            this.pageview.scrollToPage(2);
        }
        else {
            this.pageview.scrollToPage(index);
        }
    },
    //人物选择pageview向后滚动一页
    OnSelectPlayerNext() {
        let i = this.pageview.getCurrentPageIndex();
        let index = i + 1;
        if (i === 2) {
            this.pageview.scrollToPage(0);
        }
        else {
            this.pageview.scrollToPage(index);
        }
    },
    // update (dt) {},
});
