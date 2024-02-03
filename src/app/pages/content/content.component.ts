/* import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentDescription: string = '';
  dateTitle: string = '';
  dateDescription: string = '';
  writerTitle: string = '';
  writerDescription: string = ';';
  estimateTitle: string = '';
  estimateDescription: string = ';';
  categoryTitle: string = '';
  categoryDescription: string = '';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id === id)[0];

    this.contentDescription = result.description.replace(/\n/g, '<br><br>');
    this.photoCover = result.photoCover;
    this.dateTitle = result.dateTitle;
    this.writerTitle = result.writerTitle;
    this.estimateTitle = result.estimateTitle;
    this.categoryTitle = result.categoryTitle;
    this.dateDescription = result.dateDescription;
    this.writerDescription = result.writerDescription;
    this.estimateDescription = result.estimateDescription;
    this.categoryDescription = result.categoryDescription;
  }
} */

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  // ... outras propriedades
  photoCover: string = '';
  contentDescription: string = '';
  dateTitle: string = '';
  dateDescription: string = '';
  writerTitle: string = '';
  writerDescription: string = ';';
  estimateTitle: string = '';
  estimateDescription: string = '';
  categoryTitle: string = '';
  categoryDescription: string = '';

  //novas propriedades
  showAppArticleOne = false;
  showAppArticleTwo = false;
  showAppArticleThree = false;
  showAppArticleFour = false;

  // ... outras propriedades
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
      this.setValuesToComponent(this.id);
      this.showAppArticleComponents(); // Chama o método para decidir quais componentes exibir
    });
  }

  setValuesToComponent(id: string | null) {
    // ... seu código existente
    const result = dataFake.filter((article) => article.id === id)[0];

    this.contentDescription = result.description.replace(/\n/g, '<br><br>');
    this.photoCover = result.photoCover;
    this.dateTitle = result.dateTitle;
    this.writerTitle = result.writerTitle;
    this.estimateTitle = result.estimateTitle;
    this.categoryTitle = result.categoryTitle;
    this.dateDescription = result.dateDescription;
    this.writerDescription = result.writerDescription;
    this.estimateDescription = result.estimateDescription;
    this.categoryDescription = result.categoryDescription;
  }

  // Método para decidir quais componentes exibir
  showAppArticleComponents() {
    // Lógica para decidir quando exibir os componentes, por exemplo, quando um evento ocorre
    // Aqui você pode adicionar sua lógica específica

    // Exemplo: se o id for '1', mostra o AppArticleFirst
    this.showAppArticleOne = this.id === '1';

    // Exemplo: se o id for '2', mostra o AppArticleSecond
    this.showAppArticleTwo = this.id === '2';

    // Exemplo: se o id for '3', mostra o AppArticleThird
    this.showAppArticleThree = this.id === '3';

    // Exemplo: se o id for '4', mostra o AppArticleFour
    this.showAppArticleFour = this.id === '4';
  }
}
