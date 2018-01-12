export default function(range){
    var rgb = []

    for(var i = 0; i < range; i++){
        
        rgb.push('#'+Math.floor(Math.random()*16777215).toString(16))
    }

    console.log('cores', rgb)
    return rgb
}