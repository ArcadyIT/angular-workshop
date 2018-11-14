import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

  recipeAddFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit() {
    this.recipeAddFormGroup = this.formBuilder.group({
      title: [null, Validators.required],
      imageUrl: [null, Validators.required],
      description: [null, Validators.required],
      prep: [null, Validators.required],
      chef: this.formBuilder.group({
        name: [null, Validators.required],
        chefImageUrl: [null, Validators.required]
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
      ingredientName: [null, Validators.required],
      unit: [null, Validators.required]
    });

    this.ingredientForms.push(ingredient);
  }

  deleteIngredient(index: number) {
    this.ingredientForms.removeAt(index);
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.recipeAddFormGroup.invalid) {
      console.log('Form not valid');
      return;
    }

    this.addRecipe(this.recipeAddFormGroup.value);
  }

  addRecipe(recipe) {
    this.recipeService.postRecipe(recipe).subscribe(response => {
      if (response) {
        this.router.navigate(['/recipes']);
      }
    });
  }
}
