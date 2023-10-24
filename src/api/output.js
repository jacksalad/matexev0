import html2pdf from 'html2pdf.js';

export default {
    exportToMdType1(exers) {
        var filename = "output.md";
        var text =
            "# MaTeXe智能题库\n>  [MaTeXe|迈泰题库-智能数学题库](http://www.matexe.cn)\n\n";
        exers.forEach(function (exer, index) {
            text += (index + 1).toString() + "." + exer.content;
            text += "\n";
            text += "A." + exer.a;
            text += "\n";
            text += "B." + exer.b;
            text += "\n";
            text += "C." + exer.c;
            text += "\n";
            text += "D." + exer.d;
            text += "\n";
        });
        var blob = new Blob([text], {
            type: "text/markdown",
        });
        var url = URL.createObjectURL(blob);
        var link = document.createElement("a");
        link.href = url;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(url);
    }
    ,
    exportToPDFType1(element) {
        const options = {
            filename: "output.pdf",
            image: { type: "jpeg", quality: 1 },
            html2canvas: { scale: 1.5 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };

        html2pdf().set(options).from(element).save();
    },
    exportToTexType1(exers) {
        var filename = "output.tex";
        var text =
            "\\documentclass{article}\n\\usepackage[UTF8]{ctex}\n\\usepackage{enumitem}\n\\usepackage{amsmath}\n\\usepackage{amssymb}\n\\newcommand{\\mytitle}[1]{\n\\begin{center}\n\\fontsize{20pt}{\\baselineskip}\\selectfont\n\\centering\\bf{#1}\n\\end{center}\n}\\begin{document}\n";
        text += "\\mytitle{MaTeXe|迈泰题库（www.matexe.cn）}\n\n"
        text += "\\begin{enumerate}"
        exers.forEach(function (exer, index) {
            text += "\\item " + exer.content;
            text += "\\begin{enumerate}[label=\\Alph*.]"
            text += "\n";
            text += "\\item " + exer.a;
            text += "\n";
            text += "\\item " + exer.b;
            text += "\n";
            text += "\\item " + exer.c;
            text += "\n";
            text += "\\item " + exer.d;
            text += "\n";
            text += "\\end{enumerate}";
            text += "\n";
        });
        text += "\\end{enumerate}"
        text += "\n\n\\end{document}"
        var blob = new Blob([text], {
            type: "text/tex",
        });
        var url = URL.createObjectURL(blob);
        var link = document.createElement("a");
        link.href = url;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(url);
    }
}