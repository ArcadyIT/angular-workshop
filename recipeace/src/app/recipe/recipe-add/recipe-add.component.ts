import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

  recipeAddFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.recipeAddFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      prep: ['', [Validators.required]],
      chef: this.formBuilder.group({
        name: [],
        chefImageUrl: []
      }),
      ingredients: this.formBuilder.array([])
    });

    this.addIngredient();
  }

  get ingredientForms() {
    return this.recipeAddFormGroup.get('ingredients') as FormArray;
  }

  addIngredient() {
    const ingredient = this.formBuilder.group({
      ingredientName: [],
      unit: []
    });

    this.ingredientForms.push(ingredient);
  }

  deleteIngredient(index: number) {
    this.ingredientForms.removeAt(index);
  }
}
