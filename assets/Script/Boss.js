/*
 * @Author: zhaoyucong 
 * @Date: 2018-07-04 11:37:25 
 * @Last Modified by: zhaoyucong
 * @Last Modified time: 2018-07-05 01:40:11
 */
// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

let initTime = 0;

cc.Class({
    extends: cc.Component,

    properties: {
        Bullet: [cc.Prefab], // 预设体数组
        audio: [cc.AudioClip],//音效
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.bomb = 0;
        this.healthPoint = 12;

        this.playerNode = cc.find('Canvas/Player');
        this.moveDir = cc.v2(0 - this.node.x, 350 + Math.random() * 150 - this.node.y);
        this.xDir = 'right';

        this.startMove = 0;
    },

    // start () {

    // },

    update(dt) {
        if (this.startMove === 2) {
            this.bossMove();
            this.bossShot();
        }
    },

    isStop: function () {
        let stop = this.node.y <= 500 ? true : false;
        return stop;
    },

    bossMove: function () {
        if (!this.isStop() && window.touchState === true) {
            console.log(this.isStop())
            this.node.x += this.moveDir.x * 10 * window.speedCoefficient / cc.pLength(this.moveDir)
            this.node.y += this.moveDir.y * 10 * window.speedCoefficient / cc.pLength(this.moveDir)
        }
        if (this.node.x >= 250) {
            this.xDir = 'left';
        }
        if (this.node.x <= -250) {
            this.xDir = 'right';
        }
        if (this.isStop() && window.touchState === true) {
            if (this.xDir === 'left') {
                this.node.x -= 3;
            }
            if (this.xDir === 'right') {
                this.node.x += 3;
            }
        }
    },

    bossShot: function () {
        if (this.isStop() && window.touchState === true) {
            for (; initTime === 50; initTime = 0) {
                // console.log('initial prefab')
                let bulletPrefab = cc.instantiate(this.Bullet[this.getBulletType()])
                cc.audioEngine.play(this.audio[Math.floor(Math.random() * 2)], false, 0.3);
                bulletPrefab.position = this.node.position
                bulletPrefab.parent = cc.find('Canvas/BulletManager')
                bulletPrefab.zIndex = 1
                // console.log(bulletPrefab)
            }
            initTime++
        }
    },

    getBulletType: function () {
        if (this.bomb >= 50) {
            this.bomb = 0;
            console.log(this.bomb)
            return 3;
        } else {
            let type = Math.random() * 100
            if (type >= 0 && type < 80) {
                this.bomb++;
                console.log(this.bomb)
                return 0;
            }
            if (type >= 80 && type < 90) {
                this.bomb += 2;
                console.log(this.bomb)
                return 1;
            }
            if (type >= 90) {
                this.bomb += 2;
                console.log(this.bomb)
                return 2;
            }
        }
    },

    onCollisionEnter: function (other, self) {
        if (other.tag === 4) {
            if (this.healthPoint > 0) {
                this.healthPoint -= 2
                other.node.destroy();
                cc.audioEngine.play(this.audio[2], false, 0.9);
            }
            if (this.healthPoint <= 0) {
                cc.audioEngine.play(this.audio[3], false, 0.9);
                this.node.destroy()
            }
        }
    },

    addStartMove: function () {
        this.startMove += 1;
    }
});
