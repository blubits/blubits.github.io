var sched_a = {
    "ha": {
        "text": "A",
        "lab": false,
        "css": {
            "color": "#000000",
            "background-color": "#FFEB3B"
        }
    },
    "hb": {
        "text": "B",
        "lab": false,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#3F51B5"
        }
    },
    "hc": {
        "text": "C",
        "lab": false,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#f44336"
        }
    },
    "hd": {
        "text": "D",
        "lab": false,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#9C27B0"
        }
    },
    "he": {
        "text": "E",
        "lab": false,
        "css": {
            "color": "#000000",
            "background-color": "#FF9800"
        }
    },
    "hf": {
        "text": "F",
        "lab": false,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#E91E63"
        }
    },
    "scx": {
        "text": "Lec X",
        "lab": false,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#673AB7",
        }
    },
    "scy": {
        "text": "Lec Y",
        "lab": false,
        "css": {
            "color": "#000000",
            "background-color": "#FFC107",
        }
    },
    "scz": {
        "text": "Lec Z",
        "lab": false,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#4CAF50",
        }
    },
    "sbx": {
        "text": "Lab X",
        "lab": true,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#673AB7",
        }
    },
    "sby": {
        "text": "Lab Y",
        "lab": true,
        "css": {
            "color": "#000000",
            "background-color": "#FFC107",
        }
    },
    "sbz": {
        "text": "Lab Z",
        "lab": true,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#4CAF50",
        }
    },
};

var sched_b = {
    "hu": {
        "text": "U",
        "lab": false,
        "css": {
            "color": "#000000",
            "background-color": "#FFEB3B"
        }
    },
    "hv": {
        "text": "V",
        "lab": false,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#3F51B5"
        }
    },
    "hw": {
        "text": "W",
        "lab": false,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#f44336"
        }
    },
    "hx": {
        "text": "X",
        "lab": false,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#9C27B0"
        }
    },
    "hy": {
        "text": "Y",
        "lab": false,
        "css": {
            "color": "#000000",
            "background-color": "#FF9800"
        }
    },
    "hz": {
        "text": "Z",
        "lab": false,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#E91E63"
        }
    },
    "sca": {
        "text": "Lec A",
        "lab": false,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#673AB7",
        }
    },
    "scb": {
        "text": "Lec B",
        "lab": false,
        "css": {
            "color": "#000000",
            "background-color": "#FFC107",
        }
    },
    "scc": {
        "text": "Lec C",
        "lab": false,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#4CAF50",
        }
    },
    "sba": {
        "text": "Lab A",
        "lab": true,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#673AB7",
        }
    },
    "sbb": {
        "text": "Lab B",
        "lab": true,
        "css": {
            "color": "#000000",
            "background-color": "#FFC107",
        }
    },
    "sbc": {
        "text": "Lab C",
        "lab": true,
        "css": {
            "color": "#FFFFFF",
            "background-color": "#4CAF50",
        }
    },
};

var reset_css = {
    "color": "",
    "background-color": ""
};

// AM: value 0
// PM: value 1
var r2_am = ["A1", "A2", "B", "C"];
var r2_pm = ["X", "Y", "Z1", "Z2"];
var r3_am = ["A1", "A2", "B", "C"];
var r3_pm = ["X1", "X2", "Y", "Z"]
var b3_am = ["A", "B", "C"];
var b3_pm = ["X", "Y", "Z"];
var b4_am = ["A", "B", "C"];
var b4_pm = ["Y"];
var c3_am = [".1B1", ".1B2", ".2A", ".2C1", ".2C2"];
var c3_pm = [".2X", ".2Y", ".2Z"];
var c4_am = [".2C"];
var c4_pm = [".1Z", ".2X"];
var p3_am = [".2A", ".2B"];
var p3_pm = [".1Z", ".2X", ".2Y"];
var p4_am = [".2B"];
var p4_pm = [".1X", ".2Y", ".2Z"];
var electives_am = ["CompSci 5C", "Engg C", "Tech A", "Tech B", "AgriAqua B"];
var electives_pm = ["CompSci 5X", "Engg Y", "Tech X", "Tech Y", "Tech Z"];

