import { Component } from '@angular/core';
import { IToday } from '../today/today.component';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})

export class ChartsComponent {

  chartPieData = {
    labels: ['Protein', 'Fat', 'Carbohydrates'],
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  foodLists: IToday[] = [];
  constructor() {
  }

  ngOnInit(): void {
    // initialize a user's today food list from the local storage
    const todayListString = localStorage.getItem('todayList');
    if(todayListString) {
      this.foodLists = JSON.parse(todayListString);
      this.foodLists = this.foodLists.filter(x => new Date(x.addedAt).toDateString() === new Date().toDateString());
      this.getSumTodayList();
    }
  }

   /**
   * get sum of Protein, Fat, Carbohydrates for the today user's food list
   * initalize chartPieData's dataset
   */
  getSumTodayList() {
    let sumProtein = 0;
    let sumFat = 0;
    let sumCarbo = 0;
    this.foodLists.map(x => {
      sumProtein += x.protein;
      sumFat += x.fat;
      sumCarbo += x.carbohydrates;
    });
    sumProtein = Math.round(sumProtein* 100) / 100;
    sumFat = Math.round(sumFat* 100) / 100;
    sumCarbo = Math.round(sumCarbo* 100) / 100;
    this.chartPieData.datasets[0].data = [sumProtein, sumFat, sumCarbo];
    this.chartPieData.labels = [`Protein (${sumProtein}g)`, `Fat (${sumFat}g)`, `Carbohydrates (${sumCarbo}g)`]
  }

}
