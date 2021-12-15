const encode_chars = require("./english64.json")

const encode = (char) =>{
    chars_array = char.split("");
    final_char = []
    for (char_array of chars_array){
        if(char_array === "a"){
            final_char.push(encode_chars.a)
        }else if(char_array === "b"){
            final_char.push(encode_chars.b)
        }else if(char_array === "c"){
            final_char.push(encode_chars.c)
        }else if(char_array === "d"){
            final_char.push(encode_chars.d)
        }else if(char_array === "e"){
            final_char.push(encode_chars.e)
        }else if(char_array === "f"){
            final_char.push(encode_chars.f)
        }else if(char_array === "g"){
            final_char.push(encode_chars.g)
        }else if(char_array === "h"){
            final_char.push(encode_chars.h)
        }else if(char_array === "i"){
            final_char.push(encode_chars.i)
        }else if(char_array === "j"){
            final_char.push(encode_chars.j)
        }else if(char_array === "k"){
            final_char.push(encode_chars.k)
        }else if(char_array === "l"){
            final_char.push(encode_chars.l)
        }else if(char_array === "m"){
            final_char.push(encode_chars.m)
        }else if(char_array === "n"){
            final_char.push(encode_chars.n)
        }else if(char_array === "o"){
            final_char.push(encode_chars.o)
        }else if(char_array === "p"){
            final_char.push(encode_chars.p)
        }else if(char_array === "q"){
            final_char.push(encode_chars.q)
        }else if(char_array === "r"){
            final_char.push(encode_chars.r)
        }else if(char_array === "s"){
            final_char.push(encode_chars.s)
        }else if(char_array === "t"){
            final_char.push(encode_chars.t)
        }else if(char_array === "u"){
            final_char.push(encode_chars.u)
        }else if(char_array === "v"){
            final_char.push(encode_chars.v)
        }else if(char_array === "w"){
            final_char.push(encode_chars.w)
        }else if(char_array === "x"){
            final_char.push(encode_chars.x)
        }else if(char_array === "y"){
            final_char.push(encode_chars.y)
        }else if(char_array === "z"){
            final_char.push(encode_chars.z)
        }else if(char_array === "A"){
            final_char.push(encode_chars.A)
        }else if(char_array === "B"){
            final_char.push(encode_chars.B)
        }else if(char_array === "C"){
            final_char.push(encode_chars.C)
        }else if(char_array === "D"){
            final_char.push(encode_chars.D)
        }else if(char_array === "E"){
            final_char.push(encode_chars.E)
        }else if(char_array === "F"){
            final_char.push(encode_chars.F)
        }else if(char_array === "G"){
            final_char.push(encode_chars.G)
        }else if(char_array === "H"){
            final_char.push(encode_chars.H)
        }else if(char_array === "I"){
            final_char.push(encode_chars.I)
        }else if(char_array === "J"){
            final_char.push(encode_chars.J)
        }else if(char_array === "K"){
            final_char.push(encode_chars.K)
        }else if(char_array === "L"){
            final_char.push(encode_chars.L)
        }else if(char_array === "M"){
            final_char.push(encode_chars.M)
        }else if(char_array === "N"){
            final_char.push(encode_chars.N)
        }else if(char_array === "O"){
            final_char.push(encode_chars.O)
        }else if(char_array === "P"){
            final_char.push(encode_chars.P)
        }else if(char_array === "Q"){
            final_char.push(encode_chars.Q)
        }else if(char_array === "R"){
            final_char.push(encode_chars.R)
        }else if(char_array === "S"){
            final_char.push(encode_chars.S)
        }else if(char_array === "T"){
            final_char.push(encode_chars.T)
        }else if(char_array === "U"){
            final_char.push(encode_chars.U)
        }else if(char_array === "V"){
            final_char.push(encode_chars.V)
        }else if(char_array === "W"){
            final_char.push(encode_chars.W)
        }else if(char_array === "X"){
            final_char.push(encode_chars.X)
        }else if(char_array === "Y"){
            final_char.push(encode_chars.Y)
        }else if(char_array === "Z"){
            final_char.push(encode_chars.Z)
        }else if(char_array === " "){
            final_char.push(encode_chars.space)
        }else if(char_array === "!"){
            final_char.push(encode_chars["!"])
        }else if(char_array === "@"){
            final_char.push(encode_chars["@"])
        }else if(char_array === "#"){
            final_char.push(encode_chars["#"])
        }else if(char_array === "$"){
            final_char.push(encode_chars["$"])
        }else if(char_array === "%"){
            final_char.push(encode_chars["%"])
        }else if(char_array === "^"){
            final_char.push(encode_chars["^"])
        }else if(char_array === "&"){
            final_char.push(encode_chars["&"])
        }else if(char_array === "*"){
            final_char.push(encode_chars["*"])
        }else if(char_array === "("){
            final_char.push(encode_chars["("])
        }else if(char_array === ")"){
            final_char.push(encode_chars[")"])
        }else if(char_array === "-"){
            final_char.push(encode_chars["-"])
        }else if(char_array === "="){
            final_char.push(encode_chars["="])
        }else if(char_array === "+"){
            final_char.push(encode_chars["+"])
        }else if(char_array === "{"){
            final_char.push(encode_chars["{"])
        }else if(char_array === "}"){
            final_char.push(encode_chars["}"])
        }else if(char_array === "["){
            final_char.push(encode_chars["["])
        }else if(char_array === "]"){
            final_char.push(encode_chars["]"])
        }else if(char_array === ":"){
            final_char.push(encode_chars[":"])
        }else if(char_array === ";"){
            final_char.push(encode_chars[";"])
        }else if(char_array === "?"){
            final_char.push(encode_chars["?"])
        }else if(char_array === "|"){
            final_char.push(encode_chars["|"])
        }else if(char_array === "\\"){
            final_char.push(encode_chars["\\"])
        }else if(char_array === "\""){
            final_char.push(encode_chars["\""])
        }else if(char_array === "'"){
            final_char.push(encode_chars["'"])
        }else if(char_array === ","){
            final_char.push(encode_chars[","])
        }else if(char_array === "."){
            final_char.push(encode_chars["."])
        }else if(char_array === "/"){
            final_char.push(encode_chars["/"])
        }else if(char_array === "<"){
            final_char.push(encode_chars["<"])
        }else if(char_array === ">"){
            final_char.push(encode_chars[">"])
        }else if(char_array === "~"){
            final_char.push(encode_chars["~"])
        }else if(char_array === "`"){
            final_char.push(encode_chars["~"])
        }else if(char_array === "_"){
            final_char.push(encode_chars["_"])
        }else if(char_array === "1"){
            final_char.push(encode_chars["1"])
        }else if(char_array === "2"){
            final_char.push(encode_chars["2"])
        }else if(char_array === "3"){
            final_char.push(encode_chars["3"])
        }else if(char_array === "4"){
            final_char.push(encode_chars["4"])
        }else if(char_array === "5"){
            final_char.push(encode_chars["5"])
        }else if(char_array === "6"){
            final_char.push(encode_chars["6"])
        }else if(char_array === "7"){
            final_char.push(encode_chars["7"])
        }else if(char_array === "8"){
            final_char.push(encode_chars["8"])
        }else if(char_array === "9"){
            final_char.push(encode_chars["9"])
        }else if(char_array === "0"){
            final_char.push(encode_chars["0"])
        }else{
            final_char.push(char_array)
        }
    }
    return final_char.join(" ");
}

module.exports = {encode};