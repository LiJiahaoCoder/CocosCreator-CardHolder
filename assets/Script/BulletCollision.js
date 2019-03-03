/*
 * 碰撞子弹消失+消失动画
 * @Author: FanBrother 
 * @Date: 2018-06-29  
 * @Last Modified by: zhaoyucong
 * @Last Modified time: 2018-07-05 01:45:17
 */
cc.Class({
    extends: cc.Component,

    properties: {
        CardPre:[cc.Prefab],
        audio:cc.AudioClip,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.animCom = this.node.getComponent(cc.Animation);
        this.isDestroy = false;
    },

    start() {

    },

    // update (dt) {},

    onCollisionEnter(other, self) {
        if(other.tag === 1){
            console.log("进来了");
            //碰到子弹后在卡牌面板生成相应的卡牌
            let cardPre=this.CardPre[0];
            let card=cc.instantiate(cardPre);
            //this.cardBoardNode是CardBoard节点
            this.cardBoardNode = cc.find("Canvas/CardBoard");
            //如果之前num已经到了6了就不能再add了
            /////////////////////////////////////this.cardBoardNode.addChild(card);
            //获取准确的位置 最后一个子节点 三分之二的位置
            //数组数组数组!!!!获取倒数第二个
            let num=this.cardBoardNode.childrenCount;//2
            //console.log("子节点数量："+num);  
            if(num===0){ 
                this.cardBoardNode.addChild(card);              
                card.x=this.cardBoardNode.x-270;
                card.y=0;
            } 
            else if(num===6) {//6控制手牌上限

            }
            else{
                this.cardBoardNode.addChild(card);     
                cc.audioEngine.play(this.audio, false, 1);         
                card.x=this.cardBoardNode.children[num-1].getPosition().x+106;//106控制卡片间距
                card.y=0;
            }       
        };
        if (other.tag === 2) {
            this.animCom.play('Destroy');
            this.isDestroy = true;
        } else if (other.tag === 1 && this.isDestroy === false) {
            console.log("self.tag");
            if (window.invincible === false) {
                this.animCom.play('Destroy');
                other.getComponent('Player').reduceHealth();
            }
        }
    },

    CardDestroy() {
        this.node.destroy();
    },
});
