cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        //每一帧都把子节点重新排序，反正排列是有规律的
        //0号元素在-270，
        if(this.node.childrenCount>0){
            var children = this.node.children;
            for (var i = 0; i < this.node.childrenCount; i++) {
                children[i].x=i*106 - 270;
            }
        }
        
        
    },
});
