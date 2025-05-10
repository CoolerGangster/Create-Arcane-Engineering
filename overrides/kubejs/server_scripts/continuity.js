let ItemReferences = {
    0: "cae:for_all",
    1: "cae:epsilon",
    2: "cae:greater_than",
    3: "cae:zero",
    4: "cae:there_exists",
    5: "cae:delta",
    6: "cae:greater_than",
    7: "cae:zero",
    8: "cae:such_that",
    9: "cae:absolute",
    10: "cae:x",
    11: "cae:minus",
    12: "cae:y",
    13: "cae:absolute",
    14: "cae:less_than", 
    15: "cae:delta",
    16: "cae:implies",
    17: "cae:absolute",
    18: "cae:f",
    19: "cae:left_paren",
    20: "cae:x",
    21: "cae:right_paren", 
    22: "cae:minus",
    23: "cae:f",
    24: "cae:left_paren", 
    25: "cae:y",
    26: "cae:right_paren", 
    27: "cae:absolute",
    28: "cae:less_than",
    29: "cae:epsilon",
    30: "minecraft:dirt"
};
// Ensuring this code runs for each block differently by setting up Hashmap esque objects
let DiscontinuityCycle = {};
let CountdownMap = {};
let ErrorMap = {};
function getNumba(cycleValue) {
    if (cycleValue % 30 === 0) {
        return 2;
    }
    return Math.random() < 0.5 ? 0 : 2;
}
function ContinuumLoop(event) {
    let blockPos = event.entity.block.pos.toString();
    event.server.tell(blockPos);
    if (!(blockPos in DiscontinuityCycle)) {
        DiscontinuityCycle[blockPos] = 0;
        CountdownMap[blockPos] = -1; // Initialize the boolean map with false
        event.server.tell(`Initialized DiscontinuityCycle and BooleanMap for ${blockPos}`);
        event.entity.block.popItemFromFace(Item.of('minecraft:dirt' , 1), "down");
        return
    } else {
        let cycleValue = DiscontinuityCycle[blockPos];
        event.server.tell("Cycle Value: " + cycleValue);
        if (Math.random() < /*0.99258947596 0.5*/ 1 && CountdownMap[blockPos]  < 0) {
            DiscontinuityCycle[blockPos] = cycleValue + 1;
        } else {
            if(CountdownMap[blockPos] >= 0) {
                event.server.tell(CountdownMap[blockPos]);
                DiscontinuityCycle[blockPos] = cycleValue + 1;
                CountdownMap[blockPos] = CountdownMap[blockPos] - 1;
                if(CountdownMap[blockPos] === 0) {
                    event.server.tell("Boom");
                    event.server.tell(CountdownMap[blockPos])
                }
            }
            else {
                const numba = getNumba(cycleValue);
                DiscontinuityCycle[blockPos] = cycleValue + numba ;
                //if number is 2 the Item of Error is the item that was skipped, else its the item that was repeated.
                ErrorMap[blockPos] = (numba == 2 ? DiscontinuityCycle[blockPos] - 1 : DiscontinuityCycle[blockPos]);
                event.server.tell(`Initialized Error Map: ${ErrorMap[blockPos]} for block: ${blockPos}`);
                CountdownMap[blockPos] = 10;    
                event.server.tell("fortnite");
                event.server.tell(CountdownMap[blockPos])
            }
        }
        event.entity.block.popItemFromFace(Item.of(ItemReferences[cycleValue % 30] , 1), "down");
        
    }
}

onEvent('entity.spawned', event => {
    if (event.entity.type == "minecraft:pig" && event.entity.block.id.includes("cae:continuity_reactor")) {
        ContinuumLoop(event);
        event.entity.kill()
        event.entity.kill()
        //event.server.tell("Pig Dead")
    }
});


onEvent('block.right_click', event => {
    let blockPos = `BlockPos{x=${event.block.pos.x}, y=${event.block.pos.y}, z=${event.block.pos.z}}`;
        if (event.block.id.includes("cae:continuity_reactor") ) {
            if(event.item.id === "minecraft:stick"){
            event.server.tell(`DiscontinuityCycle for ${event.block.pos} is Destroyed`);
            DiscontinuityCycle[blockPos] = null;
            CountdownMap[blockPos] = -1;
            ErrorMap[blockPos] = null;
            }
            if(CountdownMap[blockPos] > 0 && event.item.id == ItemReferences[Math.round(ErrorMap[blockPos])]) {
                event.server.tell("Success");	
                event.entity.block.popItemFromFace(Item.of("minecraft:diamond" , 64), "down");
                CountdownMap[blockPos] = -1;
            }
        }
});