 
 ​import​ ​{​ ​MessageType​,​ ​Mimetype​ ​}​ ​from​ ​'@adiwajshing/baileys' 
 ​import​ ​{​ ​join​ ​}​ ​from​ ​'path' 
 ​import​ ​MessageHandler​ ​from​ ​'../../Handlers/MessageHandler' 
 ​import​ ​BaseCommand​ ​from​ ​'../../lib/BaseCommand' 
 ​import​ ​WAClient​ ​from​ ​'../../lib/WAClient' 
 ​import​ ​{​ ​ISimplifiedMessage​ ​}​ ​from​ ​'../../typings' 
  
 ​export​ ​default​ ​class​ ​Command​ ​extends​ ​BaseCommand​ ​{ 
 ​    ​constructor​(​client​: ​WAClient​,​ ​handler​: ​MessageHandler​)​ ​{ 
 ​        ​super​(​client​,​ ​handler​,​ ​{ 
 ​            ​command​: ​'Nsfw'​, 
 ​            ​description​: ​'Nudity contant command list'​, 
 ​            ​category​: ​'weeb'​, 
 ​            ​usage​: ​`​${​client​.​config​.​prefix​}​Nsfw`​, 
 ​            ​dm​: ​false, 
 ​            ​aliases​: ​[​'18+'​, 'hhen'] 
 ​        ​}​) 
 ​    ​} 
  
 ​    ​run​ ​=​ ​async​ ​(​M​: ​ISimplifiedMessage​)​: ​Promise​<​void​>​ ​=>​ ​{ 
 ​        ​const​ ​n​ ​=​ ​[ 
 ​            ​'./assets/Pikachu/images (1).mp4'​ ​] 
 ​        ​let​ ​well​ ​=​ ​n​[​Math​.​floor​(​Math​.​random​(​)​ ​*​ ​n​.​length​)​] 
 ​        ​return​ ​void​ ​this​.​client​.​sendMessage​(​M​.​from​,​ ​{​ ​url​: ​well​ ​}​,​ ​MessageType​.​video​,​ ​{​quoted​:​M​.​WAMessage​, 
 ​            ​mimetype​: ​Mimetype​.​gif​, 
 ​            ​caption​: ​`-👒*NSFW LIST*🧯
*-------------------------------------*
 ​🔗 ​${​this​.​client​.​config​.​prefix​}​anal 
 ​🔗 ​${​this​.​client​.​config​.​prefix​}​blowjob  
 ​🔗 ​${​this​.​client​.​config​.​prefix​}​hsearch
 ​🔗 ​${​this​.​client​.​config​.​prefix​}​maid
 ​🔗 ​${​this​.​client​.​config​.​prefix​}​masturbation
 ​🔗 ​${​this​.​client​.​config​.​prefix​}​nsfwdoujin 
 ​🔗 ​${​this​.​client​.​config​.​prefix​}nsfwkitsune
 ​🔗 ​${​this​.​client​.​config​.​prefix​}​nsfwloli
 ​🔗 ​${​this​.​client​.​config​.​prefix​}​nsfwneko
 ​🔗 ​${​this​.​client​.​config​.​prefix​}​nsfwaifu
 ​🔗 ​${​this​.​client​.​config​.​prefix​}​pussy 
 ​🔗 ​${​this​.​client​.​config​.​prefix​}​rhentai 
 ​🔗 ​${​this​.​client​.​config​.​prefix​}​tthigh
 🔗 ​${​this​.​client​.​config​.​prefix​}nsfwpaper 
*-------------------------------------*
`​ ​} 
 ​        ​) 
 ​    ​} 
 ​}