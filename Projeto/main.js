google.charts.load('current', {'packages':['corechart']});

function desenharPizza (){

    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    tabela.addRows([

        ['Educação',2000],
        ['Transporte',500],
        ['Lazer',230],
        ['Saúde',50],
        ['Cartão de crédito',900],
        ['Alimentação',260]
    ]);

    var grafic = new google.visualization.PieChart(document.getElementById('graficoPizza'));
    grafic.draw(tabela);
}

google.charts.setOnLoadCallback(desenharPizza);
