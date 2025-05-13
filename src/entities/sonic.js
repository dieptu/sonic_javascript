import k from "../kaplayCtx";


export function makeSonic(pos){
    const sonic = k.add([
        k.sprite("sonic", {anim:"run"}),
        k.scale(4),
        k.area(),
        k.anchor("center"), // change where the object start drawing
        k.pos(pos),
        k.body({jumpForce: 1700}),
        {
            setControls(){
                k.onButtonPress("jump", ()=> {
                    if (this.isGrounded()){ //tell if sonic is on the platform
                        this.play("jump"); //jump animation
                        this.jump(); //jump physically in the game
                        k.play("jump", {volume: 0.5}); //play the jump sound
                    }
                })
            },
            setEvents(){
                this.onGround(() => {
                    this.play("run"); //sonic touch the ground after jumping, play the run animation
                })
            },
        }
    ]);

    return sonic;
}