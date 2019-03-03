/*
 * @Author: LiJiahao 
 * @Date: 2018-06-28 09:20:42 
 * @Last Modified by: LiJiahao
 * @Last Modified time: 2018-07-02 09:49:41
 */

 /*
 * define scene object to store scene data objects
 * get data format: SceneData.Scene.enemies[n].property,
 * such as: EnemyData.Occean.enemies[0].health
 * different n corresponds to different enemies
 * eg: the last member of enemies array is BOSS
 * TODO: fill the data of enemies
 */
const EnemyData = {
  // Occean:{
  //   enemies: [
  //     {
  //       id: , // id of enemy: number
  //       name: '', // the name of enemy: string
  //       url: '', // image url of enemy: string
  //       health: , // health point of enemy
  //       moveSpeed: ,  // move speed of enemy : number
  //       bulletSpeed: ,  // bullet move speed of enemy: number
  //       fireFrequency: ,  // the frequency of enemy to fire: number
  //       angleSpeed: ,  // angle speed of enemy to rotate: number
  //       stopPosition: // position of enemy to stop: number
  //     },
  //     {
  //       id: ,
  //       name: '',
  //       url: '',
  //       health: ,
  //       moveSpeed: ,
  //       bulletSpeed: ,
  //       fireFrequency: ,
  //       angleSpeed: ,
  //       stopPosition: 
  //     }
  //   ],
  //   // return the number of enemies
  //   getEnemyNum: function () { return this.enemies.length }
  // },
  ClassRoom:{
    enemies: [
      {
        id: 0,
        health: 6,
        moveSpeed: 2,
        bulletSpeed: 3,
        fireFrequency: 80,
        stopPosition: {
          x: 580,
          y: 300
        } 
      },
      {
        id: 1,
        health: 8,
        moveSpeed: 2.5,
        bulletSpeed: 3,
        fireFrequency: 75,
        stopPosition: {
          x: 580,
          y: 270
        }  
      }
    ],
    getEnemyNum: function () { return this.enemies.length }
  },
  // Cell:{
  //   enemies: [
  //     {
  //       id: ,
  //       name: '',
  //       url: '',
  //       health: ,
  //       moveSpeed: ,
  //       bulletSpeed: ,
  //       fireFrequency: ,
  //       angleSpeed: ,
  //       stopPosition: 
  //     },
  //     {
  //       id: ,
  //       name: '',
  //       url: '',
  //       health: ,
  //       moveSpeed: ,
  //       bulletSpeed: ,
  //       fireFrequency: ,
  //       angleSpeed: ,
  //       stopPosition: 
  //     }
  //   ],
  //   getEnemyNum: function () { return this.enemies.length }
  // }
};

exports = module.exports = EnemyData;
