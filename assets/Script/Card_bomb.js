//先实现鼠标移到卡牌上时上升，离开时下降
cc.Class({
    extends: cc.Component,

    properties: {
        // player:cc.Node,//预测线
        maxSpeed: 600,//最大速度
        CardAc: 1200,//加速度
        CardSpeed: 600,//速度
        isOn: 0,//状态0停1上2下
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        //鼠标移到物体上改变状态
        this.node.on(cc.Node.EventType.MOUSE_ENTER, function () {
            if(this.isOn!=3){
                this.isOn=1;
            }
        }, this);
        //鼠标移出物体改变状态
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function () {
            if(this.isOn!=3){
                this.isOn=2;
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

    },

    ChangeIsOn(state) {

    },

    start() {

    },

    update(dt) {

        //  console.log('card_bomb:'+this.isOn);
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
        //卡牌内松开鼠标，移出预测线
        else if (this.isOn === 4) {


            //重置状态为零
            this.isOn = 0;
        }
        //卡牌外松开鼠标，使用卡牌，移除预测线，卡牌消失
        else if (this.isOn === 5) {
            this.node.destroy();
            //重置状态为零
            this.isOn = 0;
        }
    },
});
