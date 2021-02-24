//import { isAuthenticated } from "./services/auth";
import ReactDOM from 'react-dom';

export const MudaVisibilidade = async id => {
    if (id) {
        var x = document.getElementById(id);
        if (x) {
            if (window.getComputedStyle(x).getPropertyValue("display") == "none") {
                ReactDOM.findDOMNode(x).style.setProperty("display", "block");
                document.body.classList.remove("overyea");
                document.body.classList.add("overnot");
                return true;
            } else {
                ReactDOM.findDOMNode(x).style.setProperty("display", "none");
                document.body.classList.remove("overnot");
                document.body.classList.add("overyea");
                return false;
            }
        }
    } else {
        return -1;
    }
};

export function toMilhar(s, func) {
    //func === null ---> resposta padrão
    //func === 1 ---> moeda
    var ss = 0;
    if (s != undefined) {
        if (func === 1) {
            ss = s.toFixed(2).toString().replace(".", ",");
            ss = 'R$ ' + ss.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        } else {
            ss = s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    }
    return ss
}


export var dateAdjustment = (d, h) => {
    if (d) {
        var fragmented = d.split("T");
        var date = fragmented[0].split("-");
        date = date.reverse().join("/");
        if (!h) {
            return date;
        }
        date = date + " - " + fragmented[1].replace(/(\:\d*$)|(\:\d*\.\d*$)/g, "");
        return date;
    } else {
        return -1;
    }
};


export const DataBR = async (dataRecebida, dataFull = true, hora = true) => {
    var data = dataRecebida.split("T");
    var dataRetorno = "";
    if (dataFull) {
        dataRetorno = data[0].split("-").reverse().join("/");
    }
    if (hora) {
        dataRetorno += " " + data[1].slice(0, 8);
    }

    return dataRetorno;
}

export const DataBanco = async (dataRecebida) => {
    var data = dataRecebida.toLocaleString()
    var data2 = data.split(" ");
    if (data2[1] != undefined) {
        return data2[0].split("/").reverse().join("-") + " " + data2[1];
    } else {
        var data2 = data.split("T");
        return data2[0].split("/").reverse().join("-") + " " + data2[1];
    }
}
