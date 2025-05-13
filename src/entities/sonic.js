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
            ringCollectUI: null,
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

    sonic.ringCollectUI = sonic.add([
        k.text("", {font: "mania", size: 24}),
        k.color(255,255,0),
        k.anchor("center"),
        k.pos(30,-10),
    ]);

    return sonic;
}