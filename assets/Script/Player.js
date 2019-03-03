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
var PlayerData = require('../Data/playerData');
window.Statevalue = 1;
cc.Class({
    extends: cc.Component,

    properties: {
        //player:[cc.SpriteFrame],
        playerPre: [cc.Prefab],//英雄预设体
        healthManger: cc.Node,//英雄血量节点
        health: PlayerData.ClassRoom.health,//初始化英雄血量数值
        audio: [cc.AudioClip],
        heart:cc.Prefab,//血量星星预设体
        //playnode:cc.Node,
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // console.log(this.health + '------------------------------')
        let setnode = cc.find('Canvas/Pop_up');
        setnode.active = false;
        //获取场景ID(每个场景三种Player乘以三后可获取Player的索引)
        let index = sceneandplayerID.sceneId * 3;
        if (sceneandplayerID.playerId === 0) {
            let prefab = this.playerPre[index];
            let player = cc.instantiate(prefab);
            player.parent = this.node;
            player.x = 0;
            player.y = 0;
            // //初始化血量个数
            for(let i=0;i<this.health;i++){
                let heroheart=this.heart;
                let heartmanger=cc.instantiate(heroheart);
                heartmanger.parent=this.healthManger;
                heartmanger.x=0;
                heartmanger.y=-(i*70);
            }

           //PlayerIM.spriteFrame=this.player[index];
        }
        if (sceneandplayerID.playerId == 1) {
            let prefab = this.playerPre[index + 1];
            let player = cc.instantiate(prefab);
            player.parent = this.node;
            player.x = 0;
            player.y = 0;
            //初始化血量个数
            for(let i=0;i<this.health;i++){
                let heroheart=this.heart;
                let heartmanger=cc.instantiate(heroheart);
                heartmanger.parent=this.healthManger;
                heartmanger.x=0;
                heartmanger.y=-(i*70);
            }
            //PlayerIM.spriteFrame=this.player[index+1];
        }
        if (sceneandplayerID.playerId === 2) {
            let prefab = this.playerPre[index + 2];
            let player = cc.instantiate(prefab);
            player.parent = this.node;
            player.x = 0;
            player.y = 0;
             //初始化血量个数
             for(let i=0;i<this.health;i++){
                let heroheart=this.heart;
                let heartmanger=cc.instantiate(heroheart);
                heartmanger.parent=this.healthManger;
                heartmanger.x=0;
                heartmanger.y=-(i*70);
            }
            //PlayerIM.spriteFrame=this.player[index+2];
        }

        this.healthChlidren = this.healthManger.children;
        this.healthNum = this.healthChlidren.length;

    },
    start() {

    },

    update(dt) {
    },
    reduceHealth() {//减血
        if (this.healthNum >= 1) {
            this.healthNum--;
            cc.audioEngine.play(this.audio[0], false, 0.5);
            this.healthChlidren[this.healthNum].active = false;
            if (this.healthNum === 0) {
                console.log('死了');
            }
        }

    },

    addHealth() {// 加血
        if (this.healthNum < 3) {
            this.healthChlidren[this.healthNum].active = true;
            cc.audioEngine.play(this.audio[1], false, 0.5);
            this.healthNum++;
            console.log('加血');
        }
    }
});