var blocks_11 = {
    "a": "bfec",
    "b": "cbaf",
    "c": "ecbd",
    "d": "feda",
    "e": "uzyv",
    "f": "vuzx",
    "g": "yvwu",
    "h": "zwxy"
}

var blocks_12 = {
    "a": "bafe",
    "b": "cbaf",
    "c": "edcb",
    "d": "fedc",
    "e": "uzvy",
    "f": "wuxv",
    "g": "yvux",
    "h": "zyvu"
}

// Rooms
var rooms = {
    "AgriAqua B": "ASTB 302",
    "Research 2A1": "ASTB 201",
    "Research 2A2": "SHBEx 3B",
    "Research 2B": "ASTB 201",
    "Research 2C": "ASTB 201",
    "Research 2X": "ASTB 201",
    "Research 2Y": "ASTB 201",
    "Research 2Z1": "ASTB 201",
    "Research 2Z2": "ASTB 304",
    "Research 3A1": "ASTB 203",
    "Research 3A2": "SHB 108",
    "Research 3B": "ASTB 203",
    "Research 3C": "ASTB 203",
    "Research 3X1": "ASTB 203",
    "Research 3X2": "ASTB 304",
    "Research 3Y": "ASTB 203",
    "Research 3Z": "ASTB 203",
    "Biology 3A": "SHB 107",
    "Biology 3B": "SHB 107",
    "Biology 3C": "SHB 107",
    "Biology 3X": "SHB 107",
    "Biology 3Y": "SHB 107",
    "Biology 3Z": "SHB 107",
    "Biology 4A": "ASTB 304",
    "Biology 4B": "ASTB 304",
    "Biology 4C": "ASTB 304",
    "Biology 4Y": "ASTB 304",
    "Chemistry 3.1B1": "SHB 105",
    "Chemistry 3.1B2": "SHB 108",
    "Chemistry 3.2A": "SHB 105",
    "Chemistry 3.2C1": "SHB 108",
    "Chemistry 3.2C2": "SHB 105",
    "Chemistry 3.2X": "SHB 108",
    "Chemistry 3.2Y": "SHB 108",
    "Chemistry 4.1Z": "SHB 108",
    "Chemistry 4.2C": "SHB 108",
    "Chemistry 4.2X": "SHB 108",
    "Physics 3.1Z": "ASTB 302",
    "Physics 3.2A": "ASTB 302",
    "Physics 3.2B": "SHB 103A",
    "Physics 3.2X": "ASTB 302",
    "Physics 3.2Y": "ASTB 302",
    "Physics 4.1X": "SHB 101",
    "Physics 4.2B": "SHB 101",
    "Physics 4.2Y": "SHB 101",
    "Physics 4.2Z": "SHB 101",
    "CompSci 5C": "Samsung Lab",
    "CompSci 5X": "Samsung Lab",
    "Engg C": "SHB 410",
    "Engg Y": "SHB 410",
    "Tech A": "TBA",
    "Tech B": "TBA",
    "Tech X": "TBA",
    "Tech Y": "TBA",
    "Tech Z": "TBA",
    "English 5A": "SHBEx 2A",
    "Filipino 5A": "SHBEx 2B",
    "SocSci 5A": "SHBEx 2B",
    "English 5B": "SHBEx 2A",
    "Filipino 5B": "SHBEx 2B",
    "SocSci 5B": "SHBEx 2B",
    "English 5C": "SHBEx 2A",
    "Filipino 5C": "SHBEx 2B",
    "SocSci 5C": "SHBEx 2A",
    "English 5D": "SHBEx 2A",
    "Filipino 5D": "SHBEx 2B",
    "SocSci 5D": "SHBEx 2A",
    "English 5E": "SHBEx 2A",
    "Filipino 5E": "SHBEx 2B",
    "SocSci 5E": "SHBEx 2B",
    "English 5F": "SHBEx 2A",
    "Filipino 5F": "SHBEx 2B",
    "SocSci 5F": "SHBEx 2A",
    "English 5G": "SHBEx 2A",
    "Filipino 5G": "SHBEx 2A",
    "SocSci 5G": "SHBEx 2B",
    "English 5H": "SHBEx 2A",
    "Filipino 5H": "SHBEx 2B",
    "SocSci 5H": "SHBEx 2A",
    "Math 5.1A": "SHB 409",
    "Math 5.1B": "SHB 409",
    "Math 5.1C": "SHB 409",
    "Math 5.2D": "SHB 409",
    "Math 5.1E": "SHB 409",
    "Math 5.1F": "SHB 409",
    "Math 5.2G": "SHB 406",
    "Math 5.2H": "SHB 406",
    "English 6A": "SHBEx 3A",
    "Filipino 6A": "SHBEx 3A",
    "SocSci 6A": "SHBEx 3C",
    "English 6B": "SHBEx 3A",
    "Filipino 6B": "SHBEx 3C",
    "SocSci 6B": "SHBEx 3C",
    "English 6C": "SHBEx 3A",
    "Filipino 6C": "SHBEx 3A",
    "SocSci 6C": "SHBEx 3C",
    "English 6D": "SHBEx 3A",
    "Filipino 6D": "SHBEx 3C",
    "SocSci 6D": "SHBEx 3C",
    "English 6E": "SHBEx 3A",
    "Filipino 6E": "SHB 405",
    "SocSci 6E": "SHBEx 3C",
    "English 6F": "SHBEx 3A",
    "Filipino 6F": "SHBEx 3A",
    "SocSci 6F": "SHBEx 3C",
    "English 6G": "SHBEx 3A",
    "Filipino 6G": "SHBEx 3B",
    "SocSci 6G": "SHBEx 3C",
    "English 6H": "SHBEx 3A",
    "Filipino 6H": "SHBEx 3B",
    "SocSci 6H": "SHBEx 3C",
    "Math 6.2A": "SHB 406",
    "Math 6.1B": "SHB 406",
    "Math 6.2C": "SHB 406",
    "Math 6.1D": "SHB 406",
    "Math 6.2E": "SHB 406",
    "Math 6.1F": "SHB 406",
    "Math 6.1G": "SHB 405",
    "Math 6.1H": "SHB 405",
}


