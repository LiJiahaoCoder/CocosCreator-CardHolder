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
        maxSpeed: 600,//最大速度
        CardAc: 1200,//加速度
        CardSpeed: 600,//速度
        isOn: 0,//状态0停1上2下
        CDCircle: cc.Prefab,//CD环
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // this.LineHeight=cc.find('Canvas/Player/Preline').height;
        //鼠标移到物体上改变状态
        this.node.on(cc.Node.EventType.MOUSE_ENTER, function () {
            if (this.isOn != 3) {
                this.isOn = 1;
            }
        }, this);
        //鼠标移出物体改变状态
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function () {
            if (this.isOn != 3) {
                this.isOn = 2;
            }
        }, this);
        //鼠标按下
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            this.isOn = 3;
        }, this);
        //鼠标松开
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
            this.isOn = 5;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            this.isOn = 4;
        }, this);
        this.yDown = this.node.y;//记录物体当前位置

        //鼠标按下
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            this.isOn = 3;
        }, this);
        //鼠标松开
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
            this.isOn = 5;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            this.isOn = 4;
        }, this);

        // 获取玩家节点
        this.playerNode = cc.find('Canvas/Player');
    },

    start() {

    },

    update(dt) {
        //向上匀减速运动
        if (this.isOn === 1) {

            this.CardSpeed -= this.CardAc * dt;

            if (this.CardSpeed <= 0) {
                this.CardSpeed = 0;
                this.isOn = 0;
            }
            this.node.y += this.CardSpeed * dt;
        }
        //向下匀加速运动
        else if (this.isOn === 2) {
            this.CardSpeed += this.CardAc * dt;
            this.node.y -= this.CardSpeed * dt;
            if (this.CardSpeed >= this.maxSpeed) {
                this.CardSpeed = this.maxSpeed;
                this.node.y = this.yDown;
                this.isOn = 0;
            }
        }
        else if (this.isOn === 4) {
            this.isOn = 0;
        }
        //卡牌外松开鼠标，使用卡牌，移除预测线，卡牌消失
        else if (this.isOn === 5) {
            if (cc.find('Canvas/Player/CDBar') === null) {
                this.CdPre = cc.instantiate(this.CDCircle);
                this.CdPre.x = 0;
                this.CdPre.y = 0;
                this.CdPre.parent = cc.find('Canvas/Player');
                // 给主角加血
                console.log(this.playerNode.getComponent('Player').addHealth());
                //kill这张牌
                this.node.destroy();
                //重置状态为零

            }

            this.isOn = 2;
        }
    },
});
