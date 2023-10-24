import html2pdf from 'html2pdf.js';

export default {
    exportToMd(exers) {
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
    exportToPDF(element) {
        const options = {
            filename: "exported.pdf",
            image: { type: "jpeg", quality: 1 },
            html2canvas: { scale: 1.5 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };

        html2pdf().set(options).from(element).save();
    },
}