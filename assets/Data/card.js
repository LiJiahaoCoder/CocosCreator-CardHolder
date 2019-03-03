/*
 * @Author: LiJiahao 
 * @Date: 2018-06-28 09:57:26 
 * @Last Modified by: LiJiahao
 * @Last Modified time: 2018-07-02 10:04:31
 */

 /*
 * define card object to store card data objects
 * get data format: CardData.Scene.cards.type[n].property,
 * such as: CardData.Occean.cards.defense[0].name
 * different n corresponds to different cards
 * TODO: fill the data of card
 */
const CardData = {
//   Occean:{
//     cards: {
//       // 防御型
//       defense: [
//         {
//           id: , // id of card: number
//           name: '', // name of card: string
//           url: '',  // image url of card: string
//           energyConsume: ,  // energy consumption: number
//           hurtPoint: ,  // damage cause to enemy: number
//           sheildTime:   // sheild last time: number
//         }
//       ],
//       // 攻击型
//       attack: [
//         {
//           id: ,
//           name: '',
//           url: '',
//           energyConsume: ,
//           hurtPoint: ,
//           sheildTime:
//         }
//       ],
//       // 敏捷型
//       agile: [
//         {
//           id: ,
//           name: '',
//           url: '',
//           energyConsume: ,
//           hurtPoint: ,
//           sheildTime:
//         }
//       ]
//     }
//   },
  ClassRoom:{
    cards: {
      // 攻击卡牌
      attack: [
        {
          id: 0, // id of card: number
          energyConsume: 1,  // energy consumption: number
          hurtPoint: 2,  // damage cause to enemy: number
          sheildTime: 0,  // sheild last time: number ,
          healthAdd: 0 // 
        }
      ],
      // 防御卡牌
      sheild: [
        {
          id: 1,
          energyConsume: 1,
          hurtPoint: 0,
          sheildTime: 2,
          healthAdd: 0
        }
      ],
      // 加血卡牌
      health: [
        {
          id: 2,
          energyConsume: 1,
          hurtPoint: 0,
          sheildTime: 0,
          healthAdd: 1
        }
      ],
      // 必杀技
      bomb: [
        {
          id: 3,
          energyConsume: 3,
          hurtPoint: 0,
          sheildTime: 0,
          healthAdd: 0
        }
      ]
    }
  },
//   Cell:{
//     cards: {
//       // 防御型
//       defense: [
//         {
//           id: , // id of card: number
//           name: '', // name of card: string
//           url: '',  // image url of card: string
//           energyConsume: ,  // energy consumption: number
//           hurtPoint: ,  // damage cause to enemy: number
//           sheildTime:   // sheild last time: number
//         }
//       ],
//       // 攻击型
//       attack: [
//         {
//           id: ,
//           name: '',
//           url: '',
//           energyConsume: ,
//           hurtPoint: ,
//           sheildTime:
//         }
//       ],
//       // 敏捷型
//       agile: [
//         {
//           id: ,
//           name: '',
//           url: '',
//           energyConsume: ,
//           hurtPoint: ,
//           sheildTime:
//         }
//       ]
//     }
//   }
};

exports = module.exports = CardData;
