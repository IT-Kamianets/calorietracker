import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';  // <<<< import it here
import { CommonModule } from '@angular/common'; // Додайте цей імпорт
import { products } from './array';

export class AppModule { }

interface Product{
  name: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly foodList:Product[]= products;

  title = 'calorietracker';
  searchText: string = '';
  selectedFood: any = null;

  filteredFoodList = [...this.foodList];

  filterFoods() {
    this.filteredFoodList = this.foodList.filter(food =>
      food.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      food.calories.toString().includes(this.searchText)
    );
  }

  showFoodDetails(food: any) {
    this.selectedFood = food;
  }

  closeDetails() {
    this.selectedFood = null;
  }
}




  


