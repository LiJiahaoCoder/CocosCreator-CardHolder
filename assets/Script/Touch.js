/*
 * @Author: zhaoyucong 
 * @Date: 2018-06-28 11:27:22 
 * @Last Modified by: zhaoyucong
 * @Last Modified time: 2018-07-05 01:09:13
 */
let testData = require('../Data/testData');
window.touchState = false;
window.speedCoefficient = 1;//速度系数
cc.Class({
    extends: cc.Component,

    properties: {
        point: cc.Node,
        player: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.point.active = false;//先将point关闭
        this.lastAim;
        this.speed = testData.playerSpeed;
        // this.node.on(cc.Node.EventType.MOUSE_DOWN,this.onTouchDown,this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    },

    start() {

    },

    update(dt) {
        this.vecEP = cc.v2(this.point.x - this.player.x, this.point.y - this.player.y); // 创建父节点与player的向量
        this.rotateDir = cc.pToAngle(this.vecEP); // 获取向量的弧度

        //根据距离不同速度系数不同
        if (cc.pDistance(this.point, this.player) <= 20) { window.speedCoefficient = 0; window.touchState = false; }
        else if (cc.pDistance(this.point, this.player) <= 40) { window.speedCoefficient = 0.1; }
        else if (cc.pDistance(this.point, this.player) <= 100) { window.speedCoefficient = 0.2; }
        else if (cc.pDistance(this.point, this.player) <= 200) { window.speedCoefficient = 0.3; }
        else if (cc.pDistance(this.point, this.player) <= 250) { window.speedCoefficient = 0.4; }
        else if (cc.pDistance(this.point, this.player) <= 300) { window.speedCoefficient = 0.5; }
        else if (cc.pDistance(this.point, this.player) <= 350) { window.speedCoefficient = 0.6; }
        else if (cc.pDistance(this.point, this.player) <= 400) { window.speedCoefficient = 0.7; }
        else if (cc.pDistance(this.point, this.player) <= 450) { window.speedCoefficient = 0.8; }
        else if (cc.pDistance(this.point, this.player) <= 500) { window.speedCoefficient = 0.9; }
        else { window.speedCoefficient = 1; }

        if (window.touchState === true) {
            this.point.active = true;

            var aim = this.point.getPosition()

            if (cc.pDistance(this.point, this.player) >= 20) {
                this.player.rotation = -cc.radiansToDegrees(this.rotateDir) + 90;
            }
            // 将弧度转化为角度

            this.player.x += this.vecEP.x * this.speed * window.speedCoefficient / cc.pLength(this.vecEP);
            this.player.y += this.vecEP.y * this.speed * window.speedCoefficient / cc.pLength(this.vecEP);


        } else {
            window.speedCoefficient = 0;
        }
    },
    onTouchStart(event) {
        window.touchState = true;
        this.point.x = this.relPosition(event.getLocation()).x;
        this.point.y = this.relPosition(event.getLocation()).y;
    },


    onTouchMove(event) {
        window.touchState = true;
        this.point.x = this.relPosition(event.getLocation()).x;
        this.point.y = this.relPosition(event.getLocation()).y;
    },
    onTouchEnd(event) {
        this.point.active = false;//手指松开将point关闭
        window.touchState = false;
    },
    onTouchCancel(event) {
        this.point.active = false;
        window.touchState = false;
    },

    /**
     *
     * @description 将指针的绝对位置转化为相遇对Canvas的相对位置
     * @param {*} absPos 获取的指针的绝对位置
     * @returns 返回相对于Canvas的相对位置
     */
    relPosition: function (absPos) {
        let relX = absPos.x - 375
        let relY = absPos.y - 667
        return { x: relX, y: relY }
    }
});