$("#shift").change(function(){
    if (this.value === "0") {
        var curr = sched_b;
        var other = sched_a;
    } else {
        var curr = sched_a;
        var other = sched_b;
    }
    $.each(other, function(key1, value1){
        $.each(reset_css, function(key2, value2){
            $("." + key1).css(key2, value2);
            $("." + key1).text("");
        });
    });
    $.each(curr, function(key1, value1){
        $("." + key1).text(value1.text);
        $.each(value1.css, function(key2, value2){
            $("." + key1).css(key2, value2);
        });
    });
});

$("#clear").click(function(){
    $.each(["#core", "#elective", "#res", "#hblock", "#mblock"], function(index, val){
        $(val).prop('selectedIndex', 0);
    })
    $.each(sched_a, function(key1, value1){
        $.each(reset_css, function(key2, value2){
            $("." + key1).css(key2, value2);
            $("." + key1).text("");
        });
    });
    $.each(sched_b, function(key1, value1){
        $.each(reset_css, function(key2, value2){
            $("." + key1).css(key2, value2);
            $("." + key1).text("");
        });
    });
    $("#save").css("display", "none");
    var core_prev = "", elec_prev = "", res_prev = "", hblock_prev = "", mblock_prev = "";
})

$("#generate").click(function(){
    if ($("#shift").val() !== null && $("#grade").val() !== null) {
        $("#type").hide();
        $("#sciences").show();
        $("#hummath").show();
        $.each(sched_a, function(key1, value1){
            $.each(reset_css, function(key2, value2){
                $("." + key1).css(key2, value2);
                $("." + key1).text("");
            });
        });
        $.each(sched_b, function(key1, value1){
            $.each(reset_css, function(key2, value2){
                $("." + key1).css(key2, value2);
                $("." + key1).text("");
            });
        });
        $.each(["#core", "#elective", "#res", "#hblock", "#mblock"], function(index, val){
            $(val).append($("<option>", {
                style: "display: none",
                selected: true,
                disabled: true
            }));
        })
        $("#status").text("Status: All good!");
        $("#status").removeClass("text-danger");
        if ($("#shift").val() === "0") {
            $.each(["E", "F", "G", "H"], function(index, val){
                $("#hblock").append($("<option>", {
                    index: index,
                    text: val
                }));
            });
            $.each(b3_am, function(index, val){
                $("#elective").append($("<option>", {
                    index: index,
                    text: "Biology 3" + val
                }));
            });
            $.each(c3_am, function(index, val){
                $("#elective").append($("<option>", {
                    index: index,
                    text: "Chemistry 3" + val
                }));
            });
            $.each(p3_am, function(index, val){
                $("#elective").append($("<option>", {
                    index: index,
                    text: "Physics 3" + val
                }));
            });
        }
        if ($("#shift").val() === "1") {
            $.each(["A", "B", "C", "D"], function(index, val){
                $("#hblock").append($("<option>", {
                    index: index,
                    text: val
                }));
            });
            $.each(b3_pm, function(index, val){
                $("#elective").append($("<option>", {
                    index: index,
                    text: "Biology 3" + val
                }));
            });
            $.each(c3_pm, function(index, val){
                $("#elective").append($("<option>", {
                    index: index,
                    text: "Chemistry 3" + val
                }));
            });
            $.each(p3_pm, function(index, val){
                $("#elective").append($("<option>", {
                    index: index,
                    text: "Physics 3" + val
                }));
            });
        }
        if ($("#shift").val() === "0" && $("#grade").val() === "11") {
            $.each(["E", "F", "G", "H"], function(index, val){
                $("#mblock").append($("<option>", {
                    index: index,
                    text: (val === "G"  || val === "H" ? "2" : "1") + val
                }));
            });
            $.each(r2_am, function(index, val){
                $("#res").append($("<option>", {
                    index: index,
                    text: val
                }));
            });
            $.each(b3_am, function(index, val){
                $("#core").append($("<option>", {
                    index: index,
                    text: "Biology 3" + val
                }));
            });
            $.each(c3_am, function(index, val){
                $("#core").append($("<option>", {
                    index: index,
                    text: "Chemistry 3" + val
                }));
            });
            $.each(p3_am, function(index, val){
                $("#core").append($("<option>", {
                    index: index,
                    text: "Physics 3" + val
                }));
            });
        }
        if ($("#shift").val() === "1" && $("#grade").val() === "11") {
            $.each(["A", "B", "C", "D"], function(index, val){
                $("#mblock").append($("<option>", {
                    index: index,
                    text: (val === "D" ? "2" : "1") + val
                }));
            });
            $.each(r2_pm, function(index, val){
                $("#res").append($("<option>", {
                    index: index,
                    text: val
                }));
            });
            $.each(b3_pm, function(index, val){
                $("#core").append($("<option>", {
                    index: index,
                    text: "Biology 3" + val
                }));
            });
            $.each(c3_pm, function(index, val){
                $("#core").append($("<option>", {
                    index: index,
                    text: "Chemistry 3" + val
                }));
            });
            $.each(p3_pm, function(index, val){
                $("#core").append($("<option>", {
                    index: index,
                    text: "Physics 3" + val
                }));
            });
        }
        if ($("#shift").val() === "0" && $("#grade").val() === "12") {
            $.each(["E", "F", "G", "H"], function(index, val){
                $("#mblock").append($("<option>", {
                    index: index,
                    text: (val === "E" ? "2" : "1") + val
                }));
            });
            $.each(r3_am, function(index, val){
                $("#res").append($("<option>", {
                    index: index,
                    text: val
                }));
            });
            $.each(b4_am, function(index, val){
                $("#core").append($("<option>", {
                    index: index,
                    text: "Biology 4" + val
                }));
                $("#elective").append($("<option>", {
                    index: index,
                    text: "Biology 4" + val
                }));
            });
            $.each(c4_am, function(index, val){
                $("#core").append($("<option>", {
                    index: index,
                    text: "Chemistry 4" + val
                }));
                $("#elective").append($("<option>", {
                    index: index,
                    text: "Chemistry 4" + val
                }));
            });
            $.each(p4_am, function(index, val){
                $("#core").append($("<option>", {
                    index: index,
                    text: "Physics 4" + val
                }));
                $("#elective").append($("<option>", {
                    index: index,
                    text: "Physics 4" + val
                }));
            });
        }
        if ($("#shift").val() === "1" && $("#grade").val() === "12") {
            $.each(["A", "B", "C", "D"], function(index, val){
                $("#mblock").append($("<option>", {
                    index: index,
                    text: (val === "A" || val === "C" ? "2" : "1") + val
                }));
            });
            $.each(r3_pm, function(index, val){
                $("#res").append($("<option>", {
                    index: index,
                    text: val
                }));
            });
            $.each(b4_pm, function(index, val){
                $("#core").append($("<option>", {
                    index: index,
                    text: "Biology 4" + val
                }));
                $("#elective").append($("<option>", {
                    index: index,
                    text: "Biology 4" + val
                }));
            });
            $.each(c4_pm, function(index, val){
                $("#core").append($("<option>", {
                    index: index,
                    text: "Chemistry 4" + val
                }));
                $("#elective").append($("<option>", {
                    index: index,
                    text: "Chemistry 4" + val
                }));
            });
            $.each(p4_pm, function(index, val){
                $("#core").append($("<option>", {
                    index: index,
                    text: "Physics 4" + val
                }));
                $("#elective").append($("<option>", {
                    index: index,
                    text: "Physics 4" + val
                }));
            });
        }
        if ($("#shift").val() === "0") {
            $.each(electives_am, function(index, val){
                $("#elective").append($("<option>", {
                    index: index,
                    text: val
                }));
            });
        }
        if ($("#shift").val() === "1") {
            $.each(electives_pm, function(index, val){
                $("#elective").append($("<option>", {
                    index: index,
                    text: val
                }));
            });
        }
    } else {
        $("#status").text("You missed a few inputs!");
        $("#status").addClass("text-danger")
    }
});


