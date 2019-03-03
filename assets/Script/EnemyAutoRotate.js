/*
 * @Author: LiJiahao
 * @Date: 2018-06-28 11:23:32
 * @Last Modified by: zhaoyucong
 * @Last Modified time: 2018-07-05 01:40:22
 */

let testData = require('../Data/testData');
// console.log(testData)
let initTime = 0;
cc.Class({
  extends: cc.Component,

  properties: {
    playerNode: cc.Node, // 玩家节点
    Bullet: [cc.Prefab], // 预设体数组
    audio: [cc.AudioClip],//音效
  },

  // use this for initialization
  onLoad: function () {
    // console.log(cc.pRotateByAngle(cc.v2(3, 4), cc.p(3 / 2, 4 / 2), Math.PI))
    this.bomb = 0;
    this.enemySpeed = testData.enemySpeed;
    this.healthPoint = 6;

    let facX = Math.random() > 0.5 ? 1 : -1;
    let facY = Math.random() > 0.5 ? 1 : -1;
    this.stopX = testData.stopPosition.x + facX * Math.round(Math.random() * 210);
    this.stopY = testData.stopPosition.y + facY * Math.round(Math.random() * 60);
  },

  // called every frame, uncomment this function to activate update callback
  update: function (dt) {

    // console.log(this.enemySpeed);
		// 计算向量以及旋转角度
		this.vecEP = cc.v2(this.playerNode.x - this.node.x, this.playerNode.y - this.node.y) // 创建父节点与player的向量
		this.vecES = cc.v2(this.stopX - this.node.x, this.stopY - this.node.y) // 创建父节点与player的向量
		this.rotateDir = cc.pToAngle(this.vecEP); // 获取向量的弧度
    this.node.zIndex = 2

    if (window.touchState === true) {
      this.node.rotation = -cc.radiansToDegrees(this.rotateDir) - 90; // 将弧度转化为角度
    }
    // 判断是否到达固定位置,如果未到达继续运动
    this.enemyMove()
    this.enemyShot()

  },

  /**
   *
   * @description 用来判断是否停止
   * @returns 返回boolean变量，等于true停止，否则运动
   */
  isStop: function () {
    let stop = cc.pLength(this.vecES) < 1 ? true : false
    // console.log(cc.pLength(this.vecES))
    // console.log(this.node.y) 
    // console.log(stop)
    return stop
  },

  /**
   *
   * @description 敌人运动
   */
  enemyMove: function () {
    if (!this.isStop() && window.touchState === true) {
      // 移动的距离 = 方向向量的单位向量 * 移动速度
      this.node.x += this.vecES.x * this.enemySpeed * window.speedCoefficient / cc.pLength(this.vecES)
      this.node.y += this.vecES.y * this.enemySpeed * window.speedCoefficient / cc.pLength(this.vecES)
    }
  },

  /**
   *
   * @description 停止运动后敌人射击
   */
  enemyShot: function () {
    if (this.isStop() && window.touchState === true) {
      for (; initTime === testData.fireFrequency; initTime = 0) {
        console.log('initial prefab' + this.node.name)
        let bulletPrefab = cc.instantiate(this.Bullet[this.getBulletType()])
        cc.audioEngine.play(this.audio[Math.floor(Math.random() * 2)], false, 0.5);
        bulletPrefab.position = this.node.position
        bulletPrefab.parent = cc.find('Canvas/BulletManager')
        bulletPrefab.zIndex = 1
        console.log(this.node.name)
      }
      initTime++
    }
  },

  /**
     *
     * @description 将敌人的绝对位置转化为相遇对Canvas的相对位置
     * @param {*} absPos 获取的敌人的绝对位置
     * @returns 返回相对于Canvas的相对位置
     */
  relPosition: function (absPos) {
    let relX = absPos.x - 375
    let relY = absPos.y - 667
    return { x: relX, y: relY }
  },
  /**
    * @returns 返回子弹的索引值
    * @description 获取子弹类型：四种子弹的权值分别是:4/3/2/1
    */
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
        cc.find('Canvas/Boss').getComponent('Boss').addStartMove();
        cc.audioEngine.play(this.audio[3], false, 0.9);
        this.node.destroy()
      }
    }
  }
})
