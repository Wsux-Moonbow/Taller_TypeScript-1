import { series } from './data.js';

function renderSeriesTable(): void {
    const tbody = document.getElementById('seriesTableContent')!;
    
    if (!tbody) {
        console.error('No se encontró el tbody de la tabla');
        return;
    }

    console.log('Series cargadas:', series);

    series.forEach((serie) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.platform}</td>
            <td>${serie.seasons}</td>
        `;
        
        tbody.appendChild(row);
    });
}

function addAverageSeasons(): void {
    const tbody = document.getElementById('seriesTableContent')!;
    
    if (!tbody) {
        console.error('No se encontró el tbody de la tabla');
        return;
    }

    let seasonsAmount = 0;
    let totalSeries = 0;
    for (const serie of series) {
        seasonsAmount += serie.seasons;
        totalSeries ++;
    }
    const average = seasonsAmount / totalSeries;
    const avgRow = document.createElement('tr');
    avgRow.innerHTML = `<td>Cantidad promedio de temporadas: ${average}</td>`;
    tbody.appendChild(avgRow);
}

document.addEventListener('DOMContentLoaded', renderSeriesTable);
document.addEventListener('DOMContentLoaded', addAverageSeasons);