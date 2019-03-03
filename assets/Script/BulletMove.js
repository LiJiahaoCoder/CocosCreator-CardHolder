let testData = require('../Data/testData')

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        this.playerNode = cc.find('Canvas/Player')

        this.isInSFP = false;//判断是否在炸弹圈内

        this.vecBP = cc.v2(this.playerNode.x - this.node.x, this.playerNode.y - this.node.y) // 创建子弹节点与player的向量
        this.rotateDir = cc.pToAngle(this.vecBP) // 获取向量的弧度
        this.node.rotation = -cc.radiansToDegrees(this.rotateDir) - 90 // 将弧度转化为角度
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if (window.touchState === true) {
            this.bulletMove()
        }

    },

    /**
     *
     * @description 根据初始化时候的向量方向进行运动
     */
    bulletMove: function () {
        this.node.x += this.vecBP.x * testData.bulletSpeed * window.speedCoefficient / cc.pLength(this.vecBP)
        this.node.y += this.vecBP.y * testData.bulletSpeed * window.speedCoefficient / cc.pLength(this.vecBP)
    }
});
