class Treasure extends BaseClass{
    constructor(x,y,width,height){
       super(x,y,width,height)

        this.image=loadAnimation("1.png","2.png","3.png","4.png","6.png")

    }
    display(){
        animation(this.image,this.body.position.x,this.body.position.y,20,20)
    }
}