var core_prev = "", elec_prev = "", res_prev = "", hblock_prev = "", mblock_prev = "";

$("#res").change(function(){
    var block = $(this).find("option:selected").text()[0].toLowerCase();
    $.each(["sc" + res_prev, "sb" + res_prev], function(index, value1){
        $.each(reset_css, function(key2, value2){
            $("." + value1).css(key2, value2);
            $("." + value1).text("");
        });
    });
    if (block === "a") var lec = "sca", lab = "sba", sched = sched_b;
    if (block === "b") var lec = "scb", lab = "sbb", sched = sched_b;
    if (block === "c") var lec = "scc", lab = "sbc", sched = sched_b;
    if (block === "x") var lec = "scx", lab = "sbx", sched = sched_a;
    if (block === "y") var lec = "scy", lab = "sby", sched = sched_a;
    if (block === "z") var lec = "scz", lab = "sbz", sched = sched_a;
    if ($("#grade").val() === "11") var subj = "Research 2"
    if ($("#grade").val() === "12") var subj = "Research 3"
    $("." + lec).text(subj + $(this).find("option:selected").text());
    $("." + lab).text(subj + $(this).find("option:selected").text());
    $("." + lec + "-res").text(subj + $(this).find("option:selected").text());
    $("." + lab).append("<br><span class='small'>Lab • " + rooms[subj + $(this).find("option:selected").text()] + "</span>");
    $("." + lec).append("<br><span class='small'>Lecture • " + rooms[subj + $(this).find("option:selected").text()] + "</span>");
    $("." + lec + "-res").append("<br><span class='small'>Lecture • " + rooms[subj + $(this).find("option:selected").text()] + "</span>");
    $.each(sched[lec].css, function(key2, value2){
        $("." + lec).css(key2, value2);
        $("." + lec + "-res").css(key2, value2);
        $("." + lab).css(key2, value2);
    });
    res_prev = block;
});

