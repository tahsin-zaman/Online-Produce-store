import { Component, OnInit } from '@angular/core';

export interface IToday {
  name: string;
  protein: number;
  fat: number;
  carbohydrates: number;
  addedAt: string;
  id: number;
}

@Component({
  templateUrl: 'today.component.html',
  styleUrls: ['today.component.scss']
})
export class TodayComponent implements OnInit {
  constructor() {
  }

  foodLists: IToday[] = [];

  ngOnInit(): void {
    // initialize a user's today food list from the local storage
    const todayListString = localStorage.getItem('todayList');
    if(todayListString) {
      this.foodLists = JSON.parse(todayListString);
      this.foodLists = this.foodLists.filter(x => new Date(x.addedAt).toDateString() === new Date().toDateString())
    }
  }
  /**
   * get sum of Protein, Fat, Carbohydrates for the today user's food list
   * @returns {proteinTotal, fatTotal, carboTotal}
   */
  getSumTodayList() {
    let sumProtein = 0;
    let sumFat = 0;
    let sumCarbo = 0;
    this.foodLists.map(x => {
      sumProtein += x.protein;
      sumFat += x.fat;
      sumCarbo += x.carbohydrates;
    })
    return {
      proteinTotal: sumProtein.toFixed(1),
      fatTotal: sumFat.toFixed(1),
      carboTotal: sumCarbo.toFixed(1)
    }
  }
   /**
   * remove a food item from a user's "todayList" in the local storage
   * @param food ITodayItem
   */
  removeTodayList(food: IToday) {
    this.foodLists = this.foodLists.filter(x => x.id !== food.id);
    localStorage.setItem('todayList', JSON.stringify(this.foodLists));
  }
}
