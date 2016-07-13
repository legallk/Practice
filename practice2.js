var d = Meta.get();
var channel = d.raw.channel;
var section = d.raw.section;

var tla = ["fbn", "fsb", "fnc"]; /// TLA = triple letter acronym

var num; // number assigned to acronym

var err = true; // check error

for (var i = 0; i < tla.length(); i++){

    num = 115; // default set up (majority wins)

    if (channel.indexOf(tla[i]) > -1) {

        err = false; // something matched, no error

        if (tla === "fnc") { // set temp num for FNC
            num = 67;
        }

        if (section === "root") {
            insertScript(num, true);
        } else {
            insertScript(num, true);
        }
    }
}

if (err === true) {
    console.log("Error: Nothing matched ['fbn', 'fsb', 'fnc'] to d.raw.channel");
}

function insertScript(id, bool) {
    // something done here
}