$("#hblock").change(function(){
    var block = $(this).find("option:selected").text().toLowerCase();
    $.each(["h" + hblock_prev[1], "h" + hblock_prev[2], "h" + hblock_prev[3]], function(index, value1){
        $.each(reset_css, function(key2, value2){
            $("." + value1).css(key2, value2);
            $("." + value1).text("");
        });
    });
    if ($("#grade").val() === "11") var slots = blocks_11;
    if ($("#grade").val() === "12") var slots = blocks_12;
    if ($("#shift").val() === "0") var sched = sched_b;
    if ($("#shift").val() === "1") var sched = sched_a;
    var eng = "h" + slots[block][1];
    var fil = "h" + slots[block][2];
    var ss = "h" + slots[block][3];
    var eng_name = "English " + ($("#grade").val() === "11" ? "5" : "6") + $(this).find("option:selected").text();
    var fil_name = "Filipino " + ($("#grade").val() === "11" ? "5" : "6") + $(this).find("option:selected").text();
    var ss_name = "SocSci " + ($("#grade").val() === "11" ? "5" : "6") + $(this).find("option:selected").text();
    var is_12a = $("#grade").val() === "12" && block === "a"
    $("." + eng + (is_12a ? "a" : "")).text(eng_name);
    $("." + fil).text(fil_name);
    $("." + ss).text(ss_name);
    $("." + eng + (is_12a ? "a" : "")).append("<br><span class='small'>" + rooms[eng_name] + "</span>");
    $("." + fil).append("<br><span class='small'>" + rooms[fil_name] + "</span>");
    $("." + ss).append("<br><span class='small'>" + rooms[ss_name] + "</span>");
    $.each(sched[eng].css, function(key2, value2){
        $("." + eng + (is_12a ? "a" : "")).css(key2, value2);
    });
    $.each(sched[fil].css, function(key2, value2){
        $("." + fil).css(key2, value2);
    });
    $.each(sched[ss].css, function(key2, value2){
        $("." + ss).css(key2, value2);
    });
    hblock_prev = slots[block];
});

