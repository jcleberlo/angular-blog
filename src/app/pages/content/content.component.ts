import { Component, OnInit } from '@angular/core';
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
  estimateDescription: string = '';
  categoryTitle: string = '';
  categoryDescription: string = '';

  showAppArticleOne = false;
  showAppArticleTwo = false;
  showAppArticleThree = false;
  showAppArticleFour = false;

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
      this.setValuesToComponent(this.id);
      this.showAppArticleComponents();
    });
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

  showAppArticleComponents() {
    this.showAppArticleOne = this.id === '1';
    this.showAppArticleTwo = this.id === '2';
    this.showAppArticleThree = this.id === '3';
    this.showAppArticleFour = this.id === '4';
  }
}
