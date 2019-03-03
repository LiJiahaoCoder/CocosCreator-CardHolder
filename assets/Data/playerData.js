/*
 * @Author: LiJiahao 
 * @Date: 2018-06-27 21:53:43 
 * @Last Modified by: zhaoyucong
 * @Last Modified time: 2018-07-05 09:52:05
 */


/*
 * define role array to store role data objects
 * get data format: PlayerData.Scene.level_x(x = 1 or 2 or 3)[n].property,
 * such as: PlayerData.Occean.level_1[0].url
 * n = 0 -> defense; n = 1 -> attack; n = 2 -> agile
 * TODO: fill the data of role
 */
const PlayerData = {
  ClassRoom: {  // data for classroom scene
    id: 0,
    type: 'attack',
    health: 3,
    moveSpeed: 10,
    bulletSpeed: 3
  }
}

exports = module.exports = PlayerData