$("#mblock").change(function(){
    var block = $(this).find("option:selected").text().toLowerCase()[1];
    $.each(["h" + mblock_prev], function(index, value1){
        $.each(reset_css, function(key2, value2){
            $("." + value1).css(key2, value2);
            $("." + value1).text("");
        });
    });
    if ($("#grade").val() === "11") var slots = blocks_11;
    if ($("#grade").val() === "12") var slots = blocks_12;
    if ($("#shift").val() === "0") var sched = sched_b;
    if ($("#shift").val() === "1") var sched = sched_a;
    var math = "h" + slots[block][0];
    var name = "Math " + ($("#grade").val() === "11" ? "5." : "6.") + $(this).find("option:selected").text()
    $("." + math).text(name);
    $("." + math).append("<br><span class='small'>" + rooms[name] + "</span>");
    $.each(sched[math].css, function(key2, value2){
        $("." + math).css(key2, value2);
    });
    mblock_prev = slots[block][0];
});

$("#core").change(function(){
    var block = $(this).find("option:selected").text().toLowerCase()[$(this).find("option:selected").text().length - 1];
    if (!isNaN(block)) {
        var block = $(this).find("option:selected").text().toLowerCase()[$(this).find("option:selected").text().length - 2];
    }
    $.each(["sc" + core_prev, "sb" + core_prev], function(index, value1){
        $.each(reset_css, function(key2, value2){
            $("." + value1).css(key2, value2);
            $("." + value1).text("");
        });
    });
    if ($("#grade").val() === "11") var slots = blocks_11;
    if ($("#grade").val() === "12") var slots = blocks_12;
    if ($("#shift").val() === "0") var sched = sched_b;
    if ($("#shift").val() === "1") var sched = sched_a;
    var lec = "sc" + block;
    var lab = "sb" + block;
    $("." + lec).text($(this).find("option:selected").text());
    $("." + lab).text($(this).find("option:selected").text());
    $("." + lab).append("<br><span class='small'>Lab • " + rooms[$(this).find("option:selected").text()] + "</span>");
    $("." + lec).append("<br><span class='small'>Lecture • " + rooms[$(this).find("option:selected").text()] + "</span>");
    $.each(sched[lec].css, function(key2, value2){
        $("." + lec).css(key2, value2);
        $("." + lab).css(key2, value2);
    });
    core_prev = block;
});

