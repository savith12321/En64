const encode_chars = require("./english64.json")

const decode = (char) =>{
    chars_array = char.split(" ");
    final_char = []
    for (char_array of chars_array){
        if(char_array === encode_chars.a){
            final_char.push("a")
        }else if(char_array === encode_chars.b){
            final_char.push("b")
        }else if(char_array === encode_chars.c){
            final_char.push("c")
        }else if(char_array === encode_chars.d){
            final_char.push("d")
        }else if(char_array === encode_chars.e){
            final_char.push("e")
        }else if(char_array === encode_chars.f){
            final_char.push("f")
        }else if(char_array === encode_chars.g){
            final_char.push("g")
        }else if(char_array === encode_chars.h){
            final_char.push("h")
        }else if(char_array === encode_chars.i){
            final_char.push("i")
        }else if(char_array === encode_chars.j){
            final_char.push("j")
        }else if(char_array === encode_chars.k){
            final_char.push("k")
        }else if(char_array === encode_chars.l){
            final_char.push("l")
        }else if(char_array === encode_chars.m){
            final_char.push("m")
        }else if(char_array === encode_chars.n){
            final_char.push("n")
        }else if(char_array === encode_chars.o){
            final_char.push("o")
        }else if(char_array === encode_chars.p){
            final_char.push("p")
        }else if(char_array === encode_chars.q){
            final_char.push("q")
        }else if(char_array === encode_chars.r){
            final_char.push("r")
        }else if(char_array === encode_chars.s){
            final_char.push("s")
        }else if(char_array === encode_chars.t){
            final_char.push("t")
        }else if(char_array === encode_chars.u){
            final_char.push("u")
        }else if(char_array === encode_chars.v){
            final_char.push("v")
        }else if(char_array === encode_chars.w){
            final_char.push("w")
        }else if(char_array === encode_chars.x){
            final_char.push("x")
        }else if(char_array === encode_chars.y){
            final_char.push("y")
        }else if(char_array === encode_chars.z){
            final_char.push("z")
        }else if(char_array === encode_chars.A){
            final_char.push("A")
        }else if(char_array === encode_chars.B){
            final_char.push("B")
        }else if(char_array === encode_chars.C){
            final_char.push("C")
        }else if(char_array === encode_chars.D){
            final_char.push("D")
        }else if(char_array === encode_chars.E){
            final_char.push("E")
        }else if(char_array === encode_chars.F){
            final_char.push("F")
        }else if(char_array === encode_chars.G){
            final_char.push("G")
        }else if(char_array === encode_chars.H){
            final_char.push("H")
        }else if(char_array === encode_chars.I){
            final_char.push("I")
        }else if(char_array === encode_chars.J){
            final_char.push("J")
        }else if(char_array === encode_chars.K){
            final_char.push("K")
        }else if(char_array === encode_chars.L){
            final_char.push("L")
        }else if(char_array === encode_chars.M){
            final_char.push("M")
        }else if(char_array === encode_chars.N){
            final_char.push("N")
        }else if(char_array === encode_chars.O){
            final_char.push("O")
        }else if(char_array === encode_chars.P){
            final_char.push("P")
        }else if(char_array === encode_chars.Q){
            final_char.push("Q")
        }else if(char_array === encode_chars.R){
            final_char.push("R")
        }else if(char_array === encode_chars.S){
            final_char.push("S")
        }else if(char_array === encode_chars.T){
            final_char.push("T")
        }else if(char_array === encode_chars.U){
            final_char.push("U")
        }else if(char_array === encode_chars.V){
            final_char.push("V")
        }else if(char_array === encode_chars.W){
            final_char.push("W")
        }else if(char_array === encode_chars.X){
            final_char.push("X")
        }else if(char_array === encode_chars.Y){
            final_char.push("Y")
        }else if(char_array === encode_chars.Z){
            final_char.push("Z")
        }else if(char_array === encode_chars.space){
            final_char.push(" ")
        }else if(char_array === encode_chars["!"]){
            final_char.push("!")
        }else if(char_array === encode_chars["@"]){
            final_char.push("@")
        }else if(char_array === encode_chars["#"]){
            final_char.push("#")
        }else if(char_array === encode_chars["$"]){
            final_char.push("$")
        }else if(char_array === encode_chars["%"]){
            final_char.push("%")
        }else if(char_array === encode_chars["^"]){
            final_char.push("^")
        }else if(char_array === encode_chars["&"]){
            final_char.push("&")
        }else if(char_array === encode_chars["*"]){
            final_char.push("*")
        }else if(char_array === encode_chars["("]){
            final_char.push("(")
        }else if(char_array === encode_chars[")"]){
            final_char.push(")")
        }else if(char_array === encode_chars["-"]){
            final_char.push("-")
        }else if(char_array === encode_chars["="]){
            final_char.push("=")
        }else if(char_array === encode_chars["+"]){
            final_char.push("+")
        }else if(char_array === encode_chars["{"]){
            final_char.push("{")
        }else if(char_array === encode_chars["}"]){
            final_char.push("}")
        }else if(char_array === encode_chars["["]){
            final_char.push("[")
        }else if(char_array === encode_chars["]"]){
            final_char.push("]")
        }else if(char_array === encode_chars[":"]){
            final_char.push(":")
        }else if(char_array === encode_chars[";"]){
            final_char.push(";")
        }else if(char_array === encode_chars["?"]){
            final_char.push("?")
        }else if(char_array === encode_chars["|"]){
            final_char.push("|")
        }else if(char_array === encode_chars["\\"]){
            final_char.push("\\")
        }else if(char_array === encode_chars["\""]){
            final_char.push("\"")
        }else if(char_array === encode_chars["'"]){
            final_char.push("'")
        }else if(char_array === encode_chars[","]){
            final_char.push(",")
        }else if(char_array === encode_chars["."]){
            final_char.push(".")
        }else if(char_array === encode_chars["/"]){
            final_char.push("/")
        }else if(char_array === encode_chars["<"]){
            final_char.push("<")
        }else if(char_array === encode_chars[">"]){
            final_char.push(">")
        }else if(char_array === encode_chars["~"]){
            final_char.push("~")
        }else if(char_array === encode_chars["`"]){
            final_char.push("`")
        }else if(char_array === encode_chars["_"]){
            final_char.push("_")
        }else if(char_array === encode_chars["1"]){
            final_char.push("1")
        }else if(char_array === encode_chars["2"]){
            final_char.push("2")
        }else if(char_array === encode_chars["3"]){
            final_char.push("3")
        }else if(char_array === encode_chars["4"]){
            final_char.push("4")
        }else if(char_array === encode_chars["5"]){
            final_char.push("5")
        }else if(char_array === encode_chars["6"]){
            final_char.push("6")
        }else if(char_array === encode_chars["7"]){
            final_char.push("7")
        }else if(char_array === encode_chars["8"]){
            final_char.push("8")
        }else if(char_array === encode_chars["9"]){
            final_char.push("9")
        }else if(char_array === encode_chars["0"]){
            final_char.push("0")
        }else{
            final_char.push(char_array)
        }
    }
    return final_char.join("");
}

module.exports = {decode};