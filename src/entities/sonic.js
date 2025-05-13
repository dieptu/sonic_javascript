import k from "../kaplayCtx";

export function makeSonic(pos){
    const sonic = k.add([
        k.sprite("sonic", {anim:"run"}),
        k.scale(4),
        k.area(),
        k.anchor("center"), // change where the object start drawing
        k.pos(pos),

    ]);
}