$("#elective").change(function(){
    var block = $(this).find("option:selected").text().toLowerCase()[$(this).find("option:selected").text().length - 1];
    if (!isNaN(block)) {
        var block = $(this).find("option:selected").text().toLowerCase()[$(this).find("option:selected").text().length - 2];
    }
    $.each(["sc" + elec_prev, "sb" + elec_prev], function(index, value1){
        $.each(reset_css, function(key2, value2){
            $("." + value1).css(key2, value2);
            $("." + value1).text("");
        });
    });
    if ($("#grade").val() === "11") var slots = blocks_11;
    if ($("#grade").val() === "12") var slots = blocks_12;
    if ($("#shift").val() === "0") var sched = sched_b;
    if ($("#shift").val() === "1") var sched = sched_a;
    var lec = "sc" + block;
    var lab = "sb" + block;
    $("." + lec).text($(this).find("option:selected").text());
    $("." + lab).text($(this).find("option:selected").text());
    $("." + lab).append("<br><span class='small'>Lab • " + rooms[$(this).find("option:selected").text()] + "</span>");
    $("." + lec).append("<br><span class='small'>Lecture • " + rooms[$(this).find("option:selected").text()] + "</span>");
    $.each(sched[lec].css, function(key2, value2){
        $("." + lec).css(key2, value2);
        $("." + lab).css(key2, value2);
    });
    elec_prev = block;
});

// Save sched as image
function checkIfReady(){
    var dropdowns = $("#sciences select, #hummath select"),
        ready = true;
    for (var i = 0; i < dropdowns.length; i++) {
        var value = $(dropdowns[i]).val();
        if (value === null || value.length == 0) {
            ready = false;
            break;
        }
    }

    if (ready) {
        $("#save_png").removeAttr("style");
        $("#save_excel").removeAttr("style");
    } else {
        $("#save_png").css("display", "none");
        $("#save_excel").css("display", "none");
    }
};

// (c) @aureljared thanks!!

$("#sciences select, #hummath select").each(function(){
    $(this).change(checkIfReady);
});

$("#save_png").click(function(){
    html2canvas(document.getElementById("schedule"), {
        width: $("#schedule").width(),
        background: "#ffffff",
        onrendered: function(c){
            var dataUrl = c.toDataURL(),
                isFileSaverSupported = !!new Blob;

            if (isAppleMobile() || !isFileSaverSupported)
                window.location.href = dataUrl;
            else {
                var data = atob(dataUrl.substring(22)),
                    dataArr = new Uint8Array(data.length);

                for (var i = 0; i < data.length; i++)
                    dataArr[i] = data.charCodeAt(i);

                var dataBlob = new Blob([dataArr.buffer], {
                    "type": "image/png"
                });
                saveAs(dataBlob, "sched.png");
            }
        }
    })
});

$("save_excel").click(function(e){
    console.log("henlo there");
    e.preventDefault();

    //getting data from our table
    console.log("i booped u");
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('schedule');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
});

// Detect iOS Safari (does not support native downloads)
function isAppleMobile() {
    // https://stackoverflow.com/a/29696509
    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    var webkit = !!ua.match(/WebKit/i);
    var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
    return iOSSafari;
};