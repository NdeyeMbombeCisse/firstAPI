import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-detail-article',
  standalone: true,
  imports: [],
  templateUrl: './detail-article.component.html',
  styleUrl: './detail-article.component.css'
})
export class DetailArticleComponent implements OnInit{
  article: any;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.articleService.getArticle(id).subscribe(data => {
      this.article = data;
    });
  }

}


