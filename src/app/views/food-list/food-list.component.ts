import { Component, OnInit } from '@angular/core';

interface IFoodList {
  name: string;
  protein: number;
  fat: number;
  carbohydrates: number;
}

@Component({
  templateUrl: 'food-list.component.html',
  styleUrls: ['food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  constructor() {
  }

  public foodLists: IFoodList[] = [
    {
      name: 'Apple',
      protein: 0.2,
      fat: 0.3,
      carbohydrates: 25.1
    },
    {
      name: 'Banana',
      protein: 0.3,
      fat: 1.1,
      carbohydrates: 26.7
    },
    {
      name: 'Broccoli',
      protein: 0.4,
      fat: 2.8,
      carbohydrates: 6.6
    },
    {
      name: 'Carrots',
      protein: 0.2,
      fat: 0.9,
      carbohydrates: 9.6
    },
    {
      name: 'Cucumber',
      protein: 0.1,
      fat: 0.7,
      carbohydrates: 3.6
    },
    {
      name: 'Grapes',
      protein: 0.2,
      fat: 0.6,
      carbohydrates: 18.1
    },
    {
      name: 'Kiwi',
      protein: 0.6,
      fat: 1.1,
      carbohydrates: 14.2
    },
    {
      name: 'Orange',
      protein: 0.2,
      fat: 1.0,
      carbohydrates: 11.8
    },
    {
      name: 'Spinach',
      protein: 0.4,
      fat: 2.9,
      carbohydrates: 1.4
    },
    {
      name: 'Tomato',
      protein: 0.2,
      fat: 0.9,
      carbohydrates: 3.9
    }
    
  ];

  ngOnInit(): void {
    
  }
   /**
   * adds a food item to a user's "todayList" in the local storage.
   * either by creating a new "todayList" or adding to existing one
   * @param food 
   */
  addTodayList(food: IFoodList) {
    console.log(food);
    const todayList = localStorage.getItem('todayList');
    if (todayList) {
      const temp = JSON.parse(todayList);
      if (temp.length == 0) {
        temp.push({...food, id: 1, addedAt: new Date().toISOString()});
      } else {
        temp.push({...food, id: temp[temp.length-1].id + 1, addedAt: new Date().toISOString()});
      }
      
      localStorage.setItem('todayList', JSON.stringify(temp));
    } else {
      localStorage.setItem('todayList', JSON.stringify([{...food, id: 1, addedAt: new Date().toISOString()}]));
    }
  